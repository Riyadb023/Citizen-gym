import { CONFIG } from '../data.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Intik • Born in Algiers</p>
          <h1 className="display hero__title">
            You look hotter holding <em>this bag.</em>
          </h1>
          <p className="hero__sub">
            Burgers panés, loaded fries gratinées, crispy balls croustillants.
            La famille Intik commande en 2 minutes, direct sur WhatsApp.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--ink" href="#/commande">Commander</a>
            <a className="btn btn--ghost" href="#/menu">Voir le menu</a>
          </div>
          <p className="hero__trust">+{CONFIG.followers} sur Instagram • Alger</p>
        </div>

        <div className="hero__visual">
          <img
            className="hero__img"
            src="/img/food-cruncher.jpg"
            alt="Cruncher — poulet pané, fromage, sauce classique"
          />
          <img className="hero__sticker" src="/img/logo.png" alt="Logo Intik" />
          <span className="hero__price">DÈS 350 DA</span>
        </div>
      </div>
    </section>
  );
}
