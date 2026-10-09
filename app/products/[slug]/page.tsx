import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductActions } from '@/components/product-actions';
import { ProductCard } from '@/components/product-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getProduct, products } from '@/lib/products';

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: `${product.name} by 3MG Shanghai.` } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const recommendations = products.filter((item) => item.slug !== product.slug).slice(0, 4);

  return (
    <>
      <SiteHeader active="products" />
      <main>
        <section className="product-detail page-shell">
          <div className="product-gallery">
            {product.images.map((image, index) => (
              <img key={image} src={image} alt={index === 0 ? product.name : `${product.name}, alternate view`} />
            ))}
          </div>
          <div className="product-summary">
            <p className="product-eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">A distinctive 3MG piece designed to move between protagonist and supporting character, bringing an expressive finish to everyday styling.</p>
            <ProductActions />
          </div>
        </section>

        <section className="recommendations page-shell" aria-labelledby="recommendations-title">
          <h2 id="recommendations-title">You may also like</h2>
          <div className="product-grid">
            {recommendations.map((item) => <ProductCard key={item.slug} product={item} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
