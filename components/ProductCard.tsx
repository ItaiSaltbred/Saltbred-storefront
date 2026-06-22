'use client'
import Link from 'next/link'
import { Product, getStockStatus } from '@/lib/data'

export default function ProductCard({ product }: { product: Product }) {
  const stock = getStockStatus(product.totalInventory)

  return (
    <Link href={`/products/${product.handle}`} style={{ textDecoration: 'none', color: '#111', display: 'block' }}>
      <div style={{ position: 'relative', aspectRatio: '4/5', background: '#f0f0f0', overflow: 'hidden', marginBottom: 14 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Stock badge */}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.92)', borderRadius: 20, padding: '4px 10px 4px 8px' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: stock.color, display: 'block', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#111' }}>{stock.label}</span>
        </div>
      </div>
      <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, letterSpacing: '0.02em', marginBottom: 4, lineHeight: 1.1 }}>{product.title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#333', fontWeight: 500 }}>${product.price}</p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>UPF 50+</p>
      </div>
    </Link>
  )
}
