import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Grid,
  Flex,
  Stack,
  HStack,
  Icon,
  Collapse,
} from '@chakra-ui/react';
import {
  PiArrowUpRight,
  PiCaretDownBold,
  PiCheckBold,
  PiPhoneLight,
  PiQuotesFill,
} from 'react-icons/pi';
import { Link as RouterLink } from 'react-router-dom';
import { SectionIntro } from '../components/PageHero';
import FaqList from '../components/FaqList';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, Bezel, Counter, fadeUp, Label, NumberedRows } from '../components/ui';
import { EASE } from '../theme';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

const APPLY_URL = '/contact?enquiry=franchise';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1800&q=80';

const stats = [
  { value: 25000, prefix: '₹', suffix: ' Cr', label: 'Indian laundry market', note: 'Growing 8.7% a year' },
  { text: '50–60%', label: 'Profit margin', note: 'In premium urban markets' },
  { text: '16–18', label: 'Months to ROI', note: 'Average payback period' },
  { value: 80, suffix: '%', label: 'Customer retention', note: 'With subscription models' },
];

const reasons = [
  {
    title: 'Recession-proof demand',
    text: 'Clothes need cleaning in every economy. Laundry stays an essential, repeat service even in downturns.',
  },
  {
    title: 'Cash-based, predictable revenue',
    text: 'Customers pay on delivery or by subscription — healthy daily cash flow with almost no receivables.',
  },
  {
    title: 'No experience required',
    text: 'We train you and your staff end-to-end, from machine operation to customer service and accounts.',
  },
];

const models = [
  {
    tier: 'Smart Laundry Point',
    name: 'Smart Point',
    type: 'FOFO · Franchise owned, franchise operated',
    tagline: 'A compact store-front for high-traffic locations, with processing at a central facility.',
    total: '₹15,00,000',
    space: '300–350 sq.ft',
    items: [
      ['Store setup & premium interior (one-time)', '₹3,50,000'],
      ['Commercial machine package', '₹7,50,000'],
      ['POS + software + app integration', '₹1,00,000'],
      ['Delivery, marketing & chemical support kit', '₹3,00,000'],
    ],
  },
  {
    tier: 'W&B Prime Franchise',
    name: 'Prime Franchise',
    type: 'FOFO · Franchise owned, franchise operated',
    tagline: 'A complete store with in-house processing, advanced equipment and shoe care.',
    total: '₹25,10,000',
    space: '400–500 sq.ft',
    items: [
      ['Franchise fee', '₹2,50,000'],
      ['Store setup & premium interior', '₹4,00,000'],
      ['Commercial machine package', '₹9,60,000'],
      ['Vacuum steam iron press table set (×2)', '₹1,50,000'],
      ['Shoe washer with sterilisation', '₹1,20,000'],
      ['Shoe dryer (20 pair)', '₹1,10,000'],
      ['Spotting machine, 2-gun with boiler', '₹1,20,000'],
      ['POS + software + app integration', '₹1,00,000'],
      ['Delivery, marketing & chemical support kit', '₹3,00,000'],
    ],
  },
  {
    tier: 'W&B Signature Enterprise',
    name: 'Laundry Hub + 10 CC',
    type: 'FOCO · Franchise owned, company operated',
    tagline: 'A full processing hub with 10 collection centres — we run operations, you own the business.',
    total: '₹1.00–1.21 Cr',
    space: '1,500–2,000 sq.ft',
    featured: true,
    items: [
      ['Processing hub', 'All services on-site'],
      ['Collection centres included', '10'],
      ['Operations', 'Managed by W&B'],
    ],
  },
];

const support = [
  {
    title: 'Setup & training',
    items: ['Complete store setup assistance', '2-week training programme', 'Equipment operation & maintenance', 'Staff hiring and training'],
  },
  {
    title: 'Marketing & technology',
    items: ['Local marketing strategy & materials', 'Social media support', 'Proprietary POS & management software', 'Customer acquisition campaigns'],
  },
  {
    title: 'Ongoing operations',
    items: ['Supply chain management', 'Regular business reviews & coaching', '24/7 operational helpdesk', 'Continuous training & updates'],
  },
];

const testimonials = [
  {
    quote:
      'Even though we opened recently, the support team guided me through every step of the setup and training. The response from customers has been overwhelming already.',
    name: 'Poonam Singh',
    role: 'Franchise owner since July 2025',
  },
  {
    quote:
      "What started as a side venture grew into a steady, reliable income. The systems, marketing support and hands-on guidance meant I was never figuring things out alone.",
    name: 'Mukesh',
    role: 'Franchise owner since January 2026',
  },
];

const steps = [
  { title: 'Apply', text: 'Fill in a short form so we understand you, your city and your budget.' },
  { title: 'Discovery meeting', text: 'Meet the franchise team, see the numbers in detail and ask anything.' },
  { title: 'Business planning', text: 'Pick a location and format, build your plan and arrange financing with our help.' },
  { title: 'Grand opening', text: 'Sign, train, set up — and open your Whites & Brights store.' },
];

const faqs = [
  {
    q: 'Do I need prior experience in the laundry industry?',
    a: 'No. Our training programme covers everything you need to run the business, and we keep supporting you after launch.',
  },
  {
    q: 'How long does it take to open?',
    a: 'Typically 3–4 months from signing to opening — covering location selection, lease, build-out, equipment installation, hiring and training.',
  },
  {
    q: 'What ongoing fees will I pay?',
    a: 'A royalty of 6% of gross sales (support, technology and brand development) and a 2% marketing contribution. There are no hidden fees.',
  },
  {
    q: 'Can I own more than one franchise?',
    a: 'Yes. After running your first location for at least 6 months you can apply for more, with reduced franchise fees for additional units.',
  },
  {
    q: 'Which territories are available?',
    a: 'We are expanding across tier 1 and tier 2 cities in India. We will walk you through available territories during the application process.',
  },
];

/* ------------------------------------------------------------------ */

const ModelCard = ({ m }) => {
  const [open, setOpen] = useState(false);
  const dark = !!m.featured;
  const muted = dark ? 'whiteAlpha.700' : 'gray.600';
  const line = dark ? 'whiteAlpha.200' : 'gray.100';

  return (
    <Bezel h="100%" dark={dark} inner={{ bg: dark ? 'ink.900' : 'white', color: dark ? 'white' : 'ink.900', p: { base: 6, md: 8 }, display: 'flex', flexDirection: 'column' }}>
      <Text fontSize="11px" letterSpacing="0.16em" textTransform="uppercase" color={dark ? 'brand.200' : 'brand.700'} fontWeight={500}>
        {m.tier}
      </Text>
      <Heading mt={3} fontSize={{ base: '2xl', md: '28px' }} fontWeight={500}>
        {m.name}
      </Heading>
      <Text mt={2} fontSize="xs" color={muted}>{m.type}</Text>
      <Text mt={4} fontSize="sm" color={muted} minH={{ lg: '60px' }}>{m.tagline}</Text>

      <Box mt={6} pt={6} borderTop="1px solid" borderColor={line}>
        <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color={muted}>Total investment</Text>
        <Text mt={1} fontSize={{ base: '36px', lg: '32px', xl: '40px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1.1" whiteSpace="nowrap" sx={{ fontVariantNumeric: 'tabular-nums' }}>
          {m.total}
        </Text>
        <Text mt={1} fontSize="xs" color={muted}>Incl. 18% GST · {m.space}</Text>
      </Box>

      <Box mt={6} flex={1}>
        <Button
          onClick={() => setOpen((v) => !v)}
          variant="ghost"
          w="full"
          justifyContent="space-between"
          px={0}
          h={10}
          fontSize="sm"
          color={dark ? 'white' : 'ink.900'}
          _hover={{ bg: 'transparent', color: dark ? 'brand.200' : 'brand.700' }}
          rightIcon={<Icon as={PiCaretDownBold} boxSize={3} transform={open ? 'rotate(180deg)' : 'none'} transition={`transform 0.4s ${EASE}`} />}
          aria-expanded={open}
        >
          What's included
        </Button>
        <Collapse in={open} animateOpacity>
          <Stack spacing={0} pb={2}>
            {m.items.map(([label, value]) => (
              <Flex key={label} justify="space-between" gap={4} py={2.5} borderTop="1px solid" borderColor={line} fontSize="sm">
                <Text color={muted}>{label}</Text>
                <Text fontWeight={500} textAlign="right" flexShrink={0} sx={{ fontVariantNumeric: 'tabular-nums' }}>{value}</Text>
              </Flex>
            ))}
          </Stack>
        </Collapse>
      </Box>

      <Button
        as={RouterLink}
        to={APPLY_URL}
        mt={6}
        h={12}
        variant={dark ? 'light' : 'outline'}
        rightIcon={<Icon as={PiArrowUpRight} />}
      >
        {dark ? 'Talk to us about Signature' : `Apply for ${m.name}`}
      </Button>
    </Bezel>
  );
};

export default function Franchise() {
  usePageMeta('Franchise Opportunity', 'Own a Whites & Brights laundry franchise. Compare Smart Point, Prime and Signature models, investment and support.');
  return (
    <Box as="main">
      {/* Hero — full-bleed photo */}
      <Box as="section" position="relative" bg="ink.900" color="white" overflow="hidden">
        <Box position="absolute" inset={0} bgImage={`url(${HERO_IMAGE})`} bgSize="cover" bgPosition="center" />
        <Box position="absolute" inset={0} bgGradient="linear(to-r, rgba(6,29,35,0.95) 0%, rgba(6,29,35,0.8) 50%, rgba(6,29,35,0.45) 100%)" />
        <Container position="relative">
          <StaggerGroup stagger={0.1} animate="show" pt={{ base: 36, md: 48 }} pb={{ base: 12, md: 16 }}>
            <MotionBox variants={fadeUp}>
              <Text as="span" display="inline-flex" alignItems="center" gap={2} px={3} py={1} borderRadius="full" border="1px solid" borderColor="whiteAlpha.300" bg="whiteAlpha.100" fontSize="11px" letterSpacing="0.18em" textTransform="uppercase">
                <Box w={1.5} h={1.5} borderRadius="full" bg="brand.300" />
                Franchise opportunity
              </Text>
            </MotionBox>
            <MotionBox variants={fadeUp} mt={8}>
              <Heading as="h1" fontSize={{ base: '46px', sm: '60px', md: '84px', xl: '96px' }} fontWeight={500} lineHeight="0.95" letterSpacing="-0.05em" maxW="980px">
                Own a laundry brand <Accent dark>people already trust.</Accent>
              </Heading>
            </MotionBox>
            <MotionBox variants={fadeUp} mt={8}>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.800" maxW="560px">
                Partner with Whites & Brights to build a profitable, recession-proof business — with our machines, software, marketing and training behind you.
              </Text>
            </MotionBox>
            <MotionBox variants={fadeUp} mt={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                <ArrowButton as={RouterLink} to={APPLY_URL} variant="light" justifyContent="space-between">
                  Apply for a franchise
                </ArrowButton>
                <Button as="a" href="#models" variant="glass" h={{ base: 12, md: 14 }} px={6}>
                  Compare models
                </Button>
              </Stack>
            </MotionBox>

            {/* Market stats */}
            <MotionBox variants={fadeUp} mt={{ base: 16, md: 24 }}>
              <SimpleGrid columns={{ base: 2, lg: 4 }} borderTop="1px solid" borderColor="whiteAlpha.200">
                {stats.map((s, i) => (
                  <Box key={s.label} pt={6} pb={2} pr={4} pl={{ base: i % 2 ? 4 : 0, lg: i ? 6 : 0 }} borderLeft={{ base: i % 2 ? '1px solid' : 'none', lg: i ? '1px solid' : 'none' }} borderColor="whiteAlpha.200">
                    <Text fontSize={{ base: '32px', md: '48px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {s.text || <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />}
                    </Text>
                    <Text mt={3} fontSize="sm" fontWeight={500}>{s.label}</Text>
                    <Text fontSize="xs" color="whiteAlpha.600">{s.note}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </MotionBox>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Why laundry */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Label mb={6}>Why laundry</Label>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                A business people use <Accent>every single week.</Accent>
              </Heading>
              <Text mt={6} color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="420px">
                Rising incomes, busier lives and urbanisation are turning laundry from a chore into a service — and the organised market is still young.
              </Text>
            </Reveal>
            <NumberedRows items={reasons} />
          </Grid>
        </Container>
      </Box>

      {/* Models */}
      <Box id="models" as="section" bg="white" py={{ base: 24, md: 36 }} scrollMarginTop="100px">
        <Container>
          <SectionIntro
            eyebrow="Franchise models"
            title={<>Three formats. <Accent>Pick your scale.</Accent></>}
            description="From a compact collection point to a full processing hub. All prices include 18% GST as per Indian Government standards."
          />
          <StaggerGroup stagger={0.08}>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4} alignItems="stretch">
              {models.map((m) => (
                <MotionBox key={m.name} variants={fadeUp} h="100%">
                  <ModelCard m={m} />
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Support */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro
            eyebrow="Support"
            title={<>You run the store. <Accent>We've got the rest.</Accent></>}
            description="End-to-end support from the day you sign, and for as long as you're open."
          />
          <StaggerGroup stagger={0.08}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 8 }}>
              {support.map((s, i) => (
                <MotionBox key={s.title} variants={fadeUp} borderTop="2px solid" borderColor={i === 0 ? 'brand.500' : 'ink.900'} pt={6}>
                  <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{s.title}</Heading>
                  <Stack spacing={3} mt={6}>
                    {s.items.map((item) => (
                      <HStack key={item} spacing={3} align="flex-start">
                        <Icon as={PiCheckBold} boxSize={3.5} color="brand.700" mt="5px" />
                        <Text color="gray.700">{item}</Text>
                      </HStack>
                    ))}
                  </Stack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro eyebrow="Franchise partners" title={<>In their <Accent>own words.</Accent></>} />
          <StaggerGroup stagger={0.1}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {testimonials.map((t) => (
                <MotionBox key={t.name} variants={fadeUp} h="100%">
                  <Bezel h="100%" inner={{ p: { base: 7, md: 10 }, display: 'flex', flexDirection: 'column' }}>
                    <Icon as={PiQuotesFill} boxSize={8} color="brand.500" />
                    <Text mt={6} fontSize={{ base: 'xl', md: '2xl' }} lineHeight="1.4" letterSpacing="-0.02em" color="ink.900" flex={1}>
                      {t.quote}
                    </Text>
                    <Flex align="center" gap={3} mt={8}>
                      <Flex w="44px" h="44px" borderRadius="14px" bg="gray.50" border="1px solid" borderColor="gray.100" align="center" justify="center" fontWeight={600} fontSize="sm" color="ink.700">
                        {t.name.split(' ').map((p) => p[0]).join('')}
                      </Flex>
                      <Box>
                        <Text fontWeight={500} color="ink.900">{t.name}</Text>
                        <Text fontSize="sm" color="gray.500">{t.role}</Text>
                      </Box>
                    </Flex>
                  </Bezel>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Process */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro
            eyebrow="How to apply"
            title={<>From first call <Accent>to grand opening.</Accent></>}
            description="Our franchise team replies within 48 hours of receiving your application."
          />
          <StaggerGroup stagger={0.1}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10, lg: 6 }}>
              {steps.map((s, i) => (
                <MotionBox key={s.title} variants={fadeUp} position="relative">
                  <Flex align="center" gap={3} mb={6}>
                    <Flex w={10} h={10} borderRadius="full" bg={i === steps.length - 1 ? 'ink.900' : 'white'} color={i === steps.length - 1 ? 'white' : 'ink.900'} border="1px solid" borderColor="gray.200" align="center" justify="center" fontWeight={500} fontSize="sm" flexShrink={0}>
                      {i + 1}
                    </Flex>
                    <Box flex={1} h="1px" bg="gray.300" display={{ base: 'none', lg: i < steps.length - 1 ? 'block' : 'none' }} />
                  </Flex>
                  <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{s.title}</Heading>
                  <Text mt={2} color="gray.600" maxW="280px">{s.text}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* FAQ */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Label mb={6}>FAQ</Label>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                Questions <Accent>franchisees ask.</Accent>
              </Heading>
              <Text mt={6} color="gray.600" maxW="380px">
                Something else on your mind? Call us on{' '}
                <Box as="a" href={`tel:${PHONE_TEL}`} color="ink.900" fontWeight={500} borderBottom="1px solid">{PHONE_DISPLAY}</Box>.
              </Text>
            </Reveal>
            <Reveal>
              <FaqList items={faqs} />
            </Reveal>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container>
          <Reveal>
            <Bezel radius={40} pad={8} inner={{ bg: 'ink.900', color: 'white', p: { base: 8, md: 16 } }}>
              <Grid templateColumns={{ base: '1fr', lg: '1.4fr 1fr' }} gap={10} alignItems="end">
                <Heading fontSize={{ base: '40px', md: '68px' }} fontWeight={500} lineHeight="0.98" letterSpacing="-0.05em">
                  Ready to build your future <Accent dark>with us?</Accent>
                </Heading>
                <Stack spacing={3} align={{ base: 'stretch', lg: 'flex-end' }}>
                  <ArrowButton as={RouterLink} to={APPLY_URL} variant="light" justifyContent="space-between">
                    Apply now
                  </ArrowButton>
                  <Button as="a" href={`tel:${PHONE_TEL}`} variant="glass" h={{ base: 12, md: 14 }} px={6} leftIcon={<Icon as={PiPhoneLight} boxSize={5} />}>
                    {PHONE_DISPLAY}
                  </Button>
                </Stack>
              </Grid>
            </Bezel>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
