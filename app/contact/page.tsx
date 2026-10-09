import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = { title: 'Contact Info' };

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main className="contact-page page-shell">
        <div className="contact-intro">
          <p className="contact-kicker">Shanghai · China</p>
          <h1>Contact Info</h1>
          <p>For product questions, styling enquiries and collaborations, leave us a message or find us through our social channels.</p>
          <dl>
            <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/3mg_shanghai" target="_blank" rel="noreferrer">@3mg_shanghai</a></dd></div>
            <div><dt>Wechat</dt><dd>Aesthetic_01</dd></div>
            <div><dt>Xiaohongshu / Red Note</dt><dd>3MG</dd></div>
          </dl>
        </div>
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
