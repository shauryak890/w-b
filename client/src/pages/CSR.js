import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  VStack,
  Button,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHeart, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
import {
  Reveal,
  StaggerGroup,
  MotionBox,
  GradientText,
  SectionBadge,
  fadeUp,
  fromLeft,
  fromRight,
} from '../components/ui';

export default function CSR() {
  return (
    <Box overflow="hidden">
      {/* Hero */}
      <Box position="relative" bgGradient="linear(130deg, brand.900 0%, brand.700 60%, brand.500 100%)" color="white" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }} overflow="hidden">
        <Box position="absolute" top="-20%" right="-5%" w="420px" h="420px" borderRadius="full" bg="whiteAlpha.100" />
        <Box position="absolute" bottom="-30%" left="0%" w="360px" h="360px" borderRadius="full" bg="whiteAlpha.100" />
        <Container maxW="1000px" position="relative">
          <StaggerGroup>
            <VStack spacing={5} textAlign="center">
              <MotionBox variants={fadeUp}>
                <SectionBadge bg="whiteAlpha.200" color="white" borderColor="whiteAlpha.400">
                  <Icon as={FaHeart} boxSize={3} />
                  Giving Back
                </SectionBadge>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Heading fontSize={{ base: '36px', md: '56px' }} lineHeight="1.05" letterSpacing="-0.03em">
                  Corporate Social <GradientText from="white" to="brand.200">Responsibility</GradientText>
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="3xl">
                  Our initiative "Do Roti" provides fresh, nutritious meals to homeless and hungry people. We believe a better community starts with dignity and a warm meal.
                </Text>
              </MotionBox>
            </VStack>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Initiative */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 14 }} alignItems="center">
            <Reveal variant={fromLeft}>
              <Stack spacing={5}>
                <SectionBadge>Our Initiative</SectionBadge>
                <Heading size="xl" color="gray.900">
                  Introducing <GradientText>"Do Roti"</GradientText>
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  "Do Roti" is our commitment to serving the less fortunate by organising regular food distribution drives. With the support of our associates and community partners, we ensure food safety, hygiene, and compassion at every step.
                </Text>
                <Text color="gray.600">
                  We run weekly drives, and during emergencies or extreme weather, we scale up distribution to reach more people in need.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2}>
                  <Button as={RouterLink} to="/contact" variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>
                    Contact Us
                  </Button>
                  <Button as={RouterLink} to="/associate" variant="outline" colorScheme="brand">
                    Become an Associate
                  </Button>
                </Stack>
              </Stack>
            </Reveal>

            <Reveal variant={fromRight}>
              <Box borderRadius="3xl" overflow="hidden" boxShadow="floating">
                <Image
                  src="https://images.pexels.com/photos/699520/pexels-photo-699520.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                  alt="Serving food with care"
                  objectFit="cover"
                  w="100%"
                  h={{ base: '320px', md: '460px' }}
                  fallbackSrc="https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                />
              </Box>
            </Reveal>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Callout */}
      <Box py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="1000px">
          <Reveal>
            <Box position="relative" overflow="hidden" borderRadius="4xl" bg="brand.50" border="1px solid" borderColor="brand.100" px={{ base: 8, md: 14 }} py={{ base: 12, md: 14 }} textAlign="center">
              <Flex align="center" justify="center" w={16} h={16} borderRadius="2xl" bgGradient="linear(135deg, brand.500, accent.500)" color="white" mx="auto" mb={5}>
                <Icon as={FaHandHoldingHeart} boxSize={7} />
              </Flex>
              <Heading size="lg" color="gray.900" mb={3}>
                Support <GradientText>"Do Roti"</GradientText>
              </Heading>
              <Text color="gray.600" maxW="2xl" mx="auto" mb={7}>
                We welcome responsible partners and volunteers to expand the reach of this program. Get in touch to learn how you can contribute or collaborate.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
                <Button as={RouterLink} to="/contact" variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}>Get in Touch</Button>
                <Button as={RouterLink} to="/associate" variant="outline" colorScheme="brand">Partner with Us</Button>
              </Stack>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
