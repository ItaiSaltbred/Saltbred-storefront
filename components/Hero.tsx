import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '92vh', minHeight: 580, background: '#0d1f2d', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9209.png?v=1776314793" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.65 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,31,45,0.95) 0%, rgba(13,31,45,0.3) 60%, transparent 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '0 32px 72px', maxWidth: 700 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 16 }}>NakedSkin™ Technology</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(64px, 11vw, 130px)', lineHeight: 0.92, color: '#fff', marginBottom: 24, letterSpacing: '0.02em' }}>
          Built<br />For The<br />Salt
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.7, maxWidth: 480 }}>
          Engineered to perform. Built to disappear. UPF 50+ performance gear for life on the water.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/collections/all-products-1" style={{ display: 'inline-block', background: '#fff', color: '#111', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
            Shop Now
          </Link>
          <Link href="/collections/all-products" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
            Performance Tops
          </Link>
        </div>
      </div>
    </section>
  )
}
