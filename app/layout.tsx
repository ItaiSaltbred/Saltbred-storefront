import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShippingBar from '@/components/ShippingBar'

export const metadata: Metadata = {
  title: 'SaltBred — Way of Life',
  description: 'Coastal performance gear engineered for life on the water.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShippingBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
