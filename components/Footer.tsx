import Link from 'next/link'

const LOGO = 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/high_res_saltbred.png?v=1761073199'

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: 'rgba(255,255,255,0.6)', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 48, marginBottom: 64 }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="SaltBred" style={{ height: 36, width: 'auto', marginBottom: 16, filter: 'brightness(0) invert(1)', display: 'block' }} />
            <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 220 }}>Coastal performance gear engineered for life on the water.</p>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18 }}>Shop</p>
            {([['Performance Tops', '/collections/all-products'], ['T-Shirts', '/collections/t-shirts'], ['Headwear', '/collections/headwear'], ['Sunglasses', '/collections/sunglasses'], ['Shop All', '/collections/all-products-1']] as [string, string][]).map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12 }}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18 }}>Support</p>
            {['Shipping & Returns', 'Size Guide', 'FAQ', 'Contact Us'].map(l => (
              <Link key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12 }}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18 }}>Follow</p>
            {['Instagram', 'TikTok', 'Facebook'].map(l => (
              <Link key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12 }}>{l}</Link>
            ))}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18, marginTop: 32 }}>Contact</p>
            <a href="mailto:support@saltbred.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>support@saltbred.com</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>© {new Date().getFullYear()} SaltBred. All rights reserved.</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>saltbred.com</p>
        </div>
      </div>
    </footer>
  )
}
