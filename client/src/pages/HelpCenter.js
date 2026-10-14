import React from 'react';
import { Box, Container, Grid, SimpleGrid, Heading, Text, Stack, Icon, Flex, Link } from '@chakra-ui/react';
import {
  PiCalendarCheckLight,
  PiDeviceMobileLight,
  PiWhatsappLogoFill,
  PiPhoneLight,
  PiBookOpenLight,
  PiTruckLight,
  PiCurrencyInrLight,
  PiUserCircleLight,
  PiListChecksLight,
  PiBriefcaseLight,
  PiArrowUpRight,
} from 'react-icons/pi';
import { Link as RouterLink } from 'react-router-dom';
import PageHero, { SectionIntro } from '../components/PageHero';
import FaqList from '../components/FaqList';
import { MotionBox, Reveal, StaggerGroup, Accent, Bezel, fadeUp, Label } from '../components/ui';
import { EASE } from '../theme';
import { faqCategories } from '../data/faq';
import { PLAY_STORE_URL, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

const quickActions = [
  { icon: PiCalendarCheckLight, label: 'Book a pickup', sub: 'Takes a minute', to: '/contact' },
  { icon: PiDeviceMobileLight, label: 'Track an order', sub: 'In the W&B app', href: PLAY_STORE_URL },
  { icon: PiWhatsappLogoFill, label: 'WhatsApp us', sub: 'Fastest reply', href: WHATSAPP_URL, color: '#25D366' },
  { icon: PiPhoneLight, label: 'Call us', sub: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
];

const topics = [
  {
    icon: PiBookOpenLight,
    title: 'Getting started',
    links: [
      { label: 'Services & full price list', to: '/services' },
      { label: 'How pickup works', to: '/faq' },
      { label: 'Outlets & service areas', to: '/contact' },
    ],
  },
  {
    icon: PiTruckLight,
    title: 'Orders & delivery',
    links: [
      { label: 'Turnaround times', to: '/faq' },
      { label: 'Same-day express', to: '/services?tab=5' },
      { label: 'Track your order in the app', href: PLAY_STORE_URL },
    ],
  },
  {
    icon: PiCurrencyInrLight,
    title: 'Payments & offers',
    links: [
      { label: 'Payment methods', to: '/faq' },
      { label: 'Monthly subscriptions', to: '/services?tab=6' },
      { label: '25% off your first order', to: '/contact' },
    ],
  },
  {
    icon: PiUserCircleLight,
    title: 'Account & app',
    links: [
      { label: 'Get the Android app', href: PLAY_STORE_URL },
      { label: 'Delete your account', to: '/delete-account' },
      { label: 'Privacy policy', to: '/policies/privacy-policy' },
    ],
  },
  {
    icon: PiListChecksLight,
    title: 'Policies',
    links: [
      { label: 'Terms of service', to: '/policies/terms-of-service' },
      { label: 'Damaged or lost items', to: '/faq' },
      { label: 'Privacy & data', to: '/policies/privacy-policy' },
    ],
  },
  {
    icon: PiBriefcaseLight,
    title: 'Business & partners',
    links: [
      { label: 'Business / bulk laundry', to: '/contact?enquiry=business' },
      { label: 'Franchise opportunities', to: '/franchise' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

const popular = faqCategories.flatMap((c) => c.questions.slice(0, 1)).concat(faqCategories[0].questions[1]);

const TopicLink = ({ link }) => (
  <Link
    as={link.to ? RouterLink : 'a'}
    to={link.to}
    href={link.href}
    target={link.href ? '_blank' : undefined}
    rel={link.href ? 'noopener noreferrer' : undefined}
    role="group"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    py={3}
    borderTop="1px solid"
    borderColor="gray.100"
    fontSize="sm"
    color="gray.700"
    _hover={{ color: 'ink.900' }}
  >
    {link.label}
    <Icon as={PiArrowUpRight} color="gray.400" transition={`transform 0.4s ${EASE}`} _groupHover={{ transform: 'translate(2px,-2px)', color: 'ink.900' }} />
  </Link>
);

export default function HelpCenter() {
  usePageMeta('Help Centre', 'Quick actions, guides and answers for Whites & Brights customers.');
  return (
    <Box as="main">
      <PageHero
        eyebrow="Help centre"
        title={
          <>
            How can we <Accent>help?</Accent>
          </>
        }
        description="Quick actions, guides and answers — or reach a real person in a few taps."
      >
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={3}>
          {quickActions.map((a) => (
            <Box
              key={a.label}
              as={a.to ? RouterLink : 'a'}
              to={a.to}
              href={a.href}
              target={a.href && a.href.startsWith('http') ? '_blank' : undefined}
              rel={a.href && a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              role="group"
              p={{ base: 5, md: 6 }}
              borderRadius="24px"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              transition={`all 0.45s ${EASE}`}
              _hover={{ borderColor: 'ink.900', transform: 'translateY(-2px)' }}
            >
              <Flex justify="space-between" align="flex-start">
                <Icon as={a.icon} boxSize={7} color={a.color || 'ink.900'} />
                <Icon as={PiArrowUpRight} boxSize={4} color="gray.400" transition={`transform 0.4s ${EASE}`} _groupHover={{ transform: 'translate(2px,-2px)', color: 'ink.900' }} />
              </Flex>
              <Text mt={8} fontWeight={500} color="ink.900" fontSize={{ base: 'md', md: 'lg' }}>{a.label}</Text>
              <Text fontSize="sm" color="gray.500">{a.sub}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </PageHero>

      {/* Topics */}
      <Box as="section" bg="white" py={{ base: 24, md: 32 }}>
        <Container>
          <SectionIntro eyebrow="Browse topics" title={<>Find your way <Accent>around.</Accent></>} />
          <StaggerGroup stagger={0.06}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4}>
              {topics.map((t) => (
                <MotionBox key={t.title} variants={fadeUp} h="100%">
                  <Bezel h="100%" inner={{ p: { base: 6, md: 7 } }}>
                    <Flex align="center" gap={3} mb={5}>
                      <Flex w="44px" h="44px" borderRadius="14px" bg="gray.50" border="1px solid" borderColor="gray.100" align="center" justify="center">
                        <Icon as={t.icon} boxSize={5} color="ink.900" />
                      </Flex>
                      <Heading fontSize="xl" fontWeight={500} color="ink.900">{t.title}</Heading>
                    </Flex>
                    <Box>
                      {t.links.map((l) => (
                        <TopicLink key={l.label} link={l} />
                      ))}
                    </Box>
                  </Bezel>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Popular questions */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 32 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Label mb={6}>Popular questions</Label>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                What people <Accent>ask most.</Accent>
              </Heading>
              <Link as={RouterLink} to="/faq" mt={8} display="inline-flex" alignItems="center" gap={2} fontWeight={500} color="ink.900" borderBottom="1px solid" borderColor="ink.900" pb={0.5}>
                See all FAQs <Icon as={PiArrowUpRight} />
              </Link>
            </Reveal>
            <Reveal>
              <Stack>
                <FaqList items={popular} />
              </Stack>
            </Reveal>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
