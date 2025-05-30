import React from 'react';

export default function ProblemAgitation() {
  return (
    <section className="section-wrapper" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', paddingBottom: '4rem', position: 'relative' }}>
      {/* Floating particles for atmosphere */}
      <div className="floating-particle particle-left" style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        background: 'rgba(212, 222, 149, 0.2)',
        borderRadius: '50%',
        top: '15%',
        left: '8%',
        animation: 'gentle-float 20s linear infinite'
      }}></div>
      <div className="floating-particle particle-right" style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(212, 222, 149, 0.15)',
        borderRadius: '50%',
        top: '25%',
        right: '12%',
        animation: 'gentle-float 25s linear infinite reverse'
      }}></div>
      
      <div className="section-content" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <h2 className="animate-on-scroll" style={{ 
          color: 'var(--accent)', 
          fontSize: '2.8rem', 
          fontWeight: 800, 
          marginBottom: '1.2rem', 
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(212, 222, 149, 0.2)'
        }}>
          Why is it so hard to live by your values?
        </h2>
        <div className="accent-divider animate-on-scroll" style={{ 
          width: '60px', 
          height: '4px', 
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', 
          borderRadius: '2px', 
          margin: '0 auto 2.2rem auto',
          boxShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
        }} />
        <div className="card animate-on-scroll" style={{ 
          position: 'relative', 
          padding: '2.8rem 2.2rem', 
          background: 'rgba(47,47,47,0.88)', 
          borderRadius: '1.5rem', 
          boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.08)', 
          border: '1px solid rgba(212,222,149,0.12)', 
          maxWidth: '900px', 
          margin: '0 auto', 
          overflow: 'hidden', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Enhanced quote icon with glow */}
          <span style={{
            position: 'absolute',
            top: '18px',
            left: '24px',
            fontSize: '5.5rem',
            color: 'var(--accent)',
            opacity: 0.1,
            zIndex: 0,
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: 900,
            textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
          }}>&ldquo;</span>
          
          {/* Subtle glow effect behind card */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110%',
            height: '110%',
            background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.03) 0%, transparent 70%)',
            borderRadius: '1.5rem',
            zIndex: -1,
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '1.35rem', color: '#e0e0e0', marginBottom: '2.2rem', lineHeight: 1.7, fontWeight: 500, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              You know what matters most to you, yet, day after day, it feels like your actions don't always reflect your true priorities.
            </p>
            <p style={{ fontSize: '1.18rem', color: '#b0b0b0', marginBottom: '2.2rem', lineHeight: 1.7, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Distractions, outside opinions, and the pressure to fit in can pull you off course. It's easy to lose sight of your core values in the noise of daily life.
            </p>
            <p style={{ fontSize: '1.13rem', color: '#b0b0b0', fontStyle: 'italic', marginBottom: 0, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              The result? Frustration, self-doubt, and a sense that you're not living as your best self.
            </p>
            <div style={{ height: '1.5rem' }} />
            <p style={{ 
              fontSize: '1.13rem', 
              color: 'var(--accent)', 
              fontWeight: 600, 
              fontStyle: 'italic', 
              marginBottom: 0,
              textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
            }}>
              Keystone is here to help you break the cycle and finally bridge the gap between your intentions and your actions.
            </p>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes gentle-float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: translateY(-60px) rotate(360deg);
              opacity: 0;
            }
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.25), 0 8px 20px rgba(212, 222, 149, 0.12) !important;
          }

          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }

          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 600px) {
            .card { 
              padding: 1.5rem 0.7rem !important; 
              border-radius: 1rem !important; 
            }
            h2 { 
              font-size: 2rem !important; 
            }
            .section-content { 
              padding-left: 1rem !important; 
              padding-right: 1rem !important; 
            }
            .floating-particle {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}