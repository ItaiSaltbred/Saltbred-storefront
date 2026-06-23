import Link from 'next/link'

export default function BrandStory() {
  return (
    <section style={{ background: '#0d1f2d' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="brand-grid">
        <div style={{ padding: '80px 64px 80px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="brand-text">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 20 }}>Our Story</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px, 7vw, 96px)', color: '#fff', lineHeight: 0.9, marginBottom: 28 }}>Way Of Life</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: 14 }}>
            SaltBred was born on the water. Built for anglers, surfers, and anyone who calls the coast home.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: 40 }}>
            Our NakedSkin™ technology delivers next-level performance with a feel so lightweight, you&apos;ll forget you&apos;re wearing it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 44 }}>
            {['UPF 50+', 'NakedSkin™', '4-Way Stretch', 'Quick-Dry', 'Anti-Chafe'].map(f => (
              <span key={f} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a96e', border: '1px solid rgba(200,169,110,0.35)', padding: '6px 14px' }}>{f}</span>
            ))}
          </div>
          <Link href="/collections/all-products-1" style={{ display: 'inline-block', background: '#c8a96e', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '17px 36px', textDecoration: 'none', alignSelf: 'flex-start' }}>
            Shop The Collection
          </Link>
        </div>
        <div style={{ aspectRatio: '4/5', overflow: 'hidden' }} className="brand-img">
          <img src="https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9113.png?v=1776100239" alt="SaltBred performance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .brand-grid { grid-template-columns: 1fr !important; }
          .brand-img { aspect-ratio: 4/3 !important; order: -1; }
          .brand-text { padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  )
}
