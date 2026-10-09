import { SiteLink as Link } from '@/components/site-link';
import { ProductCard } from '@/components/product-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <>
      <SiteHeader active="home" />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-shade" />
          <div className="hero-content page-shell">
            <h1 id="hero-title">Embracing<br />diversity in beauty</h1>
            <p>Discover distinctive pieces that reflect your individuality and style.</p>
            <Link className="soft-button" href="/collections/all">Shop now</Link>
          </div>
        </section>

        <section className="featured-section page-shell" aria-labelledby="featured-title">
          <div className="section-heading-row">
            <h2 id="featured-title">Featured products</h2>
            <Link href="/collections/all">View all</Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <Link className="manifesto" href="/collections/all" aria-label="Explore all products">
          <div className="manifesto-shade" />
          <p>When we use clothes and accessories as tools to express our true inner aspirations, by default, we also inherently attract more possibilities in life.</p>
        </Link>

        <section className="brand-story page-shell" aria-label="About 3MG">
          <p>3MG is a jewelry &amp; accessories brand. Established in 2022, it carries a renewed cultural attitude and expresses what we want to say through our designs, products and the brand as a whole.</p>
          <p>We hope to transform 3MG into a perceptive force that brings out the wearer&apos;s true self and the daring wish to transform that is otherwise kept hidden inside. The making of every design gives birth to a new experience of dressing and life.</p>
          <p>As virtual and physical realities gradually move closer, popular elements and cultural languages are constantly reinterpreted. We express our continued passion for life and fashion by never limiting the possibilities of style and self-expression.</p>
          <p>We consider whether an accessory should be the protagonist or the supporting character in an outfit. With this in mind, we use design, workmanship and attitude to give our customers stylistic answers.</p>
        </section>

        <section className="editorial-pair" aria-label="3MG editorial photography">
          <img src="/images/editorial/collage-square.jpg" alt="3MG jewelry editorial" />
          <img src="/images/editorial/collage-portrait.png" alt="3MG accessory styling" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
