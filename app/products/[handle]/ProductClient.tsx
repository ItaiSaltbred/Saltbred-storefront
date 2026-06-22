'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Product, PRODUCTS, getStockStatus } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

export default function ProductClient({ product }: { product: Product }) {
  const sizes = [...new Set(product.variants.map(v => v.size))]
  const colors = [...new Set(product.variants.map(v => v.color))]

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(colors[0] || '')
  const [activeImg, setActiveImg] = useState(0)

  const selectedVariant = product.variants.find(
    v => v.size === selectedSize && v.color === selectedColor
  )
  const stock = getStockStatus(selectedVariant?.inventory ?? product.totalInventory)
  const related = PRODUCTS.filter(p => p.handle !== product.handle).slice(0, 4)

  return (
    <div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa' }}>
          <Link href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <Link href="/collections/all-products" style={{ color: '#aaa', textDecoration: 'none' }}>Performance</Link>
          {' / '}
          <span style={{ color: '#555' }}>{product.title}</span>
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
        {/* Images */}
        <div>
          <div style={{ aspectRatio: '4/5', background: '#f0f0f0', overflow: 'hidden', marginBottom: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.images[activeImg] ?? product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: 8 }}>
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{ width: 72, aspectRatio: '1/1', border: i === activeImg ? '2px solid #111' : '2px solid transparent', padding: 0, cursor: 'pointer', overflow: 'hidden', background: '#f0f0f0' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ paddingTop: 8 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 10 }}>SaltBred</p>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', color: '#111', lineHeight: 1, marginBottom: 16, letterSpacing: '0.02em' }}>{product.title}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 500, color: '#111' }}>${product.price}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: stock.color, display: 'block' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: stock.color, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stock.label}</span>
            </div>
          </div>

          {colors.length > 1 && (
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
                Color: <strong style={{ color: '#111' }}>{selectedColor}</strong>
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {colors.map(c => (
                  <button key={c} onClick={() => setSelectedColor(c)}
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, padding: '8px 16px', border: selectedColor === c ? '2px solid #111' : '1px solid #ddd', background: '#fff', cursor: 'pointer', color: '#111' }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555' }}>
                Size {selectedSize && <strong style={{ color: '#111' }}>— {selectedSize}</strong>}
              </p>
              <button style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Size Guide</button>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {sizes.map(s => {
                const v = product.variants.find(v => v.size === s && v.color === selectedColor)
                const oos = (v?.inventory ?? 0) === 0
                return (
                  <button key={s} onClick={() => !oos && setSelectedSize(s)}
                    style={{ width: 52, height: 52, border: selectedSize === s ? '2px solid #111' : '1px solid #ddd', background: oos ? '#f5f5f5' : '#fff', cursor: oos ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: oos ? '#ccc' : '#111', textDecoration: oos ? 'line-through' : 'none' }}>
                    {s}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            style={{ width: '100%', background: selectedSize ? '#111' : '#ccc', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px', border: 'none', cursor: selectedSize ? 'pointer' : 'not-allowed', marginBottom: 12, transition: 'background 0.2s' }}
            disabled={!selectedSize}>
            {selectedSize ? 'Add to Cart' : 'Select a Size'}
          </button>

          <button style={{ width: '100%', background: '#fff', color: '#111', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '17px', border: '1px solid #111', cursor: 'pointer', marginBottom: 32 }}>
            Buy It Now
          </button>

          <div style={{ borderTop: '1px solid #ebebeb', paddingTop: 28 }}>
            <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, letterSpacing: '0.02em', marginBottom: 14 }}>Product Details</h3>
            {product.description.split('\n').map((line, i) => (
              <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: line.startsWith('•') ? 4 : 12 }}>{line}</p>
            ))}
          </div>

          <div style={{ background: '#f7f5f0', padding: '16px 20px', marginTop: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18 }}>📦</span>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#555', lineHeight: 1.5 }}>
              Free shipping on orders over $75. Fast delivery nationwide.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: '#f7f5f0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 40, color: '#111' }}>You May Also Like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {related.map(p => <ProductCard key={p.handle} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
