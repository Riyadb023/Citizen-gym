import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from './data.js';

const CartContext = createContext(null);
const STORAGE_KEY = 'intik-cart-v1';

export function priceOf(product, size) {
  if (!product) return 0;
  if (product.sizes) return product.sizes[size] ?? product.sizes[Object.keys(product.sizes)[0]];
  return product.price;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = (id, size = null, qty = 1) =>
    setItems((prev) => {
      const key = `${id}:${size ?? ''}`;
      const found = prev.find((i) => i.key === key);
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { key, id, size, qty }];
    });

  const setQty = (key, qty) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i))
    );

  const remove = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items.map((i) => {
        const product = PRODUCTS.find((p) => p.id === i.id);
        const unit = priceOf(product, i.size);
        return { ...i, product, unit, line: unit * i.qty };
      }),
    [items]
  );

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const total = useMemo(() => detailed.reduce((n, i) => n + i.line, 0), [detailed]);

  return (
    <CartContext.Provider value={{ items: detailed, count, total, add, setQty, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
