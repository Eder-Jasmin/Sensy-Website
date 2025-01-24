import React from 'react';

export function Hero() {
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
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h1 style={{
            fontSize: '4rem', // Increase font size
            fontWeight: 'bold',
            color: 'white', // Green color for "Sensy"
            marginBottom: '2rem', // Space between lines
          }}>
            Sensy
          </h1>
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
              padding: '0.8rem 1.5rem',
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
     <div style={{ backgroundColor:'white', position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/Hand_Top.png" alt="Top Hand" style={{ maxWidth: '38%', height: 'auto', position: 'absolute', top: '0', left: '0' }} />
        <img src="/Hand_Bottom.png" alt="Bottom Hand" style={{ maxWidth: '40%', height: 'auto', position: 'absolute', bottom: '0', right: '0' }} />
        <h2 style={{
          fontWeight: 'bold',
          position: 'absolute',
          color: '#B0ACAC',
          fontSize: '4rem',
          textAlign: 'center',
          zIndex: 1, // Ensure the text is on top of the images
        }}>
          Technology
        </h2>
      </div>

      {/* Third Section */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center vertically
        padding: '5rem',
        margin: '0 auto',
        backgroundColor: '#B0ACAC',//'rgba(211, 211, 211,0.6)', // Set background color to light
        height: '100vh',
      }}>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/Hand_Front.png" // Your brain and hands image
            alt="Brain and hands illustration"
            style={{
              maxWidth: '90%', // Ensure it fits within the container
              height: 'auto',
              objectFit: 'contain'
            }}
          />
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
            Sensy’s customizable design adapts to different hand sizes, ensuring comfort and accessibility for every user.
          </p>
        </div>
      </div>
    </section>
  );
}
