import { CONFIG, IG_POSTS } from '../data.js';

export default function SocialProof() {
  return (
    <section className="section" id="instagram">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow">Ils sont déjà fans</p>
            <h2 className="display h2">La Intik family.</h2>
          </div>
        </div>

        <div className="stats reveal">
          <div className="stat">
            <strong>+{CONFIG.followers}</strong>
            <span>La famille sur Instagram</span>
          </div>
          <div className="stat">
            <strong>Alger<b>.</b></strong>
            <span>Born & raised</span>
          </div>
          <div className="stat">
            <strong>2 min<b>.</b></strong>
            <span>Pour commander sur WhatsApp</span>
          </div>
        </div>

        <p className="eyebrow reveal" style={{ marginBottom: 20 }}>Retrouvez Intik sur Instagram</p>
        <div className="ig reveal">
          {IG_POSTS.map((post) => (
            <a
              key={post.img}
              className="ig__item"
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={post.alt}
            >
              <img src={post.img} alt={post.alt} loading="lazy" />
            </a>
          ))}
        </div>

        <div className="ig__cta reveal">
          <a className="btn btn--ink" href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">
            Suivre {CONFIG.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
