'use client';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  // Move dynamic styles to constants
  const formBorderStyle = emailError 
    ? 'rgba(239, 68, 68, 0.5)' 
    : 'rgba(212, 222, 149, 0.2)';

  const buttonBackground = isSubmitting 
    ? 'rgba(100, 100, 100, 0.5)'
    : status === 'success'
    ? 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 100%)'
    : 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 100%)';

  const buttonColor = isSubmitting ? '#999' : '#1a1a1a';
  const buttonCursor = isSubmitting ? 'not-allowed' : 'pointer';
  const buttonOpacity = isSubmitting ? 0.7 : 1;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setEmailError('');
    setStatus('idle');
    setMessage('');
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setMessage("You're on the waitlist! Check your email for confirmation.");
        setEmail('');
      } else {
        const err = await response.json();
        setStatus('error');
        setMessage(err.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="hero-section" style={{
      padding: '4rem 0 6rem',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>      {/* Enhanced decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '-10%',
        width: '120%',
        height: '70%',
        background: 'radial-gradient(ellipse at top right, rgba(212, 222, 149, 0.04), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      {/* Animated grid pattern */}
      <div className="grid-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(212, 222, 149, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212, 222, 149, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 2,
        animation: 'grid-pulse 8s ease-in-out infinite'
      }}></div>
      
      {/* Floating particles */}
      <div className="particle particle-1" style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(212, 222, 149, 0.3)',
        borderRadius: '50%',
        top: '20%',
        left: '15%',
        zIndex: 2,
        animation: 'float-particle 15s linear infinite'
      }}></div>
      <div className="particle particle-2" style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: 'rgba(212, 222, 149, 0.2)',
        borderRadius: '50%',
        top: '40%',
        right: '20%',
        zIndex: 2,
        animation: 'float-particle 20s linear infinite reverse'
      }}></div>
      <div className="particle particle-3" style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        background: 'rgba(212, 222, 149, 0.4)',
        borderRadius: '50%',
        top: '70%',
        left: '10%',
        zIndex: 2,
        animation: 'float-particle 18s linear infinite'
      }}></div>
      
      <div className="hero-inner" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        height: '100%',
      }}>
      <div className="hero-container" style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          gap: '1.5rem',
        }}>          {/* Left side - Text and CTA */}
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '550px', 
            gap: '2rem',
            order: 1,
            padding: '0 2rem'
          }}>
            <h1 className="hero-title animate-on-scroll" style={{ 
              fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              lineHeight: 1.2,
              marginBottom: '0rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              WHO ARE
               <span style={{ 
                color: 'var(--accent)',
                background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
              }}> YOU</span>?
            </h1>    
            <p className="hero-description animate-on-scroll" style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
              color: '#e0e0e0',
              maxWidth: '450px',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
             Or who have you settled for?
            </p>
            <p className="hero-description animate-on-scroll" style={{
              fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
              color: '#e0e0e0',
              maxWidth: '450px',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
             Affirm who you are. Question who you're becoming. Find the mean between certainty and doubt.
            </p>
            <div className="hero-cta" style={{ width: '100%', maxWidth: '450px' }}>
              <form onSubmit={handleSubmit} className="waitlist-form" style={{
                position: 'relative',
                background: 'rgba(47, 47, 47, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: `1px solid ${formBorderStyle}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 222, 149, 0.1)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '450px',
                padding: '0.5rem'
              }}>
                {/* Subtle animated border glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(212, 222, 149, 0.1), rgba(212, 222, 149, 0.05), rgba(212, 222, 149, 0.1))',
                  borderRadius: '16px',
                  animation: 'border-glow 3s ease-in-out infinite',
                  zIndex: -1
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '3px',
                  gap: '3px',
                  position: 'relative',
                  width: '100%'
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                      if (status !== 'idle') setStatus('idle');
                    }}
                    className="waitlist-email"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      paddingRight: '120px',
                      background: 'rgba(35, 35, 35, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit',
                      width: '100%',
                      position: 'relative'
                    }}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary waitlist-btn"
                    style={{ 
                      position: 'absolute',
                      right: '6px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      padding: '0.65rem 1.3rem', 
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      background: buttonBackground,
                      border: 'none',
                      borderRadius: '16px',
                      color: buttonColor,
                      cursor: buttonCursor,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(212, 222, 149, 0.3)',
                      whiteSpace: 'nowrap',
                      opacity: buttonOpacity,
                      zIndex: 2,
                      margin: '0'
                    }}
                  >
                    {isSubmitting ? 'Joining...' : status === 'success' ? '✓ Joined!' : 'Join Waitlist'}
                  </button>
                </div>
              </form>
                {emailError && (
                <p style={{
                  fontSize: '0.875rem',
                  color: '#ef4444',
                  textAlign: 'left',
                  marginTop: '0.5rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  {emailError}
                </p>
              )}
              
              {status === 'success' && (
                <div style={{ 
                  padding: '1rem 1.5rem', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.08))', 
                  border: '1px solid rgba(212, 222, 149, 0.3)', 
                  color: 'white', 
                  fontSize: '0.875rem',
                  boxShadow: '0 8px 20px rgba(212, 222, 149, 0.1)',
                  backdropFilter: 'blur(10px)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  textAlign: 'center',
                  marginTop: '0.75rem'
                }}>
                  {message}
                </div>
              )}
              
              {status === 'error' && (
                <div style={{ 
                  padding: '1rem 1.5rem', 
                  borderRadius: '14px', 
                  background: 'linear-gradient(145deg, rgba(245, 101, 101, 0.15), rgba(245, 101, 101, 0.08))', 
                  border: '1px solid rgba(245, 101, 101, 0.3)', 
                  color: '#fc8181', 
                  fontSize: '0.875rem',
                  boxShadow: '0 8px 20px rgba(245, 101, 101, 0.1)',
                  backdropFilter: 'blur(10px)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  textAlign: 'center',
                  marginTop: '0.75rem'
                }}>
                  {message}
                </div>
              )}
              
              {status === 'idle' && !emailError && (
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(224, 224, 224, 0.7)',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Be the first to know when we launch.
                </p>
              )}
            </div>
          </div>
          {/* Right side - Spline scene */}
          <div className="hero-phone" style={{
            order: 2,
          }}>
            {/* Fixed-size scene, scaled down visually per viewport so the camera framing never re-crops */}
            <div
              className="spline-wrapper"
              onWheelCapture={(e) => e.stopPropagation()}
              onPointerDownCapture={(e) => e.stopPropagation()}
              onMouseDownCapture={(e) => e.stopPropagation()}
              style={{
              width: 'clamp(300px, min(50vw, calc(100vw - 420px)), 800px)',
              aspectRatio: '1 / 1',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '40px',
              background: 'transparent'
            }}>
              {/* Scaled inner stage - the Spline canvas and the badge-cover patch move together */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '800px',
                height: '800px',
                transformOrigin: 'center center',
                transform: 'translate(-50%, -50%) scale(calc(clamp(300px, min(50vw, calc(100vw - 420px)), 800px) / 800px))'
              }}>
                <Spline
                  scene="https://prod.spline.design/A39kgRJgUzRIY4Qv/scene.splinecode"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    background: 'transparent'
                  }}
                />
                {/* Covers the Spline free-tier "Built with Spline" badge, which is baked into the canvas render itself */}
                <div style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: '300px',
                  height: '130px',
                  background: 'radial-gradient(ellipse 260px 100px at 100% 100%, #2a2a2a 0%, #2a2a2a 75%, rgba(42,42,42,0) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>      <style jsx global>{`
        .hero-section {
          min-height: 100vh;
          min-height: 100dvh;
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes border-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .waitlist-form:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 222, 149, 0.15);
        }

        .waitlist-email:focus {
          border-color: rgba(212, 222, 149, 0.4) !important;
          box-shadow: 0 0 0 3px rgba(212, 222, 149, 0.1) !important;
        }

        .waitlist-email::placeholder {
          color: rgba(224, 224, 224, 0.5);
        }

        .waitlist-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212, 222, 149, 0.4);
          background: linear-gradient(135deg, #f0f5a8 0%, var(--accent) 100%);
        }

        .waitlist-btn:active {
          transform: translateY(0);
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(2.5rem, 7vw, 3rem) !important;
            line-height: 1.1 !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }
          
          .hero-description {
            font-size: clamp(1.125rem, 4vw, 1.25rem) !important;
            max-width: 100% !important;
            margin-bottom: 2rem !important;
            text-align: center !important;
          }
            .hero-content {
            padding: 0 1.5rem !important;
            gap: 1.5rem !important;
          }

          .waitlist-form {
            flex-direction: column !important;
            gap: 0.75rem !important;
            padding: 1rem !important;
          }

          .waitlist-btn {
            padding: 1rem !important;
            font-size: 1.05rem !important;
          }
          
          .hero-phone {
            margin-top: 3rem !important;
          }          .hero-container {
            gap: 3rem !important;
            padding: 4rem 1rem !important;
          }
            section {
            padding: 5rem 0 5rem !important;
          }
        }        /* Mobile optimizations */
        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(2.25rem, 8vw, 2.75rem) !important;
            margin-bottom: 1.25rem !important;
          }
          
          .hero-description {
            font-size: clamp(1.05rem, 4vw, 1.15rem) !important;
            line-height: 1.5 !important;
            margin-bottom: 2rem !important;
          }
            .hero-content {
            padding: 0 1rem !important;
          }

          .waitlist-form {
            padding: 0.4rem !important;
            border-radius: 14px !important;
          }

          .waitlist-email {
            padding: 0.7rem 1rem !important;
            padding-right: 110px !important;
            font-size: 0.95rem !important;
            border-radius: 10px !important;
          }

          .waitlist-btn {
            right: 4px !important;
            padding: 0.6rem 1.1rem !important;
            font-size: 0.85rem !important;
            border-radius: 8px !important;
          }
          
          .hero-phone {
            margin-top: 2.5rem !important;
          }
            section {
            padding: 4rem 0 4rem !important;
          }
          
          .grid-overlay {
            background-size: 30px 30px !important;
          }

          .particle {
            display: none;
          }
        }        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-description {
            font-size: clamp(1rem, 4vw, 1.1rem) !important;
            max-width: 100% !important;
            margin-bottom: 1.75rem !important;
          }
            .hero-content {
            padding: 0 0.75rem !important;
          }
          
          .waitlist-form {
            padding: 0.3rem !important;
            border-radius: 12px !important;
          }

          .waitlist-email {
            padding: 0.65rem 0.875rem !important;
            padding-right: 105px !important;
            font-size: 0.9rem !important;
            border-radius: 8px !important;
          }

          .waitlist-btn {
            right: 3px !important;
            padding: 0.55rem 1rem !important;
            font-size: 0.8rem !important;
            border-radius: 7px !important;
          }

          .btn {
            padding: 0.875rem 1.75rem !important;
            font-size: 1rem !important;
          }
          
          section {
            padding: 2rem 0 3.5rem !important;
          }
          
          .hero-phone {
            margin-top: 2rem !important;
          }
          
        }        @media (max-width: 360px) {
          .hero-title {
            font-size: clamp(1.875rem, 8vw, 2.25rem) !important;
          }
          
          .hero-description {
            font-size: clamp(0.95rem, 4vw, 1.05rem) !important;
          }
            .hero-content {
            padding: 0 0.5rem !important;
          }

          .waitlist-btn {
            font-size: 0.9rem !important;
          }
          
        }
      `}</style>
    </section>
  );
} 
