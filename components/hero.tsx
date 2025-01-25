"use client"

import React, { useState, useEffect } from 'react';

// Add this at the top of the file, outside the component
const bounceKeyframes = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
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
  const [bubbles, setBubbles] = useState<string[]>([]);
  const [bubblesShown, setBubblesShown] = useState(false); // Flag to track if bubbles have been shown

  const bubbleWords = ["Innovate", "Engage", "Transform", "Succeed"]; // Words for the bubbles
  const bubblePositions = [
    { right: '20rem', top: '8rem' },   // Position for "Innovate"
    { right: '8rem', top: '10rem' },   // Position for "Engage"
    { right: '-25rem', top: '-8rem' },   // Position for "Transform"
    { right: '-13rem', top: '-12rem' }    // Position for "Succeed"
  ];

  const showBubbles = () => {
    if (!bubblesShown) { // Only show bubbles if they have not been displayed yet
      bubbleWords.forEach((word, index) => {
        setTimeout(() => {
          setBubbles((prev) => [...prev, word]); // Add word to bubbles after a delay
        }, index * 800); // Increase delay to 800ms for a slower appearance
      });
      setBubblesShown(true); // Set the flag to true after showing bubbles
    }
  };

  const hideBubbles = () => {
    if (bubblesShown) { // Only clear bubbles if they are currently shown
      setBubbles([]); // Clear bubbles
      setBubblesShown(false); // Reset the flag
    }
  };

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
          <img src="/Sensy_Bg.png" alt="Sensy" style={{ maxWidth: '300px', height: 'auto', marginTop: '3rem', marginBottom: '2rem' }} />
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
            <button style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgb(94, 145, 59)',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}>Get Started</button>
            <button style={{
              padding: '0.8rem',
              backgroundColor: '#DDDBDB',
              border: '1px solid rgb(94, 145, 59)',
              borderRadius: '4px',
              color: 'rgb(94, 145, 59)',
            }}>Watch Demo</button>
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
           onMouseEnter={showBubbles} 
           onMouseLeave={hideBubbles}>
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
              transition: 'opacity 0.3s ease',
              animation: 'fadeIn 0.5s forwards',
              animationDelay: `${index * 0.5}s`, // Delay for each bubble
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
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '150px',
            width: '300px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: '#B0ACAC',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            padding: '2rem',
            zIndex: 2
          }}>
            <p style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '1.2rem'
            }}>
              We combine haptic and visual feedback with AI based games
            </p>
          </div>
        </div>

        {/* Bottom Hand */}
        <div style={{ position: 'absolute', bottom: '1rem', left: '50rem', cursor: 'pointer' }}>
          <div style={{
            position: 'absolute',
            bottom: '110%',
            right: '200px',
            width: '300px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: '#B0ACAC',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            padding: '2rem',
            zIndex: 2,
            marginBottom: '20px'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.2rem',
              marginBottom: '0.8rem'
            }}>
              Interactive Training
            </h3>
            <p style={{
              color: 'white',
              textAlign: 'center'
            }}>
              Engaging exercises designed to enhance sensory perception
            </p>
          </div>
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
              fontWeight: 'bold',
              position: 'absolute',
              color: '#B0ACAC',
              fontSize: '4rem',
              textAlign: 'center',
              zIndex: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Technology
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
      }}>
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative', // Add this for absolute positioning of overlay
          cursor: 'pointer'     // Add pointer cursor on hover
        }}>
          <div 
            style={{ 
              position: 'relative',
              width: '90%',
              height: 'auto',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/Hand_Front.png"
              alt="Brain and hands illustration"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              padding: '2rem'
            }}>
              <h3 style={{
                color: 'white',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                Innovative Design
              </h3>
              <p style={{
                color: 'white',
                textAlign: 'center'
              }}>
                Our ergonomic design ensures maximum comfort and effectiveness during training sessions.
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <p style={{
            fontSize: '1.5rem', // Adjust font size as needed
            color: 'white', // Change text color to black for contrast
            marginBottom: '1rem', // Space below the first paragraph
          }}>
            Sensy is a training device that integrates multi-sensory stimulation with an interactive AI-powered learning assistant.
          </p>
          <p style={{
            fontSize: '1.2rem', // Adjust font size as needed
            color: '#696969', // Change text color to black for contrast
            marginBottom: '3rem', // Increased space below the last paragraph
          }}>
            Sensy's customizable design adapts to different hand sizes, ensuring comfort and accessibility for every user.
          </p>
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
    </section>
  );
}
