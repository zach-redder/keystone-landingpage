'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSound } from '../hooks/useSound';

const navLinkStyle: React.CSSProperties = {
  color: 'white',
  transition: 'color 0.2s',
  position: 'relative',
  padding: '0.5rem 0'
};

const navLinkUnderline = `
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
`;

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const playClick = useSound('/audio/click.mp3', 0.5);
  const pathname = usePathname();
  const onHome = pathname === '/';

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

  // On the homepage these scroll to a section; anywhere else (e.g. /blog) they
  // navigate home and let the browser land on the matching anchor.
  const AnchorNavLink = ({ id, children }: { id: string; children: React.ReactNode }) => {
    if (onHome) {
      return (
        <a
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          style={navLinkStyle}
          className="nav-link"
        >
          {children}
          <style jsx>{navLinkUnderline}</style>
        </a>
      );
    }
    return (
      <Link href={`/#${id}`} style={navLinkStyle} className="nav-link">
        {children}
        <style jsx>{navLinkUnderline}</style>
      </Link>
    );
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
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }}>        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.5rem, 1vw, 0.75rem)',
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
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
        }}>          <div style={{
            position: 'relative',
            width: 'clamp(36px, 6vw, 48px)',
            height: 'clamp(36px, 6vw, 48px)',
            transition: 'all 0.3s ease'
          }}>
            <Image
              src="/logo-transparent.png"
              alt="Keystone Logo"
              width={48}
              height={48}
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(212, 222, 149, 0.2))',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          <span>Keystone</span>
        </Link>
          <nav style={{
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)'
        }}>
          <AnchorNavLink id="how-it-works">How It Works</AnchorNavLink>
          <AnchorNavLink id="community">Community</AnchorNavLink>
          <AnchorNavLink id="pricing">Pricing</AnchorNavLink>
          <Link href="/blog" style={navLinkStyle} className="nav-link">
            Blog
            <style jsx>{navLinkUnderline}</style>
          </Link>
          <AnchorNavLink id="faq">FAQ</AnchorNavLink>
        </nav>
        <a
          href={onHome ? '#download' : '/#download'}
          onClick={(e) => {
            if (onHome) scrollToSection(e, 'download');
            playClick();
          }}
          className="btn btn-primary"
          style={{
            padding: scrolled
              ? 'clamp(0.5rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.5rem)'
              : 'clamp(0.6rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(212, 222, 149, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            fontWeight: '600',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
          Download Now
        </a>
      </div>
    </header>
  );
}
