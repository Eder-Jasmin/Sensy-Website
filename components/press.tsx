export function Press() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          Trusted by leading medical institutions
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {["Mayo Clinic", "Johns Hopkins", "Cleveland Clinic", "Mass General", "Stanford Medicine"].map(
            (name) => (
              <div key={name} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#666' }}>
                {name}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
  
  