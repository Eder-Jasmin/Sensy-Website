"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link"

export const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleTextClick = (index: number) => {
    setClickedIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextColor = (index: number) => {
    return clickedIndex === index ? 'rgb(255, 165, 0)' : 'rgb(94, 145, 59)';
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      background: isScrolled 
        ? 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 10%, rgba(211, 211, 211,0.6) 30%, rgba(169, 169, 169,0.6) 50%, rgba(211, 211, 211,0.6) 70%, rgba(255,255,255,0.6) 90%, rgba(255,255,255,0.6) 100%)'  // 60% transparent when scrolled
        : 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 10%, rgba(211, 211, 211,0.9) 30%, rgba(169, 169, 169,0.9) 50%, rgba(211, 211, 211,0.9) 70%, rgba(255,255,255,0.9) 90%, rgba(255,255,255,0.9) 100%)',
      transition: 'background 0.3s ease',  // Smooth transition
      padding: '1.4rem', 
      zIndex: 1000 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative',
      }}>
        <a href="/" style={{ 
          display: 'flex', 
          alignItems: 'center',
          position: 'absolute',
          left: '1.5rem',
        }}>
          <img 
            src="/LOGO_mouse.png" 
            alt="Sensy Logo" 
            style={{ height: '62px', width: 'auto' }}
          />
        </a>
        <nav style={{ 
          display: 'flex', 
          gap: '3rem',
          margin: 'auto',
        }}>
          <span onClick={() => handleTextClick(0)} style={{ cursor: 'pointer', color: getTextColor(0) }}>TECHNOLOGY</span>
          <span onClick={() => handleTextClick(1)} style={{ cursor: 'pointer', color: getTextColor(1) }}>ABOUT US</span>
          <span onClick={() => handleTextClick(2)} style={{ cursor: 'pointer', color: getTextColor(2) }}>RESEARCH</span>
        </nav>
        <div style={{ display: 'flex', gap: '1rem'}}>
          <button style={{ 
            padding: '0.8rem 1.5rem', 
            borderRadius: '4px',
            color: 'white', 
            background: 'rgb(94, 145, 59)', 
            position: 'absolute',  
            fontSize: '1rem',
            marginRight: '1cm',
            top: '50%', 
            transform: 'translateY(-50%)',
            right: 0  }}>Join Waitlist</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;

