import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data.js';
import ProductCard from './ProductCard.jsx';

export default function MenuSection({ preview = false }) {
  const [cat, setCat] = useState('burgers');
  const list = PRODUCTS.filter((p) => p.cat === cat).slice(0, preview ? 6 : undefined);

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow">{preview ? 'Carte interactive' : 'Carte complète — prix en DA'}</p>
            <h2 className="display h2">Notre menu</h2>
          </div>
          {preview && (
            <a className="section__link" href="#/menu">Voir le menu complet →</a>
          )}
        </div>

        <div className="tabs reveal" role="tablist" aria-label="Catégories du menu">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={`tab ${cat === c.id ? 'tab--on' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={`cards ${preview ? 'cards--3' : 'cards--3'}`}>
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
