import React from 'react';

export default function Hero() {
  return (
    <section style={{ 
      padding: '6rem 0 8rem',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)'
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
      
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        <div className="hero-container" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Left side - Text and CTA */}
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '600px', 
            gap: '2rem',
            order: 2
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
            order: 1
          }}>
            <div className="hero-phone-container float" style={{ position: 'relative' }}>
              <div style={{ 
                width: '280px', 
                height: '560px', 
                backgroundColor: '#333', 
                borderRadius: '40px', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)', 
                border: '1px solid #444',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#222' }}>
                  <div style={{ width: '128px', height: '20px', borderRadius: '999px', backgroundColor: 'rgba(212, 222, 149, 0.2)' }}></div>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ width: '100%', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(212, 222, 149, 0.2)' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ width: '100%', height: '64px', borderRadius: '8px', backgroundColor: 'rgba(150, 150, 150, 0.2)' }}></div>
                    <div style={{ width: '100%', height: '64px', borderRadius: '8px', backgroundColor: 'rgba(150, 150, 150, 0.2)' }}></div>
                    <div style={{ width: '100%', height: '64px', borderRadius: '8px', backgroundColor: 'rgba(150, 150, 150, 0.2)' }}></div>
                  </div>
                  <div style={{ paddingTop: '16px' }}>
                    <div style={{ width: '100%', height: '96px', borderRadius: '8px', backgroundColor: 'rgba(212, 222, 149, 0.1)' }}></div>
                  </div>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-40px', 
                right: '-40px', 
                width: '128px', 
                height: '128px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(212, 222, 149, 0.1)',
                filter: 'blur(32px)'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                top: '-40px', 
                left: '-40px', 
                width: '160px', 
                height: '160px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(212, 222, 149, 0.05)',
                filter: 'blur(48px)'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 