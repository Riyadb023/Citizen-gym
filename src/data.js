/* ------------------------------------------------------------------
   INTIK — single source of truth for all business data.
   Everything the owner needs to edit lives HERE (menu, prices,
   phone, branches, instagram). No other file needs touching.
------------------------------------------------------------------- */

export const CONFIG = {
  brand: "INTIK",
  tagline: "Intik. Born in Algiers.",
  phoneDisplay: "07 93 33 17 00",
  phoneIntl: "213793331700",
  whatsapp: "213793331700",
  // TODO: verify the exact Instagram handle before launch
  instagram: "intikburgers",
  instagramUrl: "https://www.instagram.com/intikburgers/",
  followers: "32K",
  deliveryNote:
    "Livraison : frais variables selon la zone. Contactez-nous pour commander !",
};

/* TODO: replace with the owner's real story before launch */
export const STORY = [
  "Intik, c'est une mascotte qui marche comme personne, une famille derrière le comptoir, et une obsession : le croustillant.",
  "Né à Alger, grandi sur Instagram. Le reste de l’histoire s’écrit avec vous — un burger à la fois.",
];

export const CATEGORIES = [
  { id: "burgers", label: "Burgers" },
  { id: "loaded", label: "Loaded Fries" },
  { id: "pasta", label: "Pasta" },
  { id: "sides", label: "Sides & Extras" },
  { id: "drinks", label: "Drinks" },
];

/* Prices in DA — transcribed 1:1 from the official Intik menu. */
export const PRODUCTS = [
  // ---- BURGERS ----
  {
    id: "cruncher",
    cat: "burgers",
    name: "Cruncher",
    desc: "Poulet pané, fromage, sauce classique",
    sizes: { S: 350, M: 550 },
    img: "/img/food-cruncher.jpg",
  },
  {
    id: "grillz",
    cat: "burgers",
    name: "Grillz",
    desc: "Bœuf, fromage, sauce classique",
    sizes: { S: 350, M: 550, L: 700 },
    img: "/img/food-grillz.jpg",
  },
  {
    id: "cheesyaf",
    cat: "burgers",
    name: "Cheesy AF",
    desc: "Bœuf ou poulet pané, mozzarella panée, fromage, sauce fromagère",
    price: 700,
    img: "/img/food-cheesyaf.jpg",
  },
  {
    id: "seaquel",
    cat: "burgers",
    name: "Seaquel",
    desc: "Poisson pané, crevettes panées, surimi, sauce rouille",
    price: 700,
    img: "/img/food-seaquel.jpg",
  },
  {
    id: "badguy",
    cat: "burgers",
    name: "Bad Guy",
    desc: "Bœuf, pastrami, oignons caramélisés, sauce chorizo",
    price: 700,
    img: "/img/food-badguy.jpg",
  },
  {
    id: "badgirl",
    cat: "burgers",
    name: "Bad Girl",
    desc: "Poulet pané & fumé artisanal, fromage, oignons caramélisés, sauce tomate-chorizo",
    price: 800,
    img: "/img/food-badgirl.jpg",
  },
  {
    id: "intik",
    cat: "burgers",
    name: "Intik",
    desc: "Bœuf, filet de bœuf, mozzarella panée, sauce chimichurri",
    price: 800,
    img: "/img/food-intik.jpg",
  },

  // ---- LOADED FRIES ----
  {
    id: "brux",
    cat: "loaded",
    name: "Brux",
    desc: "Poulet pané, sauce fromagère, fromage gratiné",
    price: 650,
    img: "/img/food-loadedfries.jpg",
  },
  {
    id: "chunk",
    cat: "loaded",
    name: "Chunk",
    desc: "Bœuf, gouda, sauce fromagère, fromage gratiné",
    price: 650,
    img: "/img/food-loadedfries.jpg",
  },
  {
    id: "butterchicken",
    cat: "loaded",
    name: "Butter Chicken",
    desc: "Poulet, sauce crémeuse au beurre & épices douces",
    price: 750,
    img: "/img/food-loadedfries.jpg",
  },
  {
    id: "spice",
    cat: "loaded",
    name: "Spice",
    desc: "Poulet, sauce fromagère, fromage gratiné",
    price: 750,
    img: "/img/food-loadedfries.jpg",
  },
  {
    id: "rage",
    cat: "loaded",
    name: "Rage",
    desc: "Bœuf, pastrami, sauce fromagère, sauce chorizo, fromage gratiné",
    price: 750,
    img: "/img/food-loadedfries.jpg",
  },
  {
    id: "badass",
    cat: "loaded",
    name: "Badass",
    desc: "Poulet pané & fumé artisanal, sauce tomate-chorizo & fromagère, fromage gratiné",
    price: 850,
    img: "/img/food-loadedfries.jpg",
  },

  // ---- PASTA ----
  {
    id: "mammamia",
    cat: "pasta",
    name: "Mamma Mia",
    desc: "Tagliatelles, poulet à la crème, champignons, fromage gratiné",
    price: 700,
    img: null,
  },
  {
    id: "badmf",
    cat: "pasta",
    name: "Bad MF",
    desc: "Tagliatelles, bœuf, pastrami, sauce chorizo, fromage gratiné",
    price: 750,
    img: null,
  },

  // ---- SIDES & EXTRAS ----
  {
    id: "crispz",
    cat: "sides",
    name: "Crispz",
    desc: "Frites + sauce",
    price: 150,
    img: null,
  },
  {
    id: "frizza",
    cat: "sides",
    name: "Frizza",
    desc: "Mozzarella panée + sauce",
    price: 250,
    img: null,
  },
  {
    id: "crunchbox",
    cat: "sides",
    name: "Crunchbox",
    desc: "Box poulet pané 200g + sauce",
    price: 450,
    img: null,
  },
  {
    id: "crispyballs",
    cat: "sides",
    name: "Crispy Balls",
    desc: "Poulet • bœuf • cheese (selon disponibilité) + sauce — x6 pcs",
    price: 500,
    img: "/img/food-crispyballs.jpg",
  },

  // ---- DRINKS ----
  {
    id: "soda24",
    cat: "drinks",
    name: "Soda 24cl",
    desc: "Boisson fraîche 24cl",
    price: 100,
    img: null,
  },
  {
    id: "soda33",
    cat: "drinks",
    name: "Soda 33cl",
    desc: "Boisson fraîche 33cl",
    price: 150,
    img: null,
  },
];

/* Best sellers = the posts Intik pushes hardest on Instagram. */
export const BESTSELLERS = ["intik", "badgirl", "cheesyaf", "cruncher"];

/* Full square IG posts, used in the Instagram grid. */
export const IG_POSTS = [
  { img: "/img/post-intik.jpg", alt: "Post Instagram — burger Intik" },
  { img: "/img/post-badgirl.jpg", alt: "Post Instagram — Bad Girl" },
  { img: "/img/post-cruncher.jpg", alt: "Post Instagram — Cruncher" },
  { img: "/img/post-cheesyaf.jpg", alt: "Post Instagram — Cheesy AF" },
  { img: "/img/post-badguy.jpg", alt: "Post Instagram — Bad Guy" },
  { img: "/img/post-crispyballs.jpg", alt: "Post Instagram — Crispy Balls" },
  { img: "/img/post-seaquel.jpg", alt: "Post Instagram — Seaquel" },
  { img: "/img/post-loadedfries.jpg", alt: "Post Instagram — Loaded Fries" },
];

/* TODO: confirm exact addresses / hours / extra branches with the owner */
export const BRANCHES = [
  {
    city: "Alger",
    address: "103 Rue Didouche Mourad, Alger centre",
    hours: "7/7, 11H - Minuit",
    maps: "https://www.google.com/maps/place/INTIK/@36.7646941,3.0489738,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb3001ea42dc9:0x781820e7b033796!8m2!3d36.7646941!4d3.0489738!16s%2Fg%2F11xzfs2gkl?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];
