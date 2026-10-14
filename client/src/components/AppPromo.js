import React from 'react';
import { Box, Container, Heading, Text, Stack, HStack, VStack, Icon, SimpleGrid, Flex, Grid } from '@chakra-ui/react';
import {
  PiTruckLight,
  PiLightningLight,
  PiMapPinLight,
  PiWashingMachineLight,
  PiCoatHangerLight,
  PiTShirtLight,
  PiCalendarCheckLight,
  PiGooglePlayLogoFill,
  PiCheckBold,
} from 'react-icons/pi';
import { MotionBox, Reveal, StaggerGroup, Eyebrow, Accent, ArrowButton, fadeUp } from './ui';
import { PLAY_STORE_URL } from '../data/business';

const features = [
  { icon: PiTruckLight, title: 'Free doorstep pickup & delivery' },
  { icon: PiMapPinLight, title: 'Track every order, live' },
  { icon: PiLightningLight, title: 'Same-day express when you need it' },
];

const appServices = [
  { icon: PiWashingMachineLight, label: 'Wash & Fold' },
  { icon: PiCoatHangerLight, label: 'Dry Clean' },
  { icon: PiTShirtLight, label: 'Ironing' },
  { icon: PiLightningLight, label: 'Express' },
];

/* ------------------------------------------------------------------ */
/*  PhoneMockup — pure CSS app UI preview (no image asset)             */
/* ------------------------------------------------------------------ */
function PhoneMockup() {
  return (
    <MotionBox
      aria-hidden="true"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      w={{ base: '260px', md: '300px' }}
      h={{ base: '530px', md: '610px' }}
      borderRadius="46px"
      bg="ink.900"
      p="10px"
      boxShadow="floating"
      position="relative"
      style={{ rotate: -3 }}
    >
      <Flex direction="column" h="100%" bg="gray.50" borderRadius="36px" overflow="hidden" position="relative">
        <Box position="absolute" top="10px" left="50%" transform="translateX(-50%)" w="38%" h="20px" bg="ink.900" borderRadius="full" zIndex={2} />

        <Box bg="ink.900" pt={10} pb={6} px={5} color="white">
          <Text fontSize="11px" color="whiteAlpha.600">Good evening</Text>
          <Text fontWeight={500} fontSize="xl" letterSpacing="-0.03em">
            What needs cleaning?
          </Text>
        </Box>

        <VStack align="stretch" spacing={3} px={4} pt={4} flex="1">
          <HStack bg="white" borderRadius="18px" p={3.5} spacing={3} border="1px solid" borderColor="gray.100">
            <Flex w={10} h={10} borderRadius="12px" bg="brand.50" color="brand.700" align="center" justify="center" flexShrink={0}>
              <Icon as={PiCalendarCheckLight} boxSize={5} />
            </Flex>
            <Box>
              <Text fontWeight={600} fontSize="sm" color="ink.900">Pickup today</Text>
              <Text fontSize="11px" color="gray.500">5–7 PM slot available</Text>
            </Box>
          </HStack>

          <SimpleGrid columns={2} spacing={2.5}>
            {appServices.map((s) => (
              <VStack key={s.label} bg="white" borderRadius="16px" py={4} spacing={2} border="1px solid" borderColor="gray.100">
                <Icon as={s.icon} boxSize={6} color="ink.900" />
                <Text fontSize="11px" fontWeight={500} color="gray.700">{s.label}</Text>
              </VStack>
            ))}
          </SimpleGrid>

          <HStack bg="white" borderRadius="18px" p={3.5} spacing={3} border="1px solid" borderColor="gray.100">
            <Flex w={8} h={8} borderRadius="full" bg="brand.500" color="white" align="center" justify="center" flexShrink={0}>
              <Icon as={PiCheckBold} boxSize={3.5} />
            </Flex>
            <Box flex={1}>
              <Text fontWeight={600} fontSize="xs" color="ink.900">Order #2481 out for delivery</Text>
              <Box mt={1.5} h="4px" bg="gray.100" borderRadius="full" overflow="hidden">
                <Box w="78%" h="100%" bg="brand.500" borderRadius="full" />
              </Box>
            </Box>
          </HStack>

          <Box bg="ink.900" color="white" borderRadius="full" py={3} textAlign="center" fontWeight={500} fontSize="sm">
            Place order
          </Box>
        </VStack>
      </Flex>
    </MotionBox>
  );
}

export default function AppPromo() {
  return (
    <Box as="section" py={{ base: 24, md: 40 }} bg="white" position="relative" overflow="hidden">
      <Container position="relative">
        <Grid templateColumns={{ base: '1fr', lg: '1.1fr 1fr' }} gap={{ base: 16, lg: 16 }} alignItems="center">
          <StaggerGroup>
            <MotionBox variants={fadeUp}>
              <Eyebrow>The app · now live</Eyebrow>
            </MotionBox>

            <MotionBox variants={fadeUp} mt={6}>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                Laundry, sorted — <Accent>right from your phone.</Accent>
              </Heading>
            </MotionBox>

            <MotionBox variants={fadeUp} mt={6}>
              <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="480px">
                Schedule a pickup, follow your order as it moves, and pay when it's back at your door.
              </Text>
            </MotionBox>

            <Stack spacing={0} mt={10} borderTop="1px solid" borderColor="gray.100" maxW="480px">
              {features.map((f) => (
                <MotionBox key={f.title} variants={fadeUp}>
                  <HStack spacing={4} py={4} borderBottom="1px solid" borderColor="gray.100">
                    <Icon as={f.icon} boxSize={6} color="brand.700" flexShrink={0} />
                    <Text fontWeight={500} color="ink.900" fontSize={{ base: 'md', md: 'lg' }}>
                      {f.title}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </Stack>

            <MotionBox variants={fadeUp} mt={10}>
              <HStack spacing={4} align="center" flexWrap="wrap">
                <ArrowButton
                  as="a"
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get the Whites & Brights app on Google Play"
                  icon={PiGooglePlayLogoFill}
                >
                  Get it on Google Play
                </ArrowButton>
                <Text fontSize="sm" color="gray.500">Free · Android</Text>
              </HStack>
            </MotionBox>
          </StaggerGroup>

          <Reveal display="flex" justifyContent="center" position="relative">
            <Box position="absolute" w={{ base: '320px', md: '440px' }} h={{ base: '320px', md: '440px' }} top="50%" left="50%" transform="translate(-50%,-50%)" borderRadius="full" bg="gray.50" border="1px solid" borderColor="gray.100" />
            <PhoneMockup />
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
}
