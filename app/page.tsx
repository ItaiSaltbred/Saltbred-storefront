import Hero from '@/components/Hero'
import MarqueeBar from '@/components/MarqueeBar'
import CollectionGrid from '@/components/CollectionGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandStory from '@/components/BrandStory'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <CollectionGrid />
      <FeaturedProducts />
      <BrandStory />
    </>
  )
}
