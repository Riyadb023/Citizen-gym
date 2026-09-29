import { CONFIG } from '../data.js';

export default function FinalCTA() {
  return (
    <section className="section--dark final">
      <div className="container">
        <h2 className="display reveal">Une faim ?</h2>
        <p className="reveal">
          Commande en 2 minutes sur WhatsApp. Livraison & à emporter — frais de
          livraison selon la zone.
        </p>
        <div className="reveal">
          <a className="btn btn--accent" href="#/commande">Commander maintenant</a>
        </div>
      </div>
    </section>
  );
}
