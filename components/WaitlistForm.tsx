'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type FormData = z.infer<typeof schema>;

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus('idle');
    setMessage('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        setMessage("You're on the waitlist! Check your email for confirmation.");
        reset();
      } else {
        const err = await res.json();
        setStatus('error');
        setMessage(err.message || 'Something went wrong. Please try again.');
      }
    } catch (e) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error(e);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        noValidate 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem',
          width: '100%'
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            form {
              flex-direction: row !important;
            }
          }
          @media (max-width: 640px) {
            form { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
          }
        `}</style>
        
        <div style={{ 
          flex: '1', 
          position: 'relative' 
        }}>
          <input
            type="email"
            placeholder="Your email address"
            autoComplete="email"
            style={{ 
              width: '100%', 
              padding: '1rem 1.5rem', 
              borderRadius: '0.75rem', 
              backgroundColor: 'rgba(47, 47, 47, 0.7)', 
              color: 'white', 
              fontSize: '1.125rem', 
              border: errors.email ? '1px solid #f56565' : '1px solid rgba(80, 80, 80, 0.5)', 
              transition: 'all 0.2s',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
              outline: 'none'
            }}
            {...register('email')}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p 
              id="email-error" 
              style={{ 
                marginTop: '0.5rem', 
                color: '#f56565', 
                fontSize: '0.875rem', 
                position: 'absolute' 
              }}
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{ 
            backgroundColor: 'var(--accent)', 
            color: 'var(--background)', 
            fontWeight: 'bold', 
            padding: '1rem 2rem', 
            borderRadius: '9999px', 
            fontSize: '1.125rem',
            border: 'none',
            cursor: isSubmitting ? 'wait' : 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            opacity: isSubmitting ? 0.7 : 1,
            transition: 'all 0.2s ease'
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {status === 'success' && (
        <div style={{ 
          padding: '1.25rem', 
          borderRadius: '0.75rem', 
          backgroundColor: 'rgba(212, 222, 149, 0.1)', 
          border: '1px solid rgba(212, 222, 149, 0.3)', 
          color: 'white', 
          fontSize: '1rem'
        }}>
          {message}
        </div>
      )}
      
      {status === 'error' && (
        <div style={{ 
          padding: '1.25rem', 
          borderRadius: '0.75rem', 
          backgroundColor: 'rgba(245, 101, 101, 0.1)', 
          border: '1px solid rgba(245, 101, 101, 0.3)', 
          color: '#fc8181', 
          fontSize: '1rem' 
        }}>
          {message}
        </div>
      )}
      
      <p style={{ 
        textAlign: 'center', 
        color: '#a0a0a0', 
        fontSize: '0.875rem', 
        paddingTop: '0.5rem' 
      }}>
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
} 