import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Stack,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.div;
const MotionHeading = motion.h2;
const MotionText = motion.p;

const ContactInfo = ({ icon, title, children }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
    >
      <Flex alignItems="center">
        <Icon as={icon} w={10} h={10} color="brand.500" mr={4} />
        <Box>
          <Heading size="md" mb={2}>{title}</Heading>
          <Text color="gray.600">{children}</Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });

  const toast = useToast();

  // Replace this URL with your own Google Script Web App URL after deployment
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznzutbyKR3NRcKW342ExNju-kZLWx050ls_5aXV7hCYz1zO1EeODeH8K1OOnU-trLodg/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for submission
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('timestamp', new Date().toISOString());

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is important for CORS issues
      });

      // Since mode is no-cors, we can't actually read the response
      // So we'll just assume success if no error is thrown
      setFormStatus({
        success: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });

      // Show success toast
      toast({
        title: 'Message sent!',
        description: 'We have received your message and will contact you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
        icon: <Icon as={FaCheckCircle} />
      });

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
      
      setFormStatus({
        success: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      });

      // Show error toast
      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box pt={20}>
      {/* Hero Section */}
      <Box
        bg={'brand.500'}
        color="white"
        py={16}
      >
        <Container maxW="7xl">
          <MotionHeading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            textAlign="center"
            mb={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </MotionHeading>
          <MotionText
            fontSize="xl"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're excited to hear from you! Fill out the form below to receive updates about our launch and services.
          </MotionText>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box py={16}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={8}>
                <Heading size="xl" color="brand.500">
                  Stay Updated
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Whites & Brights is preparing for our grand opening! Sign up to be the first to know when we launch and receive exclusive opening promotions.
                </Text>

                <Stack spacing={6} w="100%">
                  <ContactInfo icon={FaMapMarkerAlt} title="Our Location">
                    Coming soon to your neighborhood. Our exact location will be announced shortly!
                  </ContactInfo>

                  <ContactInfo icon={FaPhone} title="Phone">
                    Customer Service: +91 81027 33336<br />
                    Business Inquiries: +91 81027 33336
                  </ContactInfo>

                  <ContactInfo icon={FaEnvelope} title="Email">
                    info@whitesandbrights.com
                  </ContactInfo>
                </Stack>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 30 }}
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
                    Contact Form
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </Text>

                  {formStatus.success && (
                    <Box p={4} mb={4} bg="green.100" color="green.800" borderRadius="md">
                      {formStatus.message}
                    </Box>
                  )}

                  {formStatus.error && (
                    <Box p={4} mb={4} bg="red.100" color="red.800" borderRadius="md">
                      {formStatus.message}
                    </Box>
                  )}

                  <Box mb={4}>
                    <Text fontWeight="bold" mb={2}>Your Name</Text>
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
                    <Text fontWeight="bold" mb={2}>Email Address</Text>
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

                  <Box mb={4}>
                    <Text fontWeight="bold" mb={2}>Message</Text>
                    <Box as="textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="I'm interested in learning more about your services..."
                      p={2}
                      borderWidth="1px"
                      borderRadius="md"
                      width="full"
                      height="150px"
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
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Box>
                </Box>
              </form>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Opening Soon Banner */}
      <MotionBox
        py={12}
        bg="brand.50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Container maxW="7xl" textAlign="center">
          <Heading mb={4} color="brand.600">Opening Soon - Stay Updated!</Heading>
          <Text fontSize="xl" mb={6} color="gray.600" maxW="3xl" mx="auto">
            Whites & Brights is coming to your area soon. Join our mailing list to be the first to know about our grand opening date, special promotions, and exclusive offers.
          </Text>
        </Container>
      </MotionBox>
    </Box>
  );
}
