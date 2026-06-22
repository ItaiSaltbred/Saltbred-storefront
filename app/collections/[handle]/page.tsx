import { PRODUCTS, COLLECTIONS } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default function CollectionPage({ params }: { params: { handle: string } }) {
  const collection = COLLECTIONS.find(c => c.handle === params.handle)
  const products = PRODUCTS

  const title = collection?.title ?? params.handle.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Header */}
      <div style={{ background: '#f7f5f0', padding: '60px 32px 40px', borderBottom: '1px solid #ebebeb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>
            <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>Home</Link> / Collections
          </p>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 8vw, 80px)', color: '#111', letterSpacing: '0.02em' }}>{title}</h1>
          {collection && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888', marginTop: 6 }}>{collection.count} products</p>}
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
          {products.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>
    </div>
  )
}
