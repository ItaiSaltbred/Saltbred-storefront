'use client'
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { label: 'Clothing', href: '/collections/t-shirts' },
  { label: 'Accessories', href: '/collections/accessories' },
  { label: 'Headwear', href: '/collections/headwear' },
  { label: 'Shop All', href: '/collections/all' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #e5e5e5', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 26, letterSpacing: '0.05em', color: '#111', textDecoration: 'none' }}>
          SaltBred
        </Link>

        <nav style={{ display: 'flex', gap: 32 }} className="desktop-nav">
          {nav.map(n => (
            <Link key={n.href} href={n.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', textDecoration: 'none' }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link href="/cart" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', textDecoration: 'none' }}>
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}
