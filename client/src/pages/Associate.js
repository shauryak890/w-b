import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  useToast,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaCheckCircle, FaArrowRight, FaHandshake } from 'react-icons/fa';
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

const benefits = [
  'Trusted brand with professional service standards',
  'Training and operational guidance',
  'Marketing support and lead generation',
];

export default function Associate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Google Apps Script Web App URL (to write to Google Sheets)
  // Set in client/.env as REACT_APP_ASSOCIATE_SHEETS_URL
  const GOOGLE_SCRIPT_URL = process.env.REACT_APP_ASSOCIATE_SHEETS_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Missing REACT_APP_ASSOCIATE_SHEETS_URL');
      }

      const body = new URLSearchParams({
        name,
        email,
        phone,
        address,
        timestamp: new Date().toISOString(),
      }).toString();

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
        mode: 'no-cors',
      });

      toast({
        title: 'Application submitted',
        description: 'Thanks for your interest. We will contact you shortly.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (err) {
      toast({
        title: 'Submission failed',
        description: GOOGLE_SCRIPT_URL
          ? 'Please try again later.'
          : 'Setup required: add REACT_APP_ASSOCIATE_SHEETS_URL in client/.env',
        status: 'error',
        duration: 4000,
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
        <Container maxW="1000px" position="relative">
          <StaggerGroup>
            <VStack spacing={5} textAlign="center">
              <MotionBox variants={fadeUp}>
                <SectionBadge bg="whiteAlpha.200" color="white" borderColor="whiteAlpha.400">
                  <Icon as={FaHandshake} boxSize={3.5} />
                  Partnership
                </SectionBadge>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Heading fontSize={{ base: '36px', md: '56px' }} lineHeight="1.05" letterSpacing="-0.03em">
                  Become an <GradientText from="white" to="brand.200">Associate</GradientText>
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="2xl">
                  Partner with WNB Cleantech Pvt Ltd to bring premium laundry services to your area. Fill out the form and we'll reach out soon.
                </Text>
              </MotionBox>
            </VStack>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Form */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 14 }} alignItems="start">
            <Reveal variant={fromLeft}>
              <Stack spacing={6}>
                <SectionBadge>Why Join Us</SectionBadge>
                <Heading size="xl" color="gray.900">
                  Grow with a brand that <GradientText>backs you</GradientText>
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Join our growing network and benefit from strong brand support, streamlined operations and marketing assistance. We're committed to building long-term, successful partnerships.
                </Text>
                <List spacing={4} color="gray.700">
                  {benefits.map((b, i) => (
                    <ListItem key={i} display="flex" alignItems="center" fontWeight={500}>
                      <ListIcon as={FaCheckCircle} color="brand.500" boxSize={5} />
                      {b}
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Reveal>

            <Reveal variant={fromRight}>
              <Box bg="white" borderRadius="3xl" boxShadow="card" border="1px solid" borderColor="gray.100" p={{ base: 6, md: 9 }}>
                <Heading size="lg" mb={2} color="gray.900">Associate Application</Heading>
                <Text color="gray.600" mb={6}>Please provide your details and we'll get in touch.</Text>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Full Name</FormLabel>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" size="lg" sx={inputStyles} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Address</FormLabel>
                      <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, City, State, PIN" rows={3} sx={inputStyles} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Phone</FormLabel>
                      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" size="lg" sx={inputStyles} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontWeight={600} color="gray.700">Email</FormLabel>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" size="lg" sx={inputStyles} />
                    </FormControl>
                    <Button type="submit" size="lg" h={14} variant="gradient" isLoading={isSubmitting} loadingText="Submitting..." rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />} w="full">
                      Apply Now
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Reveal>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
