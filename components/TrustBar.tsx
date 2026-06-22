const features = [
  { icon: '☀️', title: 'UPF 50+ Protection', sub: 'Blocks 98% of UV rays' },
  { icon: '💧', title: 'NakedSkin™ Fabric', sub: 'Lightweight, moisture-wicking' },
  { icon: '↔️', title: '4-Way Stretch', sub: 'Full range of motion' },
  { icon: '📦', title: 'Free Shipping $75+', sub: 'Fast delivery nationwide' },
]

export default function TrustBar() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
        {features.map(f => (
          <div key={f.title}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, letterSpacing: '0.02em', color: '#111', marginBottom: 4 }}>{f.title}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', letterSpacing: '0.04em' }}>{f.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
