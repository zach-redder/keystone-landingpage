import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="section-wrapper animate-on-scroll" style={{
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
      <div className="section-content text-center" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        height: '100%',
        marginTop: '-5vh',
        padding: '0 1rem'
      }}>
        <h2 className="text-6xl font-bold mb-8" style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(212, 222, 149, 0.2)',
          maxWidth: '800px',
          fontSize: 'clamp(2.5rem, 8vw, 3.75rem)',
          lineHeight: '1.2',
          margin: '0 auto'
        }}>Join the Community</h2>
        
        <div className="card" style={{
          position: 'relative',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
          background: 'rgba(47,47,47,0.88)',
          borderRadius: 'clamp(1.5rem, 4vw, 2rem)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.08)',
          border: '1px solid rgba(212,222,149,0.12)',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}>
          <p className="text-2xl mb-14" style={{
            color: '#e0e0e0',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
            lineHeight: '1.5',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)'
          }}>
            Our Discord community is a vibrant group of individuals striving to achieve their best selves through doubt and the pressure of outside opinions with true self projection.
          </p>
          <a 
            href="https://discord.me/thealignedcore" 
            className="discord-button font-semibold rounded-full" 
            target="_blank"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
              color: '#1a1a1a',
              marginBottom: '2rem',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(212, 222, 149, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 222, 149, 0.3), 0 6px 12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #e0ea99 0%, #f0f5a8 50%, #e0ea99 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 222, 149, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)';
            }}
          >
            Join Discord
          </a>
        </div>
      </div>
      <div className="accent-gradient-top"></div>
      <div className="accent-gradient-bottom"></div>
      <style jsx global>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 222, 149, 0.15);
        }

        .bg-gradient-to-r:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212, 222, 149, 0.4);
        }

        .discord-button {
          transform: translateY(0);
        }

        .discord-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(212, 222, 149, 0.25);
        }

        .discord-button:active {
          transform: translateY(1px);
          box-shadow: 0 8px 15px rgba(212, 222, 149, 0.2);
        }

        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.5s;
          opacity: 0;
        }

        .discord-button:hover .shine {
          opacity: 1;
          animation: shine 1.5s ease-in-out;
        }

        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0.5;
          }
          100% {
            left: 200%;
            opacity: 0;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 768px) {
          .section-wrapper {
            padding: 3rem 0 4rem;
          }
          .section-content {
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .section-wrapper {
            padding: 2rem 0 3rem;
          }
          .section-content {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Community; 