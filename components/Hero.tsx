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
    }}>      {/* Enhanced decorative elements */}
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
      
      {/* Animated grid pattern */}
      <div className="grid-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(212, 222, 149, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212, 222, 149, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'grid-pulse 8s ease-in-out infinite'
      }}></div>
      
      {/* Floating particles */}
      <div className="particle particle-1" style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(212, 222, 149, 0.3)',
        borderRadius: '50%',
        top: '20%',
        left: '15%',
        animation: 'float-particle 15s linear infinite'
      }}></div>
      <div className="particle particle-2" style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: 'rgba(212, 222, 149, 0.2)',
        borderRadius: '50%',
        top: '40%',
        right: '20%',
        animation: 'float-particle 20s linear infinite reverse'
      }}></div>
      <div className="particle particle-3" style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        background: 'rgba(212, 222, 149, 0.4)',
        borderRadius: '50%',
        top: '70%',
        left: '10%',
        animation: 'float-particle 18s linear infinite'
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
          }}>            <h1 className="hero-title animate-on-scroll" style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              Become the <span style={{ 
                color: 'var(--accent)',
                background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
              }}>Main Character</span>
            </h1>            <p className="hero-description animate-on-scroll" style={{ 
              fontSize: '1.25rem', 
              color: '#e0e0e0', 
              maxWidth: '450px', 
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
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
            }}>              {/* Enhanced multi-layer glow effect */}
              <div className="hero-phone-glow-outer" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '1000px',
                borderRadius: '60px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.12) 0%, rgba(212, 222, 149, 0.06) 40%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 1,
                pointerEvents: 'none',
                animation: 'outer-glow 6s ease-in-out infinite',
              }} />

              <div className="hero-phone-glow-mid" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '480px',
                height: '880px',
                borderRadius: '48px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.25) 0%, rgba(212, 222, 149, 0.15) 50%, transparent 80%)',
                filter: 'blur(40px)',
                zIndex: 2,
                pointerEvents: 'none',
                animation: 'mid-glow 4.5s ease-in-out infinite',
              }} />
              
              <div className="hero-phone-glow-inner" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '800px',
                borderRadius: '40px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.2) 0%, rgba(212, 222, 149, 0.1) 60%, transparent 90%)',
                filter: 'blur(20px)',
                zIndex: 3,
                pointerEvents: 'none',
                animation: 'inner-glow 3s ease-in-out infinite',
              }} />

              {/* Extra close glow for more intensity */}
              <div className="hero-phone-glow-close" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '360px',
                height: '720px',
                borderRadius: '38px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.15) 0%, rgba(212, 222, 149, 0.08) 70%, transparent 100%)',
                filter: 'blur(8px)',
                zIndex: 4,
                pointerEvents: 'none',
                animation: 'close-glow 2s ease-in-out infinite',
              }} />

              <Image
                src="/mockup.png"
                alt="Keystone App Mockup"
                width={350}
                height={700}                style={{
                  width: 'clamp(140px, 28vw, 320px)',
                  height: 'auto',
                  borderRadius: '40px',
                  position: 'relative',
                  zIndex: 5,
                  background: 'transparent',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 35px rgba(212, 222, 149, 0.1)',
                  filter: 'drop-shadow(0 10px 20px rgba(212, 222, 149, 0.15))'
                }}
              />
            </div>
          </div>
        </div>
      </div>      <style jsx global>{`
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

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes outer-glow {
          0%, 100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes mid-glow {
          0%, 100% {
            opacity: 0.85;
            filter: blur(40px);
          }
          50% {
            opacity: 1;
            filter: blur(50px);
          }
        }

        @keyframes inner-glow {
          0%, 100% {
            opacity: 0.7;
            filter: blur(20px);
          }
          50% {
            opacity: 0.9;
            filter: blur(25px);
          }
        }

        @keyframes close-glow {
          0%, 100% {
            opacity: 0.6;
            filter: blur(8px);
          }
          50% {
            opacity: 0.8;
            filter: blur(12px);
          }
        }

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

        .hero-phone-container:hover {
          transform: scale(1.03) !important;
          animation-play-state: paused;
        }

        .hero-phone-container:hover .hero-phone-glow-outer,
        .hero-phone-container:hover .hero-phone-glow-mid,
        .hero-phone-container:hover .hero-phone-glow-inner,
        .hero-phone-container:hover .hero-phone-glow-close {
          animation-play-state: paused;
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-description {
            font-size: 1.1rem !important;
          }
          
          .hero-phone {
            margin-top: 2.5rem !important;
          }
          
          .hero-phone-glow-outer {
            width: 320px !important;
            height: 600px !important;
            border-radius: 40px !important;
          }
          
          .hero-phone-glow-mid {
            width: 280px !important;
            height: 550px !important;
            border-radius: 36px !important;
          }
          
          .hero-phone-glow-inner {
            width: 250px !important;
            height: 500px !important;
            border-radius: 32px !important;
          }

          .hero-phone-glow-close {
            width: 220px !important;
            height: 460px !important;
            border-radius: 30px !important;
          }

          .grid-overlay {
            background-size: 30px 30px !important;
          }

          .particle {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
            max-width: 350px !important;
          }
          
          .hero-phone-glow-outer {
            width: 280px !important;
            height: 520px !important;
          }
          
          .hero-phone-glow-mid {
            width: 240px !important;
            height: 480px !important;
          }
          
          .hero-phone-glow-inner {
            width: 220px !important;
            height: 440px !important;
          }

          .hero-phone-glow-close {
            width: 200px !important;
            height: 400px !important;
          }
        }

        @media (max-width: 360px) {
          .hero-phone-glow-outer {
            width: 240px !important;
            height: 460px !important;
          }
          
          .hero-phone-glow-mid {
            width: 210px !important;
            height: 420px !important;
          }
          
          .hero-phone-glow-inner {
            width: 190px !important;
            height: 380px !important;
          }

          .hero-phone-glow-close {
            width: 170px !important;
            height: 340px !important;
          }
        }
      `}</style>
    </section>
  );
} 