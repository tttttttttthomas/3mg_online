'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ProductActions() {
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState(false);

  return (
    <div className="product-actions">
      <fieldset className="variant-fieldset">
        <legend>Color</legend>
        <label><input type="radio" name="color" defaultChecked /> <span>Black</span></label>
      </fieldset>
      <div className="quantity-row">
        <span>Quantity</span>
        <div className="quantity-control">
          <Button type="button" variant="ghost" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</Button>
          <output aria-live="polite">{quantity}</output>
          <Button type="button" variant="ghost" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>+</Button>
        </div>
      </div>
      <Button className="add-button" type="button" onClick={() => setNotice(true)}>Add to cart</Button>
      {notice && <p className="product-notice" role="status">Ordering will be connected in the next phase. This preview is display-only.</p>}
    </div>
  );
}
