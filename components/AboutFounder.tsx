import React from 'react';
import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="section-wrapper" style={{ position: 'relative', width: '100vw', marginLeft: 'calc(50% - 50vw)', paddingBottom: '4rem' }}>
      {/* Floating decorative particles */}
      <div style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '20%',
        left: '8%',
        animation: 'slow-drift 18s ease-in-out infinite',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        width: '70px',
        height: '70px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '65%',
        right: '12%',
        animation: 'slow-drift 22s ease-in-out infinite reverse',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '15%',
        left: '15%',
        animation: 'slow-drift 25s ease-in-out infinite',
        zIndex: 0
      }}></div>

      <div className="section-content container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          color: 'var(--accent)', 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '2rem', 
          letterSpacing: '-0.01em',
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
        }}>
          Meet the Founder
        </h2>
        <div style={{ 
          width: '60px', 
          height: '4px', 
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', 
          opacity: 0.4, 
          borderRadius: '2px', 
          margin: '0 auto 2.2rem auto',
          boxShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
        }} />
        <div className="card about-founder-card animate-on-scroll" style={{ 
          padding: '2.5rem 2rem', 
          background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))', 
          borderRadius: '1.5rem', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(212, 222, 149, 0.08)', 
          border: '1px solid rgba(212, 222, 149, 0.15)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem', 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'left', 
          position: 'relative', 
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden'
        }}>
          {/* Enhanced card background glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '130%',
            height: '130%',
            background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.03) 0%, transparent 70%)',
            borderRadius: '1.5rem',
            zIndex: 0,
            pointerEvents: 'none'
          }}></div>

          <div className="about-founder-flex" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <Image 
              src="/profile_pic.png"
              alt="Zach Redder, Founder of Keystone" 
              width={180} 
              height={180} 
              style={{ 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: '3px solid var(--accent)', 
                flexShrink: 0, 
                boxShadow: '0 8px 25px rgba(212,222,149,0.15), 0 0 30px rgba(212,222,149,0.08)',
                transition: 'all 0.3s ease'
              }}
            />
            {/* Vertical accent line for desktop */}
            <div className="about-founder-divider" style={{ 
              display: 'none', 
              width: '2px', 
              background: 'linear-gradient(180deg, transparent, var(--accent), transparent)', 
              opacity: 0.25, 
              borderRadius: '1px', 
              alignSelf: 'stretch', 
              margin: '0 2rem',
              boxShadow: '0 0 8px rgba(212, 222, 149, 0.2)'
            }} />
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <h3 style={{ 
                color: 'var(--accent)', 
                fontWeight: 600, 
                fontSize: '1.25rem', 
                marginBottom: '0.5rem',
                textShadow: '0 0 10px rgba(212, 222, 149, 0.3)'
              }}>Zach Redder</h3>
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: '1.15rem', 
                lineHeight: 1.7, 
                maxWidth: '600px', 
                marginBottom: '1.2rem',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                "I built Keystone because I struggled for years to consistently live by my own values. I know what it's like to feel pulled in a hundred directions, to lose sight of what matters, and to want more alignment between who you are and how you show up. My mission is to help you (and myself) close that gap, one action at a time."
              </p>
              <span style={{ 
                color: 'var(--accent)', 
                fontFamily: 'cursive, "Pacifico", "Dancing Script", sans-serif', 
                fontSize: '1.4rem', 
                opacity: 0.8, 
                marginTop: '0.5rem', 
                marginLeft: '0.1rem', 
                display: 'inline-block',
                textShadow: '0 0 8px rgba(212, 222, 149, 0.2)'
              }}>
                Zach
              </span>
            </div>
          </div>
          <style jsx>{`
            .about-founder-card:hover {
              transform: translateY(-5px) !important;
              box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.3), 0 15px 30px rgba(212, 222, 149, 0.1) !important;
            }
            .about-founder-card:hover img {
              box-shadow: 0 15px 35px rgba(212,222,149,0.2), 0 0 40px rgba(212,222,149,0.1) !important;
            }
            @media (max-width: 600px) {
              .card { padding: 1.5rem 0.7rem !important; border-radius: 1rem !important; }
              h2 { font-size: 2rem !important; }
              .section-content { padding-left: 1rem !important; padding-right: 1rem !important; }
            }
            @media (min-width: 700px) {
              .about-founder-card .about-founder-flex { flex-direction: row; align-items: center; justify-content: flex-start; text-align: left; }
              .about-founder-divider { display: block !important; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}