import React from 'react';

export default function Features() {
  return (
    <section id="features" className="section-wrapper animate-on-scroll" style={{ position: 'relative', paddingBottom: '4rem' }}>
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
        {/* Floating decorative particles */}
      <div style={{
        position: 'absolute',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '15%',
        left: '10%',
        animation: 'slow-drift 20s ease-in-out infinite, pulse-glow 4s ease-in-out infinite',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '60%',
        right: '15%',
        animation: 'slow-drift 25s ease-in-out infinite reverse, pulse-glow 6s ease-in-out infinite',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        width: '70px',
        height: '70px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.09) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '20%',
        left: '8%',
        animation: 'slow-drift 22s ease-in-out infinite, pulse-glow 5s ease-in-out infinite',
        zIndex: 0
      }}></div>
      
      <div className="section-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            transform: 'translateY(20px)'
          }}>
            <h2 className="animate-on-scroll" style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(212, 222, 149, 0.2)'
            }}>Features</h2>
            <p className="animate-on-scroll" style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '800px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              We have everything you need to align your outward identity with your inner self.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '2.5rem',
            justifyContent: 'center'
          }}>
            {/* Feature Card 1 - Enhanced */}            
            <div className="animate-on-scroll delay-100 feature-card" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(212, 222, 149, 0.05)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)',
              position: 'relative'
            }}>
              {/* Card glow effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: '24px',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-container" style={{ 
                  marginBottom: '2rem', 
                  padding: '1.25rem',
                  display: 'inline-flex',
                  borderRadius: '16px',
                  background: 'rgba(212, 222, 149, 0.15)',
                  border: '1px solid rgba(212, 222, 149, 0.2)',
                  boxShadow: '0 8px 16px rgba(212, 222, 149, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(212, 222, 149, 0.3))' }}>🔑</span>
                </div>                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  marginBottom: '1.25rem',
                  color: 'var(--accent)',
                  textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
                }}>Storing Keys</h3>
                <p style={{ 
                  color: '#e0e0e0', 
                  fontSize: '1.125rem', 
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Save your core values, life goals, future self vision, and more in one secure place. Access them whenever you need to iterate or recieve guidance.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a href="#waitlist" className="feature-link" style={{ 
                    color: 'var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.125rem',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    textShadow: '0 0 8px rgba(212, 222, 149, 0.2)'
                  }}>
                    Learn more <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Feature Card 2 - Enhanced */}            <div className="animate-on-scroll delay-200 feature-card" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(212, 222, 149, 0.05)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)',
              position: 'relative'
            }}>
              {/* Card glow effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: '24px',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-container" style={{ 
                  marginBottom: '2rem', 
                  padding: '1.25rem',
                  display: 'inline-flex',
                  borderRadius: '16px',
                  background: 'rgba(212, 222, 149, 0.15)',
                  border: '1px solid rgba(212, 222, 149, 0.2)',
                  boxShadow: '0 8px 16px rgba(212, 222, 149, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(212, 222, 149, 0.3))' }}>🔔</span>
                </div>                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  marginBottom: '1.25rem',
                  color: 'var(--accent)',
                  textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
                }}>Daily Reminders</h3>
                <p style={{ 
                  color: '#e0e0e0', 
                  fontSize: '1.125rem', 
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  These daily reminders take your personalized keys and constantly keep you aligned without being annoying.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a href="#waitlist" className="feature-link" style={{ 
                    color: 'var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.125rem',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    textShadow: '0 0 8px rgba(212, 222, 149, 0.2)'
                  }}>
                    Learn more <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Feature Card 3 - Enhanced */}            <div className="animate-on-scroll delay-300 feature-card" style={{ 
              flex: '1 1 300px',
              maxWidth: '400px',
              background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
              borderRadius: '24px',
              padding: '48px 32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(212, 222, 149, 0.05)',
              border: '1px solid rgba(212, 222, 149, 0.15)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: 'translateY(30px)',
              position: 'relative'
            }}>
              {/* Card glow effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                borderRadius: '24px',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-container" style={{ 
                  marginBottom: '2rem', 
                  padding: '1.25rem',
                  display: 'inline-flex',
                  borderRadius: '16px',
                  background: 'rgba(212, 222, 149, 0.15)',
                  border: '1px solid rgba(212, 222, 149, 0.2)',
                  boxShadow: '0 8px 16px rgba(212, 222, 149, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(212, 222, 149, 0.3))' }}>💡</span>
                </div>                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  marginBottom: '1.25rem',
                  color: 'var(--accent)',
                  textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
                }}>AI Guidance</h3>
                <p style={{ 
                  color: '#e0e0e0', 
                  fontSize: '1.125rem', 
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Keystone's customized AI will be there to support you at all times with no judgement. Get personalized insights, feedback, and affirmation from AI that understands your inner self.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a href="#waitlist" className="feature-link" style={{ 
                    color: 'var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.125rem',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    textShadow: '0 0 8px rgba(212, 222, 149, 0.2)'
                  }}>
                    Learn more <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-12px) !important;
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(212, 222, 149, 0.15) !important;
        }
        .feature-card:hover .icon-container {
          transform: scale(1.08) rotate(5deg);
        }
        .feature-card .icon-container:hover {
          transform: scale(1.12) rotate(10deg);
          box-shadow: 0 12px 24px rgba(212, 222, 149, 0.2);
        }
        .feature-link:hover {
          transform: translateX(8px);
          color: #f0f5a8;
          text-shadow: 0 0 12px rgba(212, 222, 149, 0.4);
        }
        .feature-link:hover span {
          transform: translateX(3px);
        }
        @keyframes slow-drift {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
          /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .container { 
            padding-left: 1rem !important; 
            padding-right: 1rem !important; 
          }
          .feature-card { 
            max-width: 100% !important;
            padding: 2rem 1.5rem !important;
            margin: 0 1rem !important;
          }
          h2 {
            font-size: 2.25rem !important;
            margin-bottom: 1rem !important;
          }
          .section-content {
            padding: 80px 1rem 120px 1rem !important;
          }
        }
          @media (max-width: 640px) {
          .container { 
            padding-left: 0.75rem !important; 
            padding-right: 0.75rem !important; 
          }
          .feature-card { 
            padding: 1.75rem 1.25rem !important;
            border-radius: 20px !important;
            gap: 2rem !important;
            margin: 0 0.75rem !important;
          }
          h2 {
            font-size: 2rem !important;
          }
          .icon-container {
            padding: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .feature-card h3 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          .feature-card p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          .section-content {
            padding: 70px 0.75rem 100px 0.75rem !important;
          }
        }
          @media (max-width: 480px) {
          .feature-card {
            padding: 1.5rem 1rem !important;
            border-radius: 16px !important;
            margin: 0 0.5rem !important;
          }
          h2 {
            font-size: 1.875rem !important;
          }
          .feature-card h3 {
            font-size: 1.375rem !important;
          }
          .feature-card p {
            font-size: 0.95rem !important;
          }
          .section-content {
            padding: 60px 0.5rem 80px 0.5rem !important;
          }
        }
      `}</style>        
    </section>
  );
}