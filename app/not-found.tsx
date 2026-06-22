import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '120px 24px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 80, color: '#111', marginBottom: 16 }}>404</h1>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#888', marginBottom: 40 }}>Page not found.</p>
      <Link href="/" style={{ display: 'inline-block', background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none' }}>
        Back Home
      </Link>
    </div>
  )
}
