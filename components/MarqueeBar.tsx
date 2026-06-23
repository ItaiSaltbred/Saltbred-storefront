export default function MarqueeBar() {
  const items = ['Free Shipping On $75+', 'NakedSkin™ Technology', 'UPF 50+ Protection', 'Built For The Salt', '14-Day Easy Returns', '4-Way Stretch Fabric', 'Quick-Dry Performance']
  const repeated = [...items, ...items]

  return (
    <div style={{ background: '#c8a96e', overflow: 'hidden', padding: '13px 0', userSelect: 'none' }}>
      <div style={{ display: 'flex', animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 15, letterSpacing: '0.22em', color: '#fff', padding: '0 28px', display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            {item}
            <span style={{ opacity: 0.5, fontSize: 8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
