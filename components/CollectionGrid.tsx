'use client'
import Link from 'next/link'
import { COLLECTIONS } from '@/lib/data'

export default function CollectionGrid() {
  return (
    <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 6 }}>Browse</p>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px, 6vw, 70px)', marginBottom: 40, color: '#111' }}>Shop By Collection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {COLLECTIONS.map(c => (
            <Link key={c.handle} href={`/collections/${c.handle}`} style={{ textDecoration: 'none', color: '#111', display: 'block' }}>
              <div style={{ aspectRatio: '3/4', background: '#e0e0e0', overflow: 'hidden', position: 'relative', marginBottom: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px' }}>
                  <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 26, color: '#fff', letterSpacing: '0.02em' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{c.count} styles</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
