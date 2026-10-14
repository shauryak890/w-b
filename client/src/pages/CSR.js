import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Grid, Flex, Icon, Stack, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PiBowlFoodLight, PiHandHeartLight, PiUsersThreeLight, PiArrowUpRight } from 'react-icons/pi';
import PageHero, { SectionIntro } from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, Bezel, fadeUp } from '../components/ui';
import { EASE } from '../theme';

import usePageMeta from '../hooks/usePageMeta';
const IMAGE = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80';

const pillars = [
  {
    title: 'Regular drives',
    text: 'Food distribution drives run every week, organised with our associates and community partners.',
  },
  {
    title: 'Safe, hygienic, fresh',
    text: 'Meals are freshly prepared and handed out with strict attention to food safety and hygiene.',
  },
  {
    title: 'Scaled up when it matters',
    text: 'During emergencies and extreme weather we increase distribution to reach more people in need.',
  },
];

const ways = [
  {
    icon: PiHandHeartLight,
    title: 'Partner or volunteer',
    text: 'Organisations and individuals can help us expand drives, donate supplies or join on the ground.',
    cta: 'Get in touch',
    to: '/contact',
  },
  {
    icon: PiUsersThreeLight,
    title: 'Become an associate',
    text: 'Associates help run W&B in their area — and take part in Do Roti drives in their community.',
    cta: 'Become an associate',
    to: '/associate',
  },
];

export default function CSR() {
  usePageMeta('CSR — Do Roti', 'Do Roti is the Whites & Brights initiative providing fresh meals to homeless and hungry people in Patna.');
  return (
    <Box as="main">
      <PageHero
        dark
        eyebrow="CSR · Do Roti"
        title={
          <>
            Two rotis can <Accent from="brand.200">change a day.</Accent>
          </>
        }
        description="Do Roti is our initiative to provide fresh, nutritious meals to homeless and hungry people — because a better community starts with dignity and a warm meal."
        actions={
          <ArrowButton as={RouterLink} to="/contact" variant="light" alignSelf="flex-start">
            Support Do Roti
          </ArrowButton>
        }
      >
        <Box position="relative" borderRadius={{ base: '24px', md: '36px' }} overflow="hidden" h={{ base: '280px', md: '480px' }}>
          <Box
            position="absolute"
            inset={0}
            bgImage={`url(${IMAGE})`}
            bgSize="cover"
            bgPosition="center"
            role="img"
            aria-label="Children smiling together"
          />
          <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(6,29,35,0.6), transparent 55%)" />
          <Flex position="absolute" left={{ base: 5, md: 10 }} bottom={{ base: 5, md: 10 }} align="center" gap={3} color="white">
            <Flex w={12} h={12} borderRadius="full" bg="whiteAlpha.200" border="1px solid" borderColor="whiteAlpha.400" align="center" justify="center" backdropFilter="blur(8px)">
              <Icon as={PiBowlFoodLight} boxSize={6} />
            </Flex>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={500}>Weekly food drives across Patna</Text>
          </Flex>
        </Box>
      </PageHero>

      {/* How it works */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="gray.500" mb={6}>The initiative</Text>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                Serving with <Accent>care, every week.</Accent>
              </Heading>
              <Text mt={6} color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="420px">
                Do Roti is run by our team, associates and community partners — the same people who care for your clothes.
              </Text>
            </Reveal>
            <StaggerGroup>
              <Box borderTop="1px solid" borderColor="gray.200">
                {pillars.map((p, i) => (
                  <MotionBox key={p.title} variants={fadeUp}>
                    <Grid templateColumns="64px 1fr" gap={4} py={{ base: 7, md: 9 }} borderBottom="1px solid" borderColor="gray.200">
                      <Text fontFamily="serif" fontStyle="italic" fontSize="3xl" color="gray.300" lineHeight="1">0{i + 1}</Text>
                      <Box>
                        <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{p.title}</Heading>
                        <Text mt={2} color="gray.600" maxW="480px">{p.text}</Text>
                      </Box>
                    </Grid>
                  </MotionBox>
                ))}
              </Box>
            </StaggerGroup>
          </Grid>
        </Container>
      </Box>

      {/* Get involved */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro
            eyebrow="Get involved"
            title={<>Help us reach <Accent>more people.</Accent></>}
            description="We welcome responsible partners and volunteers who want to expand the programme."
          />
          <StaggerGroup stagger={0.1}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {ways.map((w, i) => (
                <MotionBox key={w.title} variants={fadeUp} h="100%">
                  <Bezel
                    as={RouterLink}
                    to={w.to}
                    display="block"
                    h="100%"
                    role="group"
                    dark={i === 0}
                    inner={{ bg: i === 0 ? 'ink.900' : 'white', color: i === 0 ? 'white' : 'ink.900', p: { base: 8, md: 12 } }}
                  >
                    <Flex justify="space-between" align="flex-start">
                      <Icon as={w.icon} boxSize={9} color={i === 0 ? 'brand.200' : 'brand.700'} />
                      <Flex w="44px" h="44px" borderRadius="full" bg={i === 0 ? 'white' : 'ink.900'} color={i === 0 ? 'ink.900' : 'white'} align="center" justify="center" transition={`transform 0.5s ${EASE}`} _groupHover={{ transform: 'rotate(45deg)' }}>
                        <Icon as={PiArrowUpRight} boxSize={5} />
                      </Flex>
                    </Flex>
                    <Heading mt={10} fontSize={{ base: '2xl', md: '36px' }} fontWeight={500}>{w.title}</Heading>
                    <Text mt={3} color={i === 0 ? 'whiteAlpha.800' : 'gray.600'} maxW="420px">{w.text}</Text>
                    <Stack mt={8}>
                      <Button as="span" variant={i === 0 ? 'light' : 'outline'} h={12} alignSelf="flex-start" pointerEvents="none">
                        {w.cta}
                      </Button>
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
