export default function MarqueeBar() {
  const items = ['Free Shipping $65+', 'NakedSkin™ Technology', 'UPF 50+ Protection', 'Built For The Salt', '14-Day Returns', 'Coastal-Made Quality']

  return (
    <div style={{ background: '#c8a96e', overflow: 'hidden', padding: '12px 0' }}>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, letterSpacing: '0.2em', color: '#fff', padding: '0 32px' }}>
            {item} <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}
