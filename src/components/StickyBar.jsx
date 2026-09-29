import { useEffect, useState } from 'react';
import { useCart } from '../cart.jsx';

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 8h12l-1.2 12H7.2L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function StickyBar() {
  const { count, total } = useCart();
  const [hidden, setHidden] = useState(window.location.hash === '#/commande');

  useEffect(() => {
    const onHash = () => setHidden(window.location.hash === '#/commande');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (hidden) return null;

  return (
    <a className="stickybar" href="#/commande">
      <BagIcon />
      COMMANDER
      <span className="stickybar__meta">
        {count > 0 ? `${count} art. — ${total} DA` : 'voir le panier'}
      </span>
    </a>
  );
}
