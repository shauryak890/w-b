import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Button,
  Icon,
  Circle,
  Flex,
} from '@chakra-ui/react';
import {
  FaDownload,
  FaTruck,
  FaBolt,
  FaLeaf,
  FaTshirt,
  FaHandsWash,
  FaSnowflake,
  FaHome,
  FaCalendarCheck,
} from 'react-icons/fa';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  GradientText,
  SectionBadge,
  fadeUp,
  fromRight,
} from './ui';

// Direct APK download for the Whites & Brights Android app
const APK_URL = 'https://expo.dev/artifacts/eas/jtCGCCG9waug_EtK7A97bdJORvN2lDZijkaAAB1HkiA.apk';

const features = [
  { icon: FaTruck, title: 'Free doorstep pickup & delivery' },
  { icon: FaBolt, title: '24-hour express turnaround' },
  { icon: FaLeaf, title: 'Eco-friendly, premium-grade care' },
];

const appServices = [
  { icon: FaHandsWash, label: 'Wash & Fold' },
  { icon: FaSnowflake, label: 'Dry Clean' },
  { icon: FaTshirt, label: 'Ironing' },
  { icon: FaBolt, label: 'Express' },
];

/* ------------------------------------------------------------------ */
/*  PhoneMockup — pure CSS/SVG app UI preview (no image asset)         */
/* ------------------------------------------------------------------ */
function PhoneMockup() {
  return (
    <MotionBox
      aria-hidden="true"
      animate={{ y: [0, -14, 0], rotate: [-2, 1, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      w={{ base: '260px', md: '300px' }}
      h={{ base: '530px', md: '610px' }}
      borderRadius="44px"
      bg="gray.900"
      p="12px"
      boxShadow="floating"
      position="relative"
    >
      {/* Screen */}
      <Flex
        direction="column"
        h="100%"
        bg="gray.50"
        borderRadius="34px"
        overflow="hidden"
        position="relative"
      >
        {/* Notch */}
        <Box
          position="absolute"
          top="10px"
          left="50%"
          transform="translateX(-50%)"
          w="42%"
          h="20px"
          bg="gray.900"
          borderRadius="full"
          zIndex={2}
        />

        {/* Teal app header */}
        <Box bgGradient="linear(135deg, brand.500, brand.600)" pt={9} pb={5} px={5} color="white">
          <Text fontWeight={800} fontSize="lg" letterSpacing="-0.02em">
            Whites &amp; Brights
          </Text>
          <Text fontSize="xs" color="whiteAlpha.800">
            Premium laundry, delivered
          </Text>
        </Box>

        {/* Body */}
        <VStack align="stretch" spacing={4} px={4} pt={4} flex="1">
          {/* Schedule a pickup card */}
          <HStack
            bg="white"
            borderRadius="2xl"
            p={3.5}
            spacing={3}
            boxShadow="soft"
            border="1px solid"
            borderColor="gray.100"
          >
            <Circle size={10} bg="brand.50" color="brand.500" flexShrink={0}>
              <Icon as={FaCalendarCheck} boxSize={4} />
            </Circle>
            <Box>
              <Text fontWeight={700} fontSize="sm" color="gray.800">
                Schedule a pickup
              </Text>
              <Text fontSize="11px" color="gray.500">
                Today · 5–7 PM slot available
              </Text>
            </Box>
          </HStack>

          {/* Services 2x2 grid */}
          <SimpleGrid columns={2} spacing={2.5}>
            {appServices.map((s) => (
              <VStack
                key={s.label}
                bg="white"
                borderRadius="xl"
                py={3.5}
                spacing={1.5}
                boxShadow="soft"
                border="1px solid"
                borderColor="gray.100"
              >
                <Circle size={8} bg="brand.50" color="brand.500">
                  <Icon as={s.icon} boxSize={3.5} />
                </Circle>
                <Text fontSize="11px" fontWeight={600} color="gray.700">
                  {s.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Place order button */}
          <Box
            bgGradient="linear(to-r, brand.500, brand.600)"
            color="white"
            borderRadius="xl"
            py={3}
            textAlign="center"
            fontWeight={700}
            fontSize="sm"
            boxShadow="glow"
          >
            Place order
          </Box>
        </VStack>

        {/* Bottom nav bar */}
        <HStack justify="space-around" bg="white" borderTop="1px solid" borderColor="gray.100" py={3} px={2} mt={3}>
          <Circle size={2} bg="brand.500" />
          <Circle size={2} bg="gray.300" />
          <Circle size={2} bg="gray.300" />
          <Circle size={2} bg="gray.300" />
        </HStack>
      </Flex>
    </MotionBox>
  );
}

export default function AppPromo() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="white" position="relative" overflow="hidden">
      {/* Decorative blobs (consistent with other sections) */}
      <Box position="absolute" top="-8%" left="-6%" w="360px" h="360px" borderRadius="full" bg="brand.100" filter="blur(90px)" opacity={0.4} />
      <Box position="absolute" bottom="-12%" right="-6%" w="320px" h="320px" borderRadius="full" bg="accent.100" filter="blur(90px)" opacity={0.35} />

      <Container maxW="1200px" position="relative">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 14, lg: 16 }} alignItems="center">
          {/* Text column */}
          <StaggerGroup>
            <MotionBox variants={fadeUp}>
              <SectionBadge>
                <Box as="span" w={2} h={2} borderRadius="full" bg="brand.500" />
                New app · now live
              </SectionBadge>
            </MotionBox>

            <MotionBox variants={fadeUp} mt={5}>
              <Heading fontSize={{ base: '3xl', md: '44px' }} color="gray.900" lineHeight="1.1">
                Laundry, sorted — <GradientText>right from your phone.</GradientText>
              </Heading>
            </MotionBox>

            <MotionBox variants={fadeUp} mt={5}>
              <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="xl">
                Schedule a pickup, track your order live, and get fresh, neatly folded clothes
                delivered to your door — premium care, zero hassle.
              </Text>
            </MotionBox>

            <Stack spacing={4} mt={8}>
              {features.map((f) => (
                <MotionBox key={f.title} variants={fadeUp}>
                  <HStack spacing={4} align="center">
                    <Circle size={11} bg="brand.50" color="brand.500" flexShrink={0}>
                      <Icon as={f.icon} boxSize={5} />
                    </Circle>
                    <Text fontWeight={600} color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                      {f.title}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </Stack>

            <MotionBox variants={fadeUp} mt={9}>
              <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={2}>
                <Button
                  as="a"
                  href={APK_URL}
                  rel="noopener"
                  size="lg"
                  h={14}
                  px={8}
                  colorScheme="brand"
                  variant="solid"
                  leftIcon={<Icon as={FaDownload} boxSize={4} />}
                  aria-label="Download the Whites & Brights app for Android"
                >
                  Download for Android
                </Button>
                <Text fontSize="sm" color="gray.500" fontWeight={500}>
                  Free · Android APK
                </Text>
              </VStack>
            </MotionBox>
          </StaggerGroup>

          {/* Phone mockup column */}
          <Reveal variant={fromRight} display="flex" justifyContent="center">
            <PhoneMockup />
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
