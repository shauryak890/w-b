import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Stack, Grid, Flex, Icon, HStack, Button, SimpleGrid, Link } from '@chakra-ui/react';
import { PiCheckBold, PiArrowUpRight, PiSealPercentLight, PiLeafLight, PiBuildingsLight, PiWhatsappLogoFill } from 'react-icons/pi';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PageHero, { SectionIntro } from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, Bezel, fadeUp } from '../components/ui';
import { EASE } from '../theme';
import { categories, express, subscriptions, navItems } from '../data/services';
import { WHATSAPP_URL } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

// Keeps section headings clear of the floating navbar + sticky category bar
const SCROLL_OFFSET = 150;

const scrollToSection = (id, smooth = true) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
};

const PriceTable = ({ title, items }) => (
  <Bezel inner={{ p: { base: 5, md: 7 } }}>
    <Flex justify="space-between" align="baseline" mb={3}>
      <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500} color="ink.900">
        {title}
      </Heading>
      <Text fontSize="11px" letterSpacing="0.14em" textTransform="uppercase" color="gray.500">
        Price · Time
      </Text>
    </Flex>
    <Box as="ul" listStyleType="none">
      {items.map((item) => (
        <Flex
          as="li"
          key={item.name}
          align="baseline"
          gap={3}
          py={3}
          borderTop="1px solid"
          borderColor="gray.100"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <Text color="gray.700" flexShrink={0}>{item.name}</Text>
          <Box flex={1} borderBottom="1px dotted" borderColor="gray.300" transform="translateY(-4px)" minW={4} />
          <Text fontWeight={600} color="ink.900" sx={{ fontVariantNumeric: 'tabular-nums' }} flexShrink={0}>
            {item.price}
          </Text>
          <Text fontSize="xs" color="gray.500" w="48px" textAlign="right" flexShrink={0}>
            {item.time}
          </Text>
        </Flex>
      ))}
    </Box>
  </Bezel>
);

const CategorySection = ({ cat, index }) => (
  <Box id={cat.id} as="section" py={{ base: 16, md: 24 }} borderTop={index === 0 ? 'none' : '1px solid'} borderColor="gray.200">
    <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 16 }}>
      {/* Sticky summary column */}
      <Box position={{ lg: 'sticky' }} top={{ lg: `${SCROLL_OFFSET}px` }} alignSelf="start">
        <StaggerGroup>
          <MotionBox variants={fadeUp}>
            <Flex align="center" gap={3} color="gray.500" fontSize="sm">
              <Text fontFamily="serif" fontStyle="italic" fontSize="2xl" color="gray.400">0{index + 1}</Text>
              <Icon as={cat.icon} boxSize={6} color="ink.900" />
            </Flex>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={5}>
            <Heading fontSize={{ base: '36px', md: '48px' }} fontWeight={500} color="ink.900">
              {cat.title}
            </Heading>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={4}>
            <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="440px">
              {cat.description}
            </Text>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={6}>
            <HStack align="baseline" spacing={2}>
              <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color="gray.500">from</Text>
              <Text fontSize={{ base: '44px', md: '56px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1" color="ink.900">
                {cat.from}
              </Text>
              <Text color="gray.500">{cat.unit}</Text>
            </HStack>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={6}>
            <Stack spacing={2.5}>
              {cat.features.map((f) => (
                <HStack key={f} spacing={3} align="flex-start">
                  <Flex mt="3px" w={5} h={5} borderRadius="full" bg="brand.50" color="brand.700" align="center" justify="center" flexShrink={0}>
                    <Icon as={PiCheckBold} boxSize={3} />
                  </Flex>
                  <Text color="gray.700" fontSize="sm">{f}</Text>
                </HStack>
              ))}
            </Stack>
          </MotionBox>
          {cat.note && (
            <MotionBox variants={fadeUp} mt={6}>
              <Text fontSize="sm" color="ink.700" bg="brand.50" px={4} py={2.5} borderRadius="14px" display="inline-block">
                {cat.note}
              </Text>
            </MotionBox>
          )}
          <MotionBox variants={fadeUp} mt={8} display={{ base: 'none', lg: 'block' }}>
            <Box h="200px" borderRadius="24px" bgImage={`url(${cat.image})`} bgSize="cover" bgPosition="center" boxShadow="card" />
          </MotionBox>
        </StaggerGroup>
      </Box>

      {/* Price lists */}
      <StaggerGroup stagger={0.08}>
        <Stack spacing={5}>
          {cat.tables.map((t) => (
            <MotionBox key={t.title} variants={fadeUp}>
              <PriceTable {...t} />
            </MotionBox>
          ))}
        </Stack>
      </StaggerGroup>
    </Grid>
  </Box>
);

export default function Services() {
  usePageMeta('Services & Prices', 'Full price list for laundry by the kilo, dry cleaning, steam ironing, shoes, household items, express and monthly subscriptions.');
  const location = useLocation();
  const [active, setActive] = useState(navItems[0].id);

  // Support legacy `?tab=N` deep links (navbar, footer) by scrolling to that section
  useEffect(() => {
    const tab = parseInt(new URLSearchParams(location.search).get('tab'), 10);
    const target = navItems.find((n) => n.tab === tab);
    if (target) {
      const t = setTimeout(() => scrollToSection(target.id, false), 80);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [location.search]);

  // Highlight the category currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box as="main">
      <PageHero
        eyebrow="Services & prices"
        title={
          <>
            Every garment.
            <br />
            <Accent>One standard</Accent> of care.
          </>
        }
        description="Clear prices for everything we clean — from everyday laundry by the kilo to bridal lehengas, leather jackets and sneakers. Pickup and delivery are free."
        actions={
          <HStack spacing={3} flexWrap="wrap">
            <ArrowButton as={RouterLink} to="/contact">Book a pickup</ArrowButton>
            <HStack spacing={2} px={4} h={{ base: 12, md: 14 }} borderRadius="full" border="1px solid" borderColor="gray.200" bg="white" fontSize="sm" color="ink.900">
              <Icon as={PiSealPercentLight} boxSize={5} color="brand.700" />
              <Text>25% off your first order</Text>
            </HStack>
          </HStack>
        }
        pb={{ base: 10, md: 14 }}
      />

      {/* Sticky category bar */}
      <Box position="sticky" top={{ base: '76px', md: '92px' }} zIndex={10} bg="rgba(244,246,245,0.88)" backdropFilter="blur(14px)" borderBottom="1px solid" borderColor="gray.200">
        <Container>
          <HStack
            spacing={1.5}
            py={3}
            overflowX="auto"
            sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {navItems.map((n) => {
              const isActive = active === n.id;
              return (
                <Button
                  key={n.id}
                  onClick={() => scrollToSection(n.id)}
                  flexShrink={0}
                  h={10}
                  px={4}
                  fontSize="sm"
                  fontWeight={500}
                  variant="ghost"
                  bg={isActive ? 'ink.900' : 'white'}
                  color={isActive ? 'white' : 'gray.700'}
                  border="1px solid"
                  borderColor={isActive ? 'ink.900' : 'gray.200'}
                  _hover={{ bg: isActive ? 'ink.900' : 'gray.100' }}
                  transition={`all 0.4s ${EASE}`}
                >
                  {n.label}
                </Button>
              );
            })}
          </HStack>
        </Container>
      </Box>

      {/* Category sections */}
      <Box bg="gray.50">
        <Container>
          {categories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} />
          ))}
        </Container>
      </Box>

      {/* Express */}
      <Box id={express.id} as="section" bg="gray.50" pb={{ base: 16, md: 24 }}>
        <Container>
          <Reveal>
            <Bezel radius={40} pad={8} inner={{ bg: 'ink.900', color: 'white' }}>
              <Grid templateColumns={{ base: '1fr', lg: '1.1fr 1fr' }} gap={{ base: 10, lg: 16 }} p={{ base: 8, md: 14 }} alignItems="center">
                <Box>
                  <Flex align="center" gap={3} color="whiteAlpha.600">
                    <Text fontFamily="serif" fontStyle="italic" fontSize="2xl">0{categories.length + 1}</Text>
                    <Icon as={express.icon} boxSize={6} color="brand.300" />
                  </Flex>
                  <Heading mt={5} fontSize={{ base: '40px', md: '64px' }} fontWeight={500} lineHeight="0.98" letterSpacing="-0.05em">
                    Need it tonight? <Accent dark>Go express.</Accent>
                  </Heading>
                  <Text mt={5} color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} maxW="440px">
                    Same-day turnaround with priority processing and rush pickup. Express is charged at a 20% premium on regular prices.
                  </Text>
                  <HStack mt={8} spacing={3} flexWrap="wrap">
                    <ArrowButton as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="light" icon={PiWhatsappLogoFill}>
                      Request express pickup
                    </ArrowButton>
                  </HStack>
                </Box>
                <SimpleGrid columns={2} spacing={3}>
                  {express.features.map((f) => (
                    <Box key={f} p={5} borderRadius="20px" bg="whiteAlpha.100" border="1px solid" borderColor="whiteAlpha.200">
                      <Icon as={PiCheckBold} color="brand.300" boxSize={4} />
                      <Text mt={3} fontSize="sm" fontWeight={500}>{f}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Grid>
            </Bezel>
          </Reveal>
        </Container>
      </Box>

      {/* Subscriptions */}
      <Box id={subscriptions.id} as="section" bg="white" py={{ base: 24, md: 32 }}>
        <Container>
          <SectionIntro
            eyebrow="Monthly subscriptions"
            title={<>Laundry on autopilot, <Accent>for less.</Accent></>}
            description="A fixed monthly pack with free pickups and priority service. Pause or cancel whenever you like."
          />
          <StaggerGroup stagger={0.08}>
            <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} spacing={4}>
              {subscriptions.plans.map((p, i) => {
                const featured = i === subscriptions.plans.length - 1;
                return (
                  <MotionBox key={p.name} variants={fadeUp} h="100%">
                    <Bezel h="100%" dark={featured} inner={{ p: { base: 6, md: 7 }, bg: featured ? 'ink.900' : 'white', color: featured ? 'white' : 'ink.900', display: 'flex', flexDirection: 'column' }}>
                      <Text fontSize="sm" fontWeight={500} color={featured ? 'brand.200' : 'gray.500'}>{p.name}</Text>
                      <HStack align="baseline" spacing={1.5} mt={4}>
                        <Text fontSize={{ base: '40px', md: '44px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                          {p.price}
                        </Text>
                        <Text fontSize="sm" whiteSpace="nowrap" color={featured ? 'whiteAlpha.600' : 'gray.500'}>/ month</Text>
                      </HStack>
                      <Stack spacing={3} mt={6} pt={6} borderTop="1px solid" borderColor={featured ? 'whiteAlpha.200' : 'gray.100'} flex={1}>
                        {p.features.map((f) => (
                          <HStack key={f} spacing={3}>
                            <Icon as={PiCheckBold} boxSize={3.5} color={featured ? 'brand.300' : 'brand.700'} />
                            <Text fontSize="sm" color={featured ? 'whiteAlpha.900' : 'gray.700'}>{f}</Text>
                          </HStack>
                        ))}
                      </Stack>
                      <Button
                        as={RouterLink}
                        to="/contact"
                        mt={8}
                        h={12}
                        variant={featured ? 'light' : 'outline'}
                        rightIcon={<Icon as={PiArrowUpRight} />}
                      >
                        Choose {p.name}
                      </Button>
                    </Bezel>
                  </MotionBox>
                );
              })}
            </SimpleGrid>
          </StaggerGroup>
          <Reveal mt={8}>
            <Flex wrap="wrap" gap={{ base: 3, md: 8 }} color="gray.600" fontSize="sm">
              {subscriptions.perks.map((perk) => (
                <HStack key={perk} spacing={2}>
                  <Icon as={PiCheckBold} color="brand.700" />
                  <Text>{perk}</Text>
                </HStack>
              ))}
            </Flex>
          </Reveal>
        </Container>
      </Box>

      {/* Commercial + eco */}
      <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', md: '1.3fr 1fr' }} gap={4}>
            <Reveal h="100%">
              <Bezel h="100%" inner={{ p: { base: 8, md: 12 } }}>
                <Icon as={PiBuildingsLight} boxSize={8} color="ink.900" />
                <Heading mt={6} fontSize={{ base: '28px', md: '40px' }} fontWeight={500} color="ink.900">
                  Running a hotel, salon or office?
                </Heading>
                <Text mt={4} color="gray.600" maxW="480px">
                  Scheduled pickups, custom billing and bulk rates for restaurants, hospitality, salons, spas and corporate offices.
                </Text>
                <Link as={RouterLink} to="/contact?enquiry=business" mt={8} display="inline-flex" alignItems="center" gap={2} fontWeight={500} color="ink.900" borderBottom="1px solid" borderColor="ink.900" pb={0.5}>
                  Talk to us about business laundry <Icon as={PiArrowUpRight} />
                </Link>
              </Bezel>
            </Reveal>
            <Reveal h="100%">
              <Bezel h="100%" inner={{ p: { base: 8, md: 12 }, bg: 'brand.50' }}>
                <Icon as={PiLeafLight} boxSize={8} color="brand.800" />
                <Heading mt={6} fontSize={{ base: '28px', md: '40px' }} fontWeight={500} color="ink.900">
                  Gentle on fabric, <Accent>and the planet.</Accent>
                </Heading>
                <Text mt={4} color="gray.700">
                  Biodegradable detergents, energy-efficient machines and water-saving cycles at every outlet.
                </Text>
              </Bezel>
            </Reveal>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
