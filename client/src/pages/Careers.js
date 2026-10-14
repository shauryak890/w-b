import React, { useState } from 'react';
import { Box, Container, Heading, Text, Stack, HStack, SimpleGrid, Grid, Button, Icon, Flex, Collapse } from '@chakra-ui/react';
import { PiTShirtLight, PiMopedLight, PiCheckBold, PiPlusBold, PiArrowUpRight, PiMapPinLight } from 'react-icons/pi';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, fadeUp } from '../components/ui';
import { EASE } from '../theme';

import usePageMeta from '../hooks/usePageMeta';
const roles = [
  {
    icon: PiTShirtLight,
    title: 'Laundry Operator',
    summary:
      'Run our in-facility laundry process — washing, drying, steam-pressing, ironing, folding, sorting, tagging and quality-checking orders using eco-friendly supplies and commercial machines.',
    responsibilities: [
      'Sort garments by fabric and colour',
      'Operate wash & dry cycles on commercial machines',
      'Press, iron and fold to a premium finish',
      'Tag & track orders in our operator app',
      'Maintain hygiene and machine upkeep',
    ],
    requirements: [
      'Detail-oriented and reliable',
      'Able to work shifts',
      'Comfortable using a simple operator app',
      'Prior laundry / textile experience a plus',
    ],
    role: 'Laundry Operator',
    type: 'Full-time · Shifts',
  },
  {
    icon: PiMopedLight,
    title: 'Rider (Delivery Partner)',
    summary:
      "Pick up and deliver laundry orders through our new app and be the friendly face of the brand at the customer's doorstep.",
    responsibilities: [
      'Accept pickup / delivery jobs in the rider app',
      'Collect & hand over orders on time',
      'Handle garments with care',
      'Update order status in real time',
      'Manage UPI / cash collection where applicable',
    ],
    requirements: [
      'Own a two-wheeler with a valid driving license',
      'Have a smartphone',
      'Knowledge of the local area',
      'Punctual and polite',
      'Comfortable using the rider app',
    ],
    role: 'Rider',
    type: 'Full-time · Own two-wheeler',
  },
];

const applyUrl = (role) => `/contact?enquiry=career${role ? `&role=${encodeURIComponent(role)}` : ''}`;

function List({ title, items }) {
  return (
    <Box>
      <Text fontSize="11px" letterSpacing="0.16em" textTransform="uppercase" color="gray.500" mb={4}>{title}</Text>
      <Stack spacing={3}>
        {items.map((item) => (
          <HStack key={item} spacing={3} align="flex-start">
            <Icon as={PiCheckBold} boxSize={3.5} color="brand.700" mt="5px" flexShrink={0} />
            <Text color="gray.700">{item}</Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
}

function RoleRow({ role, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <MotionBox variants={fadeUp} borderBottom="1px solid" borderColor="gray.200">
      <Grid
        onClick={() => setOpen((v) => !v)}
        cursor="pointer"
        w="full"
        textAlign="left"
        templateColumns={{ base: '1fr auto', md: '72px 1fr auto auto' }}
        gap={{ base: 4, md: 8 }}
        alignItems="center"
        py={{ base: 7, md: 10 }}
        role="group"
      >
        <Text display={{ base: 'none', md: 'block' }} fontFamily="serif" fontStyle="italic" fontSize="4xl" color="gray.300" lineHeight="1">0{index + 1}</Text>
        <Box>
          <HStack spacing={3}>
            <Icon as={role.icon} boxSize={7} color="ink.900" />
            <Heading fontSize={{ base: '2xl', md: '40px' }} fontWeight={500} color="ink.900" transition={`color 0.4s ${EASE}`} _groupHover={{ color: 'brand.700' }}>
              {role.title}
            </Heading>
          </HStack>
          <HStack spacing={4} mt={3} fontSize="sm" color="gray.600" flexWrap="wrap">
            <Text>{role.type}</Text>
            <HStack spacing={1.5}><Icon as={PiMapPinLight} /><Text>Patna</Text></HStack>
          </HStack>
        </Box>
        <Button
          as={RouterLink}
          to={applyUrl(role.role)}
          onClick={(e) => e.stopPropagation()}
          display={{ base: 'none', md: 'inline-flex' }}
          variant="gradient"
          h={12}
          px={6}
          rightIcon={<Icon as={PiArrowUpRight} />}
          aria-label={`Apply for the ${role.title} role`}
        >
          Apply
        </Button>
        <Flex as="button" type="button" aria-expanded={open} aria-label={`${open ? 'Hide' : 'Show'} details for ${role.title}`} w="44px" h="44px" borderRadius="full" border="1px solid" borderColor="gray.300" align="center" justify="center" bg={open ? 'ink.900' : 'white'} color={open ? 'white' : 'ink.900'} transition={`all 0.4s ${EASE}`}>
          <Icon as={PiPlusBold} boxSize={4} transform={open ? 'rotate(45deg)' : 'none'} transition={`transform 0.4s ${EASE}`} />
        </Flex>
      </Grid>
      <Collapse in={open} animateOpacity>
        <Box pl={{ md: '104px' }} pb={{ base: 10, md: 14 }}>
          <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" maxW="720px" lineHeight="1.6">{role.summary}</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} mt={10} maxW="900px">
            <List title="What you'll do" items={role.responsibilities} />
            <List title="What we're looking for" items={role.requirements} />
          </SimpleGrid>
          <ArrowButton as={RouterLink} to={applyUrl(role.role)} mt={10} display={{ base: 'inline-flex', md: 'none' }}>
            Apply for this role
          </ArrowButton>
        </Box>
      </Collapse>
    </MotionBox>
  );
}

export default function Careers() {
  usePageMeta('Careers', 'Open roles at Whites & Brights: laundry operators and delivery riders in Patna.');
  return (
    <Box as="main">
      <PageHero
        eyebrow={`We're hiring · ${roles.length} open roles`}
        title={
          <>
            Good work, <Accent>with good people.</Accent>
          </>
        }
        description="We're growing fast and just launched our app. We're looking for reliable, friendly people to grow with us and build a career in garment care."
        actions={
          <ArrowButton as="a" href="#roles" alignSelf="flex-start">
            See open roles
          </ArrowButton>
        }
      />

      <Box id="roles" as="section" bg="gray.50" pb={{ base: 24, md: 36 }} scrollMarginTop="100px">
        <Container>
          <StaggerGroup>
            <Box borderTop="1px solid" borderColor="gray.200">
              {roles.map((role, i) => (
                <RoleRow key={role.title} role={role} index={i} defaultOpen={i === 0} />
              ))}
            </Box>
          </StaggerGroup>

          <Reveal mt={{ base: 12, md: 16 }}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={6} p={{ base: 7, md: 10 }} borderRadius="28px" bg="white" border="1px solid" borderColor="gray.200">
              <Box>
                <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">Don't see the right fit?</Heading>
                <Text mt={2} color="gray.600">Tell us what you're good at — we're always happy to hear from good people.</Text>
              </Box>
              <Button as={RouterLink} to={applyUrl()} variant="outline" h={12} px={6} rightIcon={<Icon as={PiArrowUpRight} />} flexShrink={0}>
                Get in touch
              </Button>
            </Flex>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
