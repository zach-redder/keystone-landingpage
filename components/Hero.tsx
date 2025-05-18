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
              Align your <span style={{ color: 'var(--accent)' }}>actions</span> with your <span style={{ color: 'var(--accent)' }}>values</span>
            </h1>
            <p className="hero-description" style={{ fontSize: '1.25rem', color: '#e0e0e0', maxWidth: '500px', lineHeight: 1.6 }}>
              Keystone helps you define your core identity, track your progress, and get AI-powered feedback on your journey.
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
              animation: 'float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              transform: 'perspective(1000px) rotateY(-5deg)',
              transition: 'transform 0.3s ease'
            }}>
              {/* Primary glow */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
                borderRadius: '60px',
                background: 'radial-gradient(circle at center, rgba(212, 222, 149, 0.3), transparent 70%)',
                filter: 'blur(20px)',
                zIndex: -1,
                animation: 'glow 4s ease-in-out infinite'
              }} />
              
              {/* Secondary glow */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                right: '-30px',
                bottom: '-30px',
                borderRadius: '70px',
                background: 'radial-gradient(circle at center, rgba(212, 222, 149, 0.2), transparent 80%)',
                filter: 'blur(30px)',
                zIndex: -2,
                animation: 'glow 4s ease-in-out infinite 1s'
              }} />
              
              {/* Border container */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '-8px',
                right: '-8px',
                bottom: '-8px',
                borderRadius: '48px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(200, 200, 200, 0.1))',
                padding: '1px',
                zIndex: 0
              }}>
                {/* Inner border */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  borderRadius: '48px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(180, 180, 180, 0.2))',
                  opacity: 0.7,
                  zIndex: 1
                }} />
              </div>

              <Image
                src="/mockup.png"
                alt="Keystone App Mockup"
                width={320}
                height={640}
                style={{
                  borderRadius: '40px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: perspective(1000px) rotateY(-5deg) translateY(0);
          }
          25% {
            transform: perspective(1000px) rotateY(-4deg) translateY(-10px);
          }
          50% {
            transform: perspective(1000px) rotateY(-5deg) translateY(-15px);
          }
          75% {
            transform: perspective(1000px) rotateY(-6deg) translateY(-10px);
          }
          100% {
            transform: perspective(1000px) rotateY(-5deg) translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.08);
          }
        }

        .hero-phone-container:hover {
          transform: perspective(1000px) rotateY(0deg) !important;
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 