'use client';
import { Instagram, Mail, ArrowUp, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Custom X icon since Lucide doesn't have an official X (Twitter) icon yet
const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 1200 1227" 
    fill="currentColor"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

// Custom TikTok icon since Lucide doesn't have it
const TikTokIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer style={{ 
      background: 'linear-gradient(to bottom, rgba(35, 35, 35, 0.9), rgba(30, 30, 30, 1), rgba(25, 25, 25, 1))',
      borderTop: '1px solid rgba(212, 222, 149, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '30px',
      paddingBottom: '40px',
      marginTop: '30px'
    }}>
      {/* Back to top button */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '40px'
      }}>
        <button
          onClick={scrollToTop}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            color: 'var(--background)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
            zIndex: 5,
            transition: 'all 0.3s ease'
          }}
          aria-label="Back to top"
          className="back-to-top-main-btn"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
          <style jsx>{`
            .back-to-top-main-btn {
              animation: pulse 2s infinite ease-in-out;
            }
            
            .back-to-top-main-btn:hover {
              animation: none;
              transform: scale(1.1) !important;
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            }
            
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
          `}</style>
        </button>
      </div>
      
      {/* Decorative elements */}
      <div style={{ 
        position: 'absolute',
        top: '-5%',
        left: '0',
        width: '100%',
        height: '400px',
        background: 'radial-gradient(ellipse at top center, rgba(212, 222, 149, 0.03) 0%, rgba(212, 222, 149, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        {/* Main Footer - Horizontal Layout */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5rem', flexWrap: 'wrap', gap: '3rem' }}>
          {/* Brand Column */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '350px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                <Image 
                  src="/logo-transparent.png" 
                  alt="Keystone Logo" 
                  width={48} 
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: 'var(--accent)', 
                letterSpacing: '-0.025em' 
              }}>Keystone</span>
            </Link>
            <p style={{ color: '#a0a0a0', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Bridge the gap between your actions and your values with our AI-powered self-alignment app.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a 
                href="https://www.instagram.com/thekeystoneapp/" 
                target="_blank"
                style={{ 
                  color: '#a0a0a0', 
                  transition: 'all 0.2s',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)'
                }} 
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram size={18} />
                <style jsx>{`
                  .social-icon:hover {
                    background-color: rgba(212, 222, 149, 0.2);
                    color: var(--accent);
                    transform: translateY(-3px);
                  }
                `}</style>
              </a>
              <a 
                href="https://x.com/thekeystoneapp" 
                target="_blank"
                style={{ 
                  color: '#a0a0a0', 
                  transition: 'all 0.2s',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)'
                }} 
                aria-label="X"
                className="social-icon"
              >
                <XIcon />
                <style jsx>{`
                  .social-icon:hover {
                    background-color: rgba(212, 222, 149, 0.2);
                    color: var(--accent);
                    transform: translateY(-3px);
                  }
                `}</style>
              </a>
              <a 
                href="https://www.youtube.com/@thekeystoneapp" 
                target="_blank"
                style={{ 
                  color: '#a0a0a0', 
                  transition: 'all 0.2s',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)'
                }} 
                aria-label="Youtube"
                className="social-icon"
              >
                <Youtube size={18} />
                <style jsx>{`
                  .social-icon:hover {
                    background-color: rgba(212, 222, 149, 0.2);
                    color: var(--accent);
                    transform: translateY(-3px);
                  }
                `}</style>
              </a>
              <a 
                href="https://www.tiktok.com/@keystoneapp" 
                target="_blank"
                style={{ 
                  color: '#a0a0a0', 
                  transition: 'all 0.2s',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)'
                }} 
                aria-label="TikTok"
                className="social-icon"
              >
                <TikTokIcon />
                <style jsx>{`
                  .social-icon:hover {
                    background-color: rgba(212, 222, 149, 0.2);
                    color: var(--accent);
                    transform: translateY(-3px);
                  }
                `}</style>
              </a>
              <a 
                href="mailto:zach@thekeystoneapp.com" 
                style={{ 
                  color: '#a0a0a0', 
                  transition: 'all 0.2s',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)'
                }} 
                aria-label="Email"
                className="social-icon"
              >
                <Mail size={18} />
                <style jsx>{`
                  .social-icon:hover {
                    background-color: rgba(212, 222, 149, 0.2);
                    color: var(--accent);
                    transform: translateY(-3px);
                  }
                `}</style>
              </a>
            </div>
          </div>
          
          {/* Navigation Links - in columns */}
          <div style={{ display: 'flex', flex: '2', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Product Column */}
            <div style={{ minWidth: '160px' }}>
              <h3 style={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: '1.125rem', 
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.75rem'
              }}>
                Product
                <span style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'var(--accent)',
                  opacity: 0.6
                }}></span>
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <a 
                    href="#how-it-works" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    How it Works
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Features
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                {/* <li>
                  <a 
                    href="#testimonials" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Testimonials
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li> */}
                <li>
                  <a 
                    href="#waitlist" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Waitlist
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    FAQ
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Founder Column */}
            <div style={{ minWidth: '160px' }}>
              <h3 style={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: '1.125rem', 
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.75rem'
              }}>
                The Founder
                <span style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'var(--accent)',
                  opacity: 0.6
                }}></span>
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <a 
                    href="https://zachredder.com" 
                    target="_blank"
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Learn More
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://zachredder.com/newsletter" 
                    target="_blank"
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Newsletter
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:zach@zachredder.com" 
                    target="_blank"
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Contact
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div style={{ minWidth: '160px' }}>
              <h3 style={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: '1.125rem', 
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.75rem'
              }}>
                Legal
                <span style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'var(--accent)',
                  opacity: 0.6
                }}></span>
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <a
                    href="/privacy-policy" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Privacy Policy
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                  <a
                    href="/terms" 
                    style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                    className="footer-link"
                  >
                    Terms & Conditions
                    <style jsx>{`
                      .footer-link:hover {
                        color: var(--accent);
                        transform: translateX(5px);
                      }
                    `}</style>
                  </a>
                </li>
                <li>
                    <a 
                      href="mailto:zach@keystone.com" 
                      target="_blank"
                      style={{ color: '#a0a0a0', transition: 'all 0.2s ease', display: 'inline-block' }}
                      className="footer-link"
                    >
                      Support
                      <style jsx>{`
                        .footer-link:hover {
                          color: var(--accent);
                          transform: translateX(5px);
                        }
                      `}</style>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div style={{ 
          borderTop: '1px solid rgba(80, 80, 80, 0.3)', 
          paddingTop: '2rem', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          position: 'relative'
        }}>
          <div style={{ color: '#777777', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Keystone. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link 
              href="/privacy-policy" 
              style={{ color: '#777777', fontSize: '0.875rem', transition: 'color 0.2s' }}
              className="footer-bottom-link"
            >
              Privacy
              <style jsx>{`
                .footer-bottom-link:hover {
                  color: var(--accent);
                }
              `}</style>
            </Link>
            <Link 
              href="/terms" 
              style={{ color: '#777777', fontSize: '0.875rem', transition: 'color 0.2s' }}
              className="footer-bottom-link"
            >
              Terms
              <style jsx>{`
                .footer-bottom-link:hover {
                  color: var(--accent);
                }
              `}</style>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 