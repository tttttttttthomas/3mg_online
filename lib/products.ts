export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  images: [string, string];
};

export const products: Product[] = [
  { slug: 'black-woven-belt', name: 'Black Woven Belt', price: 145, category: 'Belts', images: ['/images/products/black-woven-belt-1.jpg', '/images/products/black-woven-belt-2.jpg'] },
  { slug: 'bow-knot-studded-choker', name: 'Bow Knot Studded Choker', price: 89, category: 'Necklaces', images: ['/images/products/bow-knot-studded-choker-1.jpg', '/images/products/bow-knot-studded-choker-2.jpg'] },
  { slug: 'flower-moon-earrings', name: 'Flower Moon Earrings', price: 180, category: 'Earrings', images: ['/images/products/flower-moon-earrings-1.jpg', '/images/products/flower-moon-earrings-2.jpg'] },
  { slug: 'large-bow-belt', name: 'Large Bow Belt', price: 145, category: 'Belts', images: ['/images/products/large-bow-belt-1.jpg', '/images/products/large-bow-belt-2.jpg'] },
  { slug: 'pink-crystal-hazelnut-necklace', name: 'Pink Crystal Hazelnut Necklace', price: 102, category: 'Necklaces', images: ['/images/products/pink-crystal-hazelnut-necklace-1.png', '/images/products/pink-crystal-hazelnut-necklace-2.png'] },
  { slug: 'rococo-carved-wood-brooch-scarf', name: 'Rococo Carved Wood Brooch Scarf', price: 102, category: 'Scarves', images: ['/images/products/rococo-carved-wood-brooch-scarf-1.jpg', '/images/products/rococo-carved-wood-brooch-scarf-2.png'] },
  { slug: 'rococo-carved-wood-hair-clip', name: 'Rococo Carved Wood Hair Clip', price: 45, category: 'Hair Accessories', images: ['/images/products/rococo-carved-wood-hair-clip-1.png', '/images/products/rococo-carved-wood-hair-clip-2.png'] },
  { slug: 'leopard-print-silk-flower-choker', name: 'Silk Flower Choker', price: 110, category: 'Necklaces', images: ['/images/products/silk-flower-choker-1.png', '/images/products/silk-flower-choker-2.png'] },
  { slug: 'small-bow-belt', name: 'Small Bow Belt', price: 140, category: 'Belts', images: ['/images/products/small-bow-belt-1.jpg', '/images/products/small-bow-belt-2.jpg'] },
  { slug: 'thorn-flower-scarf', name: 'Thorn Flower Scarf', price: 155, category: 'Scarves', images: ['/images/products/thorn-flower-scarf-1.jpg', '/images/products/thorn-flower-scarf-2.jpg'] },
  { slug: 'tigers-eye-stone-heart-necklace', name: "Tiger's Eye Stone Heart Necklace", price: 102, category: 'Necklaces', images: ['/images/products/tigers-eye-stone-heart-necklace-1.jpg', '/images/products/tigers-eye-stone-heart-necklace-2.png'] },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
