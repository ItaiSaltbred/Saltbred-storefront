'use client'
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { label: 'Performance Tops', href: '/collections/all-products' },
  { label: 'T-Shirts', href: '/collections/t-shirts' },
  { label: 'Headwear', href: '/collections/headwear' },
  { label: 'Accessories', href: '/collections/accessories' },
  { label: 'Shop All', href: '/collections/all-products-1' },
]

const LOGO = 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/high_res_saltbred.png?v=1761073199'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', position: 'sticky', top: 0, zIndex: 200 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>

          <button onClick={() => setOpen(!open)} aria-label="Menu" className="sb-burger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 1, flexShrink: 0 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'transform 0.25s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'opacity 0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'transform 0.25s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>

          <Link href="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', lineHeight: 0 }}>
            <img src={LOGO} alt="SaltBred" style={{ height: 38, width: 'auto' }} />
          </Link>

          <nav className="sb-desktop-nav" style={{ display: 'none', gap: 28, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="sb-nav-link"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', textDecoration: 'none' }}>
                {n.label}
              </Link>
            ))}
          </nav>

          <Link href="/cart" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', zIndex: 1 }}>
            Cart
          </Link>
        </div>
      </header>

      <div style={{ position: 'fixed', inset: 0, zIndex: 199, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', opacity: open ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 320, background: '#fff', transform: open ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.35s ease', paddingTop: 80 }}>
          <div style={{ padding: '0 32px 24px', borderBottom: '1px solid #f0f0f0', marginBottom: 8 }}>
            <img src={LOGO} alt="SaltBred" style={{ height: 32, width: 'auto' }} />
          </div>
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 30, color: '#111', textDecoration: 'none', padding: '12px 32px', borderBottom: '1px solid #f5f5f5', display: 'block', letterSpacing: '0.03em' }}>
              {n.label}
            </Link>
          ))}
          <div style={{ padding: '32px 32px 0' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>Built For The Salt</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', lineHeight: 1.7 }}>UPF 50+ · NakedSkin™ · Free Shipping $75+</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .sb-burger { display: none !important; }
          .sb-desktop-nav { display: flex !important; }
        }
        .sb-nav-link:hover { color: #c8a96e !important; }
      `}</style>
    </>
  )
}
