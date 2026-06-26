import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Flex,
  Stack,
  VStack,
  HStack,
  Image,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaMoneyBillWave, 
  FaHandshake, 
  FaTools, 
  FaBullhorn, 
  FaCheckCircle,
  FaStore,
  FaUserTie,
  FaTruck,
  FaUsers,
  FaArrowRight,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { GradientText, Counter } from '../components/ui';

// Motion components
const MotionBox = motion(Box);

// Franchise testimonials
const testimonials = [
  {
    quote:
      "Starting my journey with Whites & Brights has been fantastic. Even though we just opened recently, the support team guided me through every step of the setup and training process. The response from customers has been overwhelming already!",
    name: 'Poonam Singh',
    role: 'Franchise Owner since July 2025',
    initials: 'PS',
  },
  {
    quote:
      "Partnering with Whites & Brights has genuinely changed my life. What started as a side venture quickly grew into a steady, reliable source of income that gave my family real financial freedom. The proven systems, marketing support and hands-on guidance meant I was never figuring things out alone — today I'm proud to run a profitable business I can call my own.",
    name: 'Mukesh',
    role: 'Franchise Owner since January 2026',
    initials: 'MK',
  },
];

// Self-contained fade carousel for testimonials (no external slider lib)
const TestimonialCarousel = ({ items, cardBg, textColor }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i) => setIndex(((i % items.length) + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  return (
    <Box maxW="800px" mx="auto" w="full">
      <Box
        position="relative"
        minH={{ base: '340px', md: '300px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((t, i) => (
          <MotionBox
            key={t.name}
            position="absolute"
            inset={0}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            pointerEvents={i === index ? 'auto' : 'none'}
          >
            <Flex
              direction="column"
              h="full"
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              p={{ base: 6, md: 8 }}
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} fontStyle="italic" mb={6} flex="1">
                &ldquo;{t.quote}&rdquo;
              </Text>
              <HStack>
                <Flex
                  w={12}
                  h={12}
                  borderRadius="full"
                  bgGradient="linear(135deg, brand.500, accent.500)"
                  color="white"
                  fontWeight="bold"
                  align="center"
                  justify="center"
                  mr={3}
                  flexShrink={0}
                >
                  {t.initials}
                </Flex>
                <Box>
                  <Text fontWeight="bold">{t.name}</Text>
                  <Text fontSize="sm" color={textColor}>{t.role}</Text>
                </Box>
              </HStack>
            </Flex>
          </MotionBox>
        ))}
      </Box>

      {/* Dots */}
      <HStack justify="center" spacing={3} mt={8}>
        {items.map((t, i) => (
          <Box
            key={t.name}
            as="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            w={i === index ? 8 : 2.5}
            h={2.5}
            borderRadius="full"
            bg={i === index ? 'brand.500' : 'gray.300'}
            transition="all 0.3s ease"
            _hover={{ bg: i === index ? 'brand.500' : 'gray.400' }}
          />
        ))}
      </HStack>
    </Box>
  );
};

const Franchise = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const cardBg = useColorModeValue('white', 'gray.700');
  const statBg = useColorModeValue('brand.50', 'gray.700');
  
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        as="section" 
        position="relative" 
        h={{ base: "auto", md: "650px" }}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')"
          bgSize="cover"
          bgPosition="center"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: 'linear(to-r, rgba(2,73,90,0.95), rgba(2,73,90,0.62))',
            zIndex: 0
          }}
        />
        
        <Container maxW="1200px" position="relative" zIndex="1" h="100%" py={{ base: 20, md: 0 }}>
          <Flex 
            direction="column" 
            justify="center" 
            h="100%"
            maxW={{ base: "100%", lg: "60%" }}
            color="white"
          >
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                display="inline-flex"
                alignItems="center"
                gap={2}
                bg="whiteAlpha.200"
                color="white"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.400"
                fontSize={{ base: "sm", md: "md" }}
                px={4}
                py={2}
                mb={4}
              >
                <Box as="span" w={2} h={2} borderRadius="full" bg="brand.300" />
                Business Opportunity
              </Badge>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                lineHeight="1.05"
                letterSpacing="-0.03em"
                mb={6}
              >
                Join the Fastest-Growing <GradientText from="brand.300" to="accent.200">Laundry Franchise</GradientText>
              </Heading>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                mb={8}
                maxW="xl"
              >
                Partner with Whites & Brights to build a profitable, recession-proof business with exceptional returns and comprehensive support at every step.
              </Text>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                variant="gradient"
                px={8}
                py={7}
                fontSize="md"
                fontWeight="bold"
                rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
                as="a"
                href="#franchise-application"
              >
                Apply For Franchise
              </Button>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Why Invest Section */}
      <Box as="section" py={20} bg={bgColor}>
        <Container maxW="1200px">
          <Stack spacing={16}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Why Invest in the <GradientText>Laundry Industry?</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  The Indian laundry and dry cleaning industry is rapidly growing with increasing urbanization, rising disposable incomes, and changing lifestyles creating exceptional business opportunities.
                </Text>
              </MotionBox>
            </Stack>

            {/* Industry Stats and Graphs */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Stat
                  px={6}
                  py={8}
                  bg={statBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Icon as={FaChartLine} w={10} h={10} color={accentColor} mb={4} />
                  <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}><Counter to={25000} prefix="₹" suffix="Cr" /></StatNumber>
                  <StatLabel fontSize="lg" fontWeight="medium" mb={2}>Market Size</StatLabel>
                  <StatHelpText>Growing at 8.7% annually</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Stat
                  px={6}
                  py={8}
                  bg={statBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Icon as={FaMoneyBillWave} w={10} h={10} color={accentColor} mb={4} />
                  <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>50-60%</StatNumber>
                  <StatLabel fontSize="lg" fontWeight="medium" mb={2}>Profit Margin</StatLabel>
                  <StatHelpText>In premium urban markets</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Stat
                  px={6}
                  py={8}
                  bg={statBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Icon as={FaStore} w={10} h={10} color={accentColor} mb={4} />
                  <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>16-18</StatNumber>
                  <StatLabel fontSize="lg" fontWeight="medium" mb={2}>Months</StatLabel>
                  <StatHelpText>Average ROI timeline</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Stat
                  px={6}
                  py={8}
                  bg={statBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Icon as={FaUsers} w={10} h={10} color={accentColor} mb={4} />
                  <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}><Counter to={80} suffix="%" /></StatNumber>
                  <StatLabel fontSize="lg" fontWeight="medium" mb={2}>Customer Retention</StatLabel>
                  <StatHelpText>With subscription models</StatHelpText>
                </Stat>
              </MotionBox>
            </SimpleGrid>

            {/* Key Benefits */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                >
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="brand.500"
                    mb={1}
                  >
                    <Icon as={FaMoneyBillWave} w={8} h={8} />
                  </Flex>
                  <Heading size="md">Recession-Proof Business</Heading>
                  <Text color={textColor}>
                    Laundry services remain essential regardless of economic conditions, providing stable revenue even during downturns.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                >
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="accent.500"
                    mb={1}
                  >
                    <Icon as={FaHandshake} w={8} h={8} />
                  </Flex>
                  <Heading size="md">Cash-Based Model</Heading>
                  <Text color={textColor}>
                    Enjoy immediate cash flow with minimal accounts receivable, creating a healthy and predictable business model.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                >
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="green.500"
                    mb={1}
                  >
                    <Icon as={FaUserTie} w={8} h={8} />
                  </Flex>
                  <Heading size="md">No Experience Required</Heading>
                  <Text color={textColor}>
                    Our comprehensive training and support system ensures success regardless of your prior business or industry experience.
                  </Text>
                </VStack>
              </MotionBox>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      {/* Business Model Breakdown */}
      <Box as="section" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>        
        <Container maxW="1200px">
          <Stack spacing={16}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Franchise <GradientText>Business Models</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  Choose between our Silver and Gold business models designed to fit your investment capabilities and business goals.
                </Text>
              </MotionBox>
            </Stack>

            {/* Franchise Models */}
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} alignItems="stretch">
              {/* Silver Model */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="card"
                  height="100%"
                  position="relative"
                  transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'cardHover' }}
                >
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    bg="gray.400"
                    color="white"
                    px={4}
                    py={2}
                    borderBottomLeftRadius="md"
                    fontWeight="bold"
                    zIndex="1"
                  >
                    SMART LAUNDRY POINT
                  </Box>
                  <Box p={8} pt={16}>
                    <Heading size="lg" mb={2} color={headingColor}>Smart Point</Heading>
                    <Text fontSize="md" bg="blue.100" color="blue.800" fontWeight="bold" px={2} py={1} borderRadius="md" display="inline-block" mb={2}>
                      FOFO Model (Franchise Owned Franchise Operated)
                    </Text>
                    <Text mb={8} color={textColor} fontStyle="italic">
                      Perfect for entrepreneurs looking to start with a manageable investment
                    </Text>
                    
                    <VStack spacing={6} align="stretch">
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Store setup and Premium interior</Text>
                        <Text fontWeight="bold" color={accentColor}>₹3,50,000</Text>
                      </HStack>
                      <Text fontSize="sm" color="gray.500" ml={2} mt={-5}>One-time payment</Text>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Commercial machine package</Text>
                        <Text fontWeight="bold" color={accentColor}>₹7,50,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">POS+Software+Application Integration</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,00,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">Delivery, Marketing, Chemical support kit</Text>
                        <Text fontWeight="bold" color={accentColor}>₹3,00,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="bold" fontSize="lg">Total Investment</Text>
                        <Text fontWeight="bold" fontSize="lg" color={accentColor}>₹15,00,000</Text>
                      </HStack>
                      
                      <Text fontSize="sm" color="gray.600" fontStyle="italic" textAlign="right">
                        18% GST inclusive on all costs as per Indian Govt. standards
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </MotionBox>

              {/* Gold Model */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="card"
                  height="100%"
                  position="relative"
                  transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'cardHover' }}
                >
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    bg="yellow.500"
                    color="white"
                    px={4}
                    py={2}
                    borderBottomLeftRadius="md"
                    fontWeight="bold"
                    zIndex="1"
                  >
                    W&B PRIME FRANCHISE
                  </Box>
                  <Box p={8} pt={16}>
                    <Heading size="lg" mb={2} color={headingColor}>Prime Franchise</Heading>
                    <Text fontSize="md" bg="blue.100" color="blue.800" fontWeight="bold" px={2} py={1} borderRadius="md" display="inline-block" mb={2}>
                      FOFO Model (Franchise Owned Franchise Operated)
                    </Text>
                    <Text mb={8} color={textColor} fontStyle="italic">
                      Complete business solution with advanced equipment and full support
                    </Text>
                    
                    <VStack spacing={6} align="stretch">
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Franchise Fee</Text>
                        <Text fontWeight="bold" color={accentColor}>₹2,50,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Store setup and Premium interior</Text>
                        <Text fontWeight="bold" color={accentColor}>₹4,00,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Commercial machine package</Text>
                        <Text fontWeight="bold" color={accentColor}>₹9,60,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">Vacuum steam iron press table set (2)</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,50,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Shoe washer with sterilization 1x</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,20,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">Shoe dryer 20 pair</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,10,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">Spotting machine, 2 gun with boiler</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,20,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">POS+Software+Application Integration</Text>
                        <Text fontWeight="bold" color={accentColor}>₹1,00,000</Text>
                      </HStack>
                      <Divider />

                      <HStack justify="space-between">
                        <Text fontWeight="medium">Delivery, Marketing, Chemical support kit</Text>
                        <Text fontWeight="bold" color={accentColor}>₹3,00,000</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="bold" fontSize="lg">Total Investment</Text>
                        <Text fontWeight="bold" fontSize="lg" color={accentColor}>₹25,10,000</Text>
                      </HStack>
                      
                      <Text fontSize="sm" color="gray.600" fontStyle="italic" textAlign="right">
                        18% GST inclusive on all costs as per Indian Govt. standards
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </MotionBox>

              {/* Platinum Model */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="card"
                  height="100%"
                  position="relative"
                  transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'cardHover' }}
                >
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    bg="purple.600"
                    color="white"
                    px={4}
                    py={2}
                    borderBottomLeftRadius="md"
                    fontWeight="bold"
                    zIndex="1"
                  >
                    W&B SIGNATURE ENTERPRISE
                  </Box>
                  <Box p={8} pt={16}>
                    <Heading size="lg" mb={2} color={headingColor}>Premium Laundry Hub + 10 CC</Heading>
                    <Text fontSize="md" bg="purple.100" color="purple.800" fontWeight="bold" px={2} py={1} borderRadius="md" display="inline-block" mb={2}>
                      FOCO Model (Franchise Owned Company Operated)
                    </Text>
                    <Text mb={8} color={textColor} fontStyle="italic">
                      Comprehensive enterprise solution with company-managed operations and multiple revenue streams
                    </Text>
                    
                    <VStack spacing={6} align="stretch">
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Space Required</Text>
                        <Text fontWeight="bold" color={accentColor}>1500-2000 sq.ft</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Includes</Text>
                        <Text fontWeight="bold" color={accentColor}>10 Collection Centers</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="medium">Business Model</Text>
                        <Text fontWeight="bold" color={accentColor}>FOCO</Text>
                      </HStack>
                      <Divider />
                      
                      <HStack justify="space-between">
                        <Text fontWeight="bold" fontSize="lg">Total Investment</Text>
                        <Text fontWeight="bold" fontSize="lg" color={accentColor}>₹1.00 - 1.21 Cr</Text>
                      </HStack>
                      
                      <Text fontSize="sm" color="gray.600" fontStyle="italic" textAlign="right" mb={4}>
                        18% GST inclusive on all costs as per Indian Govt. standards
                      </Text>

                      <Button
                        as={RouterLink}
                        to="/contact"
                        colorScheme="purple"
                        size="lg"
                        w="full"
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                        _active={{ transform: 'translateY(0)' }}
                      >
                        Contact Us For Details
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </MotionBox>
            </SimpleGrid>

            {/* Space Requirements */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  height="100%"
                  p={6}
                  textAlign="center"
                >
                  <Heading size="md" mb={2} color={headingColor}>Smart Laundry Point</Heading>
                  <Text fontSize="3xl" fontWeight="bold" color={accentColor} mb={2}>300-350 sq.ft</Text>
                  <Text color={textColor}>Ideal for high-traffic locations with processing done at central facility</Text>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  height="100%"
                  p={6}
                  textAlign="center"
                >
                  <Heading size="md" mb={2} color={headingColor}>W&B Prime Franchise</Heading>
                  <Text fontSize="3xl" fontWeight="bold" color={accentColor} mb={2}>400-500 sq.ft</Text>
                  <Text color={textColor}>Combined collection and limited processing capabilities</Text>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  height="100%"
                  p={6}
                  textAlign="center"
                >
                  <Heading size="md" mb={2} color={headingColor}>W&B Signature Enterprise</Heading>
                  <Text fontSize="3xl" fontWeight="bold" color={accentColor} mb={2}>1500-2000 sq.ft</Text>
                  <Text color={textColor}>Complete processing facility with all services available on-site</Text>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Support System */}
      <Box as="section" py={20} bg={bgColor}>
        <Container maxW="1200px">
          <Stack spacing={16}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Our Comprehensive <GradientText>Support System</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  We provide end-to-end support to ensure your franchise succeeds from day one and continues to grow year after year.
                </Text>
              </MotionBox>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                  position="relative"
                  overflow="hidden"
                >
                  <Box 
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    height="6px"
                    bgGradient="linear(to-r, brand.400, brand.600)"
                    opacity={0.8}
                  />
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="brand.500"
                    mb={1}
                  >
                    <Icon as={FaTools} w={8} h={8} />
                  </Flex>
                  <Heading size="md">Setup & Training</Heading>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Complete store setup assistance
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      2-week comprehensive training program
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Equipment operation & maintenance training
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Staff hiring and training support
                    </ListItem>
                  </List>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                  position="relative"
                  overflow="hidden"
                >
                  <Box 
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    height="6px"
                    bgGradient="linear(to-r, accent.400, accent.600)"
                    opacity={0.8}
                  />
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="accent.500"
                    mb={1}
                  >
                    <Icon as={FaBullhorn} w={8} h={8} />
                  </Flex>
                  <Heading size="md">Marketing & Technology</Heading>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Local marketing strategy & materials
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Social media management support
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Proprietary POS & management software
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Customer acquisition campaigns
                    </ListItem>
                  </List>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <VStack 
                  align="start" 
                  spacing={4} 
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg" 
                  boxShadow="md"
                  h="100%"
                  position="relative"
                  overflow="hidden"
                >
                  <Box 
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    height="6px"
                    bgGradient="linear(to-r, green.400, green.600)"
                    opacity={0.8}
                  />
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="green.500"
                    mb={1}
                  >
                    <Icon as={FaTruck} w={8} h={8} />
                  </Flex>
                  <Heading size="md">Ongoing Operations</Heading>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Supply chain management
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Regular business reviews & coaching
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      24/7 operational support helpdesk
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Continuous training & updates
                    </ListItem>
                  </List>
                </VStack>
              </MotionBox>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        as="section" 
        py={20} 
        bg={useColorModeValue('gray.50', 'gray.900')}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="brand.50"
          filter="blur(60px)"
          opacity="0.4"
          zIndex="0"
        />
        <Container maxW="1200px" position="relative" zIndex="1">
          <Stack spacing={12}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Success <GradientText>Stories</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  Hear from our franchise partners who have built thriving businesses with Whites & Brights.
                </Text>
              </MotionBox>
            </Stack>

            <TestimonialCarousel items={testimonials} cardBg={cardBg} textColor={textColor} />
          </Stack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={20} bg={bgColor}>
        <Container maxW="1200px">
          <Stack spacing={12}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Frequently Asked <GradientText>Questions</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  Get answers to the most common questions about our franchise opportunity.
                </Text>
              </MotionBox>
            </Stack>

            <Accordion allowMultiple width="100%" maxW="4xl" mx="auto">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                  <h2>
                    <AccordionButton py={4} bg={cardBg}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Do I need prior experience in the laundry industry?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py={4} px={6} bg={cardBg}>
                    No prior experience is required. Our comprehensive training program will equip you with all the necessary skills and knowledge to run a successful laundry business. We provide ongoing support to ensure your success regardless of your background.
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                  <h2>
                    <AccordionButton py={4} bg={cardBg}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        How long does it take to open a Whites & Brights franchise?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py={4} px={6} bg={cardBg}>
                    The typical timeline from signing the franchise agreement to opening your store is approximately 3-4 months. This includes location selection, lease negotiation, store build-out, equipment installation, staff hiring, and training. Our team will guide you through each step of the process.
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                  <h2>
                    <AccordionButton py={4} bg={cardBg}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        What ongoing fees will I need to pay?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py={4} px={6} bg={cardBg}>
                    Franchisees pay a royalty fee of 6% of gross sales, which covers ongoing support, technology updates, and brand development. There is also a marketing contribution of 2% that goes toward national marketing campaigns that benefit all locations. There are no hidden fees beyond these standard industry charges.
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                  <h2>
                    <AccordionButton py={4} bg={cardBg}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Can I own multiple Whites & Brights franchises?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py={4} px={6} bg={cardBg}>
                    Yes, we encourage multi-unit ownership for qualified franchisees. After successfully operating your first location for at least 6 months, you can apply for additional units. We offer development incentives for multi-unit operators, including reduced franchise fees for subsequent locations.
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
                  <h2>
                    <AccordionButton py={4} bg={cardBg}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        What territories are currently available?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py={4} px={6} bg={cardBg}>
                    We are currently expanding across major metropolitan areas in India, with a focus on tier 1 and tier 2 cities. Each franchise territory is carefully mapped to ensure sufficient population density and market potential. During your application process, we'll discuss available territories that match your preferences and market analysis.
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>
            </Accordion>
          </Stack>
        </Container>
      </Box>

      {/* Application Process */}
      <Box 
        as="section" 
        py={20} 
        bg={useColorModeValue('gray.50', 'gray.900')}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="accent.50"
          filter="blur(60px)"
          opacity="0.4"
          zIndex="0"
        />
        <Container maxW="1200px" position="relative" zIndex="1">
          <Stack spacing={16}>
            <Stack spacing={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl' }}
                  mb={2}
                  color={headingColor}
                >
                  Application <GradientText>Process</GradientText>
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={textColor}
                  maxW="3xl"
                  mx="auto"
                >
                  Your journey to becoming a Whites & Brights franchise owner starts here.
                </Text>
              </MotionBox>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 10, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={4} align="center">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="brand.500"
                    mb={1}
                    position="relative"
                  >
                    <Text fontWeight="bold" fontSize="xl">1</Text>
                    <Box
                      position="absolute"
                      top="50%"
                      right="-100%"
                      height="2px"
                      width="100%"
                      bg="brand.500"
                      display={{ base: 'none', md: 'block' }}
                    />
                  </Flex>
                  <Heading size="md" textAlign="center">Initial Application</Heading>
                  <Text textAlign="center" color={textColor}>
                    Complete our online application form to express your interest and provide basic information.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <VStack spacing={4} align="center">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="accent.500"
                    mb={1}
                    position="relative"
                  >
                    <Text fontWeight="bold" fontSize="xl">2</Text>
                    <Box
                      position="absolute"
                      top="50%"
                      right="-100%"
                      height="2px"
                      width="100%"
                      bg="accent.500"
                      display={{ base: 'none', md: 'block' }}
                    />
                  </Flex>
                  <Heading size="md" textAlign="center">Discovery Meeting</Heading>
                  <Text textAlign="center" color={textColor}>
                    Meet with our franchise team to discuss the opportunity in detail and ask questions.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <VStack spacing={4} align="center">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="green.500"
                    mb={1}
                    position="relative"
                  >
                    <Text fontWeight="bold" fontSize="xl">3</Text>
                    <Box
                      position="absolute"
                      top="50%"
                      right="-100%"
                      height="2px"
                      width="100%"
                      bg="green.500"
                      display={{ base: 'none', md: 'block' }}
                    />
                  </Flex>
                  <Heading size="md" textAlign="center">Business Planning</Heading>
                  <Text textAlign="center" color={textColor}>
                    Develop your business plan and secure financing with our guidance and support.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <VStack spacing={4} align="center">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="purple.500"
                    mb={1}
                  >
                    <Text fontWeight="bold" fontSize="xl">4</Text>
                  </Flex>
                  <Heading size="md" textAlign="center">Grand Opening</Heading>
                  <Text textAlign="center" color={textColor}>
                    Sign the franchise agreement, complete training, and launch your Whites & Brights location.
                  </Text>
                </VStack>
              </MotionBox>
            </SimpleGrid>

            {/* CTA */}
            <Box textAlign="center" mt={10} id="franchise-application">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  size="lg" 
                  colorScheme="brand" 
                  px={10} 
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  transition="all 0.3s"
                  as={RouterLink}
                  to="/contact"
                >
                  Apply Now
                </Button>
                <Text mt={4} fontSize="sm" color={textColor}>
                  Our franchise team will respond within 48 hours of receiving your application.
                </Text>
              </MotionBox>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Footer CTA */}
      <Box 
        as="section" 
        py={16} 
        bg="brand.600" 
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          width="50%"
          bg="brand.700"
          clipPath="polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
          opacity="0.3"
          zIndex="0"
        />
        <Container maxW="1200px" position="relative" zIndex="1">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="xl" mb={4}>
                Ready to Build Your Future with Whites & Brights?
              </Heading>
              <Text fontSize="lg" mb={6} opacity={0.9}>
                Join our growing family of successful franchise owners and be part of the booming laundry industry.
              </Text>
              <HStack spacing={4}>
                <Button 
                  size="lg" 
                  colorScheme="whiteAlpha" 
                  fontWeight="bold"
                  _hover={{ bg: 'white', color: 'brand.600' }}
                  as={RouterLink}
                  to="/contact"
                >
                  Apply Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  colorScheme="whiteAlpha"
                  fontWeight="bold"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  as="a"
                  href="#franchise-application"
                >
                  Learn More
                </Button>
              </HStack>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              display={{ base: 'none', md: 'block' }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Happy franchise owner"
                borderRadius="lg"
                boxShadow="2xl"
                objectFit="cover"
                height="300px"
                width="100%"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Franchise;