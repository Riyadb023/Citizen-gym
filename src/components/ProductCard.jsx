import { useState } from 'react';
import { useCart, priceOf } from '../cart.jsx';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [size, setSize] = useState(
    product.sizes ? (product.sizes.M ? 'M' : Object.keys(product.sizes)[0]) : null
  );
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product.id, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  const price = priceOf(product, size);
  const minPrice = product.sizes ? Math.min(...Object.values(product.sizes)) : product.price;

  return (
    <article className="card reveal">
      {product.img ? (
        <div className="card__media">
          <img src={product.img} alt={product.name} loading="lazy" />
        </div>
      ) : (
        <div className="card__media card__media--typo">
          <span>{product.name}</span>
        </div>
      )}
      <div className="card__body">
        <div className="card__head">
          <h3 className="card__name">{product.name}</h3>
          {product.sizes && (
            <div className="card__sizes" role="group" aria-label={`Format ${product.name}`}>
              {Object.keys(product.sizes).map((s) => (
                <button
                  key={s}
                  className={`chip ${s === size ? 'chip--on' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="card__desc">{product.desc}</p>
        <div className="card__foot">
          <span className="card__price">
            {product.sizes && price === minPrice ? (
              <>dès {price} <small>DA</small></>
            ) : (
              <>{price} <small>DA</small></>
            )}
          </span>
          <button
            className={`add ${added ? 'add--on' : ''}`}
            onClick={onAdd}
            aria-label={`Ajouter ${product.name} à la commande`}
          >
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </article>
  );
}
