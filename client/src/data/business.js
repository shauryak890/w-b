// Single source of truth for Whites & Brights business facts shown across the site.
// Ratings, review counts and closing times mirror the Google Maps listings (Oct 2026).

export const PHONE_DISPLAY = '+91 87093 19450';
export const PHONE_TEL = '+918709319450';
export const EMAIL = 'info@whitesandbrights.com';
export const WHATSAPP_BASE = 'https://wa.me/918709319450';
export const WHATSAPP_URL =
  WHATSAPP_BASE + '?text=' +
  encodeURIComponent('Hello, I would like to book a pickup with Whites and Brights');
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.whitesandbrights.app';
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/Whites+and+Brights+laundry+Patna';

export const outlets = [
  {
    id: 'danapur',
    name: 'Sona Market, Danapur',
    area: 'Danapur',
    address: 'Sona Market, Cant Road, Infront of Danapur Club, Danapur, Patna - 801105',
    mapUrl: 'https://maps.app.goo.gl/Q2hPJ1jRe2eEW4D66',
    rating: 4.9,
    reviews: 36,
    closes: '7 pm',
  },
  {
    id: 'phulwari',
    name: 'Anandmai Colony, Phulwari Sharif',
    area: 'Phulwari Sharif',
    address: 'Anandmai Colony, beside Canara Bank, Phulwari Sharif, Patna',
    mapUrl: 'https://maps.app.goo.gl/Bpq5nYxFDE7kg3Vy8',
    rating: 5.0,
    reviews: 55,
    closes: '9 pm',
  },
  {
    id: 'rkpuram',
    name: 'R.K. Puram, Danapur',
    area: 'Khagaul Road',
    address: 'Kalawati Complex, Ward-2, R.K. Puram, near Dream Jwal Apartment Mandir, Khagaul Road, Danapur - 801503',
    mapUrl: 'https://maps.app.goo.gl/1zTQ136dYz3fJzeLA',
    rating: 4.8,
    reviews: 13,
    closes: '9 pm',
  },
];

export const TOTAL_REVIEWS = outlets.reduce((n, o) => n + o.reviews, 0);
export const AVG_RATING = (
  outlets.reduce((n, o) => n + o.rating * o.reviews, 0) / TOTAL_REVIEWS
).toFixed(1);

// Short excerpts from public Google reviews (spelling typos corrected only)
export const reviews = [
  {
    name: 'Meena Singh',
    outlet: 'Sona Market',
    when: '6 months ago',
    text: 'Very affordable rate and super service for laundry and dry cleaning at Patna and Danapur. Free pickup and delivery from doorstep. Very good executive.',
  },
  {
    name: 'Mohit Khatri',
    outlet: 'Phulwari Sharif',
    when: '2 weeks ago',
    text: 'Best place for washing clothes and shoes with care.',
  },
  {
    name: 'Nitish Raj',
    outlet: 'Phulwari Sharif',
    when: '2 weeks ago',
    text: 'Super.. best in town.',
  },
  {
    name: 'Rajveer Rathore',
    outlet: 'Sona Market',
    when: '5 months ago',
    text: 'Best rate. Best dry cleaning and shoe cleaning. Free pickup and delivery. Recommend.',
  },
  {
    name: 'Mugdha Rao',
    outlet: 'Phulwari Sharif',
    when: 'a week ago',
    text: 'Wonderful service!',
  },
];
