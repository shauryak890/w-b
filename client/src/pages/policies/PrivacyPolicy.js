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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { FaFileDownload, FaPrint, FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa';

const SecurityFeature = ({ icon, title, description }) => (
  <Box
    bg="white"
    p={6}
    borderRadius="xl"
    boxShadow="md"
    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
    transition="all 0.2s"
  >
    <VStack spacing={4}>
      <Icon as={icon} w={8} h={8} color="brand.500" />
      <Heading size="sm" textAlign="center">{title}</Heading>
      <Text color="gray.600" fontSize="sm" textAlign="center">
        {description}
      </Text>
    </VStack>
  </Box>
);

export default function PrivacyPolicy() {
  const toast = useToast();
  const lastUpdated = "May 19, 2025";

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    toast({
      title: "Document downloaded",
      description: "Privacy Policy has been downloaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const dataCollected = [
    { category: "Personal Information", examples: "Name, address, phone number, email", purpose: "Service delivery, communication" },
    { category: "Payment Information", examples: "Credit card details, billing address", purpose: "Processing payments" },
    { category: "Service Preferences", examples: "Cleaning preferences, special instructions", purpose: "Service customization" },
    { category: "Usage Data", examples: "App usage, website interactions", purpose: "Service improvement" },
  ];

  return (
    <Box pt={20} pb={20} bg="gray.50">
      <Container maxW="4xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={4} align="start">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Privacy Policy
            </Heading>
            <Text color="gray.600">Last Updated: {lastUpdated}</Text>
            <HStack spacing={4}>
              <Button
                leftIcon={<FaFileDownload />}
                colorScheme="brand"
                variant="outline"
                onClick={handleDownload}
              >
                Download PDF
              </Button>
              <Button
                leftIcon={<FaPrint />}
                colorScheme="brand"
                variant="outline"
                onClick={handlePrint}
              >
                Print
              </Button>
            </HStack>
          </VStack>

          <Divider />

          {/* Introduction */}
          <VStack align="start" spacing={4}>
            <Heading size="md">1. Introduction</Heading>
            <Text color="gray.700">
              At Whites & Brights, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            </Text>
          </VStack>

          {/* Data Collection */}
          <VStack align="start" spacing={4}>
            <Heading size="md">2. Information We Collect</Heading>
            <Text color="gray.700">
              We collect and process the following types of information:
            </Text>
            <Box overflowX="auto" w="full">
              <Table variant="simple" bg="white" borderRadius="lg" boxShadow="sm">
                <Thead bg="gray.50">
                  <Tr>
                    <Th>Category</Th>
                    <Th>Examples</Th>
                    <Th>Purpose</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataCollected.map((item, index) => (
                    <Tr key={index}>
                      <Td fontWeight="medium">{item.category}</Td>
                      <Td>{item.examples}</Td>
                      <Td>{item.purpose}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </VStack>

          {/* Security Measures */}
          <VStack align="start" spacing={6}>
            <Heading size="md">3. Security Measures</Heading>
            <Box w="full">
              <VStack spacing={6}>
                <Text color="gray.700">
                  We implement various security measures to protect your information:
                </Text>
                <Box w="full">
                  <VStack spacing={6}>
                    <HStack spacing={6} w="full" flexWrap="wrap" justify="center">
                      <SecurityFeature
                        icon={FaShieldAlt}
                        title="Data Encryption"
                        description="All sensitive data is encrypted using industry-standard protocols"
                      />
                      <SecurityFeature
                        icon={FaLock}
                        title="Secure Storage"
                        description="Data is stored in secure, monitored facilities"
                      />
                      <SecurityFeature
                        icon={FaUserShield}
                        title="Access Control"
                        description="Strict access controls and authentication measures"
                      />
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </VStack>

          {/* Data Usage */}
          <VStack align="start" spacing={4}>
            <Heading size="md">4. How We Use Your Information</Heading>
            <Text color="gray.700">
              Your information is used for the following purposes:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Providing and improving our services</ListItem>
              <ListItem>Processing payments and transactions</ListItem>
              <ListItem>Communicating about your orders and services</ListItem>
              <ListItem>Sending service updates and marketing communications</ListItem>
              <ListItem>Analyzing service usage and trends</ListItem>
            </UnorderedList>
          </VStack>

          {/* Data Sharing */}
          <VStack align="start" spacing={4}>
            <Heading size="md">5. Information Sharing</Heading>
            <Text color="gray.700">
              We may share your information with:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Service providers who assist in our operations</ListItem>
              <ListItem>Payment processors for secure transactions</ListItem>
              <ListItem>Legal authorities when required by law</ListItem>
            </UnorderedList>
          </VStack>

          {/* Your Rights */}
          <VStack align="start" spacing={4}>
            <Heading size="md">6. Your Rights</Heading>
            <Text color="gray.700">
              You have the following rights regarding your data:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Access your personal information</ListItem>
              <ListItem>Request corrections to your data</ListItem>
              <ListItem>Request deletion of your data</ListItem>
              <ListItem>Opt-out of marketing communications</ListItem>
              <ListItem>Export your data</ListItem>
            </UnorderedList>
          </VStack>

          {/* Contact Information */}
          <VStack align="start" spacing={4} bg="white" p={6} borderRadius="xl">
            <Heading size="md">Contact Us</Heading>
            <Text color="gray.700">
              For privacy-related inquiries or to exercise your rights, contact our Privacy Officer:
            </Text>
            <Text color="brand.500" fontWeight="bold">
              Email: privacy@whitesandbrights.com
              <br />
              Phone: (555) 123-4567
              <br />
              Address: 123 Laundry Lane, Cleanville, ST 12345
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
