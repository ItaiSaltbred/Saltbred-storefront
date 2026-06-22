import Link from 'next/link'
import { PRODUCTS } from '@/lib/data'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 6 }}>Performance Collection</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px, 6vw, 70px)', color: '#111', margin: 0 }}>Best Sellers</h2>
          <Link href="/collections/all-products-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', borderBottom: '1px solid #111', paddingBottom: 2 }}>View All →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {featured.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>
    </section>
  )
}
