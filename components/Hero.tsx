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
        }}>          {/* Left side - Text and CTA */}
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '500px', 
            gap: '2rem',
            order: 1,
            padding: '0 1rem'
          }}>
            <h1 className="hero-title animate-on-scroll" style={{ 
              fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
               <span style={{ 
                color: 'var(--accent)',
                background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
              }}>True </span>Self Projection.
            </h1>            <p className="hero-description animate-on-scroll" style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
              color: '#e0e0e0', 
              maxWidth: '450px', 
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
             Overcome internalized doubt and judgement by aligning your outward identity with your inner self.
            </p>
            <div className="hero-cta" style={{ width: '100%', maxWidth: '450px' }}>
              <div className="waitlist-form" style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.5rem',
                background: 'rgba(47, 47, 47, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(212, 222, 149, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 222, 149, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Subtle animated border glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(212, 222, 149, 0.1), rgba(212, 222, 149, 0.05), rgba(212, 222, 149, 0.1))',
                  borderRadius: '16px',
                  animation: 'border-glow 3s ease-in-out infinite',
                  zIndex: -1
                }}></div>
                
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="waitlist-email"
                  style={{
                    flex: 1,
                    padding: '1rem 1.25rem',
                    background: 'rgba(35, 35, 35, 0.9)',
                    border: '1px solid rgba(212, 222, 149, 0.15)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                />
                <button 
                  type="submit"
                  className="btn btn-primary waitlist-btn"
                  style={{ 
                    padding: '1rem 1.75rem', 
                    fontSize: '1rem',
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(212, 222, 149, 0.3)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Join Waitlist
                </button>
              </div>
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
              transition: 'transform 0.3s ease',
              width: 'clamp(200px, 40vw, 320px)',
              height: 'auto'
            }}>              {/* Enhanced multi-layer glow effect */}
              <div className="hero-phone-glow-outer" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(300px, 50vw, 600px)',
                height: 'auto',
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
                width: 'clamp(300px, 50vw, 600px)',
                height: 'auto',
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
                width: 'clamp(300px, 50vw, 600px)',
                height: 'auto',
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
                width: 'clamp(300px, 50vw, 600px)',
                height: 'auto',
                borderRadius: '38px',
                background: 'radial-gradient(ellipse at center, rgba(212, 222, 149, 0.15) 0%, rgba(212, 222, 149, 0.08) 70%, transparent 100%)',
                filter: 'blur(8px)',
                zIndex: 4,
                pointerEvents: 'none',
                animation: 'close-glow 2s ease-in-out infinite',
              }} />              <Image
                src="/mockup.png"
                alt="Keystone App Mockup"
                width={350}
                height={700}
                style={{
                  width: 'clamp(200px, 45vw, 320px)',
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
        }        @keyframes close-glow {
          0%, 100% {
            opacity: 0.6;
            filter: blur(8px);
          }
          50% {
            opacity: 0.8;
            filter: blur(12px);
          }
        }

        @keyframes border-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
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
        }        .hero-phone-container:hover .hero-phone-glow-outer,
        .hero-phone-container:hover .hero-phone-glow-mid,
        .hero-phone-container:hover .hero-phone-glow-inner,
        .hero-phone-container:hover .hero-phone-glow-close {
          animation-play-state: paused;
        }

        .waitlist-form:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 222, 149, 0.15);
        }

        .waitlist-email:focus {
          border-color: rgba(212, 222, 149, 0.4) !important;
          box-shadow: 0 0 0 3px rgba(212, 222, 149, 0.1) !important;
        }

        .waitlist-email::placeholder {
          color: rgba(224, 224, 224, 0.5);
        }

        .waitlist-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212, 222, 149, 0.4);
          background: linear-gradient(135deg, #f0f5a8 0%, var(--accent) 100%);
        }

        .waitlist-btn:active {
          transform: translateY(0);
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(2.5rem, 7vw, 3rem) !important;
            line-height: 1.1 !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }
          
          .hero-description {
            font-size: clamp(1.125rem, 4vw, 1.25rem) !important;
            max-width: 100% !important;
            margin-bottom: 2rem !important;
            text-align: center !important;
          }
            .hero-content {
            padding: 0 1.5rem !important;
            gap: 1.5rem !important;
          }

          .waitlist-form {
            flex-direction: column !important;
            gap: 0.75rem !important;
            padding: 1rem !important;
          }

          .waitlist-btn {
            padding: 1rem !important;
            font-size: 1.05rem !important;
          }
          
          .hero-phone {
            margin-top: 3rem !important;
          }
          
          .hero-container {
            gap: 2rem !important;
            padding: 4rem 1rem !important;
          }
            section {
            padding: 5rem 0 5rem !important;
          }
        }        /* Mobile optimizations */
        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(2.25rem, 8vw, 2.75rem) !important;
            margin-bottom: 1.25rem !important;
          }
          
          .hero-description {
            font-size: clamp(1.05rem, 4vw, 1.15rem) !important;
            line-height: 1.5 !important;
            margin-bottom: 2rem !important;
          }
            .hero-content {
            padding: 0 1rem !important;
          }

          .waitlist-form {
            padding: 0.75rem !important;
            border-radius: 14px !important;
          }

          .waitlist-email {
            padding: 0.875rem 1rem !important;
            font-size: 0.95rem !important;
          }

          .waitlist-btn {
            padding: 0.875rem !important;
            font-size: 1rem !important;
          }
          
          .hero-phone {
            margin-top: 2.5rem !important;
          }
            section {
            padding: 4rem 0 4rem !important;
          }
          
          .hero-phone-glow-outer {
            width: 380px !important;
            height: 720px !important;
            border-radius: 40px !important;
          }
          
          .hero-phone-glow-mid {
            width: 340px !important;
            height: 650px !important;
            border-radius: 36px !important;
          }
          
          .hero-phone-glow-inner {
            width: 300px !important;
            height: 580px !important;
            border-radius: 32px !important;
          }

          .hero-phone-glow-close {
            width: 260px !important;
            height: 520px !important;
            border-radius: 30px !important;
          }

          .grid-overlay {
            background-size: 30px 30px !important;
          }

          .particle {
            display: none;
          }
        }        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-description {
            font-size: clamp(1rem, 4vw, 1.1rem) !important;
            max-width: 100% !important;
            margin-bottom: 1.75rem !important;
          }
            .hero-content {
            padding: 0 0.75rem !important;
          }
          
          .waitlist-form {
            padding: 0.5rem !important;
            gap: 0.5rem !important;
          }

          .waitlist-email {
            padding: 0.75rem 0.875rem !important;
            font-size: 0.9rem !important;
          }

          .waitlist-btn {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.95rem !important;
          }

          .btn {
            padding: 0.875rem 1.75rem !important;
            font-size: 1rem !important;
          }
          
          section {
            padding: 2rem 0 3.5rem !important;
          }
          
          .hero-phone {
            margin-top: 2rem !important;
          }
          
          .hero-phone-glow-outer {
            width: 320px !important;
            height: 600px !important;
          }
          
          .hero-phone-glow-mid {
            width: 280px !important;
            height: 550px !important;
          }
          
          .hero-phone-glow-inner {
            width: 250px !important;
            height: 500px !important;
          }

          .hero-phone-glow-close {
            width: 220px !important;
            height: 460px !important;
          }
        }        @media (max-width: 360px) {
          .hero-title {
            font-size: clamp(1.875rem, 8vw, 2.25rem) !important;
          }
          
          .hero-description {
            font-size: clamp(0.95rem, 4vw, 1.05rem) !important;
          }
            .hero-content {
            padding: 0 0.5rem !important;
          }

          .waitlist-btn {
            font-size: 0.9rem !important;
          }
          
          .hero-phone-glow-outer {
            width: 280px !important;
            height: 540px !important;
          }
          
          .hero-phone-glow-mid {
            width: 240px !important;
            height: 480px !important;
          }
          
          .hero-phone-glow-inner {
            width: 210px !important;
            height: 420px !important;
          }

          .hero-phone-glow-close {
            width: 190px !important;
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
} 