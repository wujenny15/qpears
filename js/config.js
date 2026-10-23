/* Site settings — change these instead of editing every HTML page. */
const SITE = {
  name: "Qpears",
  squareUrl: "https://qpears.square.site",
  email: "hello@qpears.example",
  logo: "assets/logo.svg",
  year: 2026,
  nav: [
    { id: "home", href: "index.html", label: "Home" },
    { id: "shop", href: "shop.html", label: "Shop" },
    { id: "about", href: "about.html", label: "About" },
    { id: "contact", href: "contact.html", label: "Contact" }
  ]
};

const PRODUCTS = [
  {
    id: "seed",
    name: "Seed of Doubt",
    price: 4,
    image: "assets/seed.svg",
    art: "art-gold",
    blurb: "A single pear seed, archived in a jar you will immediately lose.",
    shopBlurb: "Plant it, worry about it, or keep it as a roommate with no rent.",
    status: "Limited",
    featured: true
  },
  {
    id: "sticker",
    name: "Support Sticker",
    price: 3,
    image: "assets/sticker.svg",
    art: "art-leaf",
    blurb: "Emotional, unlicensed, and likely to peel during an important meeting.",
    shopBlurb: "Laptop-ready. Therapist-unlicensed. Slightly sticky, like the brand.",
    status: "In stock",
    featured: true
  },
  {
    id: "keychain",
    name: "Miniature Pear",
    price: 8,
    image: "assets/keychain.svg",
    art: "art-cream",
    blurb: "A keychain so small your keys will form a committee about it.",
    shopBlurb: "World’s smallest pear, a claim disputed by several confident grapes.",
    status: "In stock",
    featured: true
  },
  {
    id: "soap",
    name: "Pocket Soap",
    price: 6,
    image: "assets/soap.svg",
    art: "art-coral",
    blurb: "Washes one finger. Ambition is sold as a separate SKU.",
    shopBlurb: "Smells like effort. Lasts one dramatic handwash.",
    status: "In stock",
    featured: true
  },
  {
    id: "sock",
    name: "Pear of Socks",
    price: 7,
    image: "assets/sock.svg",
    art: "art-gold",
    blurb: "One sock. The other is a metaphor and cannot be shipped.",
    shopBlurb: "One sock. The other is a metaphor and cannot be shipped.",
    status: "In stock",
    featured: false
  },
  {
    id: "pin",
    name: "This Is Fine Pin",
    price: 9,
    image: "assets/pin.svg",
    art: "art-leaf",
    blurb: "Enamel pear, mild crisis, brunch-appropriate.",
    shopBlurb: "Enamel pear, mild crisis, brunch-appropriate.",
    status: "In stock",
    featured: false
  },
  {
    id: "crumb",
    name: "Mystery Crumb",
    price: 2,
    image: "assets/crumb.svg",
    art: "art-cream",
    blurb: "Could be a snack. Could be a relic. We have not asked science.",
    shopBlurb: "Could be a snack. Could be a relic. We have not asked science.",
    status: "In stock",
    featured: false
  },
  {
    id: "eraser",
    name: "Mistake Eraser",
    price: 5,
    image: "assets/eraser.svg",
    art: "art-coral",
    blurb: "Removes pencil. Leaves the email. We are a shop, not a time machine.",
    shopBlurb: "Removes pencil. Leaves the email. We are a shop, not a time machine.",
    status: "In stock",
    featured: false
  }
];
