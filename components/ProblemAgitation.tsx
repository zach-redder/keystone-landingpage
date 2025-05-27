import React from 'react';

export default function ProblemAgitation() {
  return (
    <section className="section-wrapper" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', paddingBottom: '4rem' }}>
      <div className="section-content" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: 'var(--accent)', fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
          Why is it so hard to live by your values?
        </h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent)', opacity: 0.25, borderRadius: '2px', margin: '0 auto 2.2rem auto' }} />
        <div className="card animate-on-scroll" style={{ position: 'relative', padding: '2.8rem 2.2rem', background: 'rgba(47,47,47,0.88)', borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', border: '1px solid rgba(212,222,149,0.08)', maxWidth: '900px', margin: '0 auto', overflow: 'hidden', transition: 'box-shadow 0.2s' }}>
          {/* Large quote icon in background */}
          <span style={{
            position: 'absolute',
            top: '18px',
            left: '24px',
            fontSize: '5.5rem',
            color: 'var(--accent)',
            opacity: 0.07,
            zIndex: 0,
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: 900
          }}>&ldquo;</span>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '1.35rem', color: '#e0e0e0', marginBottom: '2.2rem', lineHeight: 1.7, fontWeight: 500 }}>
              You know what matters most to you, yet, day after day, it feels like your actions don't always reflect your true priorities.
            </p>
            <p style={{ fontSize: '1.18rem', color: '#b0b0b0', marginBottom: '2.2rem', lineHeight: 1.7 }}>
              Distractions, outside opinions, and the pressure to fit in can pull you off course. It's easy to lose sight of your core values in the noise of daily life.
            </p>
            <p style={{ fontSize: '1.13rem', color: '#b0b0b0', fontStyle: 'italic', marginBottom: 0 }}>
              The result? Frustration, self-doubt, and a sense that you're not living as your best self.
            </p>
            <div style={{ height: '1.5rem' }} />
            <p style={{ fontSize: '1.13rem', color: 'var(--accent)', fontWeight: 600, fontStyle: 'italic', marginBottom: 0 }}>
              Keystone is here to help you break the cycle and finally bridge the gap between your intentions and your actions.
            </p>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 600px) {
            .card { padding: 1.5rem 0.7rem !important; border-radius: 1rem !important; }
            h2 { font-size: 2rem !important; }
            .section-content { padding-left: 1rem !important; padding-right: 1rem !important; }
          }
        `}</style>
      </div>
    </section>
  );
} 