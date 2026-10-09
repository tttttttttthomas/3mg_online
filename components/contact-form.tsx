'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="form-grid">
        <label>Name<Input name="name" autoComplete="name" /></label>
        <label>Email<Input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>Phone<Input name="phone" type="tel" autoComplete="tel" /></label>
      <label>Comment<Textarea name="message" rows={6} required /></label>
      <Button className="contact-submit" type="submit">Submit</Button>
      {submitted && <p className="contact-status" role="status">The form design is ready. Message delivery will be connected before launch.</p>}
    </form>
  );
}
