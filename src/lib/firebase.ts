import type { JoinApplication } from '../types';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getToken, initializeAppCheck, ReCaptchaV3Provider, type AppCheck } from 'firebase/app-check';

/**
 * FYI Firebase Integration — uses Firestore REST API (no SDK import issues).
 * Application data is never persisted to the visitor's browser.
 */

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || '';
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY || '';
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID || '';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

// Firestore REST endpoint — works in any environment, no ESM issues
const FIRESTORE_URL = PROJECT_ID && API_KEY
  ? `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/applications?key=${API_KEY}`
  : null;

let appCheck: AppCheck | null = null;

async function getAppCheckToken(): Promise<string | null> {
  if (!API_KEY || !PROJECT_ID || !APP_ID || !RECAPTCHA_SITE_KEY) {
    return null;
  }

  try {
    const app = getApps().length
      ? getApp()
      : initializeApp({
          apiKey: API_KEY,
          projectId: PROJECT_ID,
          appId: APP_ID,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        });
    appCheck ??= initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
    const tokenResult = await getToken(appCheck, false);
    return tokenResult.token;
  } catch (err) {
    console.warn('[FYI] AppCheck initialization skipped:', err);
    return null;
  }
}

function toFirestoreValue(value: unknown): object {
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'number') return { integerValue: String(value) };
  if (typeof value === 'boolean') return { booleanValue: value };
  return { stringValue: String(value) };
}

function toFirestoreDoc(data: Record<string, unknown>) {
  const fields: Record<string, object> = {};
  for (const [key, value] of Object.entries(data)) {
    fields[key] = toFirestoreValue(value);
  }
  return { fields };
}

const GUILD_INTERESTS = new Set([
  'Software',
  'Hardware',
  'Design & Creative',
  'Ecosystem & Growth',
]);

function validateApplication(application: JoinApplication): JoinApplication {
  const fields = {
    name: application.name?.trim(),
    email: application.email?.trim(),
    regNumber: application.regNumber?.trim(),
    githubOrPortfolio: application.githubOrPortfolio?.trim(),
    aboutYou: application.aboutYou?.trim() ?? '',
  };
  if (!fields.name || fields.name.length > 100) throw new Error('Enter a name of up to 100 characters.');
  if (!fields.email || fields.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    throw new Error('Enter a valid email address.');
  }
  if (!fields.regNumber || fields.regNumber.length > 40) throw new Error('Enter a registration number of up to 40 characters.');
  if (!fields.githubOrPortfolio || fields.githubOrPortfolio.length > 2048) {
    throw new Error('Enter a portfolio link of up to 2048 characters.');
  }
  if (fields.aboutYou.length > 2000) throw new Error('The description must be 2000 characters or fewer.');
  if (!GUILD_INTERESTS.has(application.guildInterest)) throw new Error('Choose a valid area of interest.');

  return { ...application, ...fields };
}

/**
 * Submit cohort membership application.
 * Sends an application to Firestore. Missing configuration and failed requests are
 * surfaced to the user; silently queueing personal data in localStorage is unsafe.
 */
export async function submitJoinApplication(
  application: JoinApplication
): Promise<{ success: boolean; id: string; source: 'firestore' }> {
  const validatedApplication = validateApplication(application);
  if (!FIRESTORE_URL) {
    throw new Error('Applications are temporarily unavailable. Please contact the club directly.');
  }

  const payload = toFirestoreDoc({
    ...validatedApplication,
    timestamp: new Date().toISOString(),
  } as Record<string, unknown>);

  const appCheckToken = await getAppCheckToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (appCheckToken) {
    headers['X-Firebase-AppCheck'] = appCheckToken;
  }

  let response: Response;
  try {
    response = await fetch(FIRESTORE_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Could not reach the application server. Please try again.');
  }

  if (!response.ok) {
    throw new Error('The application could not be submitted. Please try again later.');
  }

  const result = await response.json() as { name?: string };
  const docId = result.name?.split('/').pop();
  if (!docId) throw new Error('The server returned an invalid application receipt.');
  return { success: true, id: docId, source: 'firestore' };
}
