import { PRODUCTS } from '@/lib/data'
import { notFound } from 'next/navigation'
import ProductClient from './ProductClient'

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = PRODUCTS.find(p => p.handle === params.handle)
  if (!product) return notFound()
  return <ProductClient product={product} />
}
