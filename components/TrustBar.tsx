const items = [
  { icon: '🚢', title: 'Free Shipping', sub: 'On orders over $75' },
  { icon: '☀️', title: 'UPF 50+ Protection', sub: 'Maximum sun protection' },
  { icon: '🔄', title: '14-Day Returns', sub: 'Hassle-free returns' },
  { icon: '💧', title: 'NakedSkin™', sub: 'Moisture-wicking fabric' },
]

export default function TrustBar() {
  return (
    <div style={{ background: '#f7f5f0', borderBottom: '1px solid #ebebeb', padding: '20px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
        {items.map(item => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, letterSpacing: '0.04em', color: '#111', marginBottom: 1 }}>{item.title}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#888' }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
