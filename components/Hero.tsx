import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ 
      padding: '4rem 0 6rem',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Large decorative element spanning full width */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '-10%',
        width: '120%',
        height: '70%',
        background: 'radial-gradient(ellipse at top right, rgba(212, 222, 149, 0.04), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        height: '100%',
        marginTop: '-5vh'
      }}>
        <div className="hero-container" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto'
        }}>
          {/* Left side - Text and CTA */}
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '600px', 
            gap: '2rem',
            order: 1
          }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1.1 }}>
              Become the <span style={{ color: 'var(--accent)' }}>Main Character</span>
            </h1>
            <p className="hero-description" style={{ fontSize: '1.25rem', color: '#e0e0e0', maxWidth: '450px', lineHeight: 1.6 }}>
              Start living with a purpose. You're not stuck, you're just not aligned with your values.
            </p>
            <div className="hero-cta">
              <a href="#waitlist" className="btn btn-primary" style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'inline-block'
              }}>Join the waitlist</a>
            </div>
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="hero-phone" style={{ 
            order: 2,
            marginTop: '2rem'
          }}>
            <div className="hero-phone-container float" style={{ 
              position: 'relative',
              animation: 'subtle-float 12s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              transition: 'transform 0.3s ease'
            }}>
              {/* Animated background glow */}
              <div className="hero-phone-glow" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '420px',
                height: '820px',
                borderRadius: '48px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.22) 0%, rgba(212, 222, 149, 0.10) 60%, transparent 100%)',
                filter: 'blur(32px)',
                zIndex: 1,
                pointerEvents: 'none',
                animation: 'gentle-glow 4.5s ease-in-out infinite',
              }} />
              <Image
                src="/mockup.png"
                alt="Keystone App Mockup"
                width={350}
                height={700}
                style={{
                  width: 'clamp(120px, 25vw, 300px)',
                  height: 'auto',
                  borderRadius: '40px',
                  position: 'relative',
                  zIndex: 2,
                  background: 'transparent',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-float {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-4px);
          }
          50% {
            transform: translateY(-8px);
          }
          75% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes gentle-glow {
          0%, 100% {
            opacity: 0.22;
            filter: blur(32px);
          }
          50% {
            opacity: 0.36;
            filter: blur(40px);
          }
        }

        .hero-phone-container:hover {
          transform: scale(1.03) !important;
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .hero-phone {
            margin-top: 3.5rem !important;
          }
          .hero-phone-glow {
            width: 270px !important;
            height: 520px !important;
            border-radius: 32px !important;
          }
        }
      `}</style>
    </section>
  );
} 