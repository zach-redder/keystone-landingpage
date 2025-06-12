import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-wrapper animate-on-scroll" style={{ position: 'relative', paddingBottom: '4rem' }}>
      {/* Background effects */}
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
      
      {/* Floating particles for atmosphere */}
      <div className="floating-particle" style={{
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: 'rgba(212, 222, 149, 0.3)',
        borderRadius: '50%',
        top: '10%',
        left: '5%',
        animation: 'drift-up 30s linear infinite'
      }}></div>
      <div className="floating-particle" style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        background: 'rgba(212, 222, 149, 0.2)',
        borderRadius: '50%',
        top: '30%',
        right: '8%',
        animation: 'drift-up 25s linear infinite 5s'
      }}></div>
      <div className="floating-particle" style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(212, 222, 149, 0.25)',
        borderRadius: '50%',
        top: '70%',
        left: '15%',
        animation: 'drift-up 35s linear infinite 10s'
      }}></div>
      
      <div className="section-content">
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
            }}>How It Works</h2>
            <p className="animate-on-scroll" style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '800px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              A free and simple process to help you align your outward identity with your inner self.
            </p>
          </div>          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Step 1 */}
              <div className="animate-on-scroll delay-100 step-card" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative', 
                transform: 'translateY(30px)',
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(47, 47, 47, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 222, 149, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Subtle glow behind step */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110%',
                  height: '110%',
                  background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                  borderRadius: '20px',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}></div>
                
                <div className="float step-number" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.15), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1,
                  animation: 'pulse-glow 4s ease-in-out infinite'
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(212, 222, 149, 0.5)' }}>1</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white'
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>Define Your Identity</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}>
                    Define and iterate upon your keys - core values, life goals, and future self vision.
                    Keystone makes it easy to ground yourself in what you envision for yourself, disregarding
                    other people's judgment.
                  </p>
                  <div className="quote-bubble" style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.08)',
                    border: '1px solid rgba(212, 222, 149, 0.15)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
                    transition: 'transform 0.2s ease'
                  }}>
                    &quot;Store your values to keep yourself grounded in the future.&quot;
                  </div>
                </div>              </div>
              
              {/* Elegant divider between steps */}
              <div className="step-divider" style={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(212, 222, 149, 0.3) 20%, rgba(212, 222, 149, 0.5) 50%, rgba(212, 222, 149, 0.3) 80%, transparent)',
                margin: '4rem auto',
                animation: 'subtleGlow 4s ease-in-out infinite'
              }}></div>
              
              {/* Step 2 */}
              <div className="animate-on-scroll delay-200 step-card" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative',
                transform: 'translateY(30px)',
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(47, 47, 47, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 222, 149, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Subtle glow behind step */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110%',
                  height: '110%',
                  background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                  borderRadius: '20px',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}></div>
                
                <div className="float step-number" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.15), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1,
                  animation: 'pulse-glow 4s ease-in-out infinite 1s'
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(212, 222, 149, 0.5)' }}>2</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>Daily Reminders</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}>
                    Get daily reminders that remind you of who you want to become and how to act accordingly.
                    These reminders powered by AI use your stored keys making them completely personalized. This constant
                    alignment is essential to help you stay on track.
                  </p>
                  <div className="quote-bubble" style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.08)',
                    border: '1px solid rgba(212, 222, 149, 0.15)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
                    transition: 'transform 0.2s ease'
                  }}>
                    &quot;You need to remind yourself daily of who you are.&quot;
                  </div>
                </div>
              </div>
              
              {/* Elegant divider between steps */}
              <div className="step-divider" style={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(212, 222, 149, 0.3) 20%, rgba(212, 222, 149, 0.5) 50%, rgba(212, 222, 149, 0.3) 80%, transparent)',
                margin: '4rem auto',
                animation: 'subtleGlow 4s ease-in-out infinite 2s'
              }}></div>
              
              {/* Step 3 */}
              <div className="animate-on-scroll delay-300 step-card" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative',
                transform: 'translateY(30px)',
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(47, 47, 47, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 222, 149, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Subtle glow behind step */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110%',
                  height: '110%',
                  background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                  borderRadius: '20px',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}></div>
                
                <div className="float step-number" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.15), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1,
                  animation: 'pulse-glow 4s ease-in-out infinite 2s'
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(212, 222, 149, 0.5)' }}>3</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>Log Actions</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}>
                    Daily nudges aren't enough? Log your unaligned actions and receive powerful AI feedback on your continuous alignment.
                    Recieve customized AI instructions you can take to better align your outward identity with your inner self.
                  </p>
                  <div className="quote-bubble" style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.08)',
                    border: '1px solid rgba(212, 222, 149, 0.15)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
                    transition: 'transform 0.2s ease'
                  }}>
                    &quot;Learn from your mistakes to align properly.&quot;
                  </div>
                </div>
              </div>
              {/* Elegant divider between steps */}
              <div className="step-divider" style={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(212, 222, 149, 0.3) 20%, rgba(212, 222, 149, 0.5) 50%, rgba(212, 222, 149, 0.3) 80%, transparent)',
                margin: '4rem auto',
                animation: 'subtleGlow 4s ease-in-out infinite 2s'
              }}></div>
              
              {/* Step 4 */}
              <div className="animate-on-scroll delay-300 step-card" style={{ 
                display: 'flex', 
                gap: '3.5rem', 
                position: 'relative',
                transform: 'translateY(30px)',
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(47, 47, 47, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 222, 149, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Subtle glow behind step */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110%',
                  height: '110%',
                  background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.02) 0%, transparent 70%)',
                  borderRadius: '20px',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}></div>
                
                <div className="float step-number" style={{ 
                  width: '90px', 
                  height: '90px', 
                  flexShrink: 0,
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.15), rgba(212, 222, 149, 0.25))',
                  border: '2px solid rgba(212, 222, 149, 0.3)',
                  boxShadow: '0 0 30px rgba(212, 222, 149, 0.15), inset 0 0 20px rgba(212, 222, 149, 0.05)',
                  zIndex: 1,
                  animation: 'pulse-glow 4s ease-in-out infinite 2s'
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(212, 222, 149, 0.5)' }}>4</span>
                </div>
                <div style={{ flex: 1, paddingTop: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: 'white',
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>Affirm Your Vision</h3>
                  <p style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1.25rem', 
                    lineHeight: 1.7,
                    maxWidth: '650px',
                    marginBottom: '1.5rem',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}>
                    Whenever you feel tension, effortlessly affirm your vision to help you stay connected to inner self.
                    Remind yourself of what you're working towards and keep away all doubt and judgement that will inevitably arise.
                  </p>
                  <div className="quote-bubble" style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(212, 222, 149, 0.08)',
                    border: '1px solid rgba(212, 222, 149, 0.15)',
                    color: 'rgba(212, 222, 149, 0.9)',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
                    transition: 'transform 0.2s ease'
                  }}>
                    &quot;Never let internal tension overtake you.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`        @keyframes drift-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(212, 222, 149, 0.15), inset 0 0 20px rgba(212, 222, 149, 0.05);
          }
          50% {
            box-shadow: 0 0 40px rgba(212, 222, 149, 0.25), inset 0 0 30px rgba(212, 222, 149, 0.08);
          }
        }        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .step-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(212, 222, 149, 0.1);
        }

        .quote-bubble:hover {
          transform: translateY(-2px);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .container { 
            padding-left: 1rem !important; 
            padding-right: 1rem !important; 
          }
          h2 {
            font-size: 2.25rem !important;
          }
          .step-card {
            flex-direction: column !important;
            gap: 2rem !important;
            padding: 2rem 1.5rem !important;
            text-align: center !important;
            margin: 0 1rem 3rem 1rem !important;
          }
          .step-number {
            width: 70px !important;
            height: 70px !important;
            font-size: 1.75rem !important;
            margin: 0 auto !important;
          }
          .step-card h3 {
            font-size: 1.875rem !important;
            text-align: center !important;
          }
          .step-card p {
            font-size: 1.125rem !important;
            text-align: center !important;
          }          .section-content {
            padding: 80px 1rem 120px 1rem !important;
          }
          .step-divider {
            display: none !important;
          }
        }        @media (max-width: 640px) {
          .container { 
            padding-left: 0.75rem !important; 
            padding-right: 0.75rem !important; 
          }
          h2 {
            font-size: 2rem !important;
          }
          .step-card {
            padding: 1.75rem 1.25rem !important;
            margin: 0 0.75rem 2.5rem 0.75rem !important;
            border-radius: 16px !important;
            gap: 1.5rem !important;
          }
          .step-number {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
          .step-card h3 {
            font-size: 1.625rem !important;
            margin-bottom: 1rem !important;
          }
          .step-card p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          .floating-particle {
            display: none;
          }
          .section-content {
            padding: 70px 0.75rem 100px 0.75rem !important;
          }
        }
          @media (max-width: 480px) {
          h2 {
            font-size: 1.875rem !important;
          }
          .step-card {
            padding: 1.5rem 1rem !important;
            gap: 1.25rem !important;
            margin: 0 0.5rem 2rem 0.5rem !important;
          }
          .step-number {
            width: 55px !important;
            height: 55px !important;
            font-size: 1.375rem !important;
          }
          .step-card h3 {
            font-size: 1.5rem !important;
          }
          .step-card p {
            font-size: 0.95rem !important;
          }
          .container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .section-content {
            padding: 60px 0.5rem 80px 0.5rem !important;
          }
        }/* Large screen enhancements */
        @media (min-width: 1200px) {
          .step-divider {
            width: 50% !important;
          }
        }
      `}</style>
    </section>
  );
}