import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Icon,
  Circle,
  List,
  ListItem,
  ListIcon,
  Divider,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaTshirt,
  FaMotorcycle,
  FaClipboardList,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  GradientText,
  SectionBadge,
  fadeUp,
} from '../components/ui';

const roles = [
  {
    icon: FaTshirt,
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
  },
  {
    icon: FaMotorcycle,
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
  },
];

function RoleColumn({ icon, title, items }) {
  return (
    <Box>
      <HStack spacing={2.5} mb={3}>
        <Icon as={icon} color="brand.500" boxSize={3.5} />
        <Text fontWeight={700} color="gray.900" fontSize="sm" textTransform="uppercase" letterSpacing="0.04em">
          {title}
        </Text>
      </HStack>
      <List spacing={2.5}>
        {items.map((item) => (
          <ListItem key={item} display="flex" alignItems="flex-start" color="gray.600" fontSize="sm">
            <ListIcon as={FaCheckCircle} color="brand.500" mt={1} flexShrink={0} />
            <Text as="span">{item}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function RoleCard({ role }) {
  return (
    <MotionBox variants={fadeUp} h="100%">
      <VStack
        align="stretch"
        h="100%"
        spacing={6}
        bg="white"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="card"
        p={{ base: 7, md: 9 }}
        transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
        _hover={{ transform: 'translateY(-6px)', boxShadow: 'cardHover', borderColor: 'brand.100' }}
      >
        <HStack spacing={4} align="center">
          <Circle size={14} bgGradient="linear(135deg, brand.500, accent.500)" color="white" flexShrink={0} boxShadow="glow">
            <Icon as={role.icon} boxSize={6} />
          </Circle>
          <Heading size="lg" color="gray.900">{role.title}</Heading>
        </HStack>

        <Text color="gray.600">{role.summary}</Text>

        <Divider borderColor="gray.100" />

        <RoleColumn icon={FaClipboardList} title="Responsibilities" items={role.responsibilities} />
        <RoleColumn icon={FaCheckCircle} title="Requirements" items={role.requirements} />

        <Box flex="1" />

        <Button
          as={RouterLink}
          to={`/contact?enquiry=career&role=${encodeURIComponent(role.role)}`}
          size="lg"
          h={14}
          variant="gradient"
          rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
          aria-label={`Apply now for the ${role.title} role`}
        >
          Apply Now
        </Button>
      </VStack>
    </MotionBox>
  );
}

export default function Careers() {
  return (
    <Box overflow="hidden">
      {/* Hero */}
      <Box
        as="section"
        position="relative"
        bgGradient="linear(130deg, brand.900 0%, brand.700 60%, brand.500 100%)"
        color="white"
        pt={{ base: 28, md: 36 }}
        pb={{ base: 16, md: 24 }}
        overflow="hidden"
      >
        <Box position="absolute" top="-20%" right="-5%" w="420px" h="420px" borderRadius="full" bg="whiteAlpha.100" />
        <Box position="absolute" bottom="-30%" left="0%" w="360px" h="360px" borderRadius="full" bg="whiteAlpha.100" />
        <Container maxW="1200px" position="relative">
          <StaggerGroup>
            <VStack spacing={5} textAlign="center">
              <MotionBox variants={fadeUp}>
                <SectionBadge bg="whiteAlpha.200" color="white" borderColor="whiteAlpha.400">
                  <Box as="span" w={2} h={2} borderRadius="full" bg="brand.300" />
                  We're Hiring
                </SectionBadge>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Heading as="h1" fontSize={{ base: '40px', md: '60px' }} lineHeight="1.05" letterSpacing="-0.03em">
                  Join the <GradientText from="white" to="brand.200">Whites &amp; Brights</GradientText> Team
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="2xl">
                  We're growing fast and just launched our new app — and we're looking for reliable,
                  friendly people to grow with us. Come build a career in premium laundry care.
                </Text>
              </MotionBox>
            </VStack>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Open roles */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
            <SectionBadge>Open Roles</SectionBadge>
            <Heading fontSize={{ base: '3xl', md: '40px' }} color="gray.900">
              Roles we're <GradientText>hiring for</GradientText>
            </Heading>
            <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl">
              Apply in a tap — tell us a little about yourself and our team will get right back to you.
            </Text>
          </VStack>

          <StaggerGroup>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }} alignItems="stretch">
              {roles.map((role) => (
                <RoleCard key={role.title} role={role} />
              ))}
            </SimpleGrid>
          </StaggerGroup>

          <Reveal variant={fadeUp} textAlign="center" mt={{ base: 12, md: 16 }}>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center" align="center">
              <Text color="gray.600">Don't see the right fit?</Text>
              <Button
                as={RouterLink}
                to="/contact?enquiry=career"
                variant="outline"
                colorScheme="brand"
                size="lg"
                h={14}
                px={8}
                rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
              >
                Get in touch
              </Button>
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
