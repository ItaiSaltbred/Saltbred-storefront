'use client'
import Link from 'next/link'
import { Product, getStockStatus } from '@/lib/data'

export default function ProductCard({ product, large }: { product: Product; large?: boolean }) {
  const stock = getStockStatus(product.totalInventory)

  return (
    <Link href={`/products/${product.handle}`} style={{ textDecoration: 'none', color: '#111', display: 'block' }} className="product-card">
      <div style={{ position: 'relative', aspectRatio: large ? '3/4' : '4/5', background: '#f2f2f0', overflow: 'hidden', marginBottom: 14 }}>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.55s ease' }} className="product-img" />
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.95)', borderRadius: 20, padding: '4px 10px 4px 7px', backdropFilter: 'blur(4px)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: stock.color, display: 'block', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111' }}>{stock.label}</span>
        </div>
        <div className="product-atc" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px', textAlign: 'center', transform: 'translateY(100%)', transition: 'transform 0.3s ease' }}>
          Quick View
        </div>
      </div>
      <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: large ? 24 : 20, letterSpacing: '0.02em', marginBottom: 5, lineHeight: 1.1 }}>{product.title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#111', fontWeight: 500 }}>${product.price}</p>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#f5f5f5', padding: '2px 7px', borderRadius: 3 }}>UPF 50+</span>
      </div>
      <style>{`
        .product-card:hover .product-img { transform: scale(1.05); }
        .product-card:hover .product-atc { transform: translateY(0); }
      `}</style>
    </Link>
  )
}
