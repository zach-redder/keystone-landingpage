import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="section-wrapper animate-on-scroll" style={{ position: 'relative', paddingBottom: '4rem' }}>
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
        {/* Floating decorative particles */}
      <div style={{
        position: 'absolute',
        width: 'clamp(60px, 8vw, 90px)',
        height: 'clamp(60px, 8vw, 90px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '10%',
        right: '8%',
        animation: 'slow-drift 20s ease-in-out infinite',
        zIndex: 0,
        display: 'block'
      }}></div>
      <div style={{
        position: 'absolute',
        width: 'clamp(45px, 6vw, 65px)',
        height: 'clamp(45px, 6vw, 65px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '5%',
        animation: 'slow-drift 24s ease-in-out infinite reverse',
        zIndex: 0,
        display: 'block'
      }}></div>
      <div style={{
        position: 'absolute',
        width: 'clamp(50px, 7vw, 75px)',
        height: 'clamp(50px, 7vw, 75px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.07) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '20%',
        right: '15%',
        animation: 'slow-drift 26s ease-in-out infinite',
        zIndex: 0,
        display: 'block'
      }}></div>

      <div className="section-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            transform: 'translateY(20px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 6vw, 3.75rem)', 
              fontWeight: 'bold', 
              marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
              background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(212, 222, 149, 0.2)',
              lineHeight: '1.2'
            }}>Frequently Asked Questions</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              lineHeight: 1.7,
              maxWidth: '800px', 
              margin: '0 auto',
              padding: '0 clamp(1rem, 3vw, 1rem)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              Everything you need to know about Keystone.
            </p>
          </div>
            <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            padding: '0 clamp(0.75rem, 2vw, 1rem)'
          }}>            <details className="animate-on-scroll delay-100" style={{ 
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: 'clamp(15px, 2vw, 20px)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(212, 222, 149, 0.05)',
              position: 'relative',
              cursor: 'pointer'
            }}>
              {/* Enhanced glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: 'clamp(15px, 2vw, 20px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2vw, 1.5rem)', 
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)',
                minHeight: '48px',
                lineHeight: '1.3'
              }}>
                <span>What is Keystone?</span>
                <span style={{ 
                  transition: 'transform 0.3s ease', 
                  display: 'inline-block', 
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                  fontWeight: '300',
                  filter: 'drop-shadow(0 0 4px rgba(212, 222, 149, 0.3))'
                }}>+</span>
              </summary>
              <div style={{ 
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)', 
                color: '#e0e0e0', 
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(212, 222, 149, 0.1)',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <p>
                  Keystone is a free self-alignment app that helps you bridge the gap between your actions and your values using daily reminders
                  and AI feedback. It&apos;s designed to keep you connected to your authentic self, to stop caring what other's think of you,
                  and to live your life on your own terms.
                </p>
              </div>
            </details>            {/* FAQ Item 2 - Enhanced */}            <details className="animate-on-scroll delay-200" style={{ 
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: 'clamp(15px, 2vw, 20px)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(212, 222, 149, 0.05)',
              position: 'relative',
              cursor: 'pointer'
            }}>
              {/* Enhanced glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: 'clamp(15px, 2vw, 20px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2vw, 1.5rem)', 
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)',
                minHeight: '48px',
                lineHeight: '1.3'
              }}>
                <span>When will Keystone launch?</span>
                <span style={{ 
                  transition: 'transform 0.3s ease', 
                  display: 'inline-block', 
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                  fontWeight: '300',
                  filter: 'drop-shadow(0 0 4px rgba(212, 222, 149, 0.3))'
                }}>+</span>
              </summary>
              <div style={{ 
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)', 
                color: '#e0e0e0', 
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(212, 222, 149, 0.1)',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <p>
                  We&apos;re working hard to launch as soon as possible so stay tuned! Join the waitlist to get notified as soon as we go live.
                  Early waitlist members will get development updates and priority access to the beta.
                </p>
              </div>
            </details>
            
            {/* FAQ Item 3 - Enhanced */}            <details className="animate-on-scroll delay-300" style={{ 
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: 'clamp(15px, 2vw, 20px)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(212, 222, 149, 0.05)',
              position: 'relative',
              cursor: 'pointer'
            }}>
              {/* Enhanced glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: 'clamp(15px, 2vw, 20px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2vw, 1.5rem)', 
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)',
                minHeight: '48px',
                lineHeight: '1.3'
              }}>
                <span>How will my data be used?</span>
                <span style={{ 
                  transition: 'transform 0.3s ease', 
                  display: 'inline-block', 
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                  fontWeight: '300',
                  filter: 'drop-shadow(0 0 4px rgba(212, 222, 149, 0.3))'
                }}>+</span>
              </summary>
              <div style={{ 
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)', 
                color: '#e0e0e0', 
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(212, 222, 149, 0.1)',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <p>Your data will be kept private and only used to improve your experience. We&apos;ll never sell your information to third parties.
                  Your identity information is encrypted and secure.</p>
              </div>
            </details>
            
            {/* FAQ Item 4 - Enhanced */}            <details className="animate-on-scroll delay-400" style={{ 
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: 'clamp(15px, 2vw, 20px)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(212, 222, 149, 0.05)',
              position: 'relative',
              cursor: 'pointer'
            }}>
              {/* Enhanced glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: 'clamp(15px, 2vw, 20px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2vw, 1.5rem)', 
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)',
                minHeight: '48px',
                lineHeight: '1.3'
              }}>
                <span>Is Keystone available on iOS and Android?</span>
                <span style={{ 
                  transition: 'transform 0.3s ease', 
                  display: 'inline-block', 
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                  fontWeight: '300',
                  filter: 'drop-shadow(0 0 4px rgba(212, 222, 149, 0.3))'
                }}>+</span>
              </summary>
              <div style={{ 
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)', 
                color: '#e0e0e0', 
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(212, 222, 149, 0.1)',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <p>
                  Yes, Keystone will be available on both iOS and Android platforms once we launch. We&apos;re building in a way where
                  no matter what phone you own, you will have the best experience possible.</p>
              </div>
            </details>
            
            {/* FAQ Item 5 - Enhanced */}            <details className="animate-on-scroll delay-500" style={{ 
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: 'clamp(15px, 2vw, 20px)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(212, 222, 149, 0.05)',
              position: 'relative',
              cursor: 'pointer'
            }}>
              {/* Enhanced glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: 'clamp(15px, 2vw, 20px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <summary style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1rem, 2vw, 1.5rem)', 
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)',
                minHeight: '48px',
                lineHeight: '1.3'
              }}>
                <span>Will there be a free version?</span>
                <span style={{ 
                  transition: 'transform 0.3s ease', 
                  display: 'inline-block', 
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                  fontWeight: '300',
                  filter: 'drop-shadow(0 0 4px rgba(212, 222, 149, 0.3))'
                }}>+</span>
              </summary>
              <div style={{ 
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)', 
                color: '#e0e0e0', 
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', 
                lineHeight: '1.7',
                borderTop: '1px solid rgba(212, 222, 149, 0.1)',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <p>
                  Yes, we plan to offer both free and premium tiers to ensure everyone can benefit from Keystone. The free version will include
                  core alignment features and everything you need to use the app properly, while premium will offer advanced AI insights and additional
                  tools and benefits for committed users.</p>
              </div>
            </details>
          </div>
              <style jsx>{`
            details:hover {
              transform: translateY(-2px) !important;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 8px 15px rgba(212, 222, 149, 0.08) !important;
            }
            details[open] summary span:last-child {
              transform: rotate(45deg);
            }
            
            /* Enhanced mobile styles */
            @media (max-width: 768px) {
              .container { 
                padding-left: 1rem !important; 
                padding-right: 1rem !important; 
              }
              details {
                margin-bottom: 0.5rem !important;
              }
              summary span:first-child {
                padding-right: 1rem !important;
                word-break: break-word !important;
              }
            }
            
            @media (max-width: 640px) {
              .container { 
                padding-left: 0.75rem !important; 
                padding-right: 0.75rem !important; 
              }
            }
            
            @media (max-width: 480px) {
              .container { 
                padding-left: 0.5rem !important; 
                padding-right: 0.5rem !important; 
              }
              details {
                border-radius: 15px !important;
              }
              summary {
                padding: 1rem !important;
                font-size: 1rem !important;
              }
              summary span:last-child {
                font-size: 1.2rem !important;
                min-width: 24px !important;
                text-align: center !important;
              }
              details > div {
                padding: 0.75rem 1rem 1rem !important;
                font-size: 0.95rem !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}