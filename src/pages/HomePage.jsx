import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import MenuSection from '../components/MenuSection.jsx';
import BrandStory from '../components/BrandStory.jsx';
import SocialProof from '../components/SocialProof.jsx';
import LocationsBlock from '../components/Locations.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { BESTSELLERS, PRODUCTS } from '../data.js';

function BestSellers() {
  const list = BESTSELLERS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  return (
    <section className="section" id="incontournables">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow">Le meilleur d'Intik</p>
            <h2 className="display h2">Les incontournables</h2>
          </div>
          <a className="section__link" href="#/menu">Tout voir →</a>
        </div>
        <div className="cards cards--4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="section" id="restaurants">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow">Où nous trouver</p>
            <h2 className="display h2">Nos restaurants</h2>
          </div>
          <a className="section__link" href="#/restaurants">Détails & itinéraire →</a>
        </div>
        <LocationsBlock />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <MenuSection preview />
      <BrandStory />
      <SocialProof />
      <LocationsSection />
      <FinalCTA />
    </>
  );
}
