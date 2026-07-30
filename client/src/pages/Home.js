import React, { Suspense, lazy } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Flex,
  Badge,
  VStack,
  HStack,
  Circle,
  Image,
} from '@chakra-ui/react';
import {
  FaTshirt,
  FaLeaf,
  FaTruck,
  FaCheck,
  FaHandsWash,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaSoap,
  FaSmile,
  FaStar,
} from 'react-icons/fa';
import { useReducedMotion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  GradientText,
  SectionHeading,
  SectionBadge,
  GlassCard,
  FloatingCard,
  Counter,
  Marquee,
  unfold,
  scaleIn,
  fromLeft,
} from '../components/ui';
import AppPromo from '../components/AppPromo';

// Signature 3D soap-bubble hero — lazy so three.js stays out of the main bundle
const HeroScene = lazy(() => import('../components/three/HeroScene'));

const services = [
  {
    icon: FaTshirt,
    title: 'Dry Cleaning',
    text: 'Professional cleaning for delicate fabrics and specialty garments.',
    color: 'brand',
    to: '/services?tab=2',
  },
  {
    icon: FaHandsWash,
    title: 'Wash & Iron',
    text: 'Complete laundry with premium detergents and expert ironing.',
    color: 'accent',
    to: '/services?tab=1',
    featured: true,
  },
  {
    icon: FaLeaf,
    title: 'Eco Laundry',
    text: 'Environmentally friendly cleaning with water-saving technology.',
    color: 'green',
    to: '/services?tab=1',
  },
  {
    icon: FaTruck,
    title: 'Pickup & Delivery',
    text: 'Convenient doorstep service with scheduled pickups and drop-offs.',
    color: 'highlight',
    to: '/services?tab=5',
  },
];

const stats = [
  { value: 100, suffix: '%', label: 'Satisfaction Guarantee', icon: FaSmile },
  { value: 24, suffix: 'h', label: 'Express Turnaround', icon: FaClock },
  { value: 50, suffix: '+', label: 'Garment Categories', icon: FaTshirt },
  { value: 25, suffix: '%', label: 'Inaugural Offer Off', icon: FaStar },
];

const steps = [
  { icon: FaCalendarCheck, title: 'Schedule a Pickup', text: 'Book online or message us on WhatsApp. Pick a slot that suits you.', color: 'brand' },
  { icon: FaSoap, title: 'We Clean With Care', text: 'Your garments are sorted, treated and cleaned with premium, eco-friendly products.', color: 'accent' },
  { icon: FaTruck, title: 'Doorstep Delivery', text: 'Fresh, crisp and perfectly folded clothes delivered back to your door.', color: 'green' },
];

const marqueeItems = [
  'Free Pickup & Delivery',
  'Eco-Friendly Process',
  '24-Hour Turnaround',
  'Expert Stain Removal',
  'Premium Detergents',
  'Garment-Safe Cleaning',
  'Subscription Plans',
  'Express Service',
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box overflow="hidden">
      {/* ============================== HERO ============================== */}
      <Box as="section" position="relative" bg="brand.900" overflow="hidden">
        {/* Gradient stage behind the cloth */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(130deg, brand.900 0%, #035E73 40%, brand.700 74%, brand.500 112%)"
        />
        <Box
          position="absolute"
          top="-24%"
          right="-12%"
          w="640px"
          h="640px"
          borderRadius="full"
          bg="brand.400"
          opacity={0.22}
          filter="blur(130px)"
        />

        {/* Signature 3D bubbles — gradient stage shows until the chunk loads */}
        <Suspense fallback={null}>
          <HeroScene reducedMotion={!!prefersReducedMotion} />
        </Suspense>

        {/* Left scrim keeps copy legible over the scene */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, rgba(2,44,56,0.86) 0%, rgba(2,44,56,0.55) 42%, transparent 74%)"
          pointerEvents="none"
        />

        <Container maxW="1200px" position="relative" zIndex={2}>
          <Flex minH={{ base: '640px', md: '760px' }} align="center" pt={{ base: 28, md: 20 }} pb={{ base: 16, md: 20 }}>
            <Stack spacing={6} maxW={{ base: '100%', lg: '600px' }} color="white">
              <MotionBox initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <HStack
                  as={RouterLink}
                  to="/contact"
                  display="inline-flex"
                  spacing={2.5}
                  bg="whiteAlpha.200"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  backdropFilter="blur(8px)"
                  borderRadius="full"
                  pl={1.5}
                  pr={4}
                  py={1.5}
                  transition="background 0.2s ease"
                  _hover={{ bg: 'whiteAlpha.300' }}
                >
                  <Badge bg="brand.400" color="brand.900" borderRadius="full" px={2.5} py={0.5} fontSize="2xs">
                    Coming soon
                  </Badge>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight={600}>
                    Anandmai Colony, beside Canara Bank, Phulwari Sharif, Patna
                  </Text>
                  <Icon as={FaArrowRight} boxSize={3} />
                </HStack>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="whiteAlpha.200"
                  color="white"
                  backdropFilter="blur(8px)"
                  border="1px solid"
                  borderColor="whiteAlpha.400"
                  px={4}
                  py={2}
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  <Box as="span" w={2} h={2} borderRadius="full" bg="brand.300" boxShadow="0 0 0 4px rgba(77,208,225,0.3)" />
                  Premium Laundry Service
                </Badge>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '40px', md: '64px', lg: '72px' }}
                  fontWeight={800}
                  lineHeight="1.02"
                  letterSpacing="-0.03em"
                >
                  Experience The{' '}
                  <GradientText from="brand.200" to="white">Perfect Clean</GradientText>
                </Heading>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="2xl" lineHeight="1.7">
                  Eco-friendly products and cutting-edge technology, caring for your finest garments like they are our own.
                </Text>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                  <Button as={RouterLink} to="/services" size="lg" h={14} px={8} variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
                    Explore Services
                  </Button>
                  <Button as={RouterLink} to="/contact" size="lg" h={14} px={8} variant="glass">
                    Contact Us
                  </Button>
                </Stack>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
                <HStack spacing={{ base: 4, md: 6 }} pt={2} flexWrap="wrap">
                  {['Professional Care', '100% Satisfaction', 'Free Pickup & Delivery'].map((h) => (
                    <HStack key={h} spacing={2}>
                      <Circle size={5} bg="brand.400" color="white">
                        <Icon as={FaCheck} fontSize="9px" />
                      </Circle>
                      <Text fontWeight={500} fontSize={{ base: 'xs', md: 'sm' }} color="whiteAlpha.900">
                        {h}
                      </Text>
                    </HStack>
                  ))}
                </HStack>
              </MotionBox>
            </Stack>
          </Flex>
        </Container>

        {/* Floating glass info cards over the cloth */}
        <FloatingCard position="absolute" top="22%" right="6%" zIndex={3} display={{ base: 'none', lg: 'block' }} duration={6}>
          <GlassCard p={5} maxW="230px" bg="rgba(255,255,255,0.92)">
            <HStack spacing={3}>
              <Circle size={11} bgGradient="linear(135deg, brand.400, accent.500)" color="white">
                <Icon as={FaClock} boxSize={5} />
              </Circle>
              <Box>
                <Text fontWeight={800} fontSize="lg" color="gray.900">24h</Text>
                <Text fontSize="xs" color="gray.500">Express turnaround</Text>
              </Box>
            </HStack>
          </GlassCard>
        </FloatingCard>

        <FloatingCard position="absolute" bottom="24%" right="11%" zIndex={3} display={{ base: 'none', lg: 'block' }} duration={7} delay={0.8}>
          <GlassCard p={5} maxW="250px" bg="rgba(255,255,255,0.92)">
            <HStack spacing={3}>
              <Circle size={11} bg="green.50" color="green.500">
                <Icon as={FaLeaf} boxSize={5} />
              </Circle>
              <Box>
                <Text fontWeight={800} fontSize="md" color="gray.900">Eco-Friendly</Text>
                <Text fontSize="xs" color="gray.500">Biodegradable & gentle</Text>
              </Box>
            </HStack>
          </GlassCard>
        </FloatingCard>
      </Box>

      {/* ============================== MARQUEE STRIP ============================== */}
      <Box bg="white" borderBottom="1px solid" borderColor="gray.100" pt={{ base: 8, md: 10 }} pb={{ base: 6, md: 7 }}>
        <Marquee duration={32}>
          {marqueeItems.map((item, i) => (
            <HStack key={i} spacing={2.5} px={2}>
              <Icon as={FaCheck} color="brand.500" boxSize={3.5} />
              <Text fontWeight={600} color="gray.600" fontSize={{ base: 'sm', md: 'md' }} whiteSpace="nowrap">
                {item}
              </Text>
              <Box w={1.5} h={1.5} borderRadius="full" bg="brand.200" ml={4} />
            </HStack>
          ))}
        </Marquee>
      </Box>

      {/* ============================== APP PROMO ============================== */}
      <AppPromo />

      {/* ============================== STATS ============================== */}
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="1200px">
          <StaggerGroup>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 8 }}>
              {stats.map((stat, i) => (
                <MotionBox key={i} variants={unfold}>
                  <VStack
                    spacing={2}
                    p={{ base: 5, md: 7 }}
                    bg="gray.50"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.100"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: 'card', borderColor: 'brand.100', bg: 'white' }}
                  >
                    <Circle size={12} bg="brand.50" color="brand.500" mb={1}>
                      <Icon as={stat.icon} boxSize={5} />
                    </Circle>
                    <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gray.900">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </Heading>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500" fontWeight={500}>
                      {stat.label}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* ============================== SERVICES ============================== */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50" position="relative" overflow="hidden">
        <Box position="absolute" top="-8%" left="-6%" w="360px" h="360px" borderRadius="full" bg="brand.100" filter="blur(90px)" opacity={0.45} />
        <Box position="absolute" bottom="-10%" right="-6%" w="320px" h="320px" borderRadius="full" bg="accent.100" filter="blur(90px)" opacity={0.4} />

        <Container maxW="1200px" position="relative">
          <SectionHeading
            badge="Our Best Services"
            title={<>Premium Laundry Solutions <GradientText>For You</GradientText></>}
            subtitle="We combine expertise with cutting-edge technology to deliver exceptional laundry services that respect both your garments and the environment."
          />

          <StaggerGroup mt={{ base: 12, md: 16 }}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
              {services.map((s, i) => (
                <MotionBox key={i} variants={unfold} as={RouterLink} to={s.to} display="block" height="100%">
                  <VStack
                    spacing={4}
                    align="flex-start"
                    h="100%"
                    p={7}
                    borderRadius="2xl"
                    position="relative"
                    overflow="hidden"
                    bg={s.featured ? 'transparent' : 'white'}
                    bgGradient={s.featured ? 'linear(160deg, brand.500, accent.600)' : undefined}
                    color={s.featured ? 'white' : 'gray.800'}
                    border="1px solid"
                    borderColor={s.featured ? 'transparent' : 'gray.100'}
                    boxShadow={s.featured ? 'glow' : 'soft'}
                    transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
                    _hover={{ transform: 'translateY(-10px)', boxShadow: s.featured ? 'floating' : 'cardHover' }}
                  >
                    <Circle
                      size={14}
                      bg={s.featured ? 'whiteAlpha.300' : `${s.color}.50`}
                      color={s.featured ? 'white' : `${s.color}.500`}
                      backdropFilter={s.featured ? 'blur(6px)' : undefined}
                    >
                      <Icon as={s.icon} boxSize={6} />
                    </Circle>
                    <Heading size="md">{s.title}</Heading>
                    <Text fontSize="sm" color={s.featured ? 'whiteAlpha.900' : 'gray.600'} flex={1}>
                      {s.text}
                    </Text>
                    <HStack spacing={2} fontWeight={600} fontSize="sm" color={s.featured ? 'white' : 'brand.600'}>
                      <Text>Learn more</Text>
                      <Icon as={FaArrowRight} boxSize={3} />
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>

          <Reveal delay={0.1} textAlign="center" mt={14}>
            <Button as={RouterLink} to="/services" size="lg" h={14} px={8} variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
              View All Services
            </Button>
          </Reveal>
        </Container>
      </Box>

      {/* ============================== HOW IT WORKS ============================== */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="1200px">
          <SectionHeading
            badge="Simple Process"
            title={<>Journey To Fresh Clothes, <GradientText>Made Simple</GradientText></>}
            subtitle="From your door to ours and back again — premium laundry care in three effortless steps."
          />

          <StaggerGroup mt={{ base: 12, md: 20 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 12, md: 4 }}>
              {steps.map((step, i) => (
                <MotionBox key={i} variants={unfold}>
                  <VStack spacing={6} textAlign="center" px={{ base: 2, md: 6 }}>
                    {/* Icon badge + connector row.
                       The connector lives in this same flex row, pinned to the icon's
                       vertical centre, so it can never cross the text below. It is hidden
                       on the last step and on mobile. */}
                    <Flex w="full" align="center" justify="center" position="relative">
                      <Box position="relative" flexShrink={0} zIndex={1}>
                        <Circle size={{ base: 20, md: 24 }} bg="white" boxShadow="card" border="1px solid" borderColor="gray.100">
                          <Circle size={{ base: 14, md: 16 }} bg={`${step.color}.50`} color={`${step.color}.500`}>
                            <Icon as={step.icon} boxSize={7} />
                          </Circle>
                        </Circle>
                        <Circle
                          size={8}
                          position="absolute"
                          top={0}
                          right={0}
                          bgGradient="linear(135deg, brand.500, accent.500)"
                          color="white"
                          fontSize="md"
                          fontWeight={800}
                          border="3px solid white"
                          boxShadow="sm"
                        >
                          {i + 1}
                        </Circle>
                      </Box>

                      {i < steps.length - 1 && (
                        <Box
                          display={{ base: 'none', md: 'block' }}
                          position="absolute"
                          left="calc(50% + 48px)"
                          right="-50%"
                          top="50%"
                          height="2px"
                          transform="translateY(-50%)"
                          bgGradient="linear(to-r, brand.200, accent.200)"
                          zIndex={0}
                        />
                      )}
                    </Flex>

                    <VStack spacing={3}>
                      <Heading size="md" color="gray.900">{step.title}</Heading>
                      <Text color="gray.600" maxW="2xs" fontSize="sm" lineHeight="1.7">{step.text}</Text>
                    </VStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* ============================== WHY CHOOSE US ============================== */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50" position="relative" overflow="hidden">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
            <Reveal variant={fromLeft} position="relative">
              <Box borderRadius="3xl" overflow="hidden" boxShadow="floating">
                <Image
                  src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Expert garment care at Whites & Brights"
                  objectFit="cover"
                  w="100%"
                  h={{ base: '320px', md: '480px' }}
                />
              </Box>
              {/* Floating accent card */}
              <FloatingCard position="absolute" bottom={{ base: 4, md: 8 }} left={{ base: 4, md: -8 }} duration={6}>
                <GlassCard p={5} bg="rgba(255,255,255,0.95)" maxW="220px">
                  <HStack spacing={3}>
                    <Circle size={12} bgGradient="linear(135deg, brand.500, accent.500)" color="white">
                      <Icon as={FaShieldAlt} boxSize={5} />
                    </Circle>
                    <Box>
                      <Text fontWeight={800} color="gray.900">Garment-Safe</Text>
                      <Text fontSize="xs" color="gray.500">Fabric-specific care</Text>
                    </Box>
                  </HStack>
                </GlassCard>
              </FloatingCard>
            </Reveal>

            <Box>
              <StaggerGroup>
                <MotionBox variants={unfold}>
                  <SectionBadge>Why Whites & Brights</SectionBadge>
                </MotionBox>
                <MotionBox variants={unfold} mt={5}>
                  <Heading fontSize={{ base: '3xl', md: '42px' }} color="gray.900" lineHeight="1.1">
                    Laundry care that feels <GradientText>genuinely premium</GradientText>
                  </Heading>
                </MotionBox>
                <MotionBox variants={unfold} mt={5}>
                  <Text color="gray.600" fontSize="lg">
                    Every order is handled with meticulous attention — from sorting and stain treatment to pressing and packaging. Here's what sets us apart.
                  </Text>
                </MotionBox>

                <Stack spacing={5} mt={8}>
                  {[
                    { icon: FaLeaf, title: 'Eco-conscious cleaning', text: 'Biodegradable detergents and water-saving machines, gentle on fabrics and the planet.' },
                    { icon: FaClock, title: 'Reliable turnaround', text: 'Standard 24–48h service with same-day express options when you need it fast.' },
                    { icon: FaMapMarkerAlt, title: 'Doorstep convenience', text: 'Free scheduled pickup and delivery, with friendly local service you can trust.' },
                  ].map((f, i) => (
                    <MotionBox key={i} variants={unfold}>
                      <HStack spacing={4} align="flex-start">
                        <Circle size={12} bg="white" color="brand.500" boxShadow="soft" flexShrink={0}>
                          <Icon as={f.icon} boxSize={5} />
                        </Circle>
                        <Box>
                          <Heading size="sm" color="gray.900" mb={1}>{f.title}</Heading>
                          <Text color="gray.600" fontSize="sm">{f.text}</Text>
                        </Box>
                      </HStack>
                    </MotionBox>
                  ))}
                </Stack>
              </StaggerGroup>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ============================== PROMO BANNER ============================== */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="1200px">
          <Reveal variant={scaleIn}>
            <Box
              position="relative"
              borderRadius="4xl"
              overflow="hidden"
              bgGradient="linear(130deg, brand.900 0%, brand.700 55%, brand.500 100%)"
              boxShadow="floating"
            >
              {/* decorative blobs */}
              <Box position="absolute" top="-30%" right="-5%" w="420px" h="420px" borderRadius="full" bg="whiteAlpha.100" />
              <Box position="absolute" bottom="-40%" left="20%" w="360px" h="360px" borderRadius="full" bg="whiteAlpha.100" />

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} position="relative">
                <Box p={{ base: 8, md: 14 }} color="white">
                  <Badge bg="highlight.500" color="white" px={4} py={1.5} mb={5} fontSize="sm">
                    Inaugural Offer
                  </Badge>
                  <Heading fontSize={{ base: '3xl', md: '44px' }} lineHeight="1.05" mb={4}>
                    Get <GradientText from="white" to="brand.200">25% OFF</GradientText> your first order
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" mb={8} maxW="md">
                    New customers enjoy 25% off as a welcome to the Whites & Brights family. Premium care, eco-friendly, delivered to your door.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                    <Button as={RouterLink} to="/contact" size="lg" h={14} px={8} bg="white" color="brand.700" _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }} rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
                      Claim Your Offer
                    </Button>
                    <Button as={RouterLink} to="/services" size="lg" h={14} px={8} variant="glass">
                      See Pricing
                    </Button>
                  </Stack>
                </Box>
                <Box position="relative" minH={{ base: '240px', md: 'auto' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Fresh, neatly folded laundry"
                    position="absolute"
                    inset={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                  <Box position="absolute" inset={0} bgGradient="linear(to-r, brand.700, transparent)" opacity={0.5} display={{ base: 'block', md: 'block' }} />
                </Box>
              </SimpleGrid>
            </Box>
          </Reveal>
        </Container>
      </Box>

      {/* ============================== FINAL CTA ============================== */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1000px">
          <Reveal variant={unfold}>
            <VStack spacing={7} textAlign="center">
              <SectionBadge>Ready when you are</SectionBadge>
              <Heading fontSize={{ base: '3xl', md: '48px' }} color="gray.900" lineHeight="1.1" maxW="3xl">
                Effortless, premium laundry is just <GradientText>one tap away</GradientText>
              </Heading>
              <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl">
                Visit our outlet or schedule a pickup today. We'll take care of the rest.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2}>
                <Button as={RouterLink} to="/contact" size="lg" h={14} px={9} variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
                  Book a Pickup
                </Button>
                <Button as={RouterLink} to="/franchise" size="lg" h={14} px={9} variant="outline" colorScheme="brand">
                  Explore Franchise
                </Button>
              </Stack>
            </VStack>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
