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
          92% of people fail to achieve their dreams.
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
              It's so easy to quit. Why is that? Internal tension...
            </p>
            <p style={{ fontSize: '1.18rem', color: '#b0b0b0', marginBottom: '2.2rem', lineHeight: 1.7, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              You have constant doubt and internalize what people's opinions are of you. The everyday noise of life tempts you to give up. 
            </p>
            <p style={{ fontSize: '1.13rem', color: '#b0b0b0', fontStyle: 'italic', marginBottom: 0, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Not aligning your actions with what your goals are causes this doubt, internalized judgement, and a feeling of internal tension.
            </p>
            <div style={{ height: '1.5rem' }} />
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'var(--accent)', 
              fontWeight: 600, 
              fontStyle: 'italic', 
              marginBottom: 0,
              textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
            }}>
              Keystone is here to fix that with true self projection.
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
          }          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
          }          /* Enhanced Mobile Responsiveness */
          @media (max-width: 768px) {
            .container {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
            h2 { 
              font-size: 2.25rem !important;
              margin-bottom: 1rem !important;
            }
            .card { 
              padding: 2rem 1.5rem !important;
              margin: 0 1rem !important;
            }
            .section-content {
              padding: 80px 1rem 120px 1rem !important;
            }
          }          @media (max-width: 640px) {
            .container {
              padding-left: 0.75rem !important;
              padding-right: 0.75rem !important;
            }
            .card { 
              padding: 1.75rem 1.25rem !important; 
              border-radius: 20px !important;
              margin: 0 0.75rem !important;
            }
            h2 { 
              font-size: 2rem !important; 
            }
            .card h3 {
              font-size: 1.5rem !important;
              margin-bottom: 1rem !important;
            }
            .card p {
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
            .container {
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            .card { 
              padding: 1.5rem 1rem !important; 
              border-radius: 16px !important;
              margin: 0 0.5rem !important;
            }
            h2 { 
              font-size: 1.875rem !important; 
            }
            .card h3 {
              font-size: 1.375rem !important;
            }
            .card p {
              font-size: 0.95rem !important;
            }
            .section-content {
              padding: 60px 0.5rem 80px 0.5rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}