import Link from 'next/link'
import { PRODUCTS } from '@/lib/data'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 8 }}>Performance Collection</p>
            <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 6vw, 72px)', color: '#111' }}>Best Sellers</h2>
          </div>
          <Link href="/collections/all-products-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', borderBottom: '1px solid #111', paddingBottom: 3 }}>
            View All →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {featured.map(p => <ProductCard key={p.handle} product={p} large />)}
        </div>
      </div>
    </section>
  )
}
