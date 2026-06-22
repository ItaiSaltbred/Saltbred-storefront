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
      <header style={{ background: '#fff', borderBottom: '1px solid #ebebeb', position: 'sticky', top: 0, zIndex: 200 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>

          {/* Hamburger — mobile */}
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 1, flexShrink: 0 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'transform 0.25s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'opacity 0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'transform 0.25s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>

          {/* Logo — centered */}
          <Link href="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SaltBred" style={{ height: 40, width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="sb-desktop-nav">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="sb-nav-link">{n.label}</Link>
            ))}
          </nav>

          {/* Cart */}
          <Link href="/cart" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', zIndex: 1, flexShrink: 0 }}>
            Cart
          </Link>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 199,
        pointerEvents: open ? 'auto' : 'none',
      }}>
        <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', opacity: open ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 300, background: '#fff',
          transform: open ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.35s ease',
          display: 'flex', flexDirection: 'column', paddingTop: 80,
        }}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 32, color: '#111', textDecoration: 'none', padding: '14px 32px', borderBottom: '1px solid #f0f0f0', letterSpacing: '0.03em' }}>
              {n.label}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setOpen(false)}
            style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 32, color: '#111', textDecoration: 'none', padding: '14px 32px', letterSpacing: '0.03em' }}>
            Cart
          </Link>
        </div>
      </div>

      <style>{`
        .sb-desktop-nav { display: none; gap: 28px; }
        .sb-nav-link { font-family: Inter, sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #111; text-decoration: none; }
        .sb-nav-link:hover { color: #c8a96e; }
        @media (min-width: 900px) {
          .hamburger-btn { display: none !important; }
          .sb-desktop-nav { display: flex !important; position: absolute; left: 50%; transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}
