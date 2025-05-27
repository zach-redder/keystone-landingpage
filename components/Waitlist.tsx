import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function Waitlist() {
  return (
    <section id="waitlist" className="section-wrapper animate-on-scroll">
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
      <div className="section-content">
        <div className="container">
          <div style={{ 
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
              margin: '0 auto',
              maxWidth: '800px'
            }}>
              Be among the first to experience Keystone and transform your life.
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
      <style jsx>{`
        @media (max-width: 640px) {
          .container { padding-left: 1rem !important; padding-right: 1rem !important; }
          .animate-on-scroll { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
} 