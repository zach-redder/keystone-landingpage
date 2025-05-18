import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function Waitlist() {
  return (
    <section id="waitlist" className="animate-on-scroll" style={{ 
      padding: '140px 0',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'linear-gradient(to bottom, rgba(40, 40, 40, 0.97) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(40, 40, 40, 0.97) 100%)',
      transform: 'translateY(20px)'
    }}>
      {/* Large decorative element spanning full width */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '120%',
        height: '60%',
        background: 'radial-gradient(ellipse at top right, rgba(212, 222, 149, 0.02), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        right: '-10%',
        width: '120%',
        height: '70%',
        background: 'radial-gradient(ellipse at bottom center, rgba(212, 222, 149, 0.03), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            transform: 'translateY(20px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: 'var(--accent)'
            }}>Join the Waitlist</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto'
            }}>
              Be the first to know when Keystone launches and get sneak peaks into the development of Keystone.
            </p>
          </div>
          
          <div className="animate-on-scroll delay-100" style={{ 
            background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.4), rgba(30, 30, 30, 0.4))',
            borderRadius: '24px',
            padding: '48px 40px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(80, 80, 80, 0.2)',
            backdropFilter: 'blur(10px)',
            transform: 'translateY(30px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          }}>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
} 