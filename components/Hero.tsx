import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '90vh', minHeight: 600, background: '#0d1f2d', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9044.png?v=1776105038)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '0 40px 80px', maxWidth: 700 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Coastal Performance Gear</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(72px, 12vw, 140px)', lineHeight: 0.95, color: '#fff', marginBottom: 20 }}>
          Built For<br />The Salt
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: 32, lineHeight: 1.6 }}>
          Performance gear engineered for life on the water.
        </p>
        <Link href="/collections/all" style={{ display: 'inline-block', background: '#fff', color: '#111', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
          Shop Now
        </Link>
      </div>
    </section>
  )
}
