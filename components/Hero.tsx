'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '95vh', minHeight: 620, background: '#0d1f2d', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img src="https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9209.png?v=1776314793" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', opacity: 0.7 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,31,45,0.98) 0%, rgba(13,31,45,0.4) 55%, rgba(13,31,45,0.1) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '0 32px 80px', width: '100%', maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 18 }}>NakedSkin™ Technology · UPF 50+</p>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(72px, 13vw, 160px)', lineHeight: 0.88, color: '#fff', marginBottom: 28, letterSpacing: '0.01em' }}>
          Built<br />For<br />The Salt
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.7)', marginBottom: 40, lineHeight: 1.7, maxWidth: 460 }}>
          Engineered to perform. Built to disappear. Coastal performance gear for life on the water.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/collections/all-products-1" style={{ display: 'inline-block', background: '#fff', color: '#111', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '17px 40px', textDecoration: 'none', transition: 'background 0.2s' }}>
            Shop Now
          </Link>
          <Link href="/collections/all-products" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '17px 40px', textDecoration: 'none' }}>
            Performance Tops
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          h1 { font-size: clamp(64px, 18vw, 110px) !important; }
        }
      `}</style>
    </section>
  )
}
