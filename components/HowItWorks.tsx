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
              A simple and free no effort process to help you stay aligned with your values.
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
              background: 'rgba(212, 222, 149, 0.4)',
              zIndex: 0,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 25%, transparent 32%, transparent 43%, black 62%, black 70%, transparent 80%)'
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
                    Identify and define your core values, life goals, identity traits and more! 
                    Keystone provides you a way to ground yourself in what you hold true, disregarding
                    other people's opinions to help you achieve your dream life.
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
                    &quot;What values define your ideal unique self?&quot;
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
                    These personalized reminders keep you connected to your authentic self throughout the day,
                    based completely on the values and goals you entered before.
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
                    &quot;How will you continue to embody your values today?&quot;
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
                    Log your unaligned actions and receive powerful AI feedback on your alignment with your values and goals.
                    Track your progress and see how far you've come over time.
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
                    &quot;How well did your action align with your values and goals?&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .container { padding-left: 1rem !important; padding-right: 1rem !important; }
          .animate-on-scroll { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
} 