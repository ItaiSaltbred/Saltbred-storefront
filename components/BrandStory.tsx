import Link from 'next/link'

export default function BrandStory() {
  return (
    <section style={{ background: '#0d1f2d', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 16 }}>Our Story</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', lineHeight: 0.95, marginBottom: 24 }}>Way Of Life</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
            SaltBred was born on the water. Built for anglers, surfers, and anyone who calls the coast home — our gear is engineered to perform when it matters most.
          </p>
          <Link href="/pages/our-story" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
            Learn More
          </Link>
        </div>
        <div style={{ aspectRatio: '4/5', background: '#1a2a3a', overflow: 'hidden' }}>
          <img src="https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9209.png?v=1776314793" alt="SaltBred lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
        </div>
      </div>
    </section>
  )
}
