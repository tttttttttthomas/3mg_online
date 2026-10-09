'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <form className="signup-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <label className="sr-only" htmlFor="signup-email">Email address</label>
        <Input id="signup-email" type="email" placeholder="Email address" required />
        <Button type="submit">Sign up</Button>
      </form>
      {submitted && <p className="form-note" role="status">Subscription will be enabled when the site goes live.</p>}
    </div>
  );
}
