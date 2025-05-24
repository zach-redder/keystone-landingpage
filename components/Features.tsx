import React from 'react';

export default function Features() {
  return (
    <section id="features" className="section-wrapper animate-on-scroll">
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
            }}>Features</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '800px'
            }}>
              Everything you need to align your actions with your values and track your progress.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '2.5rem',
            justifyContent: 'center'
          }}>
            {/* Feature Card 1 */}
            <div className="animate-on-scroll delay-100" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
            >
              <div style={{ 
                marginBottom: '2rem', 
                padding: '1.25rem',
                display: 'inline-flex',
                borderRadius: '16px',
                background: 'rgba(212, 222, 149, 0.1)'
              }}>
                <span style={{ fontSize: '2.5rem' }}>🔑</span>
              </div>
              <h3 style={{ 
                fontSize: '1.75rem', 
                fontWeight: 600, 
                marginBottom: '1.25rem',
                color: 'var(--accent)'
              }}>Storing Keys</h3>
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                Save your core values, identity traits, future self vision, and more in one secure place. Access them whenever you need guidance.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <a href="#waitlist" style={{ 
                  color: 'var(--accent)', 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: '1.125rem',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
            
            {/* Feature Card 2 */}
            <div className="animate-on-scroll delay-200" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
            >
              <div style={{ 
                marginBottom: '2rem', 
                padding: '1.25rem',
                display: 'inline-flex',
                borderRadius: '16px',
                background: 'rgba(212, 222, 149, 0.1)'
              }}>
                <span style={{ fontSize: '2.5rem' }}>🔔</span>
              </div>
              <h3 style={{ 
                fontSize: '1.75rem', 
                fontWeight: 600, 
                marginBottom: '1.25rem',
                color: 'var(--accent)'
              }}>Daily Reminders</h3>
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                Get daily nudges to remember who you are and want to become and act accordingly. Never lose sight of your true unique vision.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <a href="#waitlist" style={{ 
                  color: 'var(--accent)', 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: '1.125rem',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
            
            {/* Feature Card 3 */}
            <div className="animate-on-scroll delay-300" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
            >
              <div style={{ 
                marginBottom: '2rem', 
                padding: '1.25rem',
                display: 'inline-flex',
                borderRadius: '16px',
                background: 'rgba(212, 222, 149, 0.1)'
              }}>
                <span style={{ fontSize: '2.5rem' }}>✨</span>
              </div>
              <h3 style={{ 
                fontSize: '1.75rem', 
                fontWeight: 600, 
                marginBottom: '1.25rem',
                color: 'var(--accent)'
              }}>AI Alignment Feedback</h3>
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                Log your unaligned actions and receive powerful AI feedback on your current alignment with your values and goals.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <a href="#waitlist" style={{ 
                  color: 'var(--accent)', 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: '1.125rem',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 