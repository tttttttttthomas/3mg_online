import type { Metadata } from 'next';
import { Catalog } from '@/components/catalog';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { products } from '@/lib/products';

export const metadata: Metadata = { title: 'Products' };

export default function ProductListPage() {
  return (
    <>
      <SiteHeader active="products" />
      <main className="collection-page page-shell">
        <div className="collection-heading">
          <h1>Products</h1>
          <p>A collection of jewelry and accessories created for individual expression.</p>
        </div>
        <Catalog products={products} />
      </main>
      <SiteFooter />
    </>
  );
}
