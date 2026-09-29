import MenuSection from '../components/MenuSection.jsx';

export default function MenuPage() {
  return (
    <>
      <div className="pagehead">
        <div className="container">
          <p className="eyebrow">Intik • Born in Algiers</p>
          <h1 className="display h1">Notre menu</h1>
          <p className="lede">
            Carte interactive : choisissez, ajoutez, commandez sur WhatsApp.
            Prix en dinars, formats S / M / L selon le produit.
          </p>
        </div>
      </div>
      <MenuSection />
    </>
  );
}
