'use client';
import Link from 'next/link';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 100, 
      backdropFilter: 'blur(12px)', 
      backgroundColor: scrolled ? 'rgba(35, 35, 35, 0.85)' : 'rgba(43, 43, 43, 0.75)',
      padding: scrolled ? '0.75rem 0' : '1rem 0',
      borderBottom: scrolled ? '1px solid rgba(212, 222, 149, 0.1)' : '1px solid rgba(47, 47, 47, 0.3)',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>        <Link href="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          fontSize: '1.5rem', 
          fontWeight: 800, 
          color: 'var(--accent)', 
          letterSpacing: '-0.025em',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.textShadow = '0 0 15px rgba(212, 222, 149, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.textShadow = '';
        }}>
          <div style={{ position: 'relative', width: '48px', height: '48px', transition: 'all 0.3s ease' }}>
            <Image 
              src="/logo-transparent.png" 
              alt="Keystone Logo" 
              width={48} 
              height={48}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(212, 222, 149, 0.2))' }}
            />
          </div>
          <span>Keystone</span>
        </Link>
        
        <nav style={{ 
          display: isMobile ? 'none' : 'flex', 
          alignItems: 'center', 
          gap: '2.5rem' 
        }}>
          <a 
            href="#how-it-works" 
            onClick={(e) => scrollToSection(e, 'how-it-works')}
            style={{ 
              color: 'white', 
              transition: 'color 0.2s',
              position: 'relative',
              padding: '0.5rem 0'
            }} 
            className="nav-link"
          >
            How It Works
            <style jsx>{`
              .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: var(--accent);
                transition: width 0.3s ease;
              }
              .nav-link:hover::after {
                width: 100%;
              }
            `}</style>
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            style={{ 
              color: 'white', 
              transition: 'color 0.2s',
              position: 'relative',
              padding: '0.5rem 0'
            }} 
            className="nav-link"
          >
            Features
            <style jsx>{`
              .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: var(--accent);
                transition: width 0.3s ease;
              }
              .nav-link:hover::after {
                width: 100%;
              }
            `}</style>
          </a>
          {/* <a 
            href="#testimonial" 
            onClick={(e) => scrollToSection(e, 'testimonial')}
            style={{ 
              color: 'white', 
              transition: 'color 0.2s',
              position: 'relative',
              padding: '0.5rem 0'
            }} 
            className="nav-link"
          >
            Testimonials
          </a> */}
          <a 
            href="#faq" 
            onClick={(e) => scrollToSection(e, 'faq')}
            style={{ 
              color: 'white', 
              transition: 'color 0.2s',
              position: 'relative',
              padding: '0.5rem 0'
            }} 
            className="nav-link"
          >
            FAQ
            <style jsx>{`
              .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: var(--accent);
                transition: width 0.3s ease;
              }
              .nav-link:hover::after {
                width: 100%;
              }
            `}</style>
          </a>
        </nav>
          <a 
          href="#waitlist" 
          onClick={(e) => scrollToSection(e, 'waitlist')}
          className="btn btn-primary" 
          style={{
            padding: scrolled ? '0.6rem 1.5rem' : '0.75rem 1.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 222, 149, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 222, 149, 0.1)';
          }}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
} 