import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Divider,
  Button,
  HStack,
  useToast,
  SlideFade,
  ScaleFade,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaPrint } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function TermsOfService() {
  const toast = useToast();
  const lastUpdated = "May 19, 2025";

  const handleDownload = () => {
    // Implement PDF download logic here
    toast({
      title: "Download Started",
      description: "Your Terms of Service document is being downloaded.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box pt={20} pb={20} bg="gray.50" overflow="hidden">
      <Container maxW="4xl">
        <MotionVStack 
          spacing={8} 
          align="stretch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <ScaleFade in={true} initialScale={0.9}>
            <VStack spacing={4} align="start">
              <Heading
                size="2xl"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
              >
                Terms of Service
              </Heading>
              <Text color="gray.600">
                Last Updated: {lastUpdated}
              </Text>
              <HStack spacing={4}>
                <Button
                  leftIcon={<FaFileDownload />}
                  onClick={handleDownload}
                  colorScheme="brand"
                  variant="outline"
                >
                  Download PDF
                </Button>
                <Button
                  leftIcon={<FaPrint />}
                  onClick={handlePrint}
                  colorScheme="brand"
                  variant="outline"
                >
                  Print
                </Button>
              </HStack>
            </VStack>
          </ScaleFade>

          <Divider />

          {/* Introduction */}
          <VStack align="start" spacing={4}>
            <Heading size="md">1. Introduction</Heading>
            <Text color="gray.700">
              Welcome to Whites & Brights. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </Text>
          </VStack>

          {/* Service Terms */}
          <VStack align="start" spacing={4}>
            <Heading size="md">2. Service Terms</Heading>
            <Text color="gray.700">
              Our laundry and dry cleaning services are subject to the following terms:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>We reserve the right to refuse service to anyone for any reason.</ListItem>
              <ListItem>Service times are estimates and not guarantees.</ListItem>
              <ListItem>We are not responsible for items left unclaimed after 30 days.</ListItem>
              <ListItem>Special care instructions must be provided at drop-off.</ListItem>
            </UnorderedList>
          </VStack>

          {/* Pricing and Payment */}
          <VStack align="start" spacing={4}>
            <Heading size="md">3. Pricing and Payment</Heading>
            <Text color="gray.700">
              Our pricing structure and payment terms are as follows:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Prices are subject to change without notice.</ListItem>
              <ListItem>Payment is required at the time of drop-off or pickup.</ListItem>
              <ListItem>We accept major credit cards, digital payments, and cash.</ListItem>
              <ListItem>Special services may incur additional charges.</ListItem>
            </UnorderedList>
          </VStack>

          {/* Liability */}
          <VStack align="start" spacing={4}>
            <Heading size="md">4. Liability</Heading>
            <Text color="gray.700">
              Our liability policy includes:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Maximum liability of 10 times the service cost for damaged items.</ListItem>
              <ListItem>No liability for inherent weaknesses or defects in materials.</ListItem>
              <ListItem>Claims must be reported within 24 hours of pickup.</ListItem>
              <ListItem>Proof of purchase may be required for high-value items.</ListItem>
            </UnorderedList>
          </VStack>

          {/* Privacy and Data */}
          <VStack align="start" spacing={4}>
            <Heading size="md">5. Privacy and Data</Heading>
            <Text color="gray.700">
              We handle your data according to our Privacy Policy, which includes:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Collection of necessary personal information for service delivery.</ListItem>
              <ListItem>Secure storage of customer data.</ListItem>
              <ListItem>No sharing of information with third parties without consent.</ListItem>
              <ListItem>Regular updates on service status via email or SMS.</ListItem>
            </UnorderedList>
          </VStack>

          {/* Modifications */}
          <VStack align="start" spacing={4}>
            <Heading size="md">6. Modifications</Heading>
            <Text color="gray.700">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of new terms.
            </Text>
          </VStack>

          {/* Contact Information */}
          <MotionBox
            as={VStack}
            align="start"
            spacing={4}
            bg="white"
            p={6}
            borderRadius="xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "lg" }}
          >
            <Heading size="md">Contact Us</Heading>
            <Text color="gray.700">
              If you have any questions about these Terms of Service, please contact us:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Email: info@whitesandbrights.com</ListItem>
              <ListItem>Phone: +91 81027 33336</ListItem>
              <ListItem>Address: Coming to your city soon!</ListItem>
            </UnorderedList>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
}
