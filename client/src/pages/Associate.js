import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  useToast,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.div;
const MotionHeading = motion.h2;
const MotionText = motion.p;

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

  return (
    <Box pt={20}>
      {/* Hero Section */}
      <Box bg={'brand.500'} color="white" py={16}>
        <Container maxW="7xl">
          <MotionHeading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            textAlign="center"
            mb={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Become an Associate
          </MotionHeading>
          <MotionText
            fontSize="xl"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Partner with WNB Cleantech Pvt Ltd to bring premium laundry services to your area. Fill out the form and we'll reach out soon.
          </MotionText>
        </Container>
      </Box>

      {/* Form Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack spacing={5}>
                <Heading size="lg" color="gray.800">Why Join Us?</Heading>
                <Text fontSize="lg" color="gray.600">
                  Join our growing network and benefit from strong brand support, streamlined operations, and marketing assistance. We're committed to building long-term, successful partnerships.
                </Text>
                <List spacing={3} color="gray.700">
                  <ListItem display="flex" alignItems="center">
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Trusted brand with professional service standards
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Training and operational guidance
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Marketing support and lead generation
                  </ListItem>
                </List>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              bg="white"
              borderRadius="xl"
              boxShadow="xl"
              p={8}
            >
              <form onSubmit={handleSubmit}>
                  <Box>
                    <Heading size="lg" mb={2}>
                      Associate Application
                    </Heading>
                    <Text color="gray.600" mb={4}>
                      Please provide your details and we'll get in touch.
                    </Text>

                    <Box mb={4}>
                      <Text fontWeight="bold" mb={2}>Full Name</Text>
                      <Box as="input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        p={2}
                        borderWidth="1px"
                        borderRadius="md"
                        width="full"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Text fontWeight="bold" mb={2}>Address</Text>
                      <Box as="textarea"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, City, State, PIN"
                        p={2}
                        borderWidth="1px"
                        borderRadius="md"
                        width="full"
                        height="100px"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Text fontWeight="bold" mb={2}>Phone</Text>
                      <Box as="input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        p={2}
                        borderWidth="1px"
                        borderRadius="md"
                        width="full"
                        required
                      />
                    </Box>

                    <Box mb={6}>
                      <Text fontWeight="bold" mb={2}>Email</Text>
                      <Box as="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        p={2}
                        borderWidth="1px"
                        borderRadius="md"
                        width="full"
                        required
                      />
                    </Box>

                    <Box
                      as="button"
                      type="submit"
                      bg="brand.500"
                      color="white"
                      py={3}
                      px={6}
                      borderRadius="md"
                      width="full"
                      fontWeight="bold"
                      _hover={{ bg: 'brand.600' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Apply Now'}
                    </Box>
                  </Box>
                </form>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
