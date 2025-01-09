export function OrderCta() {
  return (
    <section style={{ position: 'relative', height: '100vh', color: 'white' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'black' }}>
        {/* Background image would go here */}
      </div>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '0 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 'bold' }}>SENSY</h2>
        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white', color: 'black' }}>
          ORDER NOW
        </button>
        <p style={{ fontSize: '1.125rem', fontWeight: '500' }}>NO QUESTIONS ASKED REFUND</p>
      </div>
    </section>
  )
}

