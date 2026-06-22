export type Product = {
  id: string
  title: string
  handle: string
  price: string
  image: string
  images: string[]
  description: string
  totalInventory: number
  variants: Variant[]
  tags: string[]
}

export type Variant = {
  id: string
  title: string
  color: string
  style: string
  size: string
  price: string
  inventory: number
}

export type Collection = {
  title: string
  handle: string
  image: string
  count: number
}

export const COLLECTIONS: Collection[] = [
  { title: 'T-Shirts', handle: 't-shirts', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_7695.jpg?v=1776211842', count: 21 },
  { title: 'Headwear', handle: 'headwear', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4947.jpg?v=1772577978', count: 31 },
  { title: 'Coastal Trucker', handle: 'coastal-snapback-copy', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4970.jpg?v=1772578033', count: 19 },
  { title: 'Coastal SnapBack', handle: 'coastal-snapback', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4947.jpg?v=1772577978', count: 10 },
  { title: 'Sunglasses', handle: 'sunglasses', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/collections/IMG_4956_2_76ae8bed-a1da-4494-9423-20d0e083976a.jpg?v=1776286625', count: 12 },
  { title: 'Accessories', handle: 'accessories', image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9209.png?v=1776314793', count: 43 },
]

const DESCRIPTION = `Engineered to Perform. Built to Disappear.\n\nWhen the sun's high and the fish are biting, the last thing you need is a shirt holding you back. Our NakedSkin™ technology delivers next-level performance with a feel so lightweight, you'll forget you're wearing it.\n\n• UPF 50+ Sun Protection\n• NakedSkin™ Moisture-Wicking Fabric\n• 4-Way Stretch for Full Range of Motion\n• Quick-Dry Technology\n• Flatlock Seams to Prevent Chafing\n• Relaxed Fit`

export const PRODUCTS: Product[] = [
  {
    id: 'gid://shopify/Product/10075170046228',
    title: 'Bahama Wahoo Performance Long Sleeve',
    handle: 'bahama-wahoo-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9044.png?v=1776105038',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9044.png?v=1776105038'],
    description: DESCRIPTION,
    totalInventory: 200,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51798067577108', title: 'Dark Grey / Crewneck / S', color: 'Dark Grey', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51844163502356', title: 'Dark Grey / Crewneck / M', color: 'Dark Grey', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51844163535124', title: 'Dark Grey / Crewneck / L', color: 'Dark Grey', style: 'Crewneck', size: 'L', price: '49.99', inventory: 25 },
      { id: '51844163567892', title: 'Dark Grey / Crewneck / XL', color: 'Dark Grey', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 26 },
      { id: '51844163600660', title: 'Dark Grey / Crewneck / 2XL', color: 'Dark Grey', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086131237140',
    title: 'River of Grass Performance Long Sleeve',
    handle: 'river-of-grass-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_8396.png?v=1776104847',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_8396.png?v=1776104847'],
    description: DESCRIPTION,
    totalInventory: 100,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841073283348', title: 'White / Crewneck / S', color: 'White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841073316116', title: 'White / Crewneck / M', color: 'White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841073348884', title: 'White / Crewneck / L', color: 'White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 25 },
      { id: '51841073381652', title: 'White / Crewneck / XL', color: 'White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841073414420', title: 'White / Crewneck / 2XL', color: 'White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086134710548',
    title: 'Manatee Taco Performance Long Sleeve',
    handle: 'manatee-taco-performance-long-sleeve-1',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9105.png?v=1776104622',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9105.png?v=1776104622'],
    description: DESCRIPTION,
    totalInventory: 99,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841082654996', title: 'White / Crewneck / S', color: 'White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841082687764', title: 'White / Crewneck / M', color: 'White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841082720532', title: 'White / Crewneck / L', color: 'White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 25 },
      { id: '51841082753300', title: 'White / Crewneck / XL', color: 'White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 24 },
      { id: '51841082786068', title: 'White / Crewneck / 2XL', color: 'White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086136348948',
    title: 'Salt Friends Performance Long Sleeve',
    handle: 'salt-friends-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9239.png?v=1776105115',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9239.png?v=1776105115'],
    description: DESCRIPTION,
    totalInventory: 199,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841085833492', title: 'White/Gray / Crewneck / S', color: 'White/Gray', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841093763348', title: 'White/Gray / Crewneck / M', color: 'White/Gray', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841093796116', title: 'White/Gray / Crewneck / L', color: 'White/Gray', style: 'Crewneck', size: 'L', price: '49.99', inventory: 24 },
      { id: '51841093828884', title: 'White/Gray / Crewneck / XL', color: 'White/Gray', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841093861652', title: 'White/Gray / Crewneck / 2XL', color: 'White/Gray', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086141165844',
    title: 'Eat More Snapper Performance Long Sleeve',
    handle: 'eat-more-snapper-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9147.png?v=1776104388',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9147.png?v=1776104388'],
    description: DESCRIPTION,
    totalInventory: 195,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841098547476', title: 'White/Gray / Crewneck / S', color: 'White/Gray', style: 'Crewneck', size: 'S', price: '49.99', inventory: 14 },
      { id: '51841098580244', title: 'White/Gray / Crewneck / M', color: 'White/Gray', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841098613012', title: 'White/Gray / Crewneck / L', color: 'White/Gray', style: 'Crewneck', size: 'L', price: '49.99', inventory: 24 },
      { id: '51841098645780', title: 'White/Gray / Crewneck / XL', color: 'White/Gray', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841098678548', title: 'White/Gray / Crewneck / 2XL', color: 'White/Gray', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086147686676',
    title: 'Saltbred Performance Long Sleeve',
    handle: 'saltbred-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9200.png?v=1776456684',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9200.png?v=1776456684'],
    description: DESCRIPTION,
    totalInventory: 198,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841116176660', title: 'Blue/White / Crewneck / S', color: 'Blue/White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841120960788', title: 'Blue/White / Crewneck / M', color: 'Blue/White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841120993556', title: 'Blue/White / Crewneck / L', color: 'Blue/White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 21 },
      { id: '51841121026324', title: 'Blue/White / Crewneck / XL', color: 'Blue/White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841121059092', title: 'Blue/White / Crewneck / 2XL', color: 'Blue/White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086151651604',
    title: 'Florida Tarpon Performance Long Sleeve',
    handle: 'florida-tarpon-performance-long-sleeve-1',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9113.png?v=1776100239',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9113.png?v=1776100239'],
    description: DESCRIPTION,
    totalInventory: 394,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841135280404', title: 'Blue/White / Crewneck / S', color: 'Blue/White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 13 },
      { id: '51841135313172', title: 'Blue/White / Crewneck / M', color: 'Blue/White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 24 },
      { id: '51841135345940', title: 'Blue/White / Crewneck / L', color: 'Blue/White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 26 },
      { id: '51841135378708', title: 'Blue/White / Crewneck / XL', color: 'Blue/White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 24 },
      { id: '51841135411476', title: 'Blue/White / Crewneck / 2XL', color: 'Blue/White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086154535188',
    title: 'Saltbeer Performance Long Sleeve',
    handle: 'saltbeer-performance-long-sleeve-1',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9248.png?v=1776104035',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9248.png?v=1776104035'],
    description: DESCRIPTION,
    totalInventory: 598,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841147109652', title: 'Blue/White / Crewneck / S', color: 'Blue/White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841147142420', title: 'Blue/White / Crewneck / M', color: 'Blue/White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841147175188', title: 'Blue/White / Crewneck / L', color: 'Blue/White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 25 },
      { id: '51841147207956', title: 'Blue/White / Crewneck / XL', color: 'Blue/White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841147240724', title: 'Blue/White / Crewneck / 2XL', color: 'Blue/White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086161547540',
    title: 'OG SaltBred Performance Long Sleeve',
    handle: 'og-saltbred-performance-long-sleeve-2',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9196.png?v=1776103921',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9196.png?v=1776103921'],
    description: DESCRIPTION,
    totalInventory: 203,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841166016788', title: 'Blue/White / Crewneck / S', color: 'Blue/White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 14 },
      { id: '51841166049556', title: 'Blue/White / Crewneck / M', color: 'Blue/White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841166082324', title: 'Blue/White / Crewneck / L', color: 'Blue/White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 26 },
      { id: '51841166115092', title: 'Blue/White / Crewneck / XL', color: 'Blue/White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 26 },
      { id: '51841166147860', title: 'Blue/White / Crewneck / 2XL', color: 'Blue/White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
  {
    id: 'gid://shopify/Product/10086166692116',
    title: 'Chasing Tails Performance Long Sleeve',
    handle: 'chasing-tails-performance-long-sleeve',
    price: '49.99',
    image: 'https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9083.png?v=1776103712',
    images: ['https://cdn.shopify.com/s/files/1/0957/6051/5348/files/DSC_9083.png?v=1776103712'],
    description: DESCRIPTION,
    totalInventory: 201,
    tags: ['performance', 'long-sleeve'],
    variants: [
      { id: '51841228865812', title: 'Blue/White / Crewneck / S', color: 'Blue/White', style: 'Crewneck', size: 'S', price: '49.99', inventory: 15 },
      { id: '51841228898580', title: 'Blue/White / Crewneck / M', color: 'Blue/White', style: 'Crewneck', size: 'M', price: '49.99', inventory: 25 },
      { id: '51841228931348', title: 'Blue/White / Crewneck / L', color: 'Blue/White', style: 'Crewneck', size: 'L', price: '49.99', inventory: 25 },
      { id: '51841228964116', title: 'Blue/White / Crewneck / XL', color: 'Blue/White', style: 'Crewneck', size: 'XL', price: '49.99', inventory: 25 },
      { id: '51841228996884', title: 'Blue/White / Crewneck / 2XL', color: 'Blue/White', style: 'Crewneck', size: '2XL', price: '49.99', inventory: 10 },
    ],
  },
]

export function getStockStatus(inventory: number): { label: string; color: string } {
  if (inventory === 0) return { label: 'Out of Stock', color: '#e53e3e' }
  if (inventory <= 10) return { label: 'Low Stock', color: '#e53e3e' }
  if (inventory <= 20) return { label: 'Low Stock', color: '#d69e2e' }
  return { label: 'In Stock', color: '#38a169' }
}
