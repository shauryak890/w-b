// Service catalogue + price lists. `tab` keeps old `/services?tab=N` links working.
import {
  PiWashingMachineLight,
  PiCoatHangerLight,
  PiTShirtLight,
  PiHouseLineLight,
  PiLightningLight,
  PiCalendarCheckLight,
} from 'react-icons/pi';

const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  {
    id: 'laundry-by-kg',
    tab: 1,
    icon: PiWashingMachineLight,
    title: 'Laundry by KG',
    short: 'Laundry by KG',
    from: '₹70',
    unit: '/ kg',
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
        items: [
          { name: 'Wash & Fold', price: '₹70/kg', time: '48 hrs' },
          { name: 'Wash & Iron', price: '₹80/kg', time: '48 hrs' },
          { name: 'Premium Laundry', price: '₹160/kg', time: '48 hrs' },
          { name: 'Woolen Laundry', price: '₹179/kg', time: '72 hrs' },
        ],
      },
    ],
  },
  {
    id: 'dry-cleaning',
    tab: 2,
    icon: PiCoatHangerLight,
    title: 'Dry Cleaning',
    short: 'Dry Cleaning',
    from: '₹39',
    unit: '/ piece',
    image: img('photo-1545173168-9f1947eebb7f'),
    description:
      'For delicate fabrics, formal wear and anything that needs more than a wash — sarees, lehengas, suits and sherwanis.',
    features: [
      'Silk, wool and delicate fabrics handled by hand',
      'Specialised stain treatment',
      'Hand-finished details and pressing',
      'Eco-friendly solvents',
    ],
    tables: [
      {
        title: "Women's wear",
        items: [
          { name: 'Lehenga Choli', price: '₹199+', time: '72 hrs' },
          { name: 'Top', price: '₹69+', time: '48 hrs' },
          { name: 'Leggings', price: '₹49+', time: '48 hrs' },
          { name: 'Cape Top', price: '₹149+', time: '48 hrs' },
          { name: 'Skirt', price: '₹149+', time: '48 hrs' },
          { name: 'Blouse', price: '₹69+', time: '48 hrs' },
          { name: 'Gown', price: '₹249+', time: '72 hrs' },
          { name: 'Dress', price: '₹199+', time: '72 hrs' },
          { name: 'Saree', price: '₹199+', time: '72 hrs' },
          { name: 'Dupatta', price: '₹49+', time: '48 hrs' },
          { name: 'Sharara / Gharara', price: '₹249+', time: '72 hrs' },
          { name: 'Anarkali', price: '₹199+', time: '72 hrs' },
        ],
      },
      {
        title: "Men's wear",
        items: [
          { name: 'Kurta Pajama', price: '₹99+', time: '48 hrs' },
          { name: 'Shirt', price: '₹79+', time: '48 hrs' },
          { name: 'T-shirt', price: '₹69+', time: '48 hrs' },
          { name: 'Pants / Trousers', price: '₹89+', time: '48 hrs' },
          { name: 'Jeans', price: '₹99+', time: '48 hrs' },
          { name: 'Suit (2 piece)', price: '₹499+', time: '72 hrs' },
          { name: 'Suit (3 piece)', price: '₹599+', time: '72 hrs' },
          { name: 'Blazer / Coat', price: '₹299+', time: '72 hrs' },
          { name: 'Sherwani', price: '₹499+', time: '72 hrs' },
          { name: 'Indo-Western', price: '₹399+', time: '72 hrs' },
        ],
      },
      {
        title: "Children's wear",
        items: [
          { name: 'Shirt / T-shirt', price: '₹49+', time: '48 hrs' },
          { name: 'Pants / Jeans', price: '₹59+', time: '48 hrs' },
          { name: 'Dress', price: '₹99+', time: '48 hrs' },
          { name: 'Kurta Pajama', price: '₹79+', time: '48 hrs' },
          { name: 'Lehenga / Ethnic wear', price: '₹149+', time: '72 hrs' },
          { name: 'School uniform (set)', price: '₹89+', time: '48 hrs' },
          { name: 'Baby clothes (under 2 yrs)', price: '₹39+', time: '48 hrs' },
        ],
      },
    ],
  },
  {
    id: 'steam-ironing',
    tab: 3,
    icon: PiTShirtLight,
    title: 'Steam Ironing',
    short: 'Steam Ironing',
    from: '₹15',
    unit: '/ piece',
    image: img('photo-1626806787461-102c1bfaaea1'),
    description:
      'Crisp, wrinkle-free pressing for every garment, with extra care for silks and designer pieces. Most items back in 24 hours.',
    note: 'Same-day ironing available at a 20% premium.',
    features: [
      'Steam pressing for all garment types',
      'Fabric-specific temperature and handling',
      'Crisp collars and sharp creases',
      '24-hour turnaround on most items',
    ],
    tables: [
      {
        title: "Men's wear",
        items: [
          { name: 'Shirt / T-shirt', price: '₹20', time: '24 hrs' },
          { name: 'Trouser / Jeans', price: '₹20', time: '24 hrs' },
          { name: 'Coat', price: '₹100', time: '24 hrs' },
          { name: 'Pyjama — plain', price: '₹30', time: '24 hrs' },
          { name: 'Pyjama — silk / designer', price: '₹45', time: '24 hrs' },
        ],
      },
      {
        title: "Women's wear",
        items: [
          { name: 'Kurti — short', price: '₹15', time: '24 hrs' },
          { name: 'Kurti — long', price: '₹30', time: '24 hrs' },
          { name: 'Saree — silk', price: '₹150', time: '48 hrs' },
          { name: 'Saree — heavy', price: '₹130', time: '48 hrs' },
          { name: 'Saree — designer', price: '₹150', time: '48 hrs' },
          { name: 'Dupatta — plain', price: '₹15', time: '24 hrs' },
          { name: 'Dupatta — designer', price: '₹45', time: '24 hrs' },
          { name: 'Kurta — plain', price: '₹30', time: '24 hrs' },
          { name: 'Kurta — silk', price: '₹45', time: '24 hrs' },
          { name: 'Long dress', price: '₹40', time: '24 hrs' },
        ],
      },
      {
        title: 'Home furnishings',
        items: [
          { name: 'Fabric wall panel', price: '₹149+', time: '48 hrs' },
          { name: 'Fabric stool', price: '₹99+', time: '48 hrs' },
          { name: 'Designer leather chair', price: '₹299+', time: '48 hrs' },
          { name: 'Suede leather chair', price: '₹249+', time: '48 hrs' },
          { name: 'Leather chair', price: '₹199+', time: '48 hrs' },
          { name: 'Fabric chair — silk / designer', price: '₹299+', time: '48 hrs' },
          { name: 'Fabric chair — velvet', price: '₹249+', time: '48 hrs' },
          { name: 'Fabric chair — linen', price: '₹199+', time: '48 hrs' },
          { name: 'Fabric chair — cotton / poly blend', price: '₹149+', time: '48 hrs' },
        ],
      },
    ],
  },
  {
    id: 'household',
    tab: 4,
    icon: PiHouseLineLight,
    title: 'Household & Specialty',
    short: 'Household & Shoes',
    from: '₹49',
    unit: '/ item',
    image: img('photo-1629140727571-9b5c6f6267b4'),
    description:
      'Bedding, curtains and home textiles — plus shoes, bags and jackets that need a specialist rather than a machine.',
    features: [
      'All bedding sizes accommodated',
      'Deep cleaning for shoes and bags',
      'Leather, suede and down jackets',
      'Expert stain removal',
    ],
    tables: [
      {
        title: 'Home textiles',
        items: [
          { name: 'Bedsheet (single)', price: '₹149+', time: '48 hrs' },
          { name: 'Bedsheet (double)', price: '₹199+', time: '48 hrs' },
          { name: 'Duvet cover (single)', price: '₹199+', time: '72 hrs' },
          { name: 'Duvet cover (double)', price: '₹249+', time: '72 hrs' },
          { name: 'Comforter / quilt (single)', price: '₹399+', time: '96 hrs' },
          { name: 'Comforter / quilt (double)', price: '₹599+', time: '96 hrs' },
          { name: 'Curtains (per panel)', price: '₹199+', time: '72 hrs' },
          { name: 'Sofa cover (per seat)', price: '₹249+', time: '72 hrs' },
          { name: 'Pillow cover', price: '₹49+', time: '48 hrs' },
          { name: 'Table cloth', price: '₹149+', time: '48 hrs' },
          { name: 'Cushion cover', price: '₹59+', time: '48 hrs' },
        ],
      },
      {
        title: 'Shoes',
        items: [
          { name: 'Sports shoes', price: '₹249+', time: '48 hrs' },
          { name: 'Canvas shoes', price: '₹199+', time: '48 hrs' },
          { name: 'Leather shoes', price: '₹299+', time: '72 hrs' },
          { name: 'Suede shoes', price: '₹349+', time: '72 hrs' },
          { name: 'Formal shoes', price: '₹279+', time: '48 hrs' },
          { name: 'Boots', price: '₹399+', time: '72 hrs' },
          { name: 'Designer shoes', price: '₹449+', time: '72 hrs' },
        ],
      },
      {
        title: 'Bags',
        items: [
          { name: 'Handbag (small)', price: '₹399+', time: '72 hrs' },
          { name: 'Handbag (medium)', price: '₹499+', time: '72 hrs' },
          { name: 'Handbag (large)', price: '₹599+', time: '96 hrs' },
          { name: 'Backpack', price: '₹349+', time: '72 hrs' },
          { name: 'Leather bag', price: '₹599+', time: '96 hrs' },
          { name: 'Canvas bag', price: '₹299+', time: '72 hrs' },
          { name: 'Designer bag', price: '₹999+', time: '96 hrs' },
          { name: 'Clutch', price: '₹249+', time: '72 hrs' },
          { name: 'Wallet / belt', price: '₹199+', time: '48 hrs' },
        ],
      },
      {
        title: 'Jackets & coats',
        items: [
          { name: 'Leather jacket', price: '₹599+', time: '96 hrs' },
          { name: 'Suede jacket', price: '₹649+', time: '96 hrs' },
          { name: 'Winter jacket', price: '₹499+', time: '72 hrs' },
          { name: 'Down jacket', price: '₹549+', time: '96 hrs' },
          { name: 'Sports jacket', price: '₹399+', time: '72 hrs' },
          { name: 'Bomber jacket', price: '₹449+', time: '72 hrs' },
          { name: 'Designer jacket', price: '₹699+', time: '96 hrs' },
          { name: 'Wool coat', price: '₹599+', time: '96 hrs' },
          { name: 'Trench coat', price: '₹649+', time: '96 hrs' },
        ],
      },
    ],
  },
];

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
    { name: 'Silver', price: '₹650', features: ['Up to 10 kg', 'Wash & fold', 'Free pickup & delivery'] },
    { name: 'Gold', price: '₹1,100', features: ['Up to 15 kg', 'Wash & iron', 'Priority delivery', '₹50 voucher'] },
    { name: 'Platinum', price: '₹1,999', features: ['Up to 25 kg', 'Premium laundry', 'Free saree polish or blanket'] },
    { name: 'Elite Family', price: '₹2,999', features: ['Up to 40 kg', 'Mix any services', '5% extra wash', '1 steam iron free'] },
  ],
  perks: [
    'Save up to 20% on regular prices',
    'Free pickup and delivery, every time',
    'Priority service, faster turnaround',
    'Pause or cancel anytime',
  ],
};

// Order of the sticky category nav
export const navItems = [...categories, express, subscriptions].map((c) => ({
  id: c.id,
  tab: c.tab,
  label: c.short,
}));
