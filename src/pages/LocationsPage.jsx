import LocationsBlock from '../components/Locations.jsx';

export default function LocationsPage() {
  return (
    <>
      <div className="pagehead">
        <div className="container">
          <p className="eyebrow">Où nous trouver</p>
          <h1 className="display h1">Nos restaurants</h1>
          <p className="lede">
            Choisissez votre restaurant, ouvrez l'itinéraire, ou commandez
            direct — la commande part sur le bon WhatsApp.
          </p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <LocationsBlock />
        </div>
      </section>
    </>
  );
}
