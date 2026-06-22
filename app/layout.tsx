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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ShippingBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
