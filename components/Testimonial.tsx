import React from 'react';

export default function Testimonial() {
  return (
    <section id="testimonial" className="section-wrapper animate-on-scroll">
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
            }}>What People Say</h2>
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '800px'
            }}>
              Hear from people who have transformed their lives with Keystone.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Main testimonial */}
            <div className="animate-on-scroll delay-100" style={{ 
              background: 'linear-gradient(145deg, rgba(55, 55, 55, 0.4), rgba(30, 30, 30, 0.5))',
              borderRadius: '28px',
              padding: '70px 60px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(90, 90, 90, 0.15)',
              position: 'relative',
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
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.3)';
            }}>
              {/* Large quote mark */}
              <div style={{ 
                position: 'absolute', 
                top: '30px', 
                left: '40px', 
                fontSize: '140px', 
                opacity: '0.08', 
                color: 'var(--accent)',
                fontFamily: 'serif',
                lineHeight: 0.8
              }}>&quot;</div>
              
              {/* Small decorative accent in corner */}
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(212, 222, 149, 0.1) 0%, rgba(212, 222, 149, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              {/* Quote text */}
              <blockquote style={{ 
                fontSize: '2rem',
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: '#f3f3f3',
                position: 'relative',
                zIndex: 1,
                marginBottom: '3rem',
                fontWeight: 300
              }}>
                &quot;Keystone is the missing link between who I am and who I want to be. The daily reminders and AI feedback keep me on track like nothing else I&apos;ve tried.&quot;
              </blockquote>
              
              {/* Author info with improved layout */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div className="float" style={{ 
                  width: '72px', 
                  height: '72px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.2), rgba(212, 222, 149, 0.1))',
                  border: '2px solid rgba(212, 222, 149, 0.2)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  <span style={{ opacity: 0.7 }}>🧘‍♂️</span>
                </div>
                <div>
                  <div style={{ 
                    fontWeight: 600, 
                    fontSize: '1.25rem', 
                    color: 'white',
                    marginBottom: '0.25rem'
                  }}>Sarah Johnson</div>
                  <div style={{ 
                    color: 'rgba(212, 222, 149, 0.8)', 
                    fontSize: '1rem'
                  }}>Identity Coach | Early Beta User</div>
                </div>
              </div>
            </div>
            
            {/* Additional testimonials in grid */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {/* Testimonial 2 */}
              <div className="animate-on-scroll delay-200" style={{ 
                background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.4))',
                borderRadius: '20px',
                padding: '35px 30px',
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(80, 80, 80, 0.15)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: 'translateY(30px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 15px 30px -10px rgba(0, 0, 0, 0.2)';
              }}>
                <div style={{ 
                  fontSize: '1.5rem', 
                  opacity: '0.15', 
                  color: 'var(--accent)',
                  fontFamily: 'serif',
                  position: 'absolute',
                  top: '20px',
                  left: '20px'
                }}>&quot;</div>
                
                <blockquote style={{ 
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: '#e5e5e5',
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  flex: 1
                }}>
                  &quot;Keystone helped me identify patterns in my behavior that were misaligned with my core values. Game changer!&quot;
                </blockquote>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="float" style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.1), rgba(212, 222, 149, 0.05))'
                  }}></div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem' }}>Michael P.</div>
                    <div style={{ color: '#a0a0a0', fontSize: '0.8rem' }}>Entrepreneur</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="animate-on-scroll delay-300" style={{ 
                background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.3), rgba(30, 30, 30, 0.4))',
                borderRadius: '20px',
                padding: '35px 30px',
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(80, 80, 80, 0.15)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: 'translateY(30px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 15px 30px -10px rgba(0, 0, 0, 0.2)';
              }}>
                <div style={{ 
                  fontSize: '1.5rem', 
                  opacity: '0.15', 
                  color: 'var(--accent)',
                  fontFamily: 'serif',
                  position: 'absolute',
                  top: '20px',
                  left: '20px'
                }}>&quot;</div>
                
                <blockquote style={{ 
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: '#e5e5e5',
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  flex: 1
                }}>
                  &quot;The daily reminders from Keystone keep me anchored to my values even on the most hectic days.&quot;
                </blockquote>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="float" style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(145deg, rgba(212, 222, 149, 0.1), rgba(212, 222, 149, 0.05))'
                  }}></div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem' }}>Alex T.</div>
                    <div style={{ color: '#a0a0a0', fontSize: '0.8rem' }}>Teacher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-400" style={{ 
            textAlign: 'center', 
            marginTop: '6rem',
            transform: 'translateY(20px)'
          }}>
            <a href="#waitlist" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2rem',
              backgroundColor: 'rgba(50, 50, 50, 0.6)',
              color: 'var(--accent)',
              fontWeight: 'bold',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(212, 222, 149, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.7)';
              e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.6)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              Experience it yourself
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 