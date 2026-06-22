'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const nav = [
  { label: 'Clothing', href: '/collections/t-shirts' },
  { label: 'Accessories', href: '/collections/accessories' },
  { label: 'Headwear', href: '/collections/headwear' },
  { label: 'Shop All', href: '/collections/all' },
]

const LOGO = 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/SaltBred.png?v=1752712939'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e5e5', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 1 }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#111', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#111', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#111', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>

          {/* Logo — centered on mobile, left on desktop */}
          <Link href="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} className="logo-center">
            <Image src={LOGO} alt="SaltBred" width={130} height={44} style={{ objectFit: 'contain', height: 38, width: 'auto', display: 'block' }} priority />
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav className="desktop-nav" style={{ display: 'none', gap: 32 }}>
            {nav.map(n => (
              <Link key={n.href} href={n.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', textDecoration: 'none' }}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <Link href="/cart" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', zIndex: 1 }}>
            Cart
          </Link>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
        background: '#fff', zIndex: 99, padding: '32px 24px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}>
        {nav.map(n => (
          <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
            style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 42, color: '#111', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', padding: '14px 0', display: 'block', letterSpacing: '0.02em' }}>
            {n.label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
          .logo-center { position: static !important; transform: none !important; }
        }
      `}</style>
    </>
  )
}
