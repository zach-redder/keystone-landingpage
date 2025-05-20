'use client';
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
//import Testimonial from '../components/Testimonial';
import Waitlist from '../components/Waitlist';
import FAQ from '../components/FAQ';

export default function HomePage() {
  // Add an intersection observer to detect when elements are in view
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      <Hero />
      <Features />
      <HowItWorks />
      {/*<Testimonial />*/}
      <Waitlist />
      <FAQ />
    </div>
  );
} 