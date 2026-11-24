import { PiClockLight, PiTShirtLight, PiCurrencyInrLight, PiShieldCheckLight } from 'react-icons/pi';
import { startingPrice } from './services';

export const faqCategories = [
  {
    id: 'service',
    title: 'Service & timing',
    icon: PiClockLight,
    questions: [
      {
        q: 'What are your operating hours?',
        a: 'Our outlets are open Monday to Saturday from 9:00 AM. Closing times vary by outlet — Sona Market closes at 7 PM, Phulwari Sharif and R.K. Puram at 9 PM.',
      },
      {
        q: 'How long does the service take?',
        a: 'Standard turnaround is 48 hours (72–96 hours for woollens and leather jackets). Same-day ironing is available for 20% extra on the bill.',
      },
      {
        q: 'Do you offer pickup and delivery?',
        a: 'Yes — pickup and delivery are free. Book through the app, on WhatsApp, or by calling us.',
      },
    ],
  },
  {
    id: 'care',
    title: 'Garment care',
    icon: PiTShirtLight,
    questions: [
      {
        q: 'How do you handle delicate items?',
        a: 'Delicate items get special attention and are cleaned according to their care labels, using the right method and gentle detergents.',
      },
      {
        q: 'What if something gets damaged?',
        a: 'We have a comprehensive insurance policy and will reimburse you for any damage that occurs while your garments are in our care.',
      },
      {
        q: 'Do you handle stain removal?',
        a: 'Yes. We specialise in stain removal and choose the technique based on the type of stain and fabric.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & payment',
    icon: PiCurrencyInrLight,
    questions: [
      {
        q: 'How is pricing calculated?',
        a: `Everyday laundry is charged by the kilo (from ${startingPrice('laundry-by-kg').price}/kg). Dry cleaning, steam press, shoes and household items are priced per piece. The full price list is on our Services page.`,
      },
      {
        q: 'What payment methods do you accept?',
        a: 'UPI and cash. Business accounts can be billed monthly.',
      },
      {
        q: 'Do you offer any discounts?',
        a: 'New customers get 25% off their first order. You also get 15% off around your birthday and 10% off around your anniversary (once a year each), and monthly subscription plans cost less than regular prices.',
      },
    ],
  },
  {
    id: 'policies',
    title: 'Policies & security',
    icon: PiShieldCheckLight,
    questions: [
      {
        q: 'What is your privacy policy?',
        a: 'We protect your personal information and never share it with third parties. See our full privacy policy for details.',
      },
      {
        q: 'How do I track my order?',
        a: 'Every order gets a unique ID, and you can follow its status live in the Whites & Brights app.',
      },
      {
        q: 'What is your lost item policy?',
        a: 'We keep detailed records of every item and follow procedures to prevent loss. Any lost item is covered by our insurance.',
      },
    ],
  },
];
