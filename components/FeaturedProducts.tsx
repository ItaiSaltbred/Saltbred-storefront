import Link from 'next/link'

const products = [
  { title: 'Bahama Wahoo Performance Long Sleeve', price: '$49.99', handle: 'bahama-wahoo-performance-long-sleeve', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9044.png?v=1776105038' },
  { title: 'NakedSkin Performance Top', price: '$49.99', handle: 'nakedskin-performance-long-sleeve', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9051.png?v=1776105038' },
  { title: 'Coastal Snapback', price: '$34.99', handle: 'coastal-snapback', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4947.jpg?v=1772577978' },
]

export default function FeaturedProducts() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>Just Dropped</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px, 6vw, 72px)' }}>Best Sellers</h2>
          <Link href="/collections/all" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none' }}>View All →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {products.map(p => (
            <Link key={p.handle} href={`/products/${p.handle}`} style={{ textDecoration: 'none', color: '#111' }}>
              <div style={{ aspectRatio: '3/4', background: '#e8ede9', overflow: 'hidden', marginBottom: 16 }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 24, marginBottom: 4 }}>{p.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#555' }}>{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
