import Link from 'next/link'

const collections = [
  { title: 'T-Shirts', handle: 't-shirts', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_7695.jpg?v=1776211842' },
  { title: 'Headwear', handle: 'headwear', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4947.jpg?v=1772577978' },
  { title: 'Coastal Trucker', handle: 'coastal-snapback-copy', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4970.jpg?v=1772578033' },
  { title: 'Sunglasses', handle: 'sunglasses', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4956_2_76ae8bed-a1da-4494-9423-20d0e083976a.jpg?v=1776286625' },
]

export default function CollectionGrid() {
  return (
    <section style={{ padding: '80px 24px', background: '#f7f5f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>Browse</p>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: 40 }}>Shop By Collection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {collections.map(c => (
            <Link key={c.handle} href={`/collections/${c.handle}`} style={{ textDecoration: 'none', color: '#111', position: 'relative', overflow: 'hidden', display: 'block' }}>
              <div style={{ aspectRatio: '3/4', background: '#e0e0e0', overflow: 'hidden' }}>
                <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
              </div>
              <div style={{ padding: '16px 0' }}>
                <h3 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28 }}>{c.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginTop: 4 }}>Shop Now →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
