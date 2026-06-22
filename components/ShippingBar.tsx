'use client'
import { useEffect, useState } from 'react'

const THRESHOLD = 75

export default function ShippingBar() {
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    // Cart total will be wired to Shopify once Storefront API is connected
    setCartTotal(0)
  }, [])

  const pct = Math.min(100, Math.round((cartTotal / THRESHOLD) * 100))
  const remaining = Math.max(0, THRESHOLD - cartTotal).toFixed(0)
  const unlocked = cartTotal >= THRESHOLD

  return (
    <div style={{ background: '#111', padding: '8px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textAlign: 'center', margin: 0 }}>
          {unlocked
            ? '🎉 You\'ve unlocked free shipping!'
            : <>Add <strong style={{ color: '#c8a96e' }}>${remaining}</strong> more for free shipping</>}
        </p>
        <div style={{ height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 2, overflow: 'hidden', maxWidth: 400, margin: '0 auto', width: '100%' }}>
          <div style={{ height: '100%', background: '#c8a96e', borderRadius: 2, width: `${pct}%`, transition: 'width 0.5s ease' }} />
        </div>
      </div>
    </div>
  )
}
