import { SiteLink as Link } from '@/components/site-link';
import { InstagramIcon } from '@/components/icons';
import { NewsletterForm } from '@/components/newsletter-form';

export function SiteFooter() {
  return (
    <footer>
      <section className="contact-strip" aria-labelledby="contact-strip-title">
        <h2 id="contact-strip-title">Contact us:</h2>
        <p>Instagram: <a href="https://www.instagram.com/3mg_shanghai" target="_blank" rel="noreferrer">3mg_shanghai</a></p>
        <p>Wechat: Aesthetic_01</p>
        <p>Xiaohongshu / Red Note: 3MG</p>
      </section>

      <section className="community-section">
        <div className="community-inner page-shell">
          <div>
            <h2>Join our community</h2>
            <p>Subscribe for exclusive updates and style tips that inspire.</p>
          </div>
          <NewsletterForm />
        </div>
        <div className="footer-bottom page-shell">
          <span>© 2026 3MG</span>
          <Link href="/contact">Terms and Policies</Link>
          <a href="https://www.instagram.com/3mg_shanghai" target="_blank" rel="noreferrer" aria-label="3MG on Instagram"><InstagramIcon /></a>
        </div>
      </section>
    </footer>
  );
}
