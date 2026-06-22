import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: 'rgba(255,255,255,0.65)', padding: '60px 24px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40 }}>
        <div>
          <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 26, color: '#fff', marginBottom: 8 }}>SaltBred</p>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>Coastal performance gear engineered for life on the water.</p>
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Shop</p>
          {['Clothing', 'Accessories', 'Headwear', 'Shop All'].map(l => (
            <Link key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: 10 }}>{l}</Link>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Support</p>
          {['Shipping & Returns', 'Size Guide', 'FAQ', 'Contact Us'].map(l => (
            <Link key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: 10 }}>{l}</Link>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Follow</p>
          {['Instagram', 'TikTok', 'Facebook'].map(l => (
            <Link key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: 10 }}>{l}</Link>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '40px auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
        © {new Date().getFullYear()} SaltBred. All rights reserved.
      </div>
    </footer>
  )
}
