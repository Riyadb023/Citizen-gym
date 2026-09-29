import { CONFIG } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__word">INTIK<b>.</b></p>
        <p className="footer__tag">{CONFIG.tagline}</p>
        <nav className="footer__links" aria-label="Liens du pied de page">
          <a href="#/menu">Menu</a>
          <a href="#/restaurants">Nos restaurants</a>
          <a href="#/histoire">Notre histoire</a>
          <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
        <div className="footer__meta">
          <span>© 2026 Intik</span>
          <span>{CONFIG.phoneDisplay}</span>
          <span>Alger, Algérie</span>
        </div>
      </div>
    </footer>
  );
}
