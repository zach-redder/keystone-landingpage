'use client';

import { useState } from 'react';
import { waitlistEmailSchema } from '../lib/waitlistSchema';

export type WaitlistStatus = 'idle' | 'success' | 'error';

// Shared submit logic for both waitlist forms (Hero's inline pill form and the
// dedicated WaitlistForm section) -- previously each had its own separate fetch call
// and success/error message handling that could drift out of sync.
export function useWaitlistSubmit() {
  const [status, setStatus] = useState<WaitlistStatus>('idle');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  const submitEmail = async (email: string): Promise<boolean> => {
    const parsed = waitlistEmailSchema.safeParse({ email });
    if (!parsed.success) {
      setStatus('error');
      setMessage(parsed.error.issues[0]?.message || 'Please enter a valid email address.');
      return false;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setStatus('success');
        setMessage("You're on the waitlist! Check your email for confirmation.");
        return true;
      }

      const err = await res.json().catch(() => ({}));
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
      return false;
    } catch (e) {
      console.error(e);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { status, message, isSubmitting, submitEmail, reset };
}
