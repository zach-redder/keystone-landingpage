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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        noValidate 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: 'clamp(0.75rem, 2vw, 1rem)',
          width: '100%'
        }}
      >        <style jsx>{`
          @media (min-width: 1024px) {
            form {
              flex-direction: row !important;
              gap: 1.5rem !important;
              align-items: flex-start !important;
            }
            button {
              width: auto !important;
              min-width: 220px !important;
              font-size: 1.125rem !important;
              padding: 1rem 2rem !important;
            }
            input {
              font-size: 1.125rem !important;
              padding: 1rem 1.5rem !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 1023px) {
            form {
              flex-direction: row !important;
              gap: 1rem !important;
            }
            button {
              width: auto !important;
              min-width: 180px !important;
            }
          }
          
          @media (max-width: 767px) {
            form { 
              flex-direction: column !important;
              gap: clamp(0.75rem, 2vw, 1rem) !important;
            }
            button {
              width: 100% !important;
            }
          }
          
          @media (max-width: 640px) {
            form { 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
            }
          }
        `}</style>
        
        <div style={{ 
          flex: '1', 
          position: 'relative' 
        }}>          <input
            type="email"
            placeholder="Your email address"
            autoComplete="email"
            style={{ 
              width: '100%', 
              padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1rem, 2vw, 1.5rem)', 
              borderRadius: 'clamp(12px, 2vw, 16px)', 
              backgroundColor: 'rgba(47, 47, 47, 0.8)',
              color: 'white', 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
              border: errors.email ? '2px solid #f56565' : '2px solid rgba(212, 222, 149, 0.2)', 
              transition: 'all 0.3s ease',
              boxShadow: errors.email 
                ? '0 0 0 3px rgba(245, 101, 101, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1)' 
                : '0 8px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(212, 222, 149, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1)',
              outline: 'none',
              backdropFilter: 'blur(10px)',
              minHeight: '48px'
            }}
            onFocus={(e) => {
              if (!errors.email) {
                e.target.style.border = '2px solid rgba(212, 222, 149, 0.4)';
                e.target.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(212, 222, 149, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1)';
              }
            }}
            {...register('email')}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />          {errors.email && (
            <p 
              id="email-error" 
              style={{ 
                marginTop: 'clamp(0.5rem, 1vw, 0.75rem)', 
                color: '#f56565', 
                fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', 
                position: 'absolute',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                top: '100%',
                left: '0',
                width: '100%'
              }}
            >
              {errors.email.message}
            </p>
          )}
        </div>        <button
          type="submit"
          style={{ 
            backgroundColor: 'var(--accent)', 
            color: 'var(--background)', 
            fontWeight: 'bold', 
            padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 3vw, 2.5rem)', 
            borderRadius: 'clamp(12px, 2vw, 16px)', 
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            border: 'none',
            cursor: isSubmitting ? 'wait' : 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 20px rgba(212, 222, 149, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
            opacity: isSubmitting ? 0.7 : 1,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '48px',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 222, 149, 0.3), 0 6px 12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.backgroundColor = '#e0ea99';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 222, 149, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
            }
          }}
          disabled={isSubmitting}
        >
          {/* Button glow effect */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            transform: isSubmitting ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.6s ease',
            pointerEvents: 'none'
          }}></div>
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
        {status === 'success' && (
        <div style={{ 
          padding: 'clamp(1rem, 2vw, 1.5rem)', 
          borderRadius: 'clamp(14px, 2vw, 18px)', 
          background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.08))', 
          border: '1px solid rgba(212, 222, 149, 0.3)', 
          color: 'white', 
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          boxShadow: '0 8px 20px rgba(212, 222, 149, 0.1)',
          backdropFilter: 'blur(10px)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}
      
      {status === 'error' && (
        <div style={{ 
          padding: 'clamp(1rem, 2vw, 1.5rem)', 
          borderRadius: 'clamp(14px, 2vw, 18px)', 
          background: 'linear-gradient(145deg, rgba(245, 101, 101, 0.15), rgba(245, 101, 101, 0.08))', 
          border: '1px solid rgba(245, 101, 101, 0.3)', 
          color: '#fc8181', 
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          boxShadow: '0 8px 20px rgba(245, 101, 101, 0.1)',
          backdropFilter: 'blur(10px)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}
      
      <p style={{ 
        textAlign: 'center', 
        color: '#a0a0a0', 
        fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', 
        paddingTop: 'clamp(0.5rem, 1vw, 0.75rem)',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      }}>
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
}