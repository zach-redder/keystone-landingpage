import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="animate-on-scroll" style={{ 
      padding: '140px 0',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'linear-gradient(to bottom, rgba(39, 39, 39, 1) 0%, rgba(38, 38, 38, 0.97) 50%, rgba(37, 37, 37, 0.95) 100%)',
      transform: 'translateY(20px)'
    }}>
      {/* Large decorative element spanning full width */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '-10%',
        width: '120%',
        height: '50%',
        background: 'radial-gradient(ellipse at top right, rgba(212, 222, 149, 0.02), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '120%',
        height: '60%',
        background: 'radial-gradient(ellipse at bottom left, rgba(212, 222, 149, 0.03), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div className="animate-on-scroll" style={{ 
          textAlign: 'center', 
          marginBottom: '7rem',
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
            maxWidth: '800px', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            Simple steps to start your self-alignment journey
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
                  &quot;Remember to lead with compassion today, as it&apos;s one of your core values.&quot;
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
                }}>Track your progress</h3>
                <p style={{ 
                  color: '#e0e0e0', 
                  fontSize: '1.25rem', 
                  lineHeight: 1.7,
                  maxWidth: '650px',
                  marginBottom: '1.5rem'
                }}>
                  Log your actions and get AI-powered feedback on how well they align with your true self.
                  Identify patterns, celebrate wins, and course-correct when needed to stay aligned.
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
                  &quot;This week, you acted in alignment with your values 87% of the time.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll delay-400" style={{ 
          textAlign: 'center', 
          marginTop: '7rem',
          transform: 'translateY(20px)'
        }}>
          <a href="#waitlist" 
            className="pulse-animation"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2rem',
              backgroundColor: 'var(--accent)',
              color: 'var(--background)',
              fontWeight: 'bold',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
} 