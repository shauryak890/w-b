import React from 'react';
import LegalLayout, { P, Bullets, LegalContact } from '../../components/LegalLayout';
import usePageMeta from '../../hooks/usePageMeta';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <P>
        Welcome to Whites & Brights. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
      </P>
    ),
  },
  {
    id: 'service-terms',
    title: 'Service Terms',
    content: (
      <>
        <P>Our laundry and dry cleaning services are subject to the following terms:</P>
        <Bullets
          items={[
            'We reserve the right to refuse service to anyone for any reason.',
            'Service times are estimates and not guarantees.',
            'We are not responsible for items left unclaimed after 30 days.',
            'Special care instructions must be provided at drop-off.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'pricing-and-payment',
    title: 'Pricing and Payment',
    content: (
      <>
        <P>Our pricing structure and payment terms are as follows:</P>
        <Bullets
          items={[
            'Prices are subject to change without notice.',
            'Payment is required at the time of drop-off or pickup.',
            'We accept major credit cards, digital payments, and cash.',
            'Special services may incur additional charges.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Liability',
    content: (
      <>
        <P>Our liability policy includes:</P>
        <Bullets
          items={[
            'Maximum liability of 10 times the service cost for damaged items.',
            'No liability for inherent weaknesses or defects in materials.',
            'Claims must be reported within 24 hours of pickup.',
            'Proof of purchase may be required for high-value items.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'privacy-and-data',
    title: 'Privacy and Data',
    content: (
      <>
        <P>We handle your data according to our Privacy Policy, which includes:</P>
        <Bullets
          items={[
            'Collection of necessary personal information for service delivery.',
            'Secure storage of customer data.',
            'No sharing of information with third parties without consent.',
            'Regular updates on service status via email or SMS.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'modifications',
    title: 'Modifications',
    content: (
      <P>
        We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of new terms.
      </P>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: <LegalContact intro="If you have any questions about these Terms of Service, please contact us:" />,
  },
];

export default function TermsOfService() {
  usePageMeta('Terms of Service', 'The terms that apply when you use Whites & Brights laundry and dry cleaning services.');
  return <LegalLayout eyebrow="Legal" title="Terms of" accent="service." lastUpdated="May 19, 2025" sections={sections} />;
}
