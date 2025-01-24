"use client"

import React, { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [isBottomHovered, setIsBottomHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <section style={{ background: '#B0ACAC',height:'100%',width: '100%', padding: '0', margin: '0'}}>
      {/* First Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center vertically
        width: '100%',
        justifyContent: 'center',
        height: '100vh',
        padding: '5rem',
        margin: '0 auto',
      }}>
        <div style={{ flex: '1', textAlign: 'left'}}>
        <img src="/Sensy_Bg.png" alt="Sensy" style={{ maxWidth: '300px', height: 'auto', marginTop: '3rem', marginBottom: '2rem'}} />
          <p style={{
            fontSize: '1.5rem', // Adjust font size as needed
            color: 'white', // Change text color to white for contrast
            marginBottom: '2rem', // Space below the first paragraph
          }}>
            Restore finger sensitivity and improve memory through innovative touch therapy.
          </p>
          <p style={{
            fontSize: '1.2rem', // Adjust font size as needed
            color: '#696969', // Change text color to white for contrast
            marginBottom: '3.5rem', // Increased space below the last paragraph
          }}>
           By combining intelligent techniques with engaging and interactive games, Sensy turns rehabilitation into an enjoyable experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgb(94, 145, 59)', // Green color for "Get Started"
              color: 'white',
              border: 'none',
              borderRadius: '4px' // Rounded corners
            }}>Get Started</button>
            <button style={{ 
              padding: '0.8rem',
              backgroundColor: '#DDDBDB',
              border: '1px solid rgb(94, 145, 59)', // Green border
              borderRadius: '4px', // Rounded corners
              color: 'rgb(94, 145, 59)', // Text color can also be green
            }}>Watch Demo</button>
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'right' }}>
          <img 
            src="/PC_Hand.png" // Your brain and hands image
            alt="Brain and hands illustration"
            style={{
              maxWidth: '85%', // Ensure it fits within the container
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

     {/* Second Section */}
     <div id="technology-section" style={{ backgroundColor:'white', position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Top Hand */}
      <div 
        style={{ 
          position: 'absolute',
          top: '3.5rem',
          left: '3rem',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsTopHovered(true)}
        onMouseLeave={() => setIsTopHovered(false)}
      >
        <img 
          src="/Hand_Top.png" 
          alt="Top Hand" 
          style={{ 
            maxWidth: '36%', 
            height: 'auto',
            transform: isTopHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            animation: isTopHovered ? 'none' : 'pulsate 2s ease-in-out infinite'
          }} 
        />
        <div style={{
          position: 'absolute',
          top: '100%',  // Position below the image
          left: '150px',    // Changed from '50px' to '150px' to move further right
          width: '300px',    // Increased width
          height: '150px',   // Decreased height
          borderRadius: '50%',
          backgroundColor: '#B0ACAC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isTopHovered ? 1 : 0,
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
      <div 
        style={{ 
          position: 'absolute',
          bottom: '1rem',
          left: '50rem',  // Changed from 40rem to 30rem to move further left
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsBottomHovered(true)}
        onMouseLeave={() => setIsBottomHovered(false)}
      >
        <div style={{
          position: 'absolute',
          bottom: '110%',  // Position above the image
          right: '200px',    // Changed from '50px' to '150px' to move further right
          width: '300px',    // Increased width
          height: '150px',   // Decreased height
          borderRadius: '50%',
          backgroundColor: '#B0ACAC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isBottomHovered ? 1 : 0,
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
            transform: isBottomHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            animation: isBottomHovered ? 'none' : 'pulsate 2s ease-in-out infinite'
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
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
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
            <path d="M7 13l5 5 5-5"/>
            <path d="M7 6l5 5 5-5"/>
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src="/Hand_Front.png"
              alt="Brain and hands illustration"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
              opacity: isHovered ? 1 : 0,
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

      <style jsx>{bounceKeyframes}</style>
    </section>
  );
}
