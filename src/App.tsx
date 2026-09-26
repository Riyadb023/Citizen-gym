import { useEffect, useState } from "react";

const images = {
  hero: "https://images.pexels.com/photos/4944316/pexels-photo-4944316.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=88",
  intro: "https://images.pexels.com/photos/25596769/pexels-photo-25596769.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&q=86",
  fitness: "https://images.pexels.com/photos/35215412/pexels-photo-35215412.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=86",
  strength: "https://images.pexels.com/photos/4854262/pexels-photo-4854262.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
  class: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
  aqua: "https://images.pexels.com/photos/8028471/pexels-photo-8028471.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
  indoor: "https://images.pexels.com/photos/7174389/pexels-photo-7174389.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=88",
  outdoor: "https://images.pexels.com/photos/7546610/pexels-photo-7546610.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
  sauna: "https://images.pexels.com/photos/36077580/pexels-photo-36077580.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
  lounge: "https://images.pexels.com/photos/7401883/pexels-photo-7401883.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86",
};

const activities = [
  { name: "Aquagym", description: "Bouger dans l'eau, tonifier le corps et préserver les articulations.", image: images.aqua, position: "center 40%" },
  { name: "Aquabiking", description: "Un travail cardio complet porté par la résistance naturelle de l'eau.", image: "https://images.pexels.com/photos/7222171/pexels-photo-7222171.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86" },
  { name: "Cours fitness", description: "Des séances collectives rythmées, accessibles à différents niveaux.", image: images.class },
  { name: "Training en groupe", description: "L'énergie du collectif pour rester régulière, progresser et se dépasser.", image: "https://images.pexels.com/photos/35341603/pexels-photo-35341603.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=86" },
];

const memberships = ["1 mois", "3 mois", "6 mois", "12 mois", "Carte 10 entrées", "Pass journée"];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={diagonal ? "icon diagonal" : "icon"}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#accueil" aria-label="Citi'Zen - Accueil">
      <span className="brand-main">citi<span>'</span>zen</span>
      <span className="brand-sub">Gym Club &amp; Spa</span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled || menuOpen ? "navbar-solid" : ""}`}>
        <div className="nav-inner">
          <Brand light={!scrolled && !menuOpen} />
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#club">Le Club</a><a href="#fitness">Fitness</a><a href="#activites">Activités</a><a href="#bien-etre">Bien-être</a><a href="#forfaits">Forfaits</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta">Devenir adhérente <Arrow /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Ouvrir le menu"><span /><span /></button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav aria-label="Navigation mobile">
            {[["Accueil", "accueil"], ["Le Club", "club"], ["Fitness", "fitness"], ["Activités", "activites"], ["Bien-être", "bien-etre"], ["Forfaits", "forfaits"], ["Contact", "contact"]].map(([label, anchor], i) => <a href={`#${anchor}`} onClick={() => setMenuOpen(false)} key={anchor}><span>0{i + 1}</span>{label}</a>)}
          </nav>
          <a href="tel:+213561618113" className="mobile-contact">0561 61 81 13 <Arrow /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-media" style={{ backgroundImage: `url(${images.hero})` }} /><div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Club premium 100% femmes · Birkhadem</p>
            <h1>Votre énergie.<br /><em>Votre équilibre.</em></h1>
            <p className="hero-copy">Sport, piscines et bien-être réunis dans un espace pensé pour vous, au cœur d'Alger.</p>
            <div className="hero-actions"><a className="button button-primary" href="#club">Découvrir Citi'Zen <Arrow /></a><a className="button button-ghost" href="#forfaits">Voir les forfaits</a></div>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span>Explorer</span><i /></div>
        </section>

        <section className="intro section" id="club">
          <div className="section-frame intro-grid">
            <div className="intro-copy reveal">
              <p className="eyebrow">L'expérience Citi'Zen</p><h2>Bien plus qu'une<br />salle de sport.</h2>
              <p className="lead">Un club haut de gamme où l'entraînement, l'eau et la récupération trouvent naturellement leur place.</p>
              <p>Chez Citi'Zen, chaque visite peut être différente. Une séance sur des équipements Technogym, un cours collectif, quelques longueurs en piscine ou un moment au sauna : tout est réuni dans un même lieu, exclusivement dédié aux femmes.</p>
              <a href="#bien-etre" className="text-link">Découvrir le club <Arrow /></a>
            </div>
            <figure className="intro-visual reveal image-reveal"><img src={images.intro} alt="Femmes lors d'une séance de sport en groupe dans un studio lumineux" /><figcaption><span>01</span> Fitness · Piscines · Wellness</figcaption></figure>
          </div>
        </section>

        <section className="fitness section" id="fitness">
          <div className="section-frame">
            <div className="section-heading reveal"><div><p className="eyebrow">L'espace fitness</p><h2>Un cadre qui donne<br />envie de progresser.</h2></div><p>Cardio-training, musculation et espaces d'entraînement équipés Technogym, pour construire une routine à votre rythme.</p></div>
            <div className="fitness-stage reveal"><img src={images.fitness} alt="Espace cardio moderne équipé de tapis de course" /><div className="fitness-caption"><span>Équipements Technogym</span><span>Cardio · Force · Mobilité</span></div></div>
            <div className="fitness-notes reveal"><p><strong>Cardio</strong> Développer son endurance dans un espace clair et confortable.</p><p><strong>Musculation</strong> Renforcer le corps avec du matériel adapté à chaque niveau.</p><a href="#contact" className="text-link">Découvrir l'espace fitness <Arrow /></a></div>
          </div>
        </section>

        <section className="activities section" id="activites">
          <div className="section-frame">
            <div className="activities-title reveal"><p className="eyebrow">Bouger ensemble</p><h2>Une activité pour<br /><em>chaque énergie.</em></h2></div>
            <div className="activity-grid">
              {activities.map((activity, index) => <article className="activity-item reveal" key={activity.name}><div className="activity-image"><img src={activity.image} alt={`${activity.name} chez Citi'Zen`} style={{ objectPosition: activity.position }} /><span>0{index + 1}</span></div><div className="activity-copy"><h3>{activity.name}</h3><p>{activity.description}</p><a href="#contact" aria-label={`Découvrir ${activity.name}`}><Arrow diagonal /></a></div></article>)}
            </div>
          </div>
        </section>

        <section className="wellness" id="bien-etre">
          <div className="wellness-hero"><img src={images.indoor} alt="Piscine intérieure lumineuse et apaisante" /><div className="wellness-overlay" /><div className="wellness-heading reveal"><p className="eyebrow">Piscines &amp; bien-être</p><h2>L'effort se prolonge<br />par le lâcher-prise.</h2><p>Nager, bouger dans l'eau, récupérer. Une autre façon de prendre soin de soi.</p></div></div>
          <div className="wellness-grid section-frame">
            <article className="wellness-item reveal"><img src={images.outdoor} alt="Piscine extérieure dans un environnement verdoyant" /><div><span>01</span><h3>Piscine extérieure</h3><p>Une parenthèse en plein air pour nager et respirer.</p></div></article>
            <article className="wellness-item wellness-item-tall reveal"><img src={images.sauna} alt="Sauna chaleureux avec finition bois" /><div><span>02</span><h3>Sauna</h3><p>Le calme et la chaleur après l'effort.</p></div></article>
            <article className="wellness-item reveal"><img src={images.aqua} alt="Activité aquatique en piscine intérieure" /><div><span>03</span><h3>Aqua training</h3><p>Aquabiking et aquagym pour une séance complète.</p></div></article>
          </div>
        </section>

        <section className="extras section"><div className="section-frame extras-layout"><div className="extras-heading reveal"><p className="eyebrow">Pensé pour votre quotidien</p><h2>Tout simplement<br /><em>plus facile.</em></h2><p>Parce qu'une bonne routine est aussi une routine qui s'intègre naturellement à votre journée.</p></div><div className="extras-list reveal"><div><span>01</span><h3>Garderie</h3><p>Profitez pleinement de votre séance pendant que vos enfants sont accueillis sur place.</p></div><div><span>02</span><h3>Cafétéria</h3><p>Un espace convivial pour faire une pause avant de repartir.</p></div><div><span>03</span><h3>Parking couvert</h3><p>Stationnement gratuit et accès pratique au club.</p></div></div></div></section>

        <section className="memberships section" id="forfaits">
          <div className="section-frame">
            <div className="membership-heading reveal"><p className="eyebrow">Les forfaits</p><h2>Votre rythme,<br />votre formule.</h2><p>Des accès ponctuels aux abonnements longue durée, choisissez la formule qui accompagne vraiment vos objectifs.</p></div>
            <div className="membership-list reveal">{memberships.map((membership, index) => <a href="#contact" className={membership === "12 mois" ? "membership-row featured" : "membership-row"} key={membership}><span className="membership-number">0{index + 1}</span><strong>{membership}</strong>{membership === "12 mois" && <small>Engagement longue durée</small>}<span className="membership-price">Voir les tarifs</span><Arrow diagonal /></a>)}</div>
            <div className="membership-bottom reveal"><p>Besoin d'aide pour choisir ? Notre équipe vous renseigne sur les accès et activités inclus.</p><a href="#contact" className="button button-dark">Demander des informations <Arrow /></a></div>
          </div>
        </section>

        <section className="voices section"><div className="section-frame voices-inner reveal"><p className="eyebrow">La parole aux adhérentes</p><blockquote>“Découvrez bientôt ici les expériences de celles qui font vivre Citi'Zen au quotidien.”</blockquote><p className="placeholder-note">Espace réservé aux témoignages vérifiés des adhérentes.</p><a href="https://www.instagram.com/citizengymclub/" target="_blank" rel="noreferrer" className="text-link">Suivre Citi'Zen sur Instagram <Arrow /></a></div></section>

        <section className="gallery section" aria-labelledby="gallery-title"><div className="section-frame"><div className="gallery-heading reveal"><div><p className="eyebrow">Dans le club</p><h2 id="gallery-title">Un lieu à vivre.</h2></div><p>Du mouvement au calme, découvrez les différentes atmosphères de l'expérience Citi'Zen.</p></div><div className="gallery-grid"><figure className="gallery-a reveal"><img src={images.strength} alt="Entraînement de musculation avec haltères" /><figcaption>Fitness</figcaption></figure><figure className="gallery-b reveal"><img src={images.lounge} alt="Espace détente sobre et chaleureux" /><figcaption>Club</figcaption></figure><figure className="gallery-c reveal"><img src={images.class} alt="Cours de fitness collectif entre femmes" /><figcaption>Cours collectifs</figcaption></figure><figure className="gallery-d reveal"><img src={images.indoor} alt="Bassin intérieur lumineux" /><figcaption>Piscine</figcaption></figure><figure className="gallery-e reveal"><img src={images.sauna} alt="Espace sauna en bois" /><figcaption>Bien-être</figcaption></figure></div></div></section>

        <section className="contact" id="contact">
          <div className="contact-top section-frame reveal"><p className="eyebrow">Votre prochaine étape</p><h2>Prête à découvrir<br /><em>Citi'Zen ?</em></h2><div className="contact-actions"><a href="tel:+213561618113" className="button button-light">Nous contacter <Arrow /></a><a href="https://maps.google.com/?q=1+lot+Djenane+Boudjakdji+Birkhadem+Algeria" target="_blank" rel="noreferrer" className="button button-outline">Nous trouver</a></div></div>
          <div className="contact-details section-frame"><div><span>Adresse</span><p>1 lot Djenane Boudjakdji<br />Birkhadem 16029, Alger</p></div><div><span>Contact</span><a href="tel:+213561618113">0561 61 81 13</a><a href="mailto:contact@citizengymclub.com">contact@citizengymclub.com</a></div><div><span>Horaires</span><p>Ouvert 7j/7<br /><a href="#horaires">Voir les horaires détaillés</a></p></div><div><span>Social</span><a href="https://www.instagram.com/citizengymclub/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
          <div className="hours section-frame" id="horaires"><span>Dim · Mar · Mer</span><strong>09:00 - 20:30</strong><span>Lundi</span><strong>09:00 - 16:30</strong><span>Jeudi</span><strong>09:00 - 19:30</strong><span>Vendredi</span><strong>09:00 - 12:30</strong><span>Samedi</span><strong>09:00 - 17:00</strong></div>
        </section>
      </main>

      <footer><div className="section-frame footer-inner"><Brand light /><p>Club de fitness haut de gamme<br />100% femmes &amp; enfants.</p><div className="footer-links"><a href="#club">Le club</a><a href="#activites">Activités</a><a href="#forfaits">Forfaits</a><a href="#contact">Contact</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Citi'Zen Gym Club</span><span>Birkhadem · Alger</span></div></div></footer>
    </div>
  );
}
