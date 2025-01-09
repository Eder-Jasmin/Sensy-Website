import React from 'react';

export function Hero() {
  return (
    <section style={{  width: '100%', paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: '#f8f9fa', margin: '0' }}>
      {/* First Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center vertically
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        backgroundColor: 'white', // Set background color to black
      }}>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h1 style={{
            fontSize: '4rem', // Increase font size
            fontWeight: 'bold',
            color: 'black', // Green color for "Sensy"
            marginBottom: '2rem', // Space between lines
          }}>
            Sensy
          </h1>
          <p style={{
            fontSize: '1.5rem', // Adjust font size as needed
            color: 'black', // Change text color to white for contrast
            marginBottom: '2rem', // Space below the first paragraph
          }}>
            Restore finger sensitivity and enhance improve memory through innovative touch therapy.
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
              padding: '0.8rem 1.5rem',
              backgroundColor: 'transparent',
              border: '1px solid rgb(94, 145, 59)', // Green border
              borderRadius: '4px', // Rounded corners
              color: 'rgb(94, 145, 59)', // Text color can also be green
            }}>Watch Demo</button>
          </div>
        </div>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/brain-hands2.png" // Your brain and hands image
            alt="Brain and hands illustration"
            style={{
              maxWidth: '120%', // Ensure it fits within the container
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Mirrored Section */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center vertically
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'rgba(211, 211, 211,0.6)', // Set background color to light
      }}>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/COMO.png" // Your brain and hands image
            alt="Brain and hands illustration"
            style={{
              maxWidth: '70%', // Ensure it fits within the container
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h1 style={{
            fontSize: '4rem', // Increase font size
            fontWeight: 'bold',
            color: 'black', // Green color for "Sensy"
            marginBottom: '0.5rem', // Space between lines
          }}>
            Technology
          </h1>
          <p style={{
            fontSize: '1.5rem', // Adjust font size as needed
            color: '#000', // Change text color to black for contrast
            marginBottom: '1rem', // Space below the first paragraph
          }}>
            Sensy is a home training device that combines multiple sensory stimulations like touch, sight, and vibration.
          </p>
          <p style={{
            fontSize: '1.2rem', // Adjust font size as needed
            color: '#000', // Change text color to black for contrast
            marginBottom: '3rem', // Increased space below the last paragraph
          }}>
            Sensy’s customizable design adapts to different finger lengths, ensuring comfort and accessibility for every user.
          </p>
        </div>
      </div>
    </section>
  );
}
