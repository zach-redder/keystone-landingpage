import React from 'react';
import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="section-wrapper" style={{ position: 'relative', width: '100vw', marginLeft: 'calc(50% - 50vw)', paddingBottom: '4rem' }}>
      <div className="section-content container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: 'var(--accent)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
          Meet the Founder
        </h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent)', opacity: 0.25, borderRadius: '2px', margin: '0 auto 2.2rem auto' }} />
        <div className="card about-founder-card animate-on-scroll" style={{ padding: '2.5rem 2rem', background: 'rgba(47,47,47,0.88)', borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', border: '1px solid rgba(212,222,149,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left', position: 'relative', transition: 'box-shadow 0.2s' }}>
          <div className="about-founder-flex" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '2rem', position: 'relative' }}>
            <Image 
              src="/profile_pic.png"
              alt="Zach Redder, Founder of Keystone" 
              width={180} 
              height={180} 
              style={{ borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent)', flexShrink: 0, boxShadow: '0 4px 18px rgba(212,222,149,0.10)' }}
            />
            {/* Vertical accent line for desktop */}
            <div className="about-founder-divider" style={{ display: 'none', width: '2px', background: 'var(--accent)', opacity: 0.18, borderRadius: '1px', alignSelf: 'stretch', margin: '0 2rem' }} />
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <h3 style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Zach Redder</h3>
              <p style={{ color: '#e0e0e0', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                "I built Keystone because I struggled for years to consistently live by my own values. I know what it's like to feel pulled in a hundred directions, to lose sight of what matters, and to want more alignment between who you are and how you show up. My mission is to help you (and myself) close that gap, one action at a time."
              </p>
              <span style={{ color: 'var(--accent)', fontFamily: 'cursive, \"Pacifico\", \"Dancing Script\", sans-serif', fontSize: '1.4rem', opacity: 0.7, marginTop: '0.5rem', marginLeft: '0.1rem', display: 'inline-block' }}>
                Zach
              </span>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 600px) {
              .card {
                padding: 1.5rem 0.7rem !important;
                border-radius: 1rem !important;
              }
              h2 {
                font-size: 2rem !important;
              }
              .section-content {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
            }
            @media (min-width: 700px) {
              .about-founder-card .about-founder-flex {
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
              }
              .about-founder-divider {
                display: block !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
} 