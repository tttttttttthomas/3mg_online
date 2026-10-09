import type { ComponentProps } from 'react';

// Static hosting uses normal document navigation, with no RSC routing server.
export function SiteLink(props: ComponentProps<'a'>) {
  return <a {...props} />;
}
