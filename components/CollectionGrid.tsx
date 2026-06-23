'use client'
import Link from 'next/link'
import { COLLECTIONS } from '@/lib/data'

export default function CollectionGrid() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 8 }}>Browse The Line</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 6vw, 72px)', color: '#111' }}>Shop By Collection</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {COLLECTIONS.map((c, i) => (
            <Link key={c.handle} href={`/collections/${c.handle}`} style={{ textDecoration: 'none', color: '#111', display: 'block', gridColumn: i === 0 ? 'span 2' : 'span 1' }} className="collection-card">
              <div style={{ aspectRatio: i === 0 ? '16/9' : '3/4', background: '#e8e8e8', overflow: 'hidden', position: 'relative' }}>
                <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="collection-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px' }}>
                  <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: i === 0 ? 36 : 26, color: '#fff', letterSpacing: '0.03em', marginBottom: 4 }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Shop {c.count} styles →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .collection-card:hover .collection-img { transform: scale(1.05); }
        @media (max-width: 600px) {
          .collection-card { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
