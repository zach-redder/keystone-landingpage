'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DownloadButtons from './DownloadButtons';
import { APP_DEFINITION } from '../lib/seo';

// Code-split so the Spline runtime never lands in the initial bundle, which
// would delay hydration (and the reveal of the H1) on every viewport.
const SplineScene = dynamic(() => import('./SplineScene'), { ssr: false });

// Spline is a heavy external WebGL script with real load-time cost, and the
// orb doesn't look good on mobile where it's squeezed under two large text
// blocks in a single stacked column -- skip mounting it below the site's
// mobile breakpoint rather than just hiding it with CSS.
const SPLINE_MIN_VIEWPORT_WIDTH = 768;

export default function Hero() {
  // Starts false so the Spline chunk is only requested after we've confirmed a desktop viewport.
  const [showSplineScene, setShowSplineScene] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${SPLINE_MIN_VIEWPORT_WIDTH}px)`);
    const update = () => setShowSplineScene(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <section className="hero-section" style={{
      padding: '4rem 0 6rem',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
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
        zIndex: 2,
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
        zIndex: 2,
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
        zIndex: 2,
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
        zIndex: 2,
        animation: 'float-particle 18s linear infinite'
      }}></div>
      
      <div className="hero-inner" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        height: '100%',
      }}>
      <div className="hero-container" style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          gap: '1.5rem',
        }}>          {/* Left side - Text and CTA */}
          <div className="hero-content" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '550px', 
            gap: '2rem',
            order: 1,
            padding: '0 2rem'
          }}>
            <h1 className="hero-title animate-on-scroll" style={{ 
              fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              lineHeight: 1.2,
              marginBottom: '0rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              WHO ARE
               <span style={{ 
                color: 'var(--accent)',
                background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(212, 222, 149, 0.3)'
              }}> YOU</span>?
            </h1>
            {/* Plain-language definition for search engines and AI assistants; the visible headline stays as designed. */}
            <p className="sr-only">{APP_DEFINITION}</p>
            <p className="hero-description animate-on-scroll" style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
              color: '#e0e0e0',
              maxWidth: '450px',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
             Or who have you settled for?
            </p>
            <p className="hero-description animate-on-scroll" style={{
              fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
              color: '#e0e0e0',
              maxWidth: '450px',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
             Affirm who you are. Question who you're becoming. Find the mean between certainty and doubt.
            </p>
            <div className="hero-cta" style={{ width: '100%', maxWidth: '450px' }}>
              <div className="hero-cta-row-wrap">
                <DownloadButtons size="hero" />
                <p className="hero-cta-caption">
                  Available now on iOS. Android coming soon.
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Spline scene (skipped entirely below SPLINE_MIN_VIEWPORT_WIDTH -- see effect above) */}
          {/* Wrapper always renders (reserves space, no layout shift); CSS hides it below the breakpoint. */}
          {(
            <div className="hero-phone" style={{
              order: 2,
            }}>
              {/* Fixed-size scene, scaled down visually per viewport so the camera framing never re-crops */}
              <div
                className="spline-wrapper"
                role="img"
                aria-label="Animated 3D orb representing the Keystone app"
                onWheelCapture={(e) => e.stopPropagation()}
                onPointerDownCapture={(e) => e.stopPropagation()}
                onMouseDownCapture={(e) => e.stopPropagation()}
                style={{
                width: 'clamp(200px, 50vw, 800px)',
                aspectRatio: '1 / 1',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '40px',
                background: 'transparent'
              }}>
                {/* Scaled inner stage - the Spline canvas and the badge-cover patch move together */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '800px',
                  height: '800px',
                  transformOrigin: 'center center',
                  transform: 'translate(-50%, calc(-50% - 132px)) scale(calc(clamp(200px, 50vw, 800px) / 800px))'
                }}>
                  {showSplineScene && <SplineScene />}
                  {/* Covers the Spline free-tier "Built with Spline" badge, which is baked into the canvas render itself */}
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '300px',
                    height: '130px',
                    background: 'radial-gradient(ellipse 260px 100px at 100% 100%, #2a2a2a 0%, #2a2a2a 75%, rgba(42,42,42,0) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>      <style jsx global>{`
        .hero-section {
          min-height: 100vh;
          min-height: 100dvh;
        }

        @media (max-width: ${SPLINE_MIN_VIEWPORT_WIDTH - 1}px) {
          .hero-phone {
            display: none !important;
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

        .hero-cta-row-wrap {
          display: flex;
          flex-direction: column;
          width: fit-content;
          margin: 0 auto;
        }

        .hero-cta-caption {
          margin-top: 0.75rem;
          font-size: 0.875rem;
          color: rgba(224, 224, 224, 0.7);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        @media (min-width: 768px) {
          .hero-cta-row-wrap {
            margin: 0;
          }

          .hero-cta-caption {
            text-align: right;
          }
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

          .hero-phone {
            margin-top: 3rem !important;
          }          .hero-container {
            gap: 3rem !important;
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

          .hero-phone {
            margin-top: 2.5rem !important;
          }
            section {
            padding: 4rem 0 4rem !important;
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
        }
      `}</style>
    </section>
  );
} 
