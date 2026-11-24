// Service catalogue + price list.
// Source: "Whites & Brights · Price List · November 2026". Update prices here only —
// every "from ₹…" figure on the site is calculated from these rows.
import {
  PiWashingMachineLight,
  PiCoatHangerLight,
  PiTShirtLight,
  PiHouseLineLight,
  PiSneakerLight,
  PiLightningLight,
  PiCalendarCheckLight,
  PiBuildingsLight,
} from 'react-icons/pi';

export const PRICES_EFFECTIVE = 'November 2026';

const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Rows are [name, price, unit?, note?]. Prices are per piece unless a unit is given.
// " · " in a name separates the item from its type or grade (e.g. "Saree · Heavy").
const rows = (list) => list.map(([name, price, unit, note]) => ({ name, price, unit, note }));

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export const categories = [
  {
    id: 'laundry-by-kg',
    tab: 1,
    icon: PiWashingMachineLight,
    title: 'Laundry by KG',
    short: 'Laundry by KG',
    fromUnit: 'kg',
    image: img('photo-1517677208171-0bc6725a3e60'),
    description:
      'The most economical way to handle everyday clothes. We weigh your bag and you pay only for what you send.',
    features: [
      'Washed, dried and folded',
      'Sorted by colour and fabric type',
      'Premium detergents and fabric softeners',
      'Eco-friendly options available',
    ],
    tables: [
      {
        title: 'Per kilogram',
        items: rows([
          ['Wash & Fold', 80, 'kg'],
          ['Wash & Iron', 100, 'kg'],
          ['Premium Laundry', 160, 'kg'],
          ['Woollen Laundry', 179, 'kg', '72 hrs'],
        ]),
      },
      {
        title: 'Wash & iron, per piece',
        items: rows([
          ['Shirt', 40],
          ['T-Shirt', 40],
          ['Jeans / Trouser', 40],
          ['Kurta', 40],
          ['Pajama', 30],
          ['Ganji / Vest', 25],
        ]),
      },
    ],
  },
  {
    id: 'dry-cleaning',
    tab: 2,
    icon: PiCoatHangerLight,
    title: 'Dry Cleaning',
    short: 'Dry Cleaning',
    image: img('photo-1545173168-9f1947eebb7f'),
    description:
      'For delicate fabrics, formal wear and anything that needs more than a wash — sarees, lehengas, suits, sherwanis and winter wear.',
    features: [
      'Silk, wool and delicate fabrics handled by hand',
      'Specialised stain treatment',
      'Hand-finished details and pressing',
      'Eco-friendly solvents',
    ],
    tables: [
      {
        title: 'Men',
        items: rows([
          ['Shirt', 109],
          ['T-Shirt', 109],
          ['Trouser / Pant', 109],
          ['Jeans', 109],
          ['Kurta', 139],
          ['Kurta Pajama (set) · Plain', 100, 'set'],
          ['Kurta Pajama (set) · Designer', 179, 'set'],
          ['Pajama · Plain', 59],
          ['Pajama · Woollen', 89],
          ['Pajama · Silk', 189],
          ['Ganji / Vest', 59],
          ['Waistcoat / Bandi / Nehru jacket', 149],
          ['Blazer / Jacket / Coat', 249],
          ['Suit (2 piece) · Coat + trouser', 299, 'set'],
          ['Suit (3 piece) · Coat + waistcoat + trouser', 350, 'set'],
          ['Sherwani · Normal', 499],
          ['Sherwani · Heavy', 599],
          ['Sherwani · Bridal', 799],
          ['Indo-Western', 399],
          ['Dhoti / Lungi', 149],
          ['Tie', 49],
          ['Cap / topi', 49],
        ]),
      },
      {
        title: 'Women',
        items: rows([
          ['Saree · Plain', 199],
          ['Saree · Heavy / stone work', 299],
          ['Saree · Banarasi / pure silk', 299],
          ['Blouse · Normal / cotton', 99],
          ['Blouse · Silk / heavy', 149],
          ['Ladies suit (3 piece) · Plain', 249, 'set'],
          ['Ladies suit (3 piece) · Light embroidery', 250, 'set'],
          ['Ladies suit (3 piece) · Heavy embroidery / delicate', 350, 'set'],
          ['Ladies suit (3 piece) · Very heavy designer', 399, 'set'],
          ['Ladies suit (2 piece) · No dupatta', 224, 'set'],
          ['Patiala / Salwar suit', 149, 'set'],
          ['Kameez · Normal', 169],
          ['Kameez · Heavy', 229],
          ['Kurti', 109],
          ['Suit bottom (salwar / pant)', 90],
          ['Dupatta · Normal', 90],
          ['Lehenga · Normal', 399, 'set'],
          ['Lehenga · Heavy / bridal', 549, 'set'],
          ['Lehenga part (top, bottom or dupatta, each) · Normal', 150],
          ['Lehenga part (top, bottom or dupatta, each) · Heavy', 199],
          ['Gown · Normal', 399],
          ['Gown · Heavy', 599],
          ['Anarkali · Normal', 399],
          ['Anarkali · Heavy', 499],
          ['Sharara / Gharara', 249, 'set'],
          ['Long frock suit', 149],
          ['Skirt', 99],
          ['Top', 69],
          ['Leggings', 49],
          ['Cape top', 149],
          ['Dress (western)', 199],
          ['Petticoat', 40],
          ['Long coat (ladies)', 299],
          ['Burqa / Abaya · Plain', 149],
          ['Burqa / Abaya · Embroidered', 249],
        ]),
      },
      {
        title: 'Kids',
        items: rows([
          ['Kids shirt / T-shirt', 49],
          ['Kids pants / jeans', 59],
          ['Kids kurta pajama', 79, 'set'],
          ['Kids frock · Normal', 99],
          ['Kids frock · Heavy', 150],
          ['Kids gown', 199],
          ['Kids wedding dress', 400],
          ['Kids lehenga / ethnic', 149, 'set'],
          ['Kids sherwani', 109],
          ['School uniform (set)', 89, 'set'],
          ['Baby clothes (under 2 yrs)', 39],
        ]),
      },
      {
        title: 'Woollens & winter',
        items: rows([
          ['Sweater / Cardigan', 139],
          ['Hoodie', 150],
          ['Ladies woollen top / kurti / suit', 100],
          ['Ladies woollen salwar / pajama', 80],
          ['Woollen trouser', 70],
          ['Shawl (woollen)', 150],
          ['Muffler / Stole', 49],
          ['Winter jacket', 499],
          ['Leather jacket', 599, undefined, '96 hrs'],
          ['Suede jacket', 649],
          ['Down / puffer jacket', 549],
          ['Sports jacket', 399],
          ['Bomber jacket', 449],
          ['Designer jacket', 699],
          ['Wool coat', 599],
          ['Trench coat', 649],
        ]),
      },
    ],
  },
  {
    id: 'steam-press',
    tab: 3,
    icon: PiTShirtLight,
    title: 'Steam Press & Finishing',
    short: 'Steam Press',
    image: img('photo-1626806787461-102c1bfaaea1'),
    description:
      'Crisp, wrinkle-free pressing for every garment, plus starching and polish for sarees, suits and lehengas.',
    note: 'Same-day ironing adds 20% to the bill.',
    features: [
      'Steam pressing for all garment types',
      'Fabric-specific temperature and handling',
      'Starching for a crisp finish',
      'Polish to restore sheen on ethnic wear',
    ],
    tables: [
      {
        title: 'Steam press · Men',
        items: rows([
          ['Shirt', 15],
          ['T-Shirt', 15],
          ['Trouser / Jeans', 20],
          ['Kurta · Plain', 25],
          ['Kurta · Silk', 45],
          ['Pajama · Plain', 15],
          ['Pajama · Silk / designer', 45],
          ['Coat / Blazer', 75],
          ['Sherwani', 110],
          ['Dhoti / Lungi', 30],
          ['Ganji', 15],
        ]),
      },
      {
        title: 'Steam press · Women',
        items: rows([
          ['Ladies kurti · Normal', 25],
          ['Ladies kurti · Heavy embroidery', 35],
          ['Ladies pant', 20],
          ['Palazzo', 25],
          ['Kurti + pant set', 45, 'set'],
          ['Suit set · Heavy embroidery', 55, 'set'],
          ['Saree · Normal', 60],
          ['Saree · Heavy', 130],
          ['Saree · Silk / designer', 150],
          ['Blouse · Normal', 25],
          ['Blouse · Heavy', 60],
          ['Dupatta · Plain', 15],
          ['Dupatta · Designer', 45],
          ['Lehenga', 120, 'set'],
          ['Gown / Anarkali', 200],
          ['Patiala / Salwar', 30],
          ['Kameez', 20],
          ['Long dress', 40],
          ['Ladies pajama', 15],
        ]),
      },
      {
        title: 'Steam press · Kids',
        items: rows([
          ['Baby jhabla', 10],
          ['Baby T-shirt', 10],
          ['Kids T-shirt', 12],
          ['Kids shirt', 15],
          ['Kids pant', 15],
          ['Kids shorts', 10],
          ['Kids frock', 20],
          ['Kids skirt', 15],
          ['Kids kurta', 15],
          ['Kids pajama', 12],
          ['School uniform shirt', 12],
          ['School uniform pant', 15],
          ['Kids sweater', 25],
          ['Kids jacket', 35],
          ['Kids party-wear dress', 50],
          ['Kids heavy frock', 60],
          ['Kids kurti', 15],
          ['Kids kurti (heavy embroidery)', 25],
          ['Kids palazzo', 15],
          ['Kids kurti + pant set', 35],
          ['Kids heavy embroidery suit set', 45],
        ]),
      },
      {
        title: 'Starching',
        items: rows([
          ['Shirt', 25],
          ['T-Shirt', 25],
          ['Trouser / Pajama', 25],
          ['Kurta / Kurti', 40],
          ['Kameez', 40],
          ['Blouse', 30],
          ['Patiala / Salwar', 30],
          ['Saree', 40],
          ['Lehenga', 45],
          ['Dhoti / Lungi', 40],
          ['Sherwani', 50],
          ['Jacket / Blazer', 60],
          ['Blanket', 40],
        ]),
      },
      {
        title: 'Polish (finish only)',
        items: rows([
          ['Saree polish', 100, undefined, 'Free on Platinum plan'],
          ['Gents kurta polish · Normal', 40],
          ['Gents kurta polish · Designer', 60],
          ['Suit polish · Normal embroidery', 70, 'set'],
          ['Suit polish · Heavy embroidery', 100, 'set'],
          ['Suit polish · Bridal heavy', 200, 'set'],
          ['Dupatta polish · Normal', 25],
          ['Dupatta polish · Heavy', 40],
          ['Embroidery kurti polish', 50],
          ['Embroidery palazzo polish', 30],
          ['Lehenga polish · Top', 60],
          ['Lehenga polish · Bottom', 100],
          ['Lehenga polish · Dupatta', 60],
          ['Blouse polish', 30],
          ['Skirt polish', 60],
        ]),
      },
    ],
  },
  {
    id: 'home-linen',
    tab: 4,
    icon: PiHouseLineLight,
    title: 'Home & Linen',
    short: 'Home & Linen',
    image: img('photo-1629140727571-9b5c6f6267b4'),
    description:
      'Blankets, razais, bedsheets and curtains — plus sofa covers, carpets, chairs and soft toys that are too big or too delicate for a home machine.',
    features: [
      'All bedding sizes accommodated',
      'Curtains priced per panel, carpets per sq ft',
      'Fabric and leather chair cleaning',
      'Expert stain removal',
    ],
    tables: [
      {
        title: 'Bedding & blankets',
        items: rows([
          ['Blanket · Single', 249],
          ['Blanket · Double', 349],
          ['Blanket winter offer (4 blankets)', 1500],
          ['Razai / Quilt / Comforter · Single', 399],
          ['Razai / Quilt / Comforter · Double', 599],
          ['Bedsheet · Single', 99],
          ['Bedsheet · Double', 169],
          ['Bedsheet steam press', 40],
          ['Duvet cover · Single', 199],
          ['Duvet cover · Double', 249],
          ['Pillow / cushion (whole) · Small', 249],
          ['Pillow / cushion (whole) · Large', 299],
          ['Pillow cover', 49],
          ['Cushion cover', 49],
        ]),
      },
      {
        title: 'Curtains, sofas & carpets',
        items: rows([
          ['Curtain (per panel) · Normal', 149, 'panel'],
          ['Curtain (per panel) · Heavy / lined', 249, 'panel'],
          ['Curtain steam press', 35, 'panel'],
          ['Sofa cover · Small', 150],
          ['Sofa cover · Large', 250],
          ['Carpet / Rug · Normal', 35, 'sq ft'],
          ['Carpet / Rug · Heavy', 45, 'sq ft'],
          ['Fabric chair · Cotton', 149],
          ['Fabric chair · Linen', 199],
          ['Fabric chair · Velvet', 249],
          ['Fabric chair · Silk', 299],
          ['Leather chair · Leather', 199],
          ['Leather chair · Suede', 249],
          ['Leather chair · Designer', 299],
          ['Fabric stool', 99],
          ['Wall panel', 149],
        ]),
      },
      {
        title: 'Around the house',
        items: rows([
          ['Table cloth', 149],
          ['Towel', 60],
          ['Soft toy · Small', 99],
          ['Soft toy · Medium', 199],
          ['Soft toy · Large', 299],
          ['Umbrella', 99],
          ['Tray (small)', 149],
          ['Apron / lab coat', 200],
        ]),
      },
    ],
  },
  {
    id: 'shoes-bags',
    tab: 7,
    icon: PiSneakerLight,
    title: 'Shoes & Bags',
    short: 'Shoes & Bags',
    fromUnit: 'pair',
    image: img('photo-1542291026-7eec264c27ff'),
    description:
      'Deep cleaning for sneakers, leather and suede shoes, and careful restoration for handbags, backpacks and wallets.',
    features: [
      'Sports, canvas, leather and suede shoes',
      'Heels, boots and kids shoes',
      'Handbags, backpacks and school bags',
      'Material-specific cleaning products',
    ],
    tables: [
      {
        title: 'Footwear',
        items: rows([
          ['Sports shoes', 499, 'pair'],
          ['Canvas shoes', 199, 'pair'],
          ['Leather shoes', 799, 'pair'],
          ['Suede shoes', 499, 'pair'],
          ['Formal shoes', 279, 'pair'],
          ['Boots', 399, 'pair'],
          ['Designer shoes', 449, 'pair'],
          ['Heels (ladies)', 599, 'pair'],
          ['Kids sports shoes', 200, 'pair'],
          ['Crocs / clogs', 80, 'pair'],
        ]),
      },
      {
        title: 'Bags & accessories',
        items: rows([
          ['Handbag (small)', 399],
          ['Handbag (medium)', 499],
          ['Handbag (large)', 599],
          ['Backpack', 349],
          ['Leather bag', 599],
          ['Canvas bag', 299],
          ['Designer bag', 999],
          ['Clutch', 249],
          ['School bag', 149],
          ['Wallet / Belt', 99],
        ]),
      },
    ],
  },
];

// Lowest price in a category, counting only rows sold in the category's headline unit
const lowest = (cat) =>
  Math.min(...cat.tables.flatMap((t) => t.items).filter((i) => i.unit === cat.fromUnit).map((i) => i.price));

categories.forEach((cat) => {
  cat.from = formatPrice(lowest(cat));
  cat.unit = `/ ${cat.fromUnit || 'piece'}`;
});

// { from: '₹80', unit: '/ kg' } for a category id — used by the Home page tiles
export const startingPrice = (id) => {
  const { from, unit } = categories.find((c) => c.id === id);
  return { price: from, unit };
};

export const express = {
  id: 'express',
  tab: 5,
  icon: PiLightningLight,
  short: 'Express',
  features: ['Same-day service', 'Priority processing', 'Rush pickup & delivery', 'Order updates by SMS'],
};

export const subscriptions = {
  id: 'subscriptions',
  tab: 6,
  icon: PiCalendarCheckLight,
  short: 'Subscriptions',
  plans: [
    { name: 'Silver', price: 650, features: ['10 kg a month', 'Wash & fold', 'Free pickup'] },
    { name: 'Gold', price: 1100, features: ['15 kg a month', 'Wash & iron', 'Priority service', '₹50 voucher'] },
    { name: 'Platinum', price: 1999, features: ['25 kg a month', 'Premium laundry', 'Free saree polish or blanket'] },
    { name: 'Elite Family', price: 2999, features: ['40 kg a month', 'Mix any services', '+5% extra kg', '1 steam iron free'] },
  ],
  perks: [
    'Save up to 20% on regular prices',
    'Free pickup and delivery, every time',
    'Priority service, faster turnaround',
    'Pause or cancel anytime',
  ],
};

export const business = {
  id: 'business',
  tab: 8,
  icon: PiBuildingsLight,
  short: 'Business',
  items: rows([
    ['Spa towels · Regular (wash & fold)', 65, 'kg', 'Volume discount on top'],
    ['Spa towels · Oil-based massage', 85, 'kg'],
    ['Heavy oil / stain treatment', 100, 'kg'],
    ['Premium white towels', 90, 'kg'],
    ['Bathrobe', 60],
    ['Spa bedsheet', 40],
  ]),
};

export const offers = [
  { value: '25% off', title: 'First order', text: 'On your first order with us.' },
  { value: '15% off', title: 'Birthday', text: 'From 3 days before to 7 days after your birthday, once a year.' },
  { value: '10% off', title: 'Anniversary', text: 'From 3 days before to 7 days after your anniversary, once a year.' },
];

// Order of the sticky category nav
export const navItems = [...categories, express, subscriptions, business].map((c) => ({
  id: c.id,
  tab: c.tab,
  label: c.short,
}));

// Every priced row, flattened for search: { name, price, unit, note, category, table }
export const allItems = categories.flatMap((cat) =>
  cat.tables.flatMap((t) => t.items.map((item) => ({ ...item, category: cat.title, categoryId: cat.id, table: t.title })))
);
