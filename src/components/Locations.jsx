import { BRANCHES, CONFIG } from '../data.js';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 22s-7.5-6-7.5-11.5a7.5 7.5 0 1 1 15 0C19.5 16 12 22 12 22Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

export default function LocationsBlock() {
  return (
    <div>
      <div className="loc__grid">
        <div className="loc__map reveal" role="img" aria-label="Carte — Intik Alger">
          <div className="loc__pin">
            <PinIcon />
            <span>ALGER</span>
            <a
              className="btn btn--ghost btn--sm"
              href={BRANCHES[0].maps}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>

        <div className="loc__list">
          {BRANCHES.map((b) => (
            <article className="loc__card reveal" key={b.city}>
              <h3>{b.city}</h3>
              <p className="loc__row">
                <span className="loc__label">Adresse</span>
                {b.address}
              </p>
              <p className="loc__row">
                <span className="loc__label">Horaires</span>
                {b.hours}
              </p>
              <p className="loc__row">
                <span className="loc__label">Téléphone / WhatsApp</span>
                <a href={`tel:+${CONFIG.phoneIntl}`} style={{ textDecoration: 'underline' }}>
                  {CONFIG.phoneDisplay}
                </a>
              </p>
              <div className="loc__actions">
                <a className="btn btn--ghost btn--sm" href={b.maps} target="_blank" rel="noreferrer">
                  Itinéraire
                </a>
                <a className="btn btn--ink btn--sm" href="#/commande">Commander</a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="note reveal">{CONFIG.deliveryNote} — {CONFIG.phoneDisplay}</p>
    </div>
  );
}
