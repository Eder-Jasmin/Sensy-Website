"use client"

import React, { useState, useEffect } from 'react';

const bounceKeyframes = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes pulsate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export function Hero() {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [bubbles, setBubbles] = useState<string[]>(["Light", "Vibration", "AI", "Games"]); // State for bubbles
  const [showImage, setShowImage] = useState<string | null>(null); // State to manage image visibility
  const [isBouncing, setIsBouncing] = useState(true); // State for bouncing effect
  const [currentBullet, setCurrentBullet] = useState(0); // State for current bullet point

  const bubbleWords = ["Light", "Vibration", "AI", "Games"]; // Words for the bubbles
  const bubblePositions = [
    { right: '20rem', top: '8rem' },   // Position for "Innovate"
    { right: '8rem', top: '10rem' },   // Position for "Engage"
    { right: '-25rem', top: '-8rem' },   // Position for "Transform"
    { right: '-13rem', top: '-12rem' }    // Position for "Succeed"
  ];

  const bulletWords = ["How is the vibration integrated?", "Where does the light come from?", "How are the rings adjustable?"]; // Bullet points

  const handleMouseEnter = () => {
    setIsBouncing(false); // Stop bouncing when hovered
  };

  const handleMouseLeave = () => {
    setIsBouncing(true); // Resume bouncing when mouse leaves
    setShowImage(null); // Hide image when mouse leaves
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBouncing) {
        setCurrentBullet((prev) => (prev + 1) % bulletWords.length); // Loop through bullet points
      }
    }, 1500); // Change bullet every 1.5 seconds for faster bouncing

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isBouncing]);

  return (
    <section style={{ background: '#B0ACAC', height: '100%', width: '100%', padding: '0', margin: '0' }}>
      {/* First Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        height: '100vh',
        padding: '5rem',
        margin: '0 auto',
      }}>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/Sensy_Bg.png" alt="Sensy" style={{ maxWidth: '300px', height: 'auto', marginTop: '3rem', marginBottom: '2rem' }} />
          </a>
          <p style={{
            fontSize: '1.5rem',
            color: 'white',
            marginBottom: '2rem',
          }}>
            Restore finger sensitivity and improve memory through innovative touch therapy.
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: '#696969',
            marginBottom: '3.5rem',
          }}>
            By combining intelligent techniques with engaging and interactive games, Sensy turns rehabilitation into an enjoyable experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://calendly.com/ej3497-mci4me/sensy-info-meeting" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'rgb(94, 145, 59)',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}>Book Info Meeting</button>
            </a>
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'right' }}>
          <img
            src="/PC_Hand.png"
            alt="Brain and hands illustration"
            style={{
              maxWidth: '85%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div id="technology-section" style={{ backgroundColor: 'white', position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
      >
        {/* Bubbles */}
        <div style={{ position: 'absolute', display: 'flex', gap: '1rem' }}>
          {bubbles.map((bubble, index) => (
            <div key={index} style={{
              backgroundColor: '#B0ACAC', // Same color as the first section
              color: 'white',
              padding: '1rem',
              borderRadius: '50%', // Make it circular
              width: index % 2 === 0 ? '90px' : '120px', // Increase size for even and odd
              height: index % 2 === 0 ? '90px' : '120px', // Match width for circular shape
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.9,
              position: 'absolute',
              right: bubblePositions[index].right,
              top: bubblePositions[index].top,
            }}>
              {bubble}
            </div>
          ))}
        </div>

        {/* Top Hand */}
        <div style={{ position: 'absolute', top: '3.5rem', left: '3rem', cursor: 'pointer' }}>
          <img
            src="/Hand_Top.png"
            alt="Top Hand"
            style={{
              maxWidth: '36%',
              height: 'auto',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        {/* Bottom Hand */}
        <div style={{ position: 'absolute', bottom: '1rem', left: '50rem', cursor: 'pointer' }}>
          <img
            src="/Hand_Bottom.png"
            alt="Bottom Hand"
            style={{
              maxWidth: '98%',
              height: 'auto',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2
            style={{

              position: 'absolute',
              color: '#B0ACAC',
              fontSize: '1.5rem',
              textAlign: 'center',
              zIndex: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Sensy integrates multi-sensory stimulation with an interactive AI-powered training assistant.
          </h2>

          <div
            onClick={() => {
              const nextSection = document.getElementById('tech-section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              cursor: 'pointer',
              animation: 'bounce 1.5s infinite',
              zIndex: 1
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B0ACAC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div id="tech-section" style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5rem',
        margin: '0 auto',
        backgroundColor: '#B0ACAC',
        height: '100vh',
        position: 'relative'
      }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'flex-start',
          position: 'relative'
        }}>
          <img 
            src="/Hand_Front.png" 
            alt="Brain and hands illustration" 
            style={{
              maxWidth: '480px',
              height: 'auto',
              objectFit: 'contain',
              position: 'relative',
              top: '40px',
            }} 
          />
          
          {/* Centered Text */}
          <div style={{
            position: 'absolute',
            top: '-5%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            zIndex: 2,
            maxWidth: '1000px',
            width: '100%',
          }}>
            <h2 style={{
              fontSize: '1.8em',
              marginBottom: '1rem',
            }}>
              .... our customizable design ensures comfortable and effective training ....
            </h2>
          </div>

          {/* Bullet Points */}
          <ul style={{
            fontSize: '1.5em',
            listStyleType: 'disc',
            paddingLeft: '50px', 
            color: 'white',
            paddingTop: '4rem',
            lineHeight: '3',
          }}>
            {bulletWords.map((bullet, index) => (
              <li 
                key={index}
                onMouseEnter={() => {
                  setShowImage(index === 0 ? 'vibration' : index === 1 ? 'light' : index === 2 ? 'rings' : null);
                  handleMouseEnter(); // Stop bouncing
                }} 
                onMouseLeave={handleMouseLeave}
                style={{ 
                  cursor: 'pointer', 
                  animation: currentBullet === index && isBouncing ? 'bounce 1s infinite' : 'none', // Apply bounce animation
                  transition: 'all 0.3s ease' // Smooth transition
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>

          {/* Image that appears on hover */}
          {showImage === 'vibration' && (
            <div style={{
              position: 'absolute',
              top: '55%',
              left: '85%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}>
              <img 
                src="/Vibration_Arrow.png"
                alt="Vibration integration"
                style={{
                  maxWidth: '150px',
                  height: 'auto',
                }} 
              />
            </div>
          )}
          {showImage === 'light' && (
            <div style={{
              position: 'absolute',
              top: '55%',
              left: '85%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}>
              <img 
                src="/Light_Arrow.png" // Replace with the appropriate image path
                alt="Light source"
                style={{
                  maxWidth: '170px',
                  height: 'auto',
                }} 
              />
            </div>
          )}
          {showImage === 'rings' && (
            <div style={{
              position: 'absolute',
              top: '60%',
              left: '85%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}>
              <img 
                src="/Spring_Effect.png" // Replace with the appropriate image path for the rings
                alt="Rings adjustable"
                style={{
                  maxWidth: '170px',
                  height: 'auto',
                }} 
              />
            </div>
          )}
        </div>
      </div>

      {/* Fifth Section */}
      <div id="research-section" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        height: '100vh',
        padding: '5rem',
        margin: '0 auto',
        background: 'white'
      }}>
        <div style={{ flex: '1', textAlign: 'left'}}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#B0ACAC',
            marginTop: '3rem',
            marginBottom: '2rem'
          }}>
            Research
          </h2>
          <p style={{
            fontSize: '1.5rem',
            color: 'black',
            marginBottom: '2rem',
          }}>
           User study with 12 participants performing a Sensory Localization Test (SLT) and a Sequence Memory Test (SMT).
          </p>
          <p style={{
            fontSize: '1.2rem', // Adjust font size as needed
            color: '#696969', // Change text color to white for contrast
            marginBottom: '3.5rem', // Increased space below the last paragraph
          }}>
           The results revealed no significant differences between visual, tactile, and combined stimulation, suggesting comparable effects on short-term memory. The sensory localization tests resulted in a longer task completion time for tactile stimuli compared to visual or combined stimuli.

          </p>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'right' }}>
          <img 
            src="/Study_Results.png" // Your brain and hands image
            alt="Study Results illustration"
            style={{
              maxWidth: '60%', // Ensure it fits within the container
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* About Us Section */}
      <div id="about-section" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        padding: '5rem',
        margin: '0 auto',
        backgroundColor: '#B0ACAC'
      }}>
        <div style={{ 
          maxWidth: '1200px',  // Increased from 800px to 1200px
          textAlign: 'center',
          padding: '0 4rem'    // Increased padding from 2rem to 4rem
        }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem'
          }}>
            ABOUT US
          </h2>
          <p style={{
            fontSize: '1.5rem',
            color: 'white',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            At Sensy, we are driven by a single mission: to enhance sensory and cognitive function through cutting-edge technology. Our team of experts has developed a unique training device that empowers individuals to sharpen their sensory awareness and improve memory in an engaging way.
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: '#F5F5F5',
            marginBottom: '2.5rem',
            lineHeight: '1.8'
          }}>
            Backed by research and driven by a passion for helping people unlock their potential, Sensy is more than a tool; it's a step toward a better you.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <style jsx>{bounceKeyframes}</style>
    </section>
  );
}
