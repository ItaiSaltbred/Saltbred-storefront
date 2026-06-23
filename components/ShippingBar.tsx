'use client'
import { useState } from 'react'

const THRESHOLD = 75

export default function ShippingBar() {
  const [cartTotal] = useState(0)
  const pct = Math.min(100, Math.round((cartTotal / THRESHOLD) * 100))
  const remaining = Math.max(0, THRESHOLD - cartTotal).toFixed(0)
  const unlocked = cartTotal >= THRESHOLD

  return (
    <div style={{ background: '#111', padding: '9px 20px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
          {unlocked
            ? '✦ Free shipping unlocked!'
            : <>Add <strong style={{ color: '#c8a96e' }}>${remaining}</strong> more for free shipping</>}
        </p>
        <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden', width: '100%', maxWidth: 320 }}>
          <div style={{ height: '100%', background: '#c8a96e', borderRadius: 2, width: `${pct}%`, transition: 'width 0.6s ease' }} />
        </div>
      </div>
    </div>
  )
}
