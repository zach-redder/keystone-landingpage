import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-wrapper animate-on-scroll">
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
      <div className="section-content">
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            transform: 'translateY(20px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: 'var(--accent)'
            }}>How It Works</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '800px'
            }}>
              A simple three-step process to help you stay aligned with your values.
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            {/* Line connector */}
            <div style={{ 
              position: 'absolute', 
              left: '44px', 
              top: '90px', 
              bottom: '90px', 
              width: '3px', 
              background: 'linear-gradient(to bottom, rgba(212, 222, 149, 0.4) 0%, rgba(212, 222, 149, 0.1) 100%)',
              zIndex: 0
            }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
              {/* Step 1 */}
              <div className="animate-on-scroll delay-100" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative', 
                transform: 'translateY(30px)'
              }}>
                <div className="float" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.1), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold' }}>1</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2
                  }}>Define your identity</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem'
                  }}>
                    Answer thoughtful questions about your core values, identity traits, and future self vision. 
                    Keystone guides you through a process of self-discovery to build your personal foundation.
                  </p>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.05)',
                    border: '1px solid rgba(212, 222, 149, 0.1)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem'
                  }}>
                    &quot;Who are you at your best, and what values guide your decisions?&quot;
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="animate-on-scroll delay-200" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative',
                transform: 'translateY(30px)'
              }}>
                <div className="float" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.1), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold' }}>2</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2
                  }}>Receive reminders</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem'
                  }}>
                    Get daily nudges that remind you of who you want to become and how to act accordingly.
                    These personalized reminders keep you connected to your authentic self throughout the day.
                  </p>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.05)',
                    border: '1px solid rgba(212, 222, 149, 0.1)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem'
                  }}>
                    &quot;How can you embody your values in this moment?&quot;
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="animate-on-scroll delay-300" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative',
                transform: 'translateY(30px)'
              }}>
                <div className="float" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.1), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold' }}>3</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2
                  }}>Get feedback</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem'
                  }}>
                    Log your actions and receive AI-powered feedback on your alignment with your values.
                    Track your progress and celebrate your growth over time.
                  </p>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.05)',
                    border: '1px solid rgba(212, 222, 149, 0.1)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem'
                  }}>
                    &quot;How well did your actions align with your values today?&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 