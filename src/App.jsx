import { useEffect, useState } from 'react';
import { CartProvider } from './cart.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import StickyBar from './components/StickyBar.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';

const TITLES = {
  '/': 'INTIK — Born in Algiers | Burgers, Loaded Fries & Crispy Balls',
  '/menu': 'Notre menu — INTIK',
  '/commande': 'Votre commande — INTIK',
  '/restaurants': 'Nos restaurants — INTIK',
  '/histoire': 'Notre histoire — INTIK',
};

function useRoute() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route.slice(1) || '/';
}

export default function App() {
  const path = useRoute();

  useEffect(() => {
    document.title = TITLES[path] || TITLES['/'];
    if (path === '/histoire') {
      requestAnimationFrame(() =>
        document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })
      );
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [path]);

  /* scroll-reveal — one observer per route paint */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  let page;
  switch (path) {
    case '/menu':
      page = <MenuPage />;
      break;
    case '/commande':
      page = <OrderPage />;
      break;
    case '/restaurants':
      page = <LocationsPage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <CartProvider>
      <Navbar />
      <main>{page}</main>
      <Footer />
      <StickyBar />
    </CartProvider>
  );
}
