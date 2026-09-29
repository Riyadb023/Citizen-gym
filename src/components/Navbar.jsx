import { useEffect, useState } from 'react';
import { CONFIG } from '../data.js';
import { useCart } from '../cart.jsx';

const LINKS = [
  ['#/menu', 'Menu'],
  ['#/histoire', 'Notre histoire'],
  ['#/restaurants', 'Nos restaurants'],
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a className="nav__logo" href="#/" aria-label="Intik — accueil">
            INTIK<b>.</b>
          </a>
          <nav className="nav__links" aria-label="Navigation principale">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav__right">
            <a className="btn btn--ink btn--sm" href="#/commande">
              Commander
              {count > 0 && <span className="nav__badge">{count}</span>}
            </a>
            <button className="nav__burger" aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobilemenu">
          <a className="mm-link" href="#/">Accueil</a>
          {LINKS.map(([href, label]) => (
            <a className="mm-link" key={href} href={href}>{label}</a>
          ))}
          <a className="mm-link" href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <div className="mm-foot">
            <a className="btn btn--ink btn--block" href="#/commande">
              Commander {count > 0 && <span className="nav__badge">{count}</span>}
            </a>
            <a className="btn btn--ghost btn--block" href="#/menu">Voir le menu</a>
          </div>
        </div>
      )}
    </>
  );
}
