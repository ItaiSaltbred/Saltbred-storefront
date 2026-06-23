import Link from 'next/link'

const LOGO = 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/high_res_saltbred.png?v=1761073199'

export default function Footer() {
  return (
    <footer style={{ background: '#0d1f2d', color: 'rgba(255,255,255,0.6)', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }} className="footer-grid">
          <div>
            <img src={LOGO} alt="SaltBred" style={{ height: 36, width: 'auto', marginBottom: 20, opacity: 0.9 }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Coastal performance gear engineered for life on the water. Built for those who live for the salt.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Instagram', 'TikTok', 'Facebook'].map(s => (
                <Link key={s} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', padding: '7px 12px' }}>{s}</Link>
              ))}
            </div>
          </div>
          {[
            { heading: 'Shop', links: ['Performance Tops', 'T-Shirts', 'Headwear', 'Sunglasses', 'Accessories', 'Shop All'] },
            { heading: 'Company', links: ['Our Story', 'Sustainability', 'Careers', 'Press'] },
            { heading: 'Support', links: ['Shipping & Returns', 'Size Guide', 'FAQ', 'Contact Us'] },
          ].map(col => (
            <div key={col.heading}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{col.heading}</p>
              {col.links.map(l => (
                <Link key={l} href="#" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12, lineHeight: 1 }}>{l}</Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} SaltBred. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map(l => (
              <Link key={l} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
