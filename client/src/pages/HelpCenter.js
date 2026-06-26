import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Link,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaBook,
  FaQuestionCircle,
  FaHeadset,
  FaTools,
  FaClipboardList,
  FaUserShield,
  FaTruck,
  FaPhoneAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const HelpCard = ({ title, description, icon, links }) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="lg"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <Icon as={icon} w={8} h={8} color="brand.500" />
        <Heading size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
        <VStack align="start" spacing={2} w="full">
          {links.map((link, index) => (
            <Link
              key={index}
              color="brand.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: 'brand.600', textDecoration: 'none' }}
            >
              {link}
            </Link>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

const QuickHelpButton = ({ icon, label }) => {
  return (
    <Button
      variant="ghost"
      leftIcon={<Icon as={icon} />}
      size="lg"
      _hover={{
        bg: 'brand.50',
        color: 'brand.500',
      }}
    >
      {label}
    </Button>
  );
};

export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'New to Whites & Brights? Learn the basics of our services.',
      icon: FaBook,
      links: [
        'How to place your first order',
        'Understanding our services',
        'Pricing guide',
        'Service area coverage',
      ],
    },
    {
      title: 'FAQs',
      description: 'Find answers to commonly asked questions.',
      icon: FaQuestionCircle,
      links: [
        'Service timelines',
        'Payment methods',
        'Garment care',
        'Delivery options',
      ],
    },
    {
      title: 'Customer Support',
      description: 'Need help? Our support team is here for you.',
      icon: FaHeadset,
      links: [
        'Contact support',
        'Live chat',
        'Schedule a call',
        'Submit feedback',
      ],
    },
    {
      title: 'Troubleshooting',
      description: 'Having issues? Find solutions here.',
      icon: FaTools,
      links: [
        'Order tracking issues',
        'Payment problems',
        'App troubleshooting',
        'Common error messages',
      ],
    },
    {
      title: 'Policies & Guidelines',
      description: 'Learn about our policies and service guidelines.',
      icon: FaClipboardList,
      links: [
        'Service terms',
        'Cancellation policy',
        'Refund policy',
        'Quality guarantee',
      ],
    },
    {
      title: 'Privacy & Security',
      description: 'Information about data protection and security.',
      icon: FaUserShield,
      links: [
        'Privacy policy',
        'Data protection',
        'Security measures',
        'Your rights',
      ],
    },
  ];

  return (
    <Box pt={20} pb={20} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={12}>
          {/* Hero Section */}
          <VStack spacing={4} textAlign="center">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              How Can We Help You?
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Find answers, manage your services, and get support when you need it.
            </Text>
          </VStack>

          {/* Search Bar */}
          <Box w="full" maxW="2xl">
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search for help..."
                bg="white"
                borderRadius="full"
                boxShadow="sm"
                _focus={{
                  boxShadow: 'outline',
                  borderColor: 'brand.500',
                }}
              />
            </InputGroup>
          </Box>

          {/* Quick Help Buttons */}
          <Flex
            wrap="wrap"
            justify="center"
            gap={4}
            w="full"
            maxW="4xl"
          >
            <QuickHelpButton icon={FaTruck} label="Track Order" />
            <QuickHelpButton icon={FaPhoneAlt} label="Contact Us" />
            <QuickHelpButton icon={FaClipboardList} label="Place Order" />
            <QuickHelpButton icon={FaQuestionCircle} label="FAQs" />
          </Flex>

          {/* Help Categories */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {helpCategories.map((category, index) => (
              <HelpCard key={index} {...category} />
            ))}
          </SimpleGrid>

          {/* Emergency Support */}
          <Box
            w="full"
            position="relative"
            overflow="hidden"
            bgGradient="linear(130deg, brand.900, brand.600)"
            color="white"
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            boxShadow="floating"
            textAlign="center"
          >
            <Box position="absolute" top="-30%" right="-5%" w="320px" h="320px" borderRadius="full" bg="whiteAlpha.100" />
            <VStack spacing={5} position="relative">
              <Heading size="lg">Need Assistance?</Heading>
              <Text fontSize="lg" maxW="2xl" color="whiteAlpha.900">
                Our support team is ready to help with your inquiries — reach out and we'll get back to you quickly.
              </Text>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                h={14}
                px={8}
                bg="white"
                color="brand.700"
                _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
              >
                Contact Support
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
