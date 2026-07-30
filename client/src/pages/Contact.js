import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Stack,
  VStack,
  HStack,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import {
  MotionBox,
  Reveal,
  StaggerGroup,
  GradientText,
  SectionBadge,
  fadeUp,
  fromLeft,
  fromRight,
} from '../components/ui';

// Whites & Brights outlets — used by the "find your nearest outlet" locator
const outlets = [
  {
    id: 'danapur',
    name: 'Sona Market, Danapur',
    address: 'Sona Market, Cant Road, Infront of Danapur Club, Danapur, Patna - 801105',
    mapUrl: 'https://maps.app.goo.gl/Q2hPJ1jRe2eEW4D66',
  },
  {
    id: 'rkpuram',
    name: 'R.K. Puram, Danapur',
    address: 'Kalawati Complex, Ward-2, R.K. Puram, near Dream Jwal Apartment Mandir, Khagaul Road, Danapur - 801503',
    mapUrl: 'https://maps.app.goo.gl/1zTQ136dYz3fJzeLA',
  },
];

const OutletLocator = () => {
  const [selectedId, setSelectedId] = useState(outlets[0].id);
  const outlet = outlets.find((o) => o.id === selectedId) || outlets[0];

  return (
    <Box
      w="100%"
      bg="white"
      borderRadius="2xl"
      boxShadow="card"
      border="1px solid"
      borderColor="gray.100"
      p={{ base: 5, md: 6 }}
      mt={2}
    >
      <HStack spacing={3} mb={4} align="center">
        <Circle size={10} bg="brand.50" color="brand.500" flexShrink={0}>
          <Icon as={FaMapMarkerAlt} boxSize={5} />
        </Circle>
        <Box>
          <Heading size="sm" color="gray.900">Find your nearest outlet</Heading>
          <Text fontSize="sm" color="gray.500">Choose a location to get directions</Text>
        </Box>
      </HStack>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight={600} color="gray.700" mb={2}>
          Select an outlet
        </FormLabel>
        <Select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          size="lg"
          borderRadius="xl"
          bg="gray.50"
          borderColor="gray.200"
          focusBorderColor="brand.500"
          aria-label="Select a Whites & Brights outlet"
        >
          {outlets.map((o) => (
            <option key={o.id} value={o.id}>{o.name}</option>
          ))}
        </Select>
      </FormControl>

      <HStack mt={4} align="flex-start" spacing={3}>
        <Icon as={FaMapMarkerAlt} color="brand.500" boxSize={4} mt={1} flexShrink={0} />
        <Text fontSize="sm" color="gray.600" lineHeight="1.6">{outlet.address}</Text>
      </HStack>

      <Button
        as="a"
        href={outlet.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        mt={5}
        w="100%"
        size="lg"
        variant="gradient"
        rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
        leftIcon={<Icon as={FaMapMarkerAlt} boxSize={4} />}
        aria-label={`Get directions to the ${outlet.name} outlet on Google Maps`}
      >
        Get Directions
      </Button>
    </Box>
  );
};

const ContactInfo = ({ icon, title, children }) => (
  <MotionBox variants={fadeUp}>
    <HStack
      align="flex-start"
      spacing={4}
      p={5}
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="soft"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'card', borderColor: 'brand.100' }}
    >
      <Circle size={12} bg="brand.50" color="brand.500" flexShrink={0}>
        <Icon as={icon} boxSize={5} />
      </Circle>
      <Box>
        <Heading size="sm" mb={1} color="gray.900">{title}</Heading>
        <Text color="gray.600" fontSize="sm">{children}</Text>
      </Box>
    </HStack>
  </MotionBox>
);

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });

  const [searchParams] = useSearchParams();

  // Prefill the form when arriving from another page (e.g. Careers "Apply Now"
  // links to /contact?enquiry=career&role=Rider).
  useEffect(() => {
    const enquiryParam = searchParams.get('enquiry');
    const roleParam = searchParams.get('role');
    if (enquiryParam) {
      setEnquiry(enquiryParam);
    }
    if (roleParam) {
      setMessage(`I'd like to apply for the ${roleParam} role. `);
    }
  }, [searchParams]);

  const toast = useToast();

  // Google Apps Script Web App URL for Contact form submissions
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwr9Gv2EfU5D3w1qHRZUid2wrQcGlbxfZM7SbC_z5JNgO9erDLhlkH5y91tnVtN_Sk49Q/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('enquiry', enquiry);
      formData.append('message', message);
      formData.append('timestamp', new Date().toISOString());

      // Send data to Google Sheets (no-cors: response is opaque, assume success if no throw)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setFormStatus({
        success: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.',
      });

      toast({
        title: 'Message sent!',
        description: 'We have received your message and will contact you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
        icon: <Icon as={FaCheckCircle} />,
      });

      setName('');
      setEmail('');
      setEnquiry('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);

      setFormStatus({
        success: false,
        error: true,
        message: 'Something went wrong. Please try again later.',
      });

      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = {
    bg: 'gray.50',
    border: '1px solid',
    borderColor: 'gray.200',
    borderRadius: 'xl',
    _hover: { borderColor: 'gray.300' },
    _focus: { borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)', bg: 'white' },
  };

  return (
    <Box overflow="hidden">
      {/* Hero */}
      <Box position="relative" bgGradient="linear(130deg, brand.900 0%, brand.700 60%, brand.500 100%)" color="white" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }} overflow="hidden">
        <Box position="absolute" top="-20%" right="-5%" w="420px" h="420px" borderRadius="full" bg="whiteAlpha.100" />
        <Box position="absolute" bottom="-30%" left="0%" w="360px" h="360px" borderRadius="full" bg="whiteAlpha.100" />
        <Container maxW="1200px" position="relative">
          <StaggerGroup>
            <VStack spacing={5} textAlign="center">
              <MotionBox variants={fadeUp}>
                <SectionBadge bg="whiteAlpha.200" color="white" borderColor="whiteAlpha.400">
                  <Box as="span" w={2} h={2} borderRadius="full" bg="brand.300" />
                  We're Open · Get in Touch
                </SectionBadge>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Heading fontSize={{ base: '40px', md: '60px' }} lineHeight="1.05" letterSpacing="-0.03em">
                  Let's Talk <GradientText from="white" to="brand.200">Laundry</GradientText>
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="2xl">
                  Questions, bookings or franchise enquiries — drop us a message or visit our outlet. We'd love to hear from you.
                </Text>
              </MotionBox>
            </VStack>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Contact body */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 14 }} alignItems="start">
            {/* Left: info */}
            <Reveal variant={fromLeft}>
              <VStack align="flex-start" spacing={6}>
                <Box>
                  <SectionBadge>Visit Or Reach Us</SectionBadge>
                  <Heading mt={4} fontSize={{ base: '2xl', md: '3xl' }} color="gray.900">
                    We're now open!
                  </Heading>
                  <Text mt={3} color="gray.600" fontSize="lg">
                    Visit us at our outlet or contact us for any queries about our premium laundry services.
                  </Text>
                </Box>

                <StaggerGroup w="100%">
                  <Stack spacing={4} w="100%">
                    <ContactInfo icon={FaMapMarkerAlt} title="Our Location">
                      Sona Market, Cant Road, Infront of Danapur Club, Danapur, Patna - 801105
                    </ContactInfo>
                    <ContactInfo icon={FaPhone} title="Phone">
                      Customer Service & Business: +91 87093 19450
                    </ContactInfo>
                    <ContactInfo icon={FaEnvelope} title="Email">
                      info@whitesandbrights.com
                    </ContactInfo>
                    <ContactInfo icon={FaClock} title="Working Hours">
                      Monday – Saturday: 9:00 AM – 9:00 PM
                    </ContactInfo>
                  </Stack>
                </StaggerGroup>

                {/* Outlet locator — pick a branch and get directions */}
                <OutletLocator />
              </VStack>
            </Reveal>

            {/* Right: form */}
            <Reveal variant={fromRight}>
              <Box bg="white" borderRadius="3xl" boxShadow="card" border="1px solid" borderColor="gray.100" p={{ base: 6, md: 9 }}>
                <Heading size="lg" mb={2} color="gray.900">Send us a message</Heading>
                <Text color="gray.600" mb={6}>Fill out the form and we'll get back to you as soon as possible.</Text>

                {formStatus.success && (
                  <Alert status="success" borderRadius="xl" mb={5}>
                    <AlertIcon />
                    {formStatus.message}
                  </Alert>
                )}
                {formStatus.error && (
                  <Alert status="error" borderRadius="xl" mb={5}>
                    <AlertIcon />
                    {formStatus.message}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Your Name</FormLabel>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" size="lg" sx={inputStyles} />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Email Address</FormLabel>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" size="lg" sx={inputStyles} />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Enquiry Type</FormLabel>
                      <Select value={enquiry} onChange={(e) => setEnquiry(e.target.value)} placeholder="Select an option" size="lg" sx={inputStyles}>
                        <option value="career">Career / Jobs</option>
                        <option value="franchise">Franchise</option>
                        <option value="services">Services</option>
                      </Select>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Message</FormLabel>
                      <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="I'm interested in learning more about your services..." rows={5} sx={inputStyles} />
                    </FormControl>

                    <Button
                      type="submit"
                      size="lg"
                      h={14}
                      variant="gradient"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
                      w="full"
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Reveal>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Visit banner */}
      <Box py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="1200px">
          <Reveal>
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
              <Box position="absolute" top="-30%" left="-5%" w="380px" h="380px" borderRadius="full" bg="whiteAlpha.100" />
              <VStack spacing={5} position="relative">
                <Heading color="white" fontSize={{ base: '2xl', md: '4xl' }}>
                  Visit Our Outlet Today!
                </Heading>
                <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
                  Whites & Brights is now open and ready to serve you at Sona Market, Cant Road, Infront of Danapur Club, Danapur, Patna - 801105. Experience premium laundry services with expert care.
                </Text>
                <HStack spacing={4} pt={2} flexWrap="wrap" justify="center">
                  <Button
                    as="a"
                    href="https://wa.me/918102733336"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    h={14}
                    px={8}
                    bg="white"
                    color="brand.700"
                    _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                    leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button as={RouterLink} to="/services" size="lg" h={14} px={8} variant="glass">
                    Explore Services
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
