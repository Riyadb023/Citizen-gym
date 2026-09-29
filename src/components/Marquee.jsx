const ITEMS = [
  'INTIK',
  'BORN IN ALGIERS',
  'BURGERS',
  'LOADED FRIES',
  'PASTA',
  'SIDES & EXTRAS',
  'COMMANDE SUR WHATSAPP',
];

export default function Marquee() {
  const row = (
    <>
      {ITEMS.map((t) => (
        <span key={t}>
          {t} <i>•</i>
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
