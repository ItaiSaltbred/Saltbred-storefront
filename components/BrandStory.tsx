import Link from 'next/link'

export default function BrandStory() {
  return (
    <section style={{ background: '#0d1f2d', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 20 }}>Our Story</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px, 7vw, 90px)', color: '#fff', lineHeight: 0.92, marginBottom: 28, letterSpacing: '0.02em' }}>Way Of Life</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: 16 }}>
            SaltBred was born on the water. Built for anglers, surfers, and anyone who calls the coast home.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: 40 }}>
            Our NakedSkin™ technology delivers next-level performance with a feel so lightweight, you'll forget you're wearing it. UPF 50+ protection, 4-way stretch, moisture-wicking — engineered for when it matters most.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            {['UPF 50+', 'NakedSkin™', '4-Way Stretch', 'Quick-Dry'].map(f => (
              <span key={f} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8a96e', border: '1px solid rgba(200,169,110,0.4)', padding: '6px 14px' }}>{f}</span>
            ))}
          </div>
          <Link href="/collections/all-products-1" style={{ display: 'inline-block', background: '#c8a96e', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
            Shop The Collection
          </Link>
        </div>
        <div style={{ aspectRatio: '4/5', background: '#1a2d3e', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9044.png?v=1776105038" alt="SaltBred performance" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .brand-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .brand-story-img { display: none; }
        }
      `}</style>
    </section>
  )
}
