import { SiteLink as Link } from '@/components/site-link';
import { BagIcon, MenuIcon, SearchIcon, UserIcon } from '@/components/icons';

type SiteHeaderProps = { active?: 'home' | 'products' | 'contact' };

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={active === 'home' ? 'is-active' : ''} href="/">Home Page</Link>
          <Link className={active === 'products' ? 'is-active' : ''} href="/collections/all">Product List</Link>
          <Link className={active === 'contact' ? 'is-active' : ''} href="/contact">Contact Info</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open menu"><MenuIcon /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home Page</Link>
            <Link href="/collections/all">Product List</Link>
            <Link href="/contact">Contact Info</Link>
          </nav>
        </details>

        <Link className="brand-logo" href="/" aria-label="3MG home">
          <img src="/images/logo.png" alt="3MG" />
        </Link>

        <nav className="utility-nav" aria-label="Utilities">
          <Link href="/collections/all#search" aria-label="Search products"><SearchIcon /></Link>
          <Link href="/contact" aria-label="Contact 3MG"><UserIcon /></Link>
          <Link href="/collections/all" aria-label="Browse products"><BagIcon /></Link>
        </nav>
      </div>
    </header>
  );
}
