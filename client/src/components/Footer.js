import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  IconButton,
  Divider,
  VStack,
  Button,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaChevronDown, 
  FaChevronUp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope 
} from 'react-icons/fa';

const FooterLink = ({ to, children }) => (
  <ChakraLink
    as={RouterLink}
    to={to}
    fontSize="sm"
    color="gray.600"
    _hover={{
      color: 'brand.500',
      textDecoration: 'none',
    }}
  >
    {children}
  </ChakraLink>
);

const FooterSection = ({ title, children, isMobile }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: !isMobile });

  return (
    <Stack align="flex-start" w="full">
      <Button
        display={{ base: isMobile ? 'flex' : 'none', md: 'none' }}
        variant="ghost"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        onClick={onToggle}
        py={2}
        px={4}
      >
        <Text fontWeight="500" fontSize="lg">{title}</Text>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
      <Text
        display={{ base: isMobile ? 'none' : 'block', md: 'block' }}
        fontWeight="500"
        fontSize="lg"
        mb={2}
      >
        {title}
      </Text>
      <Collapse in={isOpen} style={{ width: '100%' }}>
        <VStack align="flex-start" spacing={2} w="full">
          {children}
        </VStack>
      </Collapse>
    </Stack>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container maxW="1200px" py={10}>
        <SimpleGrid
          templateColumns={{ base: '1fr', md: '3fr 2fr' }}
          spacing={{ base: 8, md: 16 }}
        >
          <VStack align="flex-start" spacing={6}>
            <Text 
              fontSize={{ base: 'xl', md: 'lg' }} 
              fontWeight="bold" 
              color="brand.500"
              mb={2}
            >
              Whites & Brights
            </Text>
            <Text fontSize="sm" color="gray.600" maxW="md">
              Premium laundry service that cares for your garments as much as you do. We're expanding to bring our exceptional service to more cities across the country.
            </Text>
            <Stack direction="row" spacing={4} pt={4}>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="sm"
                color="brand.500"
                variant="ghost"
                _hover={{ bg: 'brand.50', color: 'brand.600' }}
              />
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="sm"
                color="brand.500"
                variant="ghost"
                _hover={{ bg: 'brand.50', color: 'brand.600' }}
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="sm"
                color="brand.500"
                variant="ghost"
                _hover={{ bg: 'brand.50', color: 'brand.600' }}
              />
            </Stack>
          </VStack>

          <FooterSection title="Contact Us" isMobile={false}>
            <Stack spacing={6}>
              <Stack spacing={4}>
                <Stack direction="row" spacing={3} align="center">
                  <Box
                    p={2}
                    bg="brand.50"
                    borderRadius="md"
                    color="brand.500"
                  >
                    <FaMapMarkerAlt />
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">Visit Us</Text>
                    <Text fontSize="sm" color="gray.600">123 Laundry Lane, Cleanville, ST 12345</Text>
                  </VStack>
                </Stack>

                <Stack direction="row" spacing={3} align="center">
                  <Box
                    p={2}
                    bg="brand.50"
                    borderRadius="md"
                    color="brand.500"
                  >
                    <FaPhone />
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">Call Us</Text>
                    <Text fontSize="sm" color="gray.600">(555) 123-4567</Text>
                  </VStack>
                </Stack>

                <Stack direction="row" spacing={3} align="center">
                  <Box
                    p={2}
                    bg="brand.50"
                    borderRadius="md"
                    color="brand.500"
                  >
                    <FaEnvelope />
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">Email Us</Text>
                    <Text fontSize="sm" color="gray.600">info@whitesandbrights.com</Text>
                  </VStack>
                </Stack>
              </Stack>

              <Box
                p={4}
                bg="brand.50"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="brand.100"
              >
                <Text fontSize="sm" color="brand.700" fontWeight="medium">
                  Coming to Your City Soon!
                </Text>
                <Text fontSize="sm" color="gray.600" mt={1}>
                  We're expanding! Stay tuned for updates about our services in your area.
                </Text>
              </Box>
            </Stack>
          </FooterSection>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.200" />
        
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 6 }}
          justify="space-between"
          align={{ base: 'center', md: 'center' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text fontSize="sm" color="gray.600">
            &copy; {new Date().getFullYear()} Whites & Brights. All rights reserved
          </Text>
          <Stack
            direction="row"
            spacing={4}
            justify={{ base: 'center', md: 'flex-end' }}
            fontSize="sm"
            color="gray.600"
          >
            <FooterLink to="/policies/terms-of-service">Terms</FooterLink>
            <Text>•</Text>
            <FooterLink to="/policies/privacy-policy">Privacy</FooterLink>
            <Text>•</Text>
            <FooterLink to="/contact">Contact</FooterLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
