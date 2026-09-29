import { CONFIG, STORY } from '../data.js';

export default function BrandStory() {
  return (
    <section className="section section--dark" id="histoire">
      <div className="container story">
        <div className="story__media reveal">
          <img className="bag" src="/img/bag1.jpg" alt="Packaging Intik — you look hotter holding this bag" />
          <img className="sticker" src="/img/logo.png" alt="" aria-hidden="true" />
        </div>
        <div className="reveal">
          <p className="story__tag">{CONFIG.tagline}</p>
          <p className="eyebrow">Notre histoire</p>
          <h2 className="display h2">Plus qu'un burger.</h2>
          <div style={{ height: 24 }} />
          {STORY.map((p) => (
            <p className="story__p" key={p.slice(0, 24)}>{p}</p>
          ))}
          <a className="btn btn--ghost-light" href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
