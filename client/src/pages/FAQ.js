import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { FaSearch, FaClock, FaTshirt, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const FAQCategory = ({ title, icon, questions }) => {
  return (
    <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
      <VStack align="start" spacing={4}>
        <Icon as={icon} w={8} h={8} color="brand.500" />
        <Heading size="md" color="gray.800">{title}</Heading>
        <Accordion allowMultiple width="100%">
          {questions.map((q, index) => (
            <AccordionItem key={index} border="none" mb={2}>
              <AccordionButton 
                _hover={{ bg: 'brand.50' }}
                borderRadius="md"
                p={4}
              >
                <Box flex="1" textAlign="left" fontWeight="medium">
                  {q.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} px={4}>
                <Text color="gray.600">{q.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default function FAQ() {
  const categories = [
    {
      title: 'Service & Timing',
      icon: FaClock,
      questions: [
        {
          question: 'What are your operating hours?',
          answer: 'We operate Monday through Saturday from 7:00 AM to 8:00 PM. Drop-offs are accepted until 6:00 PM.',
        },
        {
          question: 'How long does the service take?',
          answer: 'Standard service is 24-48 hours. We also offer same-day and express services for an additional fee.',
        },
        {
          question: 'Do you offer pickup and delivery?',
          answer: 'Yes, we offer free pickup and delivery for orders over $30 within our service area.',
        },
      ],
    },
    {
      title: 'Garment Care',
      icon: FaTshirt,
      questions: [
        {
          question: 'How do you handle delicate items?',
          answer: 'Delicate items receive special attention and are cleaned according to their care labels using appropriate methods and gentle detergents.',
        },
        {
          question: 'What if something gets damaged?',
          answer: 'We have a comprehensive insurance policy and will reimburse you for any damages that occur during our care.',
        },
        {
          question: 'Do you handle stain removal?',
          answer: 'Yes, we specialize in stain removal and use various techniques depending on the type of stain and fabric.',
        },
      ],
    },
    {
      title: 'Pricing & Payment',
      icon: FaMoneyBillWave,
      questions: [
        {
          question: 'How is pricing calculated?',
          answer: 'Pricing is based on the type of service, garment type, and any special handling required. We offer transparent pricing with no hidden fees.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, digital wallets, and cash. Corporate accounts can be billed monthly.',
        },
        {
          question: 'Do you offer any discounts?',
          answer: 'Yes, we offer loyalty programs, student discounts, and special promotions for regular customers.',
        },
      ],
    },
    {
      title: 'Policies & Security',
      icon: FaShieldAlt,
      questions: [
        {
          question: 'What is your privacy policy?',
          answer: 'We protect your personal information and never share it with third parties. View our full privacy policy for details.',
        },
        {
          question: 'How do you track orders?',
          answer: 'Each order receives a unique tracking number, and you can monitor its status through our mobile app or website.',
        },
        {
          question: 'What is your lost item policy?',
          answer: 'We maintain detailed records of all items and have procedures in place to prevent loss. Any lost items are covered by our insurance.',
        },
      ],
    },
  ];

  return (
    <Box pt={20} pb={20} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={12}>
          {/* Hero Section */}
          <VStack spacing={4} textAlign="center" w="full">
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Frequently Asked Questions
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Find answers to common questions about our services, policies, and procedures.
            </Text>
          </VStack>

          {/* Search Bar */}
          <Box w="full" maxW="2xl" mx="auto">
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search your question..."
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

          {/* FAQ Categories */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {categories.map((category, index) => (
              <FAQCategory key={index} {...category} />
            ))}
          </SimpleGrid>

          {/* Contact Support */}
          <Box 
            w="full" 
            bg="white" 
            p={8} 
            borderRadius="xl" 
            boxShadow="lg"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading size="md">Still have questions?</Heading>
              <Text color="gray.600">
                Our support team is here to help you with any specific questions or concerns.
              </Text>
              <Button
                colorScheme="brand"
                size="lg"
                rightIcon={<Icon as={FaSearch} />}
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
