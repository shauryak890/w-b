import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  IconButton,
  Divider,
  VStack,
  HStack,
  Flex,
  Icon,
  Heading,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaArrowUp,
} from 'react-icons/fa';

const FooterLink = ({ to, children }) => (
  <ChakraLink
    as={RouterLink}
    to={to}
    fontSize="sm"
    color="whiteAlpha.700"
    transition="all 0.2s"
    display="inline-flex"
    alignItems="center"
    _hover={{ color: 'white', transform: 'translateX(4px)' }}
  >
    {children}
  </ChakraLink>
);

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'CSR', to: '/csr' },
  { label: 'Associate', to: '/associate' },
  { label: 'Careers', to: '/careers' },
];

const serviceLinks = [
  { label: 'Laundry by KG', to: '/services?tab=1' },
  { label: 'Dry Cleaning', to: '/services?tab=2' },
  { label: 'Steam Ironing', to: '/services?tab=3' },
  { label: 'Household Items', to: '/services?tab=4' },
  { label: 'Express Delivery', to: '/services?tab=5' },
  { label: 'Subscription Plans', to: '/services?tab=6' },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box as="footer" position="relative" bgGradient="linear(180deg, brand.900 0%, #022e3a 100%)" color="whiteAlpha.800" overflow="hidden">
      {/* Decorative glow */}
      <Box position="absolute" top="-20%" right="-5%" w="420px" h="420px" borderRadius="full" bg="brand.500" filter="blur(140px)" opacity={0.18} />
      <Box position="absolute" bottom="-30%" left="-8%" w="380px" h="380px" borderRadius="full" bg="accent.500" filter="blur(150px)" opacity={0.12} />

      {/* Top CTA band */}
      <Box position="relative" borderBottom="1px solid" borderColor="whiteAlpha.200">
        <Container maxW="1200px" py={{ base: 10, md: 12 }}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={6} textAlign={{ base: 'center', md: 'left' }}>
            <Box>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="white" mb={2}>
                Fresh clothes, zero effort.
              </Heading>
              <Text color="whiteAlpha.700">Book a pickup today and experience premium laundry care.</Text>
            </Box>
            <Button as={RouterLink} to="/contact" size="lg" h={14} px={8} variant="gradient" rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />} flexShrink={0}>
              Book Now
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main footer */}
      <Container maxW="1200px" py={{ base: 12, md: 16 }} position="relative">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10, lg: 12 }}>
          {/* Brand */}
          <VStack align="flex-start" spacing={5}>
            <HStack spacing={3}>
              <Flex
                align="center"
                justify="center"
                bgGradient="linear(135deg, brand.400, accent.500)"
                color="white"
                fontWeight={800}
                fontSize="18px"
                h="44px"
                w="44px"
                borderRadius="xl"
                letterSpacing="-0.04em"
              >
                W&B
              </Flex>
              <Text fontWeight={800} fontSize="lg" color="white">Whites & Brights</Text>
            </HStack>
            <Text fontSize="sm" color="whiteAlpha.700" maxW="xs">
              Premium laundry service that cares for your garments as much as you do. Expanding to bring exceptional service to more cities.
            </Text>
            <HStack spacing={3}>
              <IconButton as="a" href="https://www.facebook.com/share/19RzE26f5Q/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" icon={<FaFacebook />} size="md" borderRadius="xl" bg="whiteAlpha.100" color="white" _hover={{ bg: 'brand.500', transform: 'translateY(-3px)' }} />
              <IconButton as="a" href="https://www.instagram.com/whitesandbrights.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" icon={<FaInstagram />} size="md" borderRadius="xl" bg="whiteAlpha.100" color="white" _hover={{ bg: 'brand.500', transform: 'translateY(-3px)' }} />
            </HStack>
          </VStack>

          {/* Quick links */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight={700} color="white" fontSize="md">Company</Text>
            <VStack align="flex-start" spacing={3}>
              {quickLinks.map((l) => (
                <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              ))}
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight={700} color="white" fontSize="md">Services</Text>
            <VStack align="flex-start" spacing={3}>
              {serviceLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>{l.label}</FooterLink>
              ))}
            </VStack>
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight={700} color="white" fontSize="md">Get In Touch</Text>
            <VStack align="flex-start" spacing={4}>
              <HStack align="flex-start" spacing={3}>
                <Flex p={2.5} bg="whiteAlpha.100" borderRadius="lg" color="brand.300" flexShrink={0}>
                  <Icon as={FaMapMarkerAlt} />
                </Flex>
                <Text fontSize="sm" color="whiteAlpha.700">Sona Market, Cant Road, Infront of Danapur Club, Danapur, Patna - 801105</Text>
              </HStack>
              <HStack align="center" spacing={3}>
                <Flex p={2.5} bg="whiteAlpha.100" borderRadius="lg" color="brand.300" flexShrink={0}>
                  <Icon as={FaPhone} />
                </Flex>
                <ChakraLink href="tel:+918709319450" fontSize="sm" color="whiteAlpha.700" _hover={{ color: 'white' }}>+91 87093 19450</ChakraLink>
              </HStack>
              <HStack align="center" spacing={3}>
                <Flex p={2.5} bg="whiteAlpha.100" borderRadius="lg" color="brand.300" flexShrink={0}>
                  <Icon as={FaEnvelope} />
                </Flex>
                <ChakraLink href="mailto:info@whitesandbrights.com" fontSize="sm" color="whiteAlpha.700" _hover={{ color: 'white' }}>info@whitesandbrights.com</ChakraLink>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <VStack align="flex-start" spacing={1} mt={10}>
          <Text fontSize="xs" fontWeight={700} color="brand.300" letterSpacing="0.05em">CIN: U96010BR2025PTC077191</Text>
          <Text fontSize="xs" fontWeight={600} color="whiteAlpha.600">WNB Cleantech Pvt Ltd</Text>
        </VStack>

        <Divider my={8} borderColor="whiteAlpha.200" />

        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={4}>
          <Text fontSize="sm" color="whiteAlpha.600">
            &copy; {new Date().getFullYear()} WNB Cleantech Pvt Ltd. All rights reserved.
          </Text>
          <HStack spacing={5} fontSize="sm" flexWrap="wrap" justify="center">
            <FooterLink to="/policies/terms-of-service">Terms</FooterLink>
            <FooterLink to="/policies/privacy-policy">Privacy</FooterLink>
            <FooterLink to="/help-center">Help Center</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </HStack>
          <IconButton
            aria-label="Back to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            size="md"
            borderRadius="xl"
            bg="whiteAlpha.100"
            color="white"
            _hover={{ bg: 'brand.500', transform: 'translateY(-3px)' }}
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
