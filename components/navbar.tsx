"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
        ? 'rgba(255,255,255,0.5)'  
        : 'rgba(255,255,255)',
      transition: 'background 0.3s ease',  
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
          left: '3rem',
        }}>
          <img 
            src="/Fingerprint_S.png" 
            alt="Sensy Logo" 
            style={{ height: '48px', width: 'auto' }}
          />
        </a>
        <nav style={{ 
          display: 'flex', 
          gap: '3rem',
          margin: 'auto',
        }}>
          <ScrollLink 
            to="technology-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => handleTextClick(0)}
            style={{ cursor: 'pointer', color: getTextColor(0), fontWeight: 'bold'}}
          >
            TECHNOLOGY
          </ScrollLink>
          <ScrollLink 
            to="research-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => handleTextClick(1)}
            style={{ cursor: 'pointer', color: getTextColor(1), fontWeight: 'bold' }}
          >
            RESEARCH
          </ScrollLink>
          <ScrollLink 
            to="about-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => handleTextClick(2)}
            style={{ cursor: 'pointer', color: getTextColor(2), fontWeight: 'bold' }}
          >
            ABOUT US
          </ScrollLink>
        </nav>
      </div>
    </header>
  )
}
export default Navbar;

