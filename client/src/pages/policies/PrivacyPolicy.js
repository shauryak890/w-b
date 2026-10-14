import React from 'react';
import { Box, Grid, Text, SimpleGrid, Icon } from '@chakra-ui/react';
import { PiShieldCheckLight, PiLockLight, PiUserCircleCheckLight } from 'react-icons/pi';
import LegalLayout, { P, Bullets, LegalContact } from '../../components/LegalLayout';
import usePageMeta from '../../hooks/usePageMeta';

const dataCollected = [
  { category: 'Personal Information', examples: 'Name, address, phone number, email', purpose: 'Service delivery, communication' },
  { category: 'Payment Information', examples: 'Credit card details, billing address', purpose: 'Processing payments' },
  { category: 'Service Preferences', examples: 'Cleaning preferences, special instructions', purpose: 'Service customization' },
  { category: 'Usage Data', examples: 'App usage, website interactions', purpose: 'Service improvement' },
];

const security = [
  { icon: PiShieldCheckLight, title: 'Data Encryption', description: 'All sensitive data is encrypted using industry-standard protocols' },
  { icon: PiLockLight, title: 'Secure Storage', description: 'Data is stored in secure, monitored facilities' },
  { icon: PiUserCircleCheckLight, title: 'Access Control', description: 'Strict access controls and authentication measures' },
];

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <P>
        At Whites & Brights, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
      </P>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <P>We collect and process the following types of information:</P>
        <Box borderRadius="20px" bg="white" border="1px solid" borderColor="gray.200" overflow="hidden">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1.3fr 1.1fr' }} px={6} py={3} bg="gray.50" display={{ base: 'none', md: 'grid' }} fontSize="11px" letterSpacing="0.14em" textTransform="uppercase" color="gray.500">
            <Text>Category</Text>
            <Text>Examples</Text>
            <Text>Purpose</Text>
          </Grid>
          {dataCollected.map((d) => (
            <Grid key={d.category} templateColumns={{ base: '1fr', md: '1fr 1.3fr 1.1fr' }} gap={{ base: 1, md: 4 }} px={6} py={4} borderTop="1px solid" borderColor="gray.100" fontSize={{ base: 'sm', md: 'md' }}>
              <Text fontWeight={500} color="ink.900">{d.category}</Text>
              <Text color="gray.700">{d.examples}</Text>
              <Text color="gray.500">{d.purpose}</Text>
            </Grid>
          ))}
        </Box>
      </>
    ),
  },
  {
    id: 'security-measures',
    title: 'Security Measures',
    content: (
      <>
        <P>We implement various security measures to protect your information:</P>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
          {security.map((s) => (
            <Box key={s.title} p={5} borderRadius="20px" bg="white" border="1px solid" borderColor="gray.200">
              <Icon as={s.icon} boxSize={7} color="ink.900" />
              <Text mt={4} fontWeight={500} color="ink.900">{s.title}</Text>
              <Text mt={1} fontSize="sm" color="gray.600">{s.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <P>Your information is used for the following purposes:</P>
        <Bullets
          items={[
            'Providing and improving our services',
            'Processing payments and transactions',
            'Communicating about your orders and services',
            'Sending service updates and marketing communications',
            'Analyzing service usage and trends',
          ]}
        />
      </>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    content: (
      <>
        <P>We may share your information with:</P>
        <Bullets
          items={[
            'Service providers who assist in our operations',
            'Payment processors for secure transactions',
            'Legal authorities when required by law',
          ]}
        />
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: (
      <>
        <P>You have the following rights regarding your data:</P>
        <Bullets
          items={[
            'Access your personal information',
            'Request corrections to your data',
            'Request deletion of your data',
            'Opt-out of marketing communications',
            'Export your data',
          ]}
        />
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: <LegalContact intro="For privacy-related inquiries or to exercise your rights, contact our Privacy Officer:" />,
  },
];

export default function PrivacyPolicy() {
  usePageMeta('Privacy Policy', 'How Whites & Brights collects, uses and protects your personal information.');
  return <LegalLayout eyebrow="Legal" title="Privacy" accent="policy." lastUpdated="May 19, 2025" sections={sections} />;
}
