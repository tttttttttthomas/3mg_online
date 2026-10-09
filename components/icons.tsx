type IconProps = { className?: string };

export function MenuIcon({ className }: IconProps) {
  return <svg className={className} width="21" height="21" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2.5 6h15M2.5 14h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

export function SearchIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="4.75" stroke="currentColor" strokeWidth="1.4" /><path d="m12.5 12.5 3.25 3.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

export function UserIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="2.75" stroke="currentColor" strokeWidth="1.4" /><path d="m5.17 14.59-.44.79a.59.59 0 0 0 .52.87h9.5a.59.59 0 0 0 .52-.87l-.44-.79a5.52 5.52 0 0 0-9.66 0Z" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

export function BagIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.25 7h11.5l.75 9.5h-13L4.25 7Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" /><path d="M7 7V5.5a3 3 0 0 1 6 0V7" stroke="currentColor" strokeWidth="1.35" /></svg>;
}

export function InstagramIcon({ className }: IconProps) {
  return <svg className={className} width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.4" /><circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" /><circle cx="14.8" cy="5.4" r=".8" fill="currentColor" /></svg>;
}
