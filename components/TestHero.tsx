import React from 'react';

export function TestHero() {
  return (
    <section style={{ height: '100vh', width: '100%', padding: '0', margin: '0', backgroundColor: '#000000' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#FFFFFF',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Test Sensy</h1>
        <p style={{ fontSize: '1.5rem' }}>This is a test to check centering.</p>
      </div>
    </section>
  );
}
