import React from 'react';
import { Box, Container, Heading, Text, Stack, SimpleGrid, Grid, Flex, Icon, HStack } from '@chakra-ui/react';
import {
  PiGearSixLight,
  PiUserFocusLight,
  PiSealCheckLight,
  PiLeafLight,
  PiCheckBold,
  PiStarFill,
} from 'react-icons/pi';
import PageHero, { SectionIntro } from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, Bezel, fadeUp, Label } from '../components/ui';
import { outlets, AVG_RATING, TOTAL_REVIEWS } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1800&q=80';

const values = [
  {
    title: 'Quality, without shortcuts',
    text: 'The right products and techniques for every fabric, so each garment gets the care it actually needs.',
  },
  {
    title: 'Responsible by default',
    text: 'Biodegradable detergents, water and energy conservation — eco-friendly practice across every outlet.',
  },
  {
    title: 'Built around customers',
    text: 'Your preferences, your schedule, your doorstep. We tailor the service to you, not the other way round.',
  },
];

const apart = [
  { title: 'Advanced technology', icon: PiGearSixLight, points: ['Commercial-grade cleaning equipment', 'Premium, eco-friendly products', 'Advanced stain removal'] },
  { title: 'Personal service', icon: PiUserFocusLight, points: ['Saved cleaning preferences', 'Garment-specific treatment', 'Flexible pickup scheduling'] },
  { title: 'Quality checks', icon: PiSealCheckLight, points: ['Inspected before and after', 'Expert fabric care', 'Satisfaction guarantee'] },
  { title: 'Eco-friendly', icon: PiLeafLight, points: ['Biodegradable products', 'Water conservation', 'Minimal packaging waste'] },
];

export default function About() {
  usePageMeta('About Us', 'The story, mission and values behind Whites & Brights, premium eco-conscious laundry in Patna.');
  const facts = [
    { value: outlets.length, label: 'Outlets in Patna' },
    { value: AVG_RATING, label: 'Google rating', star: true },
    { value: TOTAL_REVIEWS, label: 'Google reviews' },
    { value: '48h', label: 'Standard turnaround' },
  ];

  return (
    <Box as="main">
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Laundry, done the way <Accent>it should be.</Accent>
          </>
        }
        description="Whites & Brights started with a simple idea: premium garment care shouldn't cost the earth — or your weekend."
      >
        <Box position="relative" borderRadius={{ base: '24px', md: '36px' }} overflow="hidden" h={{ base: '320px', md: '520px' }}>
          <Box position="absolute" inset={0} bgImage={`url(${HERO_IMAGE})`} bgSize="cover" bgPosition="center" />
          <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(6,29,35,0.85), rgba(6,29,35,0) 60%)" />
          <SimpleGrid position="absolute" left={0} right={0} bottom={0} columns={{ base: 2, md: 4 }} p={{ base: 5, md: 10 }} spacing={{ base: 4, md: 8 }} color="white">
            {facts.map((f) => (
              <Box key={f.label}>
                <HStack spacing={2} align="center">
                  <Text fontSize={{ base: '32px', md: '52px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1">
                    {f.value}
                  </Text>
                  {f.star && <Icon as={PiStarFill} color="#F4B400" boxSize={{ base: 5, md: 7 }} />}
                </HStack>
                <Text mt={2} fontSize={{ base: 'xs', md: 'sm' }} color="whiteAlpha.800">{f.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </PageHero>

      {/* Story */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '4fr 8fr' }} gap={{ base: 8, lg: 20 }}>
            <Reveal>
              <Label>How it started</Label>
            </Reveal>
            <StaggerGroup>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: '2xl', md: '36px' }} lineHeight="1.3" letterSpacing="-0.03em" color="ink.900">
                  Our founders saw a gap: nobody in town offered laundry that was <Accent>truly premium</Accent> without compromising on quality or the environment.
                </Text>
              </MotionBox>
              <MotionBox variants={fadeUp} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>
                  <Text>
                    After a lot of research and testing, Whites & Brights was born — pairing commercial-grade cleaning technology with eco-conscious products and genuinely friendly local service.
                  </Text>
                  <Text>
                    Today we run three outlets across Danapur and Phulwari Sharif, a pickup fleet and our own app. The commitment hasn't changed: quality, sustainability and customers who keep coming back.
                  </Text>
                </SimpleGrid>
              </MotionBox>
            </StaggerGroup>
          </Grid>
        </Container>
      </Box>

      {/* Mission + vision */}
      <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container>
          <StaggerGroup stagger={0.1}>
            <Grid templateColumns={{ base: '1fr', md: '1.15fr 1fr' }} gap={4}>
              <MotionBox variants={fadeUp} h="100%">
                <Bezel h="100%" dark inner={{ bg: 'ink.900', color: 'white', p: { base: 8, md: 12 } }}>
                  <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="brand.200">Mission</Text>
                  <Text mt={6} fontSize={{ base: 'xl', md: '28px' }} lineHeight="1.35" letterSpacing="-0.02em">
                    To turn an everyday chore into a worry-free experience — exceptional laundry and dry cleaning with the smallest possible environmental footprint.
                  </Text>
                </Bezel>
              </MotionBox>
              <MotionBox variants={fadeUp} h="100%">
                <Bezel h="100%" inner={{ p: { base: 8, md: 12 } }}>
                  <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="brand.700">Vision</Text>
                  <Text mt={6} fontSize={{ base: 'xl', md: '28px' }} lineHeight="1.35" letterSpacing="-0.02em" color="ink.900">
                    To be India's most trusted eco-conscious laundry brand, making premium care accessible in every city we reach.
                  </Text>
                </Bezel>
              </MotionBox>
            </Grid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Values */}
      <Box as="section" bg="gray.50" pb={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro eyebrow="What we stand for" title={<>Three principles, <Accent>every order.</Accent></>} />
          <StaggerGroup>
            <Box borderTop="1px solid" borderColor="gray.200">
              {values.map((v, i) => (
                <MotionBox key={v.title} variants={fadeUp}>
                  <Grid templateColumns={{ base: '56px 1fr', md: '120px 1fr 1fr' }} gap={{ base: 4, md: 8 }} py={{ base: 8, md: 10 }} borderBottom="1px solid" borderColor="gray.200" alignItems="baseline">
                    <Text fontFamily="serif" fontStyle="italic" fontSize={{ base: '3xl', md: '5xl' }} color="gray.300" lineHeight="1">0{i + 1}</Text>
                    <Heading fontSize={{ base: '2xl', md: '36px' }} fontWeight={500} color="ink.900">{v.title}</Heading>
                    <Text gridColumn={{ base: '2', md: 'auto' }} color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="440px">{v.text}</Text>
                  </Grid>
                </MotionBox>
              ))}
            </Box>
          </StaggerGroup>
        </Container>
      </Box>

      {/* What sets us apart */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro
            eyebrow="Why Whites & Brights"
            title={<>The details <Accent>that add up.</Accent></>}
            description="Small things, done consistently, are what turn a laundry into the one you trust with your favourite clothes."
          />
          <StaggerGroup stagger={0.08}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
              {apart.map((a) => (
                <MotionBox key={a.title} variants={fadeUp} h="100%">
                  <Bezel h="100%" inner={{ p: { base: 6, md: 7 } }}>
                    <Flex w={12} h={12} borderRadius="16px" bg="gray.50" border="1px solid" borderColor="gray.100" align="center" justify="center" color="ink.900">
                      <Icon as={a.icon} boxSize={6} />
                    </Flex>
                    <Heading mt={6} fontSize="xl" fontWeight={500} color="ink.900">{a.title}</Heading>
                    <Stack spacing={2.5} mt={5}>
                      {a.points.map((p) => (
                        <HStack key={p} spacing={2.5} align="flex-start">
                          <Icon as={PiCheckBold} boxSize={3} color="brand.700" mt="6px" />
                          <Text fontSize="sm" color="gray.600">{p}</Text>
                        </HStack>
                      ))}
                    </Stack>
                  </Bezel>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>
    </Box>
  );
}
