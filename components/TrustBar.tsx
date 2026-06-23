const items = [
  { icon: '🚚', title: 'Free Shipping', sub: 'On orders over $75' },
  { icon: '☀️', title: 'UPF 50+', sub: 'Maximum sun protection' },
  { icon: '↩️', title: '14-Day Returns', sub: 'Hassle-free returns' },
  { icon: '🌊', title: 'Built For Salt', sub: 'Coastal performance gear' },
]

export default function TrustBar() {
  return (
    <div style={{ background: '#fff', borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb', padding: '24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
        {items.map(item => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            <div>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 17, letterSpacing: '0.04em', color: '#111', marginBottom: 2 }}>{item.title}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#888', letterSpacing: '0.04em' }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
