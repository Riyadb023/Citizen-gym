import { useMemo, useState } from 'react';
import { useCart } from '../cart.jsx';
import { BRANCHES, CONFIG } from '../data.js';

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 1 1-3.6 13l-.4-.2-2.7.7.7-2.6-.2-.4A7 7 0 0 1 12 5Zm-3 3.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.7 2.9.6.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.3-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a5.8 5.8 0 0 1-2.9-2.5c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.9Z" />
    </svg>
  );
}

export default function OrderPage() {
  const { items, total, setQty, remove, clear } = useCart();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    mode: 'Livraison',
    address: '',
    branch: BRANCHES[0].city,
    note: '',
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const waHref = useMemo(() => {
    if (!items.length) return null;
    const lines = items.map(
      (i) => `• ${i.qty}× ${i.product.name}${i.size ? ` (${i.size})` : ''} — ${i.line} DA`
    );
    const msg = [
      'Salam Intik 👋',
      'Je voudrais commander :',
      '',
      ...lines,
      '',
      `Total : ${total} DA`,
      '',
      `Nom : ${form.name || '—'}`,
      `Téléphone : ${form.phone || '—'}`,
      form.mode === 'Livraison' ? `Adresse : ${form.address || '—'}` : 'Mode : À emporter',
      `Restaurant : ${form.branch}`,
      form.note ? `Note : ${form.note}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [items, total, form]);

  if (!items.length) {
    return (
      <div className="pagehead">
        <div className="container empty">
          <h2>Ton panier a faim.</h2>
          <p>Ajoute un burger, une loaded fries ou des crispy balls — on s'occupe du reste.</p>
          <a className="btn btn--ink" href="#/menu">Voir le menu</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pagehead">
        <div className="container">
          <p className="eyebrow">Étape finale</p>
          <h1 className="display h1">Votre commande</h1>
        </div>
      </div>

      <div className="order">
        <div className="container order__grid">
          {/* ---- cart ---- */}
          <div>
            <div className="cartlines">
              {items.map((i) => (
                <div className="cartline" key={i.key}>
                  <div className="cartline__thumb">
                    {i.product.img ? (
                      <img src={i.product.img} alt="" />
                    ) : (
                      <span>{i.product.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <p className="cartline__name">{i.product.name}</p>
                    <p className="cartline__sub">
                      {i.size ? `Format ${i.size} — ` : ''}{i.unit} DA l'unité
                    </p>
                    <div className="qty">
                      <button aria-label="Réduire" onClick={() => setQty(i.key, i.qty - 1)}>−</button>
                      <strong>{i.qty}</strong>
                      <button aria-label="Augmenter" onClick={() => setQty(i.key, i.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="cartline__right">
                    <span className="cartline__price">{i.line} DA</span>
                    <button className="cartline__rm" onClick={() => remove(i.key)}>Retirer</button>
                  </div>
                </div>
              ))}
            </div>
            <p className="note">{CONFIG.deliveryNote}</p>
          </div>

          {/* ---- details + whatsapp ---- */}
          <div className="order__panel">
            <h3>Vos infos</h3>
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input id="name" value={form.name} onChange={set('name')} placeholder="Votre nom" />
            </div>
            <div className="field">
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" value={form.phone} onChange={set('phone')} placeholder="0X XX XX XX XX" />
            </div>
            <div className="field">
              <span className="loc__label">Mode</span>
              <div className="radios">
                {['Livraison', 'À emporter'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`chip ${form.mode === m ? 'chip--on' : ''}`}
                    style={{ padding: '10px 16px', fontSize: 12 }}
                    onClick={() => setForm((f) => ({ ...f, mode: m }))}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            {form.mode === 'Livraison' && (
              <div className="field">
                <label htmlFor="addr">Adresse de livraison</label>
                <textarea id="addr" value={form.address} onChange={set('address')} placeholder="Rue, quartier, repère…" />
              </div>
            )}
            <div className="field">
              <span className="loc__label">Restaurant</span>
              <div className="radios">
                {BRANCHES.map((b) => (
                  <button
                    key={b.city}
                    type="button"
                    className={`chip ${form.branch === b.city ? 'chip--on' : ''}`}
                    style={{ padding: '10px 16px', fontSize: 12 }}
                    onClick={() => setForm((f) => ({ ...f, branch: b.city }))}
                  >
                    {b.city}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label htmlFor="note">Note (optionnel)</label>
              <input id="note" value={form.note} onChange={set('note')} placeholder="Sans oignons, sauce à part…" />
            </div>

            <div className="totalrow">
              <span>Total</span>
              <strong>{total} DA</strong>
            </div>

            <a
              className="btn btn--accent btn--block"
              style={{ height: 56 }}
              href={waHref}
              target="_blank"
              rel="noreferrer"
            >
              <WaIcon /> Commander sur WhatsApp
            </a>
            <button
              className="cartline__rm"
              style={{ justifySelf: 'center' }}
              onClick={clear}
            >
              Vider le panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
