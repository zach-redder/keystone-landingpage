import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function Waitlist() {
  return (
    <section id="waitlist" className="section-wrapper animate-on-scroll" style={{ position: 'relative', paddingBottom: '4rem' }}>
      <div className="accent-gradient-top" />
      <div className="accent-gradient-bottom" />
        {/* Floating decorative particles */}
      <div style={{
        position: 'absolute',
        width: 'clamp(80px, 10vw, 120px)',
        height: 'clamp(80px, 10vw, 120px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '15%',
        left: '10%',
        animation: 'slow-drift 16s ease-in-out infinite',
        zIndex: 0,
        display: 'block'
      }}></div>
      <div style={{
        position: 'absolute',
        width: 'clamp(60px, 8vw, 80px)',
        height: 'clamp(60px, 8vw, 80px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '60%',
        right: '8%',
        animation: 'slow-drift 20s ease-in-out infinite reverse',
        zIndex: 0,
        display: 'block'
      }}></div>
      <div style={{
        position: 'absolute',
        width: 'clamp(40px, 6vw, 60px)',
        height: 'clamp(40px, 6vw, 60px)',
        background: 'radial-gradient(circle, rgba(212, 222, 149, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '25%',
        left: '15%',
        animation: 'slow-drift 24s ease-in-out infinite',
        zIndex: 0,
        display: 'block'
      }}></div>

      <div className="section-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            transform: 'translateY(20px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', 
              fontWeight: 'bold', 
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(212, 222, 149, 0.3)',
              lineHeight: '1.2'
            }}>Join the Waitlist</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '900px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              padding: '0 clamp(1rem, 3vw, 0)'
            }}>
              Be among the first to experience Keystone and transform your life.
            </p>
          </div>            <div className="animate-on-scroll delay-100" style={{ 
            background: 'linear-gradient(145deg, rgba(60, 60, 60, 0.4), rgba(30, 30, 30, 0.4))',
            borderRadius: 'clamp(20px, 3vw, 32px)',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem)',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(212, 222, 149, 0.08)',
            border: '1px solid rgba(212, 222, 149, 0.2)',
            backdropFilter: 'blur(15px)',
            transform: 'translateY(30px)',
            transition: 'all 0.4s ease',
            position: 'relative',
            maxWidth: 'clamp(600px, 80vw, 900px)',
            margin: '0 auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0, 0, 0, 0.4), 0 15px 40px rgba(212, 222, 149, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(30px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(212, 222, 149, 0.08)';
          }}>            {/* Enhanced background glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.04) 0%, transparent 70%)',
              borderRadius: 'clamp(20px, 3vw, 32px)',
              zIndex: 0,
              pointerEvents: 'none'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>      <style jsx>{`
        /* Enhanced mobile styles */
        @media (max-width: 768px) {
          .container { 
            padding-left: 1rem !important; 
            padding-right: 1rem !important; 
          }
          .animate-on-scroll { 
            padding: clamp(1.5rem, 3vw, 2rem) !important;
            border-radius: 20px !important;
            transform: translateY(10px) !important;
            margin: 0 1rem !important;
          }
          .section-content {
            padding: 80px 1rem 120px 1rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .container { 
            padding-left: 0.75rem !important; 
            padding-right: 0.75rem !important; 
          }
          .animate-on-scroll { 
            margin: 0 0.75rem !important;
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
          .animate-on-scroll { 
            padding: 1.5rem 1rem !important;
            border-radius: 16px !important;
            margin: 0 0.5rem !important;
            transform: translateY(0) !important;
          }
          .animate-on-scroll:hover {
            transform: translateY(-4px) !important;
          }
          .section-content {
            padding: 60px 0.5rem 80px 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}