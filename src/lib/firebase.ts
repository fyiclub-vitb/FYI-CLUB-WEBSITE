import type { JoinApplication } from '../types';

/**
 * FYI Firebase Integration — uses Firestore REST API (no SDK import issues)
 * Falls back to localStorage when credentials are not configured.
 */

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID ?? '';
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY ?? '';

// Firestore REST endpoint — works in any environment, no ESM issues
const FIRESTORE_URL = PROJECT_ID && API_KEY
  ? `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/applications?key=${API_KEY}`
  : null;

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

/**
 * Submit cohort membership application.
 * Uses Firestore REST API when credentials are configured, localStorage otherwise.
 */
export async function submitJoinApplication(
  application: JoinApplication
): Promise<{ success: boolean; id: string; source: 'firestore' | 'local' }> {
  if (FIRESTORE_URL) {
    try {
      const payload = toFirestoreDoc({
        ...application,
        timestamp: new Date().toISOString(),
      } as Record<string, unknown>);

      const response = await fetch(FIRESTORE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json() as { name?: string };
        const docId = result.name?.split('/').pop() ?? `fs_${Date.now()}`;
        return { success: true, id: docId, source: 'firestore' };
      }
    } catch (err) {
      console.warn('[FYI] Firestore REST write failed, using local fallback:', err);
    }
  }

  // Graceful local persistence — instant feedback, zero dependency
  const existing: Array<Record<string, unknown>> = JSON.parse(
    localStorage.getItem('fyi_applications') ?? '[]'
  );
  const localId = `local_${Date.now()}`;
  existing.push({ id: localId, ...application, timestamp: new Date().toISOString() });
  localStorage.setItem('fyi_applications', JSON.stringify(existing));

  return { success: true, id: localId, source: 'local' };
}
