'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { SearchIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Product } from '@/lib/products';

const categories = ['All', 'Belts', 'Necklaces', 'Earrings', 'Scarves', 'Hair Accessories'];

export function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesQuery = !normalized || product.name.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  return (
    <>
      <div className="catalog-tools" id="search">
        <div className="catalog-search">
          <SearchIcon />
          <label className="sr-only" htmlFor="product-search">Search products</label>
          <Input id="product-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" />
        </div>
        <div className="category-filter" aria-label="Filter by category">
          {categories.map((item) => (
            <Button key={item} type="button" variant="ghost" aria-pressed={category === item} onClick={() => setCategory(item)}>
              {item}
            </Button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">{filtered.length} products</p>
      </div>

      {filtered.length > 0 ? (
        <div className="product-grid catalog-grid">
          {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      ) : (
        <div className="catalog-empty">
          <p>No pieces match your search.</p>
          <Button type="button" variant="outline" onClick={() => { setQuery(''); setCategory('All'); }}>Clear filters</Button>
        </div>
      )}
    </>
  );
}
