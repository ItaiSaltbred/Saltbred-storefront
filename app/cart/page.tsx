import Link from 'next/link'

export default function CartPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 8vw, 72px)', color: '#111', marginBottom: 40 }}>Your Cart</h1>
      <div style={{ borderTop: '1px solid #ebebeb', paddingTop: 48, textAlign: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#888', marginBottom: 32 }}>Your cart is empty.</p>
        <Link href="/collections/all-products-1" style={{ display: 'inline-block', background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
          Shop Now
        </Link>
      </div>
    </div>
  )
}
