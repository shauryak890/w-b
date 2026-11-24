// Whites & Brights Academy — content from the 2026–27 training brochure.
import {
  PiStorefrontLight,
  PiHandshakeLight,
  PiTShirtLight,
  PiWrenchLight,
  PiCertificateLight,
  PiBookOpenTextLight,
  PiChalkboardTeacherLight,
  PiClipboardTextLight,
  PiUsersLight,
  PiLifebuoyLight,
} from 'react-icons/pi';
import { WHATSAPP_BASE } from './business';

export const EDITION = '2026–27';
export const HEAD_OFFICE = 'Keshari Nagar, Patna – 800024';
export const GST_NOTE = '+ 18% GST per trainee';

export const stats = [
  { value: '05', label: 'Role-based programs across three levels' },
  { value: '10–60', label: 'Days of structured, day-by-day training' },
  { value: '03', label: 'Live Whites & Brights outlets in Patna' },
  { value: '25', label: 'Point outlet SOP the curriculum is mapped to' },
];

export const audiences = [
  { icon: PiStorefrontLight, title: 'Aspiring owners', text: 'Planning a laundry or franchise outlet and want to understand it before investing.' },
  { icon: PiHandshakeLight, title: 'Franchise teams', text: 'Managers and staff joining a new Whites & Brights outlet.' },
  { icon: PiTShirtLight, title: 'Production staff', text: 'Washermen and pressmen ready to upskill into premium care.' },
  { icon: PiWrenchLight, title: 'Technicians', text: 'Electrical and mechanical staff moving into laundry equipment.' },
];

// curriculum rows are [days, topic, detail]
export const programs = [
  {
    code: 'F1',
    level: 'Foundation',
    title: 'Business & Store Operations',
    summary: 'The complete daily playbook of a Whites & Brights outlet — from the first customer of the morning to the day-end report.',
    days: 10,
    fee: 16495,
    format: 'Classroom + live outlet floor',
    idealFor: 'Owners, store managers, supervisors, riders',
    outcome: "Run a single outlet's daily operations to Whites & Brights standards.",
    curriculum: [
      ['Day 01', 'The laundry & dry-cleaning industry', 'Market, customers, service categories'],
      ['Day 02', 'Service menu & pricing basics', 'Wash, dry clean, press, specialty care'],
      ['Day 03', 'Commercial equipment essentials', 'Washer, dryer, steam press, boiler'],
      ['Day 04', 'Opening, closing & daily checklists', 'Built on the W&B outlet SOP'],
      ['Day 05', 'Staff roles, shifts & grooming', 'Who does what, to what standard'],
      ['Day 06', 'Reception, inspection & intake', 'Damage checks before acceptance'],
      ['Day 07', 'Booking, tagging & CRM', 'Zero mix-up order handling'],
      ['Day 08', 'Pickup & delivery operations', 'Routing, handover, collections'],
      ['Day 09', 'Quality check, packing & storage', 'The final gate before delivery'],
      ['Day 10', 'Billing, cash & daily KPIs', 'Closing the day with clean numbers'],
    ],
  },
  {
    code: 'F2',
    level: 'Foundation',
    title: 'Laundry Service Foundation',
    summary: 'Safe, consistent garment processing for new production staff — from intake to a finished, packed order.',
    days: 10,
    fee: 16495,
    format: 'Hands-on at a live outlet',
    idealFor: 'Washermen, pressmen, new production staff',
    outcome: 'Process everyday garments safely and consistently, start to finish.',
    curriculum: [
      ['Day 01', 'Professional vs home laundry', 'Why process discipline matters'],
      ['Day 02', 'Fabrics, fibres & care labels', 'Reading a garment before touching it'],
      ['Day 03', 'Inspection, sorting & tagging', 'White, dark, colour, delicate, dry-clean'],
      ['Day 04', 'Wash programs', 'Temperature, load, dosing, spin'],
      ['Day 05', 'Drying & shrinkage control', 'Right heat for the right fabric'],
      ['Day 06', 'Detergents & chemical safety', 'Handling, storage, dosing'],
      ['Day 07', 'Stain identification & spotting', 'Using the W&B stain chart'],
      ['Day 08', 'Steam pressing fundamentals', 'Shirts, trousers, everyday wear'],
      ['Day 09', 'Folding, packing & handover', 'Presentation that earns reviews'],
      ['Day 10', 'Safety, hygiene & machine care', 'Lint, leaks and daily checks'],
    ],
  },
  {
    code: 'A1',
    level: 'Advanced',
    title: 'Business & Operations Management',
    summary: 'Run outlets as a business — economics, people, quality systems and growth across one store or many.',
    days: 30,
    fee: 49495,
    format: 'Classroom, outlet & field visits',
    idealFor: 'Store & area managers, project managers, sales roles',
    outcome: 'Manage one or more outlets as a profitable, well-run business.',
    curriculum: [
      ['Days 01–03', 'Unit economics', 'Pricing, average order value, margins'],
      ['Days 04–06', 'Store setup & fit-out planning', 'Layout, interiors, workflow'],
      ['Days 07–09', 'Equipment selection & capacity', 'Matching machines to demand'],
      ['Days 10–12', 'Multi-outlet & franchise standards', 'Consistency at scale'],
      ['Days 13–15', 'Workflow & turnaround control', 'Hitting 24–48 hour promises'],
      ['Days 16–18', 'Hiring, training & performance', 'Building a dependable team'],
      ['Days 19–21', 'CRM, app & reporting', 'Running the store on data'],
      ['Days 22–24', 'Quality audits & complaints', 'Resolution within 24–48 hours'],
      ['Days 25–27', 'Local marketing & B2B accounts', 'Hotels, hostels, corporates'],
      ['Days 28–30', 'P&L, cost control & break-even', 'The numbers that matter'],
    ],
  },
  {
    code: 'A2',
    level: 'Advanced',
    title: 'Garment Care & Finishing',
    summary: 'The techniques behind premium, delicate and high-value garment care, for experienced production staff.',
    days: 30,
    fee: 32995,
    format: 'Hands-on at a live outlet',
    idealFor: 'Experienced washermen, ironing professionals',
    outcome: 'Handle premium and delicate garments with confidence.',
    curriculum: [
      ['Days 01–03', 'Advanced fabric & fibre identification', 'Blends, finishes, construction'],
      ['Days 04–06', 'Professional stain removal', 'The spotting board, step by step'],
      ['Days 07–09', 'Dry cleaning process & solvents', 'What goes in the machine, and why'],
      ['Days 10–12', 'Wet cleaning for delicates', 'Water-based care for sensitive fabric'],
      ['Days 13–15', 'Silk, wool, leather & designer wear', 'High-value garment protocols'],
      ['Days 16–18', 'Chemical selection & dosing', 'Right product, right quantity'],
      ['Days 19–21', 'Steam finishing & tensioning', 'Form, puff and tension equipment'],
      ['Days 22–24', 'Sarees, lehengas & ethnic wear', 'Embellishment-safe finishing'],
      ['Days 25–27', 'Defect detection & re-processing', 'Catching faults before customers do'],
      ['Days 28–30', 'Productivity & resource efficiency', 'Less water, energy and rework'],
    ],
  },
  {
    code: 'S1',
    level: 'Specialist',
    title: 'Laundry Technical Specialist',
    summary: 'Installation, maintenance and repair of the complete commercial laundry line — for the people who keep an outlet running.',
    days: 60,
    fee: 76995,
    format: 'Workshop + live equipment',
    idealFor: 'Technicians, electrical & mechanical staff',
    outcome: 'Install, maintain and repair a complete outlet equipment line.',
    curriculum: [
      ['Days 01–06', 'Washer & dryer technology', 'Commercial machine families'],
      ['Days 07–12', 'Components & working principles', 'Motors, drums, controllers'],
      ['Days 13–18', 'Dry cleaning machine systems', 'Filters, still, solvent handling'],
      ['Days 19–24', 'Electrical & mechanical basics', 'Wiring, MCBs, earthing, belts'],
      ['Days 25–30', 'Boiler, steam & water systems', 'Steam lines, filtration, drainage'],
      ['Days 31–36', 'Installation & commissioning', 'Levelling, calibration, test runs'],
      ['Days 37–42', 'Preventive maintenance', 'Daily, weekly, monthly schedules'],
      ['Days 43–48', 'Fault diagnosis', 'Error codes, symptoms, root cause'],
      ['Days 49–54', 'Safety & compliance', 'Lock-out, PPE, fire safety'],
      ['Days 55–60', 'Spares, AMC & uptime', 'Planning to keep machines running'],
    ],
  },
];

export const MAX_DAYS = Math.max(...programs.map((p) => p.days));

export const tracks = [
  { from: 'F1', to: 'A1', title: 'Owner & manager track' },
  { from: 'F2', to: 'A2', title: 'Garment-care track' },
  { from: 'F2', to: 'S1', title: 'Technical track' },
];

export const enrolSteps = [
  { title: 'Enquire', text: 'Call or WhatsApp to discuss your role, experience and goals.' },
  { title: 'Choose', text: 'We match you to the right program and share batch dates.' },
  { title: 'Confirm', text: 'Pay the program fee in full to reserve your seat.' },
  { title: 'Begin', text: 'Report to the training outlet with a valid ID on day one.' },
];

export const included = [
  { icon: PiCertificateLight, title: 'Certificate', text: 'Issued by WNB Cleantech Pvt. Ltd. on completion' },
  { icon: PiBookOpenTextLight, title: 'Handbook', text: 'W&B outlet SOP and stain treatment chart' },
  { icon: PiChalkboardTeacherLight, title: 'Live practice', text: 'Sessions inside working Whites & Brights outlets' },
  { icon: PiClipboardTextLight, title: 'Assessment', text: 'Module checks and a final practical test' },
  { icon: PiUsersLight, title: 'Small batches', text: 'One-to-one guidance on the floor' },
  { icon: PiLifebuoyLight, title: 'Support', text: '30 days of post-training doubt support' },
];

export const faqs = [
  {
    q: 'Do I need prior experience?',
    a: 'Not for Foundation programs. Advanced and Specialist programs suit those with a Foundation course or a year on a laundry floor.',
  },
  {
    q: 'What language is training in?',
    a: 'Sessions are delivered in Hindi and English, with hands-on demonstration throughout.',
  },
  {
    q: 'Can franchise partners enrol staff?',
    a: 'Yes. Franchise partners can enrol their teams — ask us about group batches.',
  },
  {
    q: 'How is the fee paid?',
    a: 'In full before the batch begins, by bank transfer. 18% GST applies. We share the account details when you confirm your seat.',
  },
];

export const formatFee = (fee) => `₹${fee.toLocaleString('en-IN')}`;

// WhatsApp link with the enquiry pre-written (optionally for one program)
export const enquiryUrl = (program) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(
    program
      ? `Hello, I'd like to know more about the ${program.code} ${program.title} program at Whites & Brights Academy.`
      : "Hello, I'd like to know more about the Whites & Brights Academy training programs."
  )}`;
