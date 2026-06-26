import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  VStack,
  Image,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button,
  Circle,
} from '@chakra-ui/react';
import {
  FaTools,
  FaUserCog,
  FaCheckCircle,
  FaLeaf,
  FaBullseye,
  FaRegEye,
  FaArrowRight,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  SectionHeading,
  SectionBadge,
  GradientText,
  GlassCard,
  FloatingCard,
  fadeUp,
  fromLeft,
  fromRight,
  scaleIn,
} from '../components/ui';

const values = [
  {
    title: 'Quality Excellence',
    description: 'We are committed to the highest quality of service, using the best products and techniques so your garments receive the care they deserve.',
    icon: FaCheckCircle,
    color: 'brand',
  },
  {
    title: 'Environmental Responsibility',
    description: 'We prioritise eco-friendly practices throughout our operations, from biodegradable detergents to water and energy conservation.',
    icon: FaLeaf,
    color: 'green',
  },
  {
    title: 'Customer-Centric Approach',
    description: 'We put customers at the centre of everything we do, tailoring our services to meet individual needs and exceed expectations.',
    icon: FaUserCog,
    color: 'accent',
  },
];

const apart = [
  {
    title: 'Advanced Technology',
    icon: FaTools,
    color: 'brand',
    points: ['State-of-the-art cleaning equipment', 'Premium, eco-friendly cleaning products', 'Advanced stain removal techniques'],
  },
  {
    title: 'Personalized Service',
    icon: FaUserCog,
    color: 'accent',
    points: ['Customized cleaning preferences', 'Garment-specific treatment options', 'Flexible scheduling and pickup', 'Detailed care for all items'],
  },
  {
    title: 'Quality Service',
    icon: FaCheckCircle,
    color: 'green',
    points: ['Premium cleaning solutions', 'Attention to detail', 'Expert fabric care', 'Satisfaction guarantee'],
  },
  {
    title: 'Eco-Friendly',
    icon: FaLeaf,
    color: 'highlight',
    points: ['Biodegradable products', 'Water conservation', 'Energy-efficient machines', 'Minimal packaging waste'],
  },
];

export default function About() {
  return (
    <Box overflow="hidden">
      {/* Hero */}
      <Box position="relative" bg="gray.50" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }} overflow="hidden">
        <Box position="absolute" top="-6%" right="-6%" w="420px" h="420px" borderRadius="full" bg="brand.100" filter="blur(110px)" opacity={0.5} />
        <Box position="absolute" bottom="-10%" left="-8%" w="360px" h="360px" borderRadius="full" bg="accent.100" filter="blur(110px)" opacity={0.4} />
        <Container maxW="1200px" position="relative">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
            <Reveal variant={fromLeft}>
              <Stack spacing={6}>
                <SectionBadge>Our Story</SectionBadge>
                <Heading fontSize={{ base: '40px', md: '56px' }} lineHeight="1.05" letterSpacing="-0.03em" color="gray.900">
                  Redefining laundry, <GradientText>one garment at a time</GradientText>
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Whites & Brights was founded with a simple yet powerful vision: to revolutionise the laundry industry by combining cutting-edge technology with eco-friendly practices and exceptional customer service.
                </Text>
                <Text color="gray.600">
                  Our journey began when our founders recognised a gap in the market for a truly premium laundry service that didn't compromise on quality or environmental responsibility. After extensive research and development, Whites & Brights was born — a service that pairs state-of-the-art cleaning technology with eco-conscious practices.
                </Text>
                <Text color="gray.600">
                  Today, we're proud to bring our vision of exceptional laundry services to life. Our commitment to quality, sustainability, and customer satisfaction remains at the heart of everything we do.
                </Text>
              </Stack>
            </Reveal>

            <Reveal variant={fromRight} position="relative">
              <Box borderRadius="3xl" overflow="hidden" boxShadow="floating">
                <Image
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Whites & Brights - premium laundry service"
                  objectFit="cover"
                  w="100%"
                  h={{ base: '340px', md: '500px' }}
                />
              </Box>
              <FloatingCard position="absolute" top={{ base: 4, md: 8 }} left={{ base: 4, md: -8 }} duration={6}>
                <GlassCard p={5} bg="rgba(255,255,255,0.95)" maxW="210px">
                  <HStackLeaf />
                </GlassCard>
              </FloatingCard>
            </Reveal>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="1200px">
          <StaggerGroup>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <MotionBox variants={fadeUp}>
                <Box h="100%" p={{ base: 8, md: 10 }} borderRadius="3xl" bgGradient="linear(160deg, brand.500, accent.600)" color="white" boxShadow="glow" position="relative" overflow="hidden">
                  <Box position="absolute" top="-20%" right="-10%" w="240px" h="240px" borderRadius="full" bg="whiteAlpha.200" />
                  <Flex align="center" justify="center" w={14} h={14} borderRadius="2xl" bg="whiteAlpha.300" backdropFilter="blur(8px)" mb={6}>
                    <Icon as={FaBullseye} boxSize={6} />
                  </Flex>
                  <Heading size="lg" mb={4}>Our Mission</Heading>
                  <Text fontSize="lg" color="whiteAlpha.900" position="relative">
                    To provide exceptional laundry and dry cleaning services that exceed our customers' expectations while minimising our environmental impact — combining innovative technology, eco-friendly practices and personalised service to turn an everyday chore into a seamless, worry-free experience.
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox variants={fadeUp}>
                <Box h="100%" p={{ base: 8, md: 10 }} borderRadius="3xl" bg="gray.50" border="1px solid" borderColor="gray.100" boxShadow="soft">
                  <Flex align="center" justify="center" w={14} h={14} borderRadius="2xl" bg="brand.50" color="brand.500" mb={6}>
                    <Icon as={FaRegEye} boxSize={6} />
                  </Flex>
                  <Heading size="lg" mb={4} color="gray.900">Our Vision</Heading>
                  <Text fontSize="lg" color="gray.600">
                    To become the leading eco-conscious laundry service provider, recognised for our quality, reliability and commitment to sustainability — expanding nationwide to make premium, environmentally friendly laundry care accessible to all, while continuously innovating to reduce our carbon footprint.
                  </Text>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Values */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1200px">
          <SectionHeading
            badge="What We Stand For"
            title={<>Our Core <GradientText>Values</GradientText></>}
            subtitle="The principles that guide every wash, press and delivery."
          />
          <StaggerGroup mt={{ base: 12, md: 16 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {values.map((v, i) => (
                <MotionBox key={i} variants={fadeUp}>
                  <VStack
                    align="flex-start"
                    spacing={4}
                    h="100%"
                    p={8}
                    bg="white"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.100"
                    boxShadow="soft"
                    transition="all 0.35s"
                    _hover={{ transform: 'translateY(-8px)', boxShadow: 'cardHover' }}
                  >
                    <Circle size={14} bg={`${v.color}.50`} color={`${v.color}.500`}>
                      <Icon as={v.icon} boxSize={6} />
                    </Circle>
                    <Heading size="md" color="gray.900">{v.title}</Heading>
                    <Text color="gray.600">{v.description}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* What sets us apart */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="1200px">
          <SectionHeading
            badge="Why Whites & Brights"
            title={<>What Sets Us <GradientText>Apart</GradientText></>}
            subtitle="At Whites & Brights, we pride ourselves on excellence in every aspect of our service."
          />
          <StaggerGroup mt={{ base: 12, md: 16 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {apart.map((a, i) => (
                <MotionBox key={i} variants={fadeUp}>
                  <Box
                    h="100%"
                    p={8}
                    bg="gray.50"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.100"
                    transition="all 0.35s"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: 'card', bg: 'white' }}
                  >
                    <Flex align="center" gap={4} mb={5}>
                      <Circle size={14} bg={`${a.color}.50`} color={`${a.color}.500`} flexShrink={0}>
                        <Icon as={a.icon} boxSize={6} />
                      </Circle>
                      <Heading size="md" color="gray.900">{a.title}</Heading>
                    </Flex>
                    <List spacing={3}>
                      {a.points.map((p, j) => (
                        <ListItem key={j} color="gray.600" display="flex" alignItems="center">
                          <ListIcon as={FaCheckCircle} color={`${a.color}.500`} />
                          {p}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={{ base: 14, md: 20 }} bg="gray.50">
        <Container maxW="1000px">
          <Reveal variant={scaleIn}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="4xl"
              bgGradient="linear(130deg, brand.900, brand.600)"
              boxShadow="floating"
              px={{ base: 8, md: 16 }}
              py={{ base: 12, md: 16 }}
              textAlign="center"
            >
              <Box position="absolute" top="-30%" right="-5%" w="380px" h="380px" borderRadius="full" bg="whiteAlpha.100" />
              <VStack spacing={6} position="relative">
                <Heading color="white" fontSize={{ base: '2xl', md: '4xl' }}>
                  Experience the Whites & Brights difference
                </Heading>
                <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl">
                  Premium care, eco-friendly practices and doorstep convenience. Book your first pickup today.
                </Text>
                <Button as={RouterLink} to="/contact" size="lg" h={14} px={9} bg="white" color="brand.700" _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }} rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
                  Get in Touch
                </Button>
              </VStack>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}

/* Small helper for the floating hero card */
function HStackLeaf() {
  return (
    <Flex align="center" gap={3}>
      <Circle size={12} bg="green.50" color="green.500" flexShrink={0}>
        <Icon as={FaLeaf} boxSize={5} />
      </Circle>
      <Box>
        <Text fontWeight={800} color="gray.900">100% Eco</Text>
        <Text fontSize="xs" color="gray.500">Sustainable cleaning</Text>
      </Box>
    </Flex>
  );
}
