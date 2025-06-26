import React from 'react';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, period, description, features, isPopular }) => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`} style={{
      position: 'relative',
      padding: isPopular ? 'clamp(2.5rem, 5.5vw, 3rem)' : 'clamp(2rem, 5vw, 2.5rem)',
      background: 'rgba(47,47,47,0.88)',
      borderRadius: 'clamp(1.5rem, 4vw, 2rem)',
      boxShadow: isPopular 
        ? '0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.15), 0 0 0 2px rgba(212, 222, 149, 0.2), 0 0 40px rgba(212, 222, 149, 0.1)'
        : '0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.08)',
      border: isPopular 
        ? '1px solid rgba(212,222,149,0.3)'
        : '1px solid rgba(212,222,149,0.12)',
      width: '100%',
      maxWidth: isPopular ? '420px' : '400px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(1.5rem, 4vw, 2rem)',
      transform: isPopular ? 'scale(1.05)' : 'scale(1)',
      zIndex: isPopular ? 2 : 1
    }}>
      {isPopular && (
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '-3.75rem',
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          padding: '0.4rem 3rem',
          width: '13.5rem',
          transform: 'rotate(45deg)',
          fontSize: '0.75rem',
          color: '#1a1a1a',
          fontWeight: '700',
          boxShadow: '0 2px 10px rgba(212, 222, 149, 0.2)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          zIndex: 2,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}>
          Most Popular
        </div>
      )}
      
      <div>
        <h3 style={{
          fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: isPopular ? '#f0f5a8' : '#ffffff'
        }}>{name}</h3>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
          color: '#e0e0e0',
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          opacity: 0.9
        }}>{description}</p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        <span style={{
          fontSize: 'clamp(2.5rem, 6vw, 3rem)',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>{price}</span>
        <span style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: '#e0e0e0',
          opacity: 0.8
        }}>{period}</span>
      </div>

      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 2vw, 1rem)',
        flex: 1
      }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#e0e0e0',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M20 6L9 17L4 12" stroke="#D4DE95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button 
        onClick={scrollToWaitlist}
        style={{
          background: isPopular 
            ? 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)'
            : 'rgba(212, 222, 149, 0.1)',
          color: isPopular ? '#1a1a1a' : '#e0e0e0',
          padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
          borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
          fontWeight: '600',
          border: '1px solid',
          borderColor: isPopular ? 'transparent' : 'rgba(212, 222, 149, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginTop: 'auto'
        }}
        className="pricing-button"
      >
        Get Started
      </button>
    </div>
  );
}

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-wrapper animate-on-scroll" style={{
      padding: 'clamp(4rem, 10vw, 6rem) 0',
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      background: 'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="section-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '0 clamp(1rem, 4vw, 2rem)',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 className="text-center" style={{
          fontSize: 'clamp(2rem, 6vw, 3.75rem)',
          fontWeight: 'bold',
          marginBottom: 'clamp(0.5rem, 2vw, 2rem)',
          background: 'linear-gradient(135deg, var(--accent) 0%, #f0f5a8 50%, var(--accent) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(212, 222, 149, 0.2)',
          lineHeight: '1.2'
        }}>Pricing</h2>

        <p className="text-center" style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: '#e0e0e0',
          maxWidth: '800px',
          marginBottom: 'clamp(2rem, 6vw, 4rem)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          lineHeight: '1.5',
          padding: '0 clamp(1rem, 3vw, 2rem)'
        }}>
          Select the plan that best fits your needs.
        </p>

        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          width: '100%',
          alignItems: 'center',
          justifyItems: 'center',
          padding: '0 clamp(0.5rem, 2vw, 1.5rem)'
        }}>
          <PricingTier
            name="Free"
            price="$0"
            period="forever"
            description="Best for starting out"
            features={[
              "Basic identity storage",
              "Daily reminders",
              "Progress tracking",
              "Action logging & alignment",
              "Keystone member role"
            ]}
          />
          <PricingTier
            name="Monthly Pro"
            price="$10"
            period="/month"
            description="Best for big dreams"
            features={[
              "All Free features",
              "Advanced AI features",
              "Unlimited identity storage",
              "Unlimited alignment",
              "Keystone pro role"
            ]}
            isPopular={true}
          />
          <PricingTier
            name="Yearly Pro"
            price="$60"
            period="/year"
            description="Best for achieving your goals"
            features={[
              "All Pro features",
              "Save 50% annually",
              "1-on-1 calls with the founder",
              "Early access to new features"
            ]}
          />
        </div>
      </div>

      <style jsx>{`
        .pricing-card {
          transform: translateY(0);
        }

        .pricing-card.popular {
          animation: pulse 3s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.15), 0 0 0 2px rgba(212, 222, 149, 0.2), 0 0 40px rgba(212, 222, 149, 0.1);
          }
          50% {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.25), 0 0 0 3px rgba(212, 222, 149, 0.3), 0 0 60px rgba(212, 222, 149, 0.2);
          }
          100% {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 4px 16px rgba(212, 222, 149, 0.15), 0 0 0 2px rgba(212, 222, 149, 0.2), 0 0 40px rgba(212, 222, 149, 0.1);
          }
        }

        .pricing-card:hover {
          transform: translateY(-8px);
        }

        .pricing-card.popular:hover {
          transform: translateY(-8px) scale(1.05);
        }

        .pricing-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 222, 149, 0.2);
          background: linear-gradient(135deg, #e0ea99 0%, #f0f5a8 50%, #e0ea99 100%);
        }

        .pricing-card:not(.popular) .pricing-button:hover {
          background: rgba(212, 222, 149, 0.15);
        }

        .pricing-button:active {
          transform: translateY(1px);
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
            padding: 0 1rem;
          }
          
          .pricing-card.popular {
            transform: scale(1.03);
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-8px) scale(1.03);
          }
        }

        @media (max-width: 768px) {
          .section-content {
            padding: 0;
          }
          
          .pricing-grid {
            gap: 2rem;
            padding: 0 0.5rem;
          }
          
          .pricing-card.popular {
            transform: scale(1.02);
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-8px) scale(1.02);
          }
        }

        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
            gap: 1.5rem;
          }
          
          .pricing-card.popular {
            transform: scale(1);
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-8px) scale(1);
          }
          
          .pricing-card {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing; 