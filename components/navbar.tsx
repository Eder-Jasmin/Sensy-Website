"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link"

export const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const modalRef = useRef<HTMLDivElement | null>(null); // Ref for the modal
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleTextClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleJoinWaitlist = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const formData = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    };

    try {
      const response = await fetch('/api/getWaitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const textResponse = await response.text();
      if (!response.ok) {
        const errorData = JSON.parse(textResponse);
        throw new Error(errorData.message || 'Failed to add to waitlist');
      }

      // Close the popup menu
      setIsPopupVisible(false);

      // Show success message
      setSuccessMessage('You have been successfully added to the waitlist');
      setTimeout(() => {
        setSuccessMessage(''); // Clear the message after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
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

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

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
        <div style={{ display: 'flex', gap: '1rem'}}>
          <button onClick={handleJoinWaitlist} style={{ 
            padding: '0.8rem 1.5rem', 
            borderRadius: '4px',
            color: 'white', 
            background: 'rgb(94, 145, 59)', 
            position: 'absolute',  
            fontSize: '1rem',
            marginRight: '1cm',
            top: '50%', 
            transform: 'translateY(-50%)',
            right: 0  
          }}>Join Waitlist</button>
        </div>
      </div>

      {/* Modal for Join Waitlist */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div ref={modalRef} style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <h2 style={{ 
              marginBottom: '1rem', 
              textAlign: 'center', 
              fontSize: '1.2rem', 
              color: 'rgb(94, 145, 59)'
            }}>Join Waitlist</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  First Name:
                  <div style={{
                    border: '2px solid rgb(94, 145, 59)', // Green outline
                    padding: '0.5rem',
                    borderRadius: '4px',
                    height: '40px', // Set height to match the button
                  }}>
                    <input 
                      type="text" 
                      name="firstName"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: 'none', 
                        height: '100%', 
                        outline: 'none',
                        backgroundColor: 'transparent' // Make background transparent
                      }} 
                    />
                  </div>
                </label>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  Last Name:
                  <div style={{
                    border: '2px solid rgb(94, 145, 59)', // Green outline
                    padding: '0.5rem',
                    borderRadius: '4px',
                    height: '40px', // Set height to match the button
                  }}>
                    <input 
                      type="text" 
                      name="lastName"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: 'none', 
                        height: '100%', 
                        outline: 'none',
                        backgroundColor: 'transparent' // Make background transparent
                      }} 
                    />
                  </div>
                </label>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  Email:
                  <div style={{
                    border: '2px solid rgb(94, 145, 59)', // Green outline
                    padding: '0.5rem',
                    borderRadius: '4px',
                    height: '40px', // Set height to match the button
                  }}>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: 'none', 
                        height: '100%', 
                        outline: 'none',
                        backgroundColor: 'transparent' // Make background transparent
                      }} 
                    />
                  </div>
                </label>
              </div>
              <button type="submit" style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'rgb(94, 145, 59)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                width: '100%',
              }}>Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Success message popup */}
      {successMessage && (
        <div className="success-popup">
          {successMessage}
        </div>
      )}
    </header>
  )
}

export default Navbar;

