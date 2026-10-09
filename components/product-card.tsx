import { SiteLink as Link } from '@/components/site-link';
import type { Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/products/${product.slug}`}>
        <img className="product-image primary" src={product.images[0]} alt={product.name} loading="lazy" />
        <img className="product-image secondary" src={product.images[1]} alt="" loading="lazy" />
      </Link>
      <div className="product-card-info">
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
