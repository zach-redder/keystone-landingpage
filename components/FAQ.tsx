import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="section-wrapper animate-on-scroll">
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
              marginBottom: '1.25rem',
              color: 'var(--accent)'
            }}>Frequently Asked Questions</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              maxWidth: '800px', 
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              Everything you need to know about Keystone.
            </p>
          </div>
          
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <details className="animate-on-scroll delay-100" style={{ 
              background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.3))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)'
            }}>
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.35rem 1.5rem', 
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none'
              }}>
                <span>What is Keystone?</span>
                <span style={{ transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '1.4rem', fontWeight: '300' }}>+</span>
              </summary>
              <div style={{ 
                padding: '0.75rem 1.5rem 1.5rem', 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(80, 80, 80, 0.3)'
              }}>
                <p>
                  Keystone is a free self-alignment app that helps you bridge the gap between your actions and your values using daily reminders
                  and AI feedback. It&apos;s designed to keep you connected to your authentic self, to stop caring what other's think of you,
                  and to live your life on your own terms.
                </p>
              </div>
            </details>
            
            <details className="animate-on-scroll delay-200" style={{ 
              background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.3))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)'
            }}>
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.35rem 1.5rem', 
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none'
              }}>
                <span>When will Keystone launch?</span>
                <span style={{ transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '1.4rem', fontWeight: '300' }}>+</span>
              </summary>
              <div style={{ 
                padding: '0.75rem 1.5rem 1.5rem', 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(80, 80, 80, 0.3)'
              }}>
                <p>
                  We&apos;re working hard to launch as soon as possible so stay tuned! Join the waitlist to get notified as soon as we go live.
                  Early waitlist members will get development updates and priority access to the beta.
                </p>
              </div>
            </details>
            
            <details className="animate-on-scroll delay-300" style={{ 
              background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.3))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)'
            }}>
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.35rem 1.5rem', 
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none'
              }}>
                <span>How will my data be used?</span>
                <span style={{ transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '1.4rem', fontWeight: '300' }}>+</span>
              </summary>
              <div style={{ 
                padding: '0.75rem 1.5rem 1.5rem', 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(80, 80, 80, 0.3)'
              }}>
                <p>Your data will be kept private and only used to improve your experience. We&apos;ll never sell your information to third parties.
                  Your identity information is encrypted and secure.</p>
              </div>
            </details>
            
            <details className="animate-on-scroll delay-400" style={{ 
              background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.3))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)'
            }}>
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.35rem 1.5rem', 
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none'
              }}>
                <span>Is Keystone available on iOS and Android?</span>
                <span style={{ transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '1.4rem', fontWeight: '300' }}>+</span>
              </summary>
              <div style={{ 
                padding: '0.75rem 1.5rem 1.5rem', 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(80, 80, 80, 0.3)'
              }}>
                <p>
                  Yes, Keystone will be available on both iOS and Android platforms once we launch. We&apos;re building in a way where
                  no matter what phone you own, you will have the best experience possible.</p>
              </div>
            </details>
            
            <details className="animate-on-scroll delay-500" style={{ 
              background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.3))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(80, 80, 80, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)'
            }}>
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.35rem 1.5rem', 
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none'
              }}>
                <span>Will there be a free version?</span>
                <span style={{ transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '1.4rem', fontWeight: '300' }}>+</span>
              </summary>
              <div style={{ 
                padding: '0.75rem 1.5rem 1.5rem', 
                color: '#e0e0e0', 
                fontSize: '1.125rem', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(80, 80, 80, 0.3)'
              }}>
                <p>
                  Yes, we plan to offer both free and premium tiers to ensure everyone can benefit from Keystone. The free version will include
                  core alignment features and everything you need to use the app properly, while premium will offer advanced AI insights and additional
                  tools and benefits for committed users.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
} 