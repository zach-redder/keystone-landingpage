import { z } from 'zod';

// Single source of truth for waitlist email validation -- previously Hero.tsx had its
// own hand-rolled regex here, separate from WaitlistForm.tsx's zod schema, which could
// silently disagree on edge-case inputs.
export const waitlistEmailSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type WaitlistFormData = z.infer<typeof waitlistEmailSchema>;
