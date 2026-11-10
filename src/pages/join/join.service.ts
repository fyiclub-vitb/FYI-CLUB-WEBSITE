import { submitJoinApplication } from '../../lib/firebase';
import type { JoinApplication } from '../../types';

export interface ApplicationResult {
  success: boolean;
  id: string;
  source: 'firestore' | 'local';
  message: string;
}

/**
 * Page-level backend service for handling Cohort 2025 Admissions.
 */
export async function submitCohortApplication(
  application: JoinApplication
): Promise<ApplicationResult> {
  // 1. Basic validation
  if (!application.name || !application.email || !application.regNumber) {
    throw new Error('Please fill in all required fields (Name, Email, Registration Number).');
  }

  // 2. Submit to Firebase Firestore / Local queue
  const res = await submitJoinApplication(application);

  return {
    ...res,
    message:
      res.source === 'firestore'
        ? 'Application stored in FYI Cloud Firestore database. A chapter lead will review your experiments shortly.'
        : 'Application saved locally (offline mode). You will be contacted via email / Discord.',
  };
}

/**
 * Retrieve saved local applications for review / offline inspection
 */
export function getLocalApplications(): (JoinApplication & { id: string })[] {
  try {
    return JSON.parse(localStorage.getItem('fyi_applications') || '[]');
  } catch {
    return [];
  }
}

