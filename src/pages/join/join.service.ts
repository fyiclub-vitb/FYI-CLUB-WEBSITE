import { submitJoinApplication } from '../../lib/firebase';
import type { JoinApplication } from '../../types';

export interface ApplicationResult {
  success: boolean;
  id: string;
  source: 'firestore';
  message: string;
}

/**
 * Page-level backend service for handling Cohort 2026 Admissions.
 */
export async function submitCohortApplication(
  application: JoinApplication
): Promise<ApplicationResult> {
  // 1. Basic validation
  if (!application.name || !application.email || !application.regNumber) {
    throw new Error('Please fill in all required fields (Name, Email, Registration Number).');
  }

  // 2. Submit to Firebase Firestore
  const res = await submitJoinApplication(application);

  return {
    ...res,
    message: 'Application received. A chapter lead will review your submission shortly.',
  };
}

