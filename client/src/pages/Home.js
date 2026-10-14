import React, { Suspense, lazy, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Icon,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react';
import {
  PiStarFill,
  PiGoogleLogoFill,
  PiWhatsappLogoFill,
  PiArrowUpRight,
  PiWashingMachineLight,
  PiCoatHangerLight,
  PiSneakerLight,
  PiHouseLineLight,
  PiLightningLight,
  PiPhoneLight,
  PiMapPinLight,
  PiClockLight,
  PiSealCheckFill,
} from 'react-icons/pi';
import { useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  Accent,
  Eyebrow,
  ArrowButton,
  Bezel,
  fadeUp,
} from '../components/ui';
import AppPromo from '../components/AppPromo';
import { SectionIntro } from '../components/PageHero';
import { EASE } from '../theme';
import {
  outlets,
  reviews,
  AVG_RATING,
  TOTAL_REVIEWS,
  WHATSAPP_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  GOOGLE_REVIEWS_URL,
} from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

// Signature 3D soap-bubble hero — lazy so three.js stays out of the main bundle
const HeroScene = lazy(() => import('../components/three/HeroScene'));

const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMAGES = {
  folded: img('photo-1517677208171-0bc6725a3e60'),
  machines: img('photo-1545173168-9f1947eebb7f'),
  iron: img('photo-1489274495757-95c7c837b101'),
  room: img('photo-1626806787461-102c1bfaaea1'),
  home: img('photo-1582735689369-4fe89db7114c'),
};

const steps = [
  {
    title: 'Book in a minute',
    text: 'Use the app, message us on WhatsApp or just call. Pick a pickup slot that suits you.',
  },
  {
    title: 'We collect and clean',
    text: 'Every garment is tagged, sorted by fabric and colour, stain-treated, then washed or dry cleaned.',
  },
  {
    title: 'Back at your door',
    text: 'Pressed, folded and packed — delivered free within 48 hours. Express same-day if you need it.',
  },
];

const Stars = ({ size = 4, color = 'brand.400' }) => (
  <HStack spacing={0.5} color={color}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Icon key={i} as={PiStarFill} boxSize={size} />
    ))}
  </HStack>
);

/* Inline photo pill used inside the statement paragraph */
const InlineImage = ({ src, alt }) => (
  <Box
    as="span"
    role="img"
    aria-label={alt}
    display="inline-block"
    verticalAlign="middle"
    w={{ base: '72px', md: '120px' }}
    h={{ base: '36px', md: '58px' }}
    mx={{ base: 1.5, md: 3 }}
    mt="-0.15em"
    borderRadius="full"
    bgImage={`url(${src})`}
    bgSize="cover"
    bgPosition="center"
    boxShadow="soft"
  />
);

/* Bento tile — bezel shell, optional photo background */
const ServiceTile = ({ to, icon, title, price, unit, text, image, dark, children, ...rest }) => (
  <GridItem {...rest}>
    <MotionBox variants={fadeUp} h="100%">
      <Bezel
        as={RouterLink}
        to={to}
        display="block"
        h="100%"
        role="group"
        dark={dark || !!image}
        inner={{ bg: image ? 'ink.900' : dark ? 'ink.900' : 'white', minH: { base: '240px', md: '100%' } }}
      >
        {image && (
          <>
            <Box
              position="absolute"
              inset={0}
              bgImage={`url(${image})`}
              bgSize="cover"
              bgPosition="center"
              transition={`transform 1.2s ${EASE}`}
              _groupHover={{ transform: 'scale(1.05)' }}
            />
            <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(6,29,35,0.92) 8%, rgba(6,29,35,0.35) 55%, rgba(6,29,35,0.05))" />
          </>
        )}
        <Flex direction="column" justify="space-between" h="100%" p={{ base: 6, md: 8 }} position="relative" gap={8} color={image || dark ? 'white' : 'ink.900'}>
          <Flex justify="space-between" align="flex-start">
            <Flex
              align="center"
              justify="center"
              w={12}
              h={12}
              borderRadius="16px"
              bg={image || dark ? 'whiteAlpha.200' : 'gray.50'}
              border="1px solid"
              borderColor={image || dark ? 'whiteAlpha.300' : 'gray.100'}
              backdropFilter={image ? 'blur(8px)' : undefined}
            >
              <Icon as={icon} boxSize={6} />
            </Flex>
            <Flex
              align="center"
              justify="center"
              w={10}
              h={10}
              borderRadius="full"
              bg={image || dark ? 'white' : 'ink.900'}
              color={image || dark ? 'ink.900' : 'white'}
              transition={`transform 0.5s ${EASE}`}
              _groupHover={{ transform: 'translate(2px,-2px) rotate(45deg)' }}
            >
              <Icon as={PiArrowUpRight} boxSize={4} />
            </Flex>
          </Flex>
          {children}
          <Box>
            <Heading fontSize={{ base: '2xl', md: '28px' }} fontWeight={500} mb={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color={image || dark ? 'whiteAlpha.800' : 'gray.600'} maxW="sm" mb={price ? 5 : 0}>
              {text}
            </Text>
            {price && (
              <HStack align="baseline" spacing={1.5}>
                <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color={image || dark ? 'whiteAlpha.700' : 'gray.500'}>
                  from
                </Text>
                <Text fontSize={{ base: '3xl', md: '40px' }} fontWeight={500} letterSpacing="-0.04em" lineHeight="1" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                  {price}
                </Text>
                <Text fontSize="sm" color={image || dark ? 'whiteAlpha.700' : 'gray.500'}>
                  {unit}
                </Text>
              </HStack>
            )}
          </Box>
        </Flex>
      </Bezel>
    </MotionBox>
  </GridItem>
);

export default function Home() {
  usePageMeta('Whites & Brights | Laundry & Dry Cleaning in Patna', 'Laundry, dry cleaning and shoe care in Patna with free doorstep pickup and 48-hour turnaround. Rated 4.9 on Google.', { full: true });
  const prefersReducedMotion = useReducedMotion();
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ['start 70%', 'end 60%'] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Box as="main" overflow="hidden">
      {/* ============================== HERO ============================== */}
      <Box as="section" position="relative" bg="ink.900" overflow="hidden">
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(120% 90% at 85% 20%, #0B5C6A 0%, #073A44 38%, #061D23 75%)"
        />

        <Suspense fallback={null}>
          <HeroScene reducedMotion={!!prefersReducedMotion} />
        </Suspense>

        {/* Left scrim keeps copy legible over the scene */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, rgba(6,29,35,0.92) 0%, rgba(6,29,35,0.6) 45%, transparent 80%)"
          pointerEvents="none"
        />

        <Container position="relative" zIndex={2}>
          <Flex direction="column" justify="flex-end" minH={{ base: '100dvh', md: '760px', xl: '820px' }} pt={{ base: 32, md: 40 }} pb={{ base: 10, md: 14 }}>
            <StaggerGroup stagger={0.1} animate="show">
              <MotionBox variants={fadeUp}>
                <Eyebrow dark>Laundry &amp; dry cleaning · Patna</Eyebrow>
              </MotionBox>

              <MotionBox variants={fadeUp} mt={{ base: 6, md: 8 }}>
                <Heading
                  as="h1"
                  color="white"
                  fontSize={{ base: '50px', sm: '64px', md: '88px', xl: '104px' }}
                  fontWeight={500}
                  lineHeight="0.94"
                  letterSpacing="-0.05em"
                  maxW="900px"
                >
                  Fresh clothes,
                  <br />
                  <Accent dark letterSpacing="-0.03em">without</Accent> the chores.
                </Heading>
              </MotionBox>

              <MotionBox variants={fadeUp} mt={{ base: 6, md: 8 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.800" maxW="520px" lineHeight="1.6">
                  Free doorstep pickup across Danapur and Phulwari Sharif. Washed, pressed and folded — back with you in 48 hours.
                </Text>
              </MotionBox>

              <MotionBox variants={fadeUp} mt={{ base: 8, md: 10 }}>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} align={{ base: 'stretch', sm: 'center' }}>
                  <ArrowButton as={RouterLink} to="/contact" variant="light" justifyContent="space-between">
                    Book a free pickup
                  </ArrowButton>
                  <Button
                    as="a"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="glass"
                    h={{ base: 12, md: 14 }}
                    px={6}
                    leftIcon={<Icon as={PiWhatsappLogoFill} boxSize={5} color="#25D366" />}
                  >
                    WhatsApp us
                  </Button>
                </Stack>
              </MotionBox>

              {/* Proof strip */}
              <MotionBox variants={fadeUp} mt={{ base: 12, md: 20 }}>
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  gap={{ base: 5, md: 10 }}
                  pt={6}
                  borderTop="1px solid"
                  borderColor="whiteAlpha.200"
                  color="whiteAlpha.800"
                  fontSize="sm"
                >
                  <Link href={GOOGLE_REVIEWS_URL} isExternal display="flex" alignItems="center" gap={3} _hover={{ color: 'white' }}>
                    <Icon as={PiGoogleLogoFill} boxSize={5} color="white" />
                    <Stars size={3.5} color="#FBBC05" />
                    <Text>
                      <Text as="span" color="white" fontWeight={600}>{AVG_RATING}</Text> from {TOTAL_REVIEWS} Google reviews
                    </Text>
                  </Link>
                  <HStack spacing={2}>
                    <Icon as={PiMapPinLight} boxSize={5} color="brand.300" />
                    <Text>{outlets.length} outlets · {outlets.map((o) => o.area).filter((a, i, arr) => arr.indexOf(a) === i).join(', ')}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={PiSealCheckFill} boxSize={5} color="brand.300" />
                    <Text>25% off your first order</Text>
                  </HStack>
                </Flex>
              </MotionBox>
            </StaggerGroup>
          </Flex>
        </Container>
      </Box>

      {/* ============================== STATEMENT ============================== */}
      <Box as="section" bg="gray.50" pt={{ base: 24, md: 40 }} pb={{ base: 20, md: 32 }}>
        <Container>
          <Reveal>
            <Heading
              as="p"
              fontSize={{ base: '30px', md: '52px', lg: '64px' }}
              fontWeight={500}
              lineHeight={{ base: '1.2', md: '1.12' }}
              letterSpacing="-0.045em"
              color="ink.900"
              maxW="1100px"
            >
              Three outlets across Patna.
              <InlineImage src={IMAGES.machines} alt="Commercial washing machines" />
              <Box as="span" color="gray.400">Free pickup from your door.</Box>
              <InlineImage src={IMAGES.folded} alt="Neatly folded laundry" />
              Pressed, folded and back in <Accent>48 hours</Accent>.
            </Heading>
          </Reveal>
        </Container>
      </Box>

      {/* ============================== SERVICES BENTO ============================== */}
      <Box as="section" bg="gray.50" pb={{ base: 24, md: 40 }}>
        <Container>
          <SectionIntro
            eyebrow="Services & prices"
            title={<>Everything your wardrobe needs, <Accent>priced upfront.</Accent></>}
            description="No hidden charges. Pay by the kilo for everyday wear, or per piece for dry cleaning and shoes."
          >
            <Link as={RouterLink} to="/services" mt={5} display="inline-flex" alignItems="center" gap={2} fontWeight={500} color="ink.900" borderBottom="1px solid" borderColor="ink.900" pb={0.5}>
              See the full price list <Icon as={PiArrowUpRight} />
            </Link>
          </SectionIntro>

          <StaggerGroup stagger={0.08}>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
              autoRows={{ md: 'minmax(260px, auto)' }}
              gap={{ base: 4, md: 5 }}
            >
              <ServiceTile
                colSpan={{ md: 7 }}
                rowSpan={{ md: 2 }}
                to="/services?tab=1"
                icon={PiWashingMachineLight}
                title="Laundry by the kilo"
                text="Wash & fold or wash & iron for everyday clothes. Sorted by colour and fabric, premium detergents."
                price="₹70"
                unit="/ kg"
                image={IMAGES.folded}
                minH={{ md: '560px' }}
              />
              <ServiceTile
                colSpan={{ md: 5 }}
                to="/services?tab=2"
                icon={PiCoatHangerLight}
                title="Dry cleaning"
                text="Suits, sarees, lehengas and delicates — hand-finished and hung."
                price="₹49"
                unit="/ piece"
              />
              <ServiceTile
                colSpan={{ md: 5 }}
                to="/services?tab=2"
                icon={PiSneakerLight}
                title="Shoe care"
                text="Deep cleaning for sports, canvas, leather and suede shoes."
                price="₹199"
                unit="/ pair"
              />
              <ServiceTile
                colSpan={{ md: 5 }}
                to="/services?tab=4"
                icon={PiHouseLineLight}
                title="Home linen"
                text="Curtains, comforters, blankets and table linen."
                price="₹199"
                unit="/ panel"
                image={IMAGES.home}
              />
              <ServiceTile
                colSpan={{ md: 7 }}
                to="/services?tab=5"
                icon={PiLightningLight}
                title="Express, same day"
                text="Need it tonight? Priority processing with rush pickup and delivery."
                dark
              >
                <Text fontSize={{ base: '64px', md: '96px' }} fontWeight={500} letterSpacing="-0.06em" lineHeight="0.9" color="brand.300">
                  24h<Box as="span" color="whiteAlpha.400" fontSize="0.4em" letterSpacing="-0.02em" ml={2}>or less</Box>
                </Text>
              </ServiceTile>
            </Grid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* ============================== HOW IT WORKS ============================== */}
      <Box as="section" bg="white" py={{ base: 24, md: 40 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 12, lg: 24 }}>
            <Box position={{ lg: 'sticky' }} top={{ lg: '140px' }} alignSelf="start">
              <StaggerGroup>
                <MotionBox variants={fadeUp}>
                  <Eyebrow>How it works</Eyebrow>
                </MotionBox>
                <MotionBox variants={fadeUp} mt={6}>
                  <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                    From your door, <Accent>and back again.</Accent>
                  </Heading>
                </MotionBox>
                <MotionBox variants={fadeUp} mt={6}>
                  <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="400px">
                    No trips to the laundry. No waiting around. Just three steps, and you never leave home.
                  </Text>
                </MotionBox>
              </StaggerGroup>
            </Box>

            <Box ref={processRef} position="relative" pl={{ base: 10, md: 16 }}>
              {/* Track + scroll-driven fill */}
              <Box position="absolute" left={{ base: '11px', md: '15px' }} top={2} bottom={2} w="2px" bg="gray.100" borderRadius="full" />
              <MotionBox
                position="absolute"
                left={{ base: '11px', md: '15px' }}
                top={2}
                bottom={2}
                w="2px"
                bg="brand.500"
                borderRadius="full"
                style={{ scaleY: lineProgress, transformOrigin: 'top' }}
              />
              <Stack spacing={{ base: 14, md: 24 }}>
                {steps.map((step, i) => (
                  <Reveal key={step.title} position="relative">
                    <Flex
                      position="absolute"
                      left={{ base: '-40px', md: '-64px' }}
                      top={1}
                      w={{ base: 6, md: 8 }}
                      h={{ base: 6, md: 8 }}
                      borderRadius="full"
                      bg="white"
                      border="2px solid"
                      borderColor="brand.500"
                      align="center"
                      justify="center"
                    >
                      <Box w={2} h={2} borderRadius="full" bg="brand.500" />
                    </Flex>
                    <Text fontFamily="serif" fontStyle="italic" fontSize={{ base: '56px', md: '88px' }} lineHeight="0.8" color="gray.300" mb={4}>
                      0{i + 1}
                    </Text>
                    <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900" mb={3}>
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="480px">
                      {step.text}
                    </Text>
                  </Reveal>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* ============================== REVIEWS ============================== */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 40 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '4fr 8fr' }} gap={{ base: 12, lg: 20 }}>
            <Reveal>
              <Eyebrow>Reviews</Eyebrow>
              <Flex align="flex-end" gap={4} mt={8}>
                <Text fontSize={{ base: '96px', md: '140px' }} fontWeight={500} lineHeight="0.8" letterSpacing="-0.06em" color="ink.900" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                  {AVG_RATING}
                </Text>
                <Box pb={2}>
                  <Stars size={5} color="#F4B400" />
                  <Text fontSize="sm" color="gray.600" mt={1.5}>
                    {TOTAL_REVIEWS} reviews on Google
                  </Text>
                </Box>
              </Flex>

              <Stack spacing={0} mt={10} borderTop="1px solid" borderColor="gray.200">
                {outlets.map((o) => (
                  <Flex key={o.id} justify="space-between" align="center" py={4} borderBottom="1px solid" borderColor="gray.200" fontSize="sm">
                    <Text color="ink.900" fontWeight={500}>{o.name}</Text>
                    <HStack spacing={2} color="gray.600">
                      <Icon as={PiStarFill} color="#F4B400" />
                      <Text sx={{ fontVariantNumeric: 'tabular-nums' }}>
                        <Text as="span" color="ink.900" fontWeight={600}>{o.rating.toFixed(1)}</Text> · {o.reviews}
                      </Text>
                    </HStack>
                  </Flex>
                ))}
              </Stack>

              <Button
                as="a"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                mt={8}
                variant="outline"
                h={12}
                px={5}
                leftIcon={<Icon as={PiGoogleLogoFill} boxSize={4} />}
                rightIcon={<Icon as={PiArrowUpRight} boxSize={4} />}
              >
                Read all reviews
              </Button>
            </Reveal>

            <StaggerGroup stagger={0.1}>
              <Box sx={{ columnCount: { base: 1, md: 2 }, columnGap: '20px' }}>
                {reviews.map((r, i) => (
                  <MotionBox key={r.name + i} variants={fadeUp} mb={5} sx={{ breakInside: 'avoid' }}>
                    <Bezel inner={{ p: { base: 6, md: 8 } }}>
                      <Stars size={3.5} color="#F4B400" />
                      <Text
                        mt={5}
                        fontSize={r.text.length > 80 ? { base: 'lg', md: 'xl' } : { base: '2xl', md: '28px' }}
                        lineHeight="1.35"
                        letterSpacing="-0.02em"
                        color="ink.900"
                      >
                        “{r.text}”
                      </Text>
                      <Flex align="center" gap={3} mt={6}>
                        <Flex w={10} h={10} borderRadius="14px" bg="gray.50" border="1px solid" borderColor="gray.100" align="center" justify="center" fontWeight={600} fontSize="sm" color="ink.700">
                          {r.name.split(' ').map((p) => p[0]).join('')}
                        </Flex>
                        <Box>
                          <Text fontSize="sm" fontWeight={500} color="ink.900">{r.name}</Text>
                          <Text fontSize="xs" color="gray.500">{r.outlet} · {r.when}</Text>
                        </Box>
                      </Flex>
                    </Bezel>
                  </MotionBox>
                ))}
              </Box>
            </StaggerGroup>
          </Grid>
        </Container>
      </Box>

      {/* ============================== OUTLETS ============================== */}
      <Box as="section" bg="white" py={{ base: 24, md: 40 }}>
        <Container>
          <SectionIntro
            eyebrow="Outlets"
            title={<>Three outlets. <Accent>One standard.</Accent></>}
            description="Walk in, drop off, or let us pick up. Every outlet runs the same process, with the same care."
          />

          <StaggerGroup stagger={0.08}>
            <Box borderTop="1px solid" borderColor="gray.200">
              {outlets.map((o, i) => (
                <MotionBox key={o.id} variants={fadeUp}>
                  <Grid
                    as="a"
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="group"
                    templateColumns={{ base: '1fr auto', md: '60px 1.3fr 1.6fr auto' }}
                    gap={{ base: 3, md: 8 }}
                    alignItems="center"
                    py={{ base: 6, md: 8 }}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    transition={`padding 0.5s ${EASE}`}
                    _hover={{ px: { md: 4 } }}
                  >
                    <Text display={{ base: 'none', md: 'block' }} fontFamily="serif" fontStyle="italic" fontSize="3xl" color="gray.300">
                      0{i + 1}
                    </Text>
                    <Box>
                      <Heading fontSize={{ base: 'xl', md: '28px' }} fontWeight={500} color="ink.900">
                        {o.name}
                      </Heading>
                      <HStack spacing={4} mt={2} fontSize="sm" color="gray.600">
                        <HStack spacing={1.5}>
                          <Icon as={PiStarFill} color="#F4B400" />
                          <Text>{o.rating.toFixed(1)} ({o.reviews})</Text>
                        </HStack>
                        <HStack spacing={1.5}>
                          <Icon as={PiClockLight} />
                          <Text>Open till {o.closes}</Text>
                        </HStack>
                      </HStack>
                    </Box>
                    <Text display={{ base: 'none', md: 'block' }} color="gray.600" fontSize="sm" maxW="360px">
                      {o.address}
                    </Text>
                    <Flex
                      align="center"
                      justify="center"
                      w={12}
                      h={12}
                      borderRadius="full"
                      border="1px solid"
                      borderColor="gray.200"
                      color="ink.900"
                      transition={`all 0.5s ${EASE}`}
                      _groupHover={{ bg: 'ink.900', color: 'white', borderColor: 'ink.900', transform: 'rotate(45deg)' }}
                    >
                      <Icon as={PiArrowUpRight} boxSize={5} />
                    </Flex>
                  </Grid>
                </MotionBox>
              ))}
            </Box>
          </StaggerGroup>
        </Container>
      </Box>

      {/* ============================== APP PROMO ============================== */}
      <AppPromo />

      {/* ============================== FINAL CTA ============================== */}
      <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container>
          <Reveal>
            <Bezel radius={40} pad={8} inner={{ bg: 'ink.900' }}>
              <Grid templateColumns={{ base: '1fr', lg: '1.3fr 1fr' }} minH={{ lg: '520px' }}>
                <Flex direction="column" justify="space-between" p={{ base: 8, md: 14 }} gap={12} position="relative" zIndex={1}>
                  <Box>
                    <Eyebrow dark>Welcome offer</Eyebrow>
                    <Heading mt={8} color="white" fontSize={{ base: '44px', md: '72px' }} fontWeight={500} lineHeight="0.98" letterSpacing="-0.05em">
                      25% off your <Accent dark>first order.</Accent>
                    </Heading>
                    <Text mt={6} color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} maxW="440px">
                      Book a pickup today. We'll collect, clean and deliver — and take a quarter off the bill.
                    </Text>
                  </Box>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} align={{ base: 'stretch', sm: 'center' }}>
                    <ArrowButton as={RouterLink} to="/contact" variant="light" justifyContent="space-between">
                      Claim your 25% off
                    </ArrowButton>
                    <Button as="a" href={`tel:${PHONE_TEL}`} variant="glass" h={{ base: 12, md: 14 }} px={6} leftIcon={<Icon as={PiPhoneLight} boxSize={5} />}>
                      {PHONE_DISPLAY}
                    </Button>
                  </Stack>
                </Flex>
                <Box position="relative" minH={{ base: '260px', lg: 'auto' }} display={{ base: 'none', md: 'block' }}>
                  <Box position="absolute" inset={0} bgImage={`url(${IMAGES.iron})`} bgSize="cover" bgPosition="center" />
                  <Box position="absolute" inset={0} bgGradient="linear(to-r, ink.900 0%, rgba(6,29,35,0.2) 45%, transparent)" />
                </Box>
              </Grid>
            </Bezel>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
