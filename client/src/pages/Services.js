import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  Flex,
  Icon,
  Button,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Divider,
  Badge,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import { 
  FaCheck, 
  FaTshirt, 
  FaSnowflake, 
  FaHome, 
  FaBolt, 
  FaCalendarAlt,
  FaTags, 
  FaShoppingBasket,
  FaArrowRight,
  FaStar,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

// Pricing Table Component
const PricingTable = ({ category, items }) => {
  const trHoverBg = useColorModeValue('gray.50', 'gray.700');
  const tableBg = useColorModeValue('white', 'gray.700');
  const tableBorder = useColorModeValue('gray.200', 'gray.600');
  const tableHeaderBg = useColorModeValue('gray.50', 'gray.800');
  const tableHeaderColor = useColorModeValue('gray.900', 'white');
  const tableTextColor = useColorModeValue('gray.600', 'gray.300');
  const tableBorderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg={tableBg}
      boxShadow="lg"
      my={6}
    >
      <Box
        p={4}
        bg={tableHeaderBg}
        borderBottom="1px"
        borderColor={tableBorder}
      >
        <Text fontWeight="bold" fontSize="lg" color={tableHeaderColor}>{category}</Text>
      </Box>
      <Box overflowX="auto">
        <Table variant="simple" w="full">
          <Thead bg={tableHeaderBg}>
            <Tr>
              <Th>Item</Th>
              <Th isNumeric>Price</Th>
              <Th>Turnaround Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index} 
                _hover={{ bg: trHoverBg }}
                transition="background 0.2s"
              >
                <Td>{item.name}</Td>
                <Td isNumeric fontWeight="medium">{item.price}</Td>
                <Td>{item.time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

const Table = ({ children, ...props }) => (
  <Box as="table" {...props}>{children}</Box>
);

const Thead = ({ children, ...props }) => (
  <Box as="thead" {...props}>{children}</Box>
);

const Tbody = ({ children, ...props }) => (
  <Box as="tbody" {...props}>{children}</Box>
);

const Tr = ({ children, ...props }) => (
  <Box as="tr" {...props}>{children}</Box>
);

const Th = ({ children, isNumeric, ...props }) => (
  <Box 
    as="th" 
    p={4} 
    textAlign={isNumeric ? "right" : "left"} 
    fontWeight="semibold"
    fontSize="sm"
    {...props}
  >
    {children}
  </Box>
);

const Td = ({ children, isNumeric, ...props }) => (
  <Box 
    as="td" 
    p={4} 
    textAlign={isNumeric ? "right" : "left"}
    borderTop="1px"
    borderColor={useColorModeValue('gray.100', 'gray.700')}
    fontSize="sm"
    {...props}
  >
    {children}
  </Box>
);

const Service = ({ title, description, image, features, icon, color = "brand" }) => {
  const featureTextColor = useColorModeValue('gray.700', 'gray.300');
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      height="100%"
      position="relative"
      _hover={{ 
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        '& > .service-gradient': {
          opacity: 0.8,
        }
      }}
    >
      {/* Gradient bar at top */}
      <Box 
        className="service-gradient"
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="6px"
        bgGradient={`linear(to-r, ${color}.400, ${color}.600)`}
        opacity={0.6}
        transition="opacity 0.3s ease"
      />

      <Box h={'200px'} overflow={'hidden'}>
        <Image
          src={image || 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>

      <Box p={6}>
        <VStack spacing={2} mb={4} align="center">
          {icon && (
            <Flex 
              w={16} 
              h={16} 
              align="center" 
              justify="center" 
              borderRadius="lg"
              bg={`${color}.50`}
              color={`${color}.500`}
              boxShadow="md"
              mb={2}
              transition="all 0.3s ease"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            >
              <Icon as={icon} boxSize={8} />
            </Flex>
          )}
          <Heading fontSize={'xl'} fontWeight={600} color={`${color}.600`} textAlign="center">
            {title}
          </Heading>
        </VStack>

        <Text color={useColorModeValue('gray.600', 'gray.300')} mb={5} fontSize="md">
          {description}
        </Text>

        <Divider mb={5} opacity={0.3} />

        <VStack align="start" spacing={3}>
          <Text fontWeight={600} fontSize="sm" color={`${color}.500`}>
            Key Features:
          </Text>
          {features.map((feature, index) => (
            <HStack key={index} align="center" spacing={2}>
              <Flex
                align="center"
                justify="center"
                borderRadius="full"
                bg={`${color}.50`}
                color={`${color}.500`}
                w={5}
                h={5}
                boxShadow="sm"
              >
                <Icon as={FaCheck} fontSize="xs" />
              </Flex>
              <Text fontSize="sm" color={featureTextColor}>
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Button
          mt={6}
          size="sm"
          variant="ghost"
          colorScheme={color}
          rightIcon={<FaArrowRight size={12} />}
          _hover={{ bg: `${color}.50` }}
        >
          Learn more
        </Button>
      </Box>
    </MotionBox>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <Box pt={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      {/* Hero Section */}
      <Box 
        bg={useColorModeValue('white', 'gray.800')} 
        py={16}
        position="relative"
        overflow="hidden"
      >
        {/* Abstract Background Elements */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          width="500px"
          height="500px"
          borderRadius="full"
          bg="brand.50"
          filter="blur(60px)"
          opacity="0.6"
          zIndex="0"
          display={{ base: 'none', md: 'block' }}
        />
        
        <Container maxW="7xl" position="relative" zIndex="1">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VStack spacing={6} align="flex-start" textAlign="left">
                <Badge colorScheme="brand" fontSize="md" px={3} py={1} borderRadius="full">
                  Premium Care
                </Badge>
                <Heading
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  lineHeight="shorter"
                  fontWeight="bold"
                  color={useColorModeValue('gray.900', 'white')}
                >
                  Expert Laundry <Text as="span" color="brand.500">Services</Text>
                </Heading>
                <Text
                  fontSize="xl"
                  color={useColorModeValue('gray.600', 'gray.400')}
                  maxW="3xl"
                >
                  At Whites & Brights, we offer a comprehensive range of premium laundry and dry cleaning services, 
                  tailored to meet your specific needs with meticulous attention to detail.
                </Text>
                
                <Button
                  mt={4}
                  size="lg"
                  height="60px"
                  px={8}
                  fontSize="md"
                  fontWeight="600"
                  colorScheme="brand"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.3s"
                  as={RouterLink}
                  to="/contact"
                >
                  Get a Quote
                </Button>
              </VStack>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
                alt="Premium Laundry Services"
                borderRadius="xl"
                shadow="2xl"
                objectFit="cover"
                width="100%"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* Services Categories Navigation */}
      <Box bg={useColorModeValue('white', 'gray.800')} shadow="sm">
        <Container maxW="7xl" py={4}>
          <Tabs 
            variant="soft-rounded" 
            colorScheme="brand"
            onChange={(index) => setActiveTab(index)}
            defaultIndex={activeTab}
          >
            <TabList 
              overflowX="auto" 
              py={2}
              css={{
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
              display="flex"
              flexWrap={{ base: 'nowrap', md: 'wrap' }}
              justifyContent={{ base: 'flex-start', md: 'center' }}
            >
              <Tab mx={1} whiteSpace="nowrap">All Services</Tab>
              <Tab mx={1} whiteSpace="nowrap">Laundry by KG</Tab>
              <Tab mx={1} whiteSpace="nowrap">Dry Cleaning</Tab>
              <Tab mx={1} whiteSpace="nowrap">Steam Ironing</Tab>
              <Tab mx={1} whiteSpace="nowrap">Household Items</Tab>
              <Tab mx={1} whiteSpace="nowrap">Express Services</Tab>
            </TabList>
            
            <TabPanels mt={8} p={4}>
          {/* All Services Tab */}
          <TabPanel px={0}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <Service
                title="Laundry by KG"
                description="Pay only for what you need cleaned with our per-kilogram service, perfect for everyday laundry."
                image="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                icon={FaTshirt}
                color="brand"
                features={[
                  "Sorted by color and fabric type",
                  "Premium detergents & fabric softeners",
                  "Folded to perfection",
                  "Quick 24-hour turnaround",
                  "Eco-friendly options available"
                ]}
              />
              
              <Service
                title="Dry Cleaning"
                description="Specialized cleaning for your delicate and special garments that require extra care."
                image="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                icon={FaSnowflake}
                color="accent"
                features={[
                  "Expert handling of delicate fabrics",
                  "Stain treatment specialists",
                  "Garment inspection & button check",
                  "Pressed and hung with care",
                  "Eco-friendly solvents"
                ]}
              />
              
              <Service
                title="Household Items"
                description="Keep your home linens fresh, clean and hygienic with our specialized home textiles cleaning service."
                image="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                icon={FaHome}
                color="highlight"
                features={[
                  "All bedding sizes accommodated",
                  "Duvet covers & inserts",
                  "Table linens & napkins",
                  "Allergen removal treatment",
                  "Perfectly pressed & folded"
                ]}
              />
              
              <Service
                title="Express Delivery"
                description="Quick turnaround when you need it most - have your clean clothes back within hours."
                image="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                icon={FaBolt}
                color="accent"
                features={[
                  "Same-day service available",
                  "Priority processing",
                  "Rush hour pickup & delivery",
                  "Text notifications",
                  "Professional handling"
                ]}
              />
              
              <Service
                title="Subscription Plans"
                description="Regular service at discounted rates - sign up for weekly, biweekly, or monthly pickup and delivery."
                image="https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&auto=format&fit=crop&w=715&q=80"
                icon={FaCalendarAlt}
                color="brand"
                features={[
                  "Regular scheduled service",
                  "Up to 20% discount on regular prices",
                  "Free pickup and delivery",
                  "Personalized preferences saved",
                  "Cancel or pause anytime"
                ]}
              />
              
              <Service
                title="Steam Ironing"
                description="Professional steam ironing services for all your garments with special care for delicate fabrics."
                image="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                icon={FaTshirt}
                color="highlight"
                features={[
                  "Professional pressing for all garment types",
                  "Specialized handling for different fabrics",
                  "Crisp collars and perfect creases",
                  "Quick turnaround options",
                  "Competitive pricing by item type"
                ]}
              />
              
              <Service
                title="Commercial Services"
                description="Tailored solutions for businesses requiring regular, professional laundry services."
                image="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                icon={FaShoppingBasket}
                color="highlight"
                features={[
                  "Restaurants & hospitality",
                  "Salons & spas",
                  "Corporate office needs",
                  "Custom billing options",
                  "Delivery & pickup service"
                ]}
              />
            </SimpleGrid>
          </TabPanel>
          
          {/* Laundry by KG Tab */}
          <TabPanel px={0}>
            <Stack spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                p={8}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={4}>
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      color="brand.500"
                      rounded="full"
                      bg="brand.50"
                      mb={2}
                    >
                      <Icon as={FaTshirt} w={8} h={8} />
                    </Flex>
                    
                    <Heading size="xl" color="gray.800">Laundry by KG</Heading>
                    
                    <Text color="gray.600" fontSize="lg">
                      Our Laundry by KG service is the most economical option for your everyday laundry needs. 
                      Simply bring in your clothes, and we'll weigh them and charge you only for what you bring.
                    </Text>
                    
                    <List spacing={3} mt={4}>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Professional washing, drying, and folding</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Garments sorted by color and fabric type</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Premium detergents and fabric softeners</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Eco-friendly options available</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </VStack>
                  
                  <Image 
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    borderRadius="lg"
                    shadow="lg"
                    objectFit="cover"
                    height="100%"
                    maxHeight="300px"
                  />
                </SimpleGrid>
              </MotionBox>
              
              {/* Pricing Table */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Heading size="lg" mb={6}>Pricing</Heading>
                <Box 
                  bg="green.50" 
                  p={4} 
                  borderRadius="md" 
                  mb={4} 
                  borderLeft="4px" 
                  borderColor="green.500"
                >
                  <Flex align="center">
                    <Icon as={FaTags} color="green.500" mr={2} />
                    <Text fontWeight="bold" color="green.700">Inaugural Discount: 10% OFF on all services!</Text>
                  </Flex>
                </Box>
                <PricingTable 
                  category="Laundry by KG"
                  items={[
                    { name: "Wash & Iron Per KG", price: "₹99/kg", time: "48 hours" },
                    { name: "Wash & Fold Per KG", price: "₹89/kg", time: "48 hours" },
                    { name: "Premium Laundry Per KG", price: "₹179/kg", time: "48 hours" },
                    { name: "Woolen Laundry Per KG", price: "₹179/kg", time: "72 hours" }
                  ]}
                />
              </MotionBox>
            </Stack>
          </TabPanel>

          {/* Dry Cleaning Tab */}
          <TabPanel px={0}>
            <Stack spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                p={8}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={4}>
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      color="accent.500"
                      rounded="full"
                      bg="accent.50"
                      mb={2}
                    >
                      <Icon as={FaSnowflake} w={8} h={8} />
                    </Flex>
                    
                    <Heading size="xl" color="gray.800">Dry Cleaning</Heading>
                    
                    <Text color="gray.600" fontSize="lg">
                      Our professional dry cleaning service is perfect for delicate fabrics, formal wear, and garments that require special care.
                    </Text>
                    
                    <List spacing={3} mt={4}>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Expert handling of silk, wool, and delicate fabrics</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Specialized stain treatment</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Hand-finished details and pressing</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Eco-friendly solvents and processes</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </VStack>
                  
                  <Image 
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                    borderRadius="lg"
                    shadow="lg"
                    objectFit="cover"
                    height="100%"
                    maxHeight="300px"
                  />
                </SimpleGrid>
              </MotionBox>
              
              {/* Dry Cleaning Pricing */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Heading size="lg" mb={6}>Pricing</Heading>
                <Box 
                  bg="green.50" 
                  p={4} 
                  borderRadius="md" 
                  mb={4} 
                  borderLeft="4px" 
                  borderColor="green.500"
                >
                  <Flex align="center">
                    <Icon as={FaTags} color="green.500" mr={2} />
                    <Text fontWeight="bold" color="green.700">Inaugural Discount: 10% OFF on all services!</Text>
                  </Flex>
                </Box>
                {/* Women's Wear Dry Cleaning */}
                <PricingTable 
                  category="Women's Wear - Dry Cleaning"
                  items={[
                    { name: "Lehenga Choli", price: "₹199+", time: "72 hours" },
                    { name: "Top", price: "₹69+", time: "48 hours" },
                    { name: "Leggings", price: "₹49+", time: "48 hours" },
                    { name: "Cape Top", price: "₹149+", time: "48 hours" },
                    { name: "Skirt", price: "₹149+", time: "48 hours" },
                    { name: "Blouse", price: "₹69+", time: "48 hours" },
                    { name: "Gown", price: "₹249+", time: "72 hours" },
                    { name: "Dress", price: "₹199+", time: "72 hours" },
                    { name: "Saree", price: "₹199+", time: "72 hours" },
                    { name: "Dupatta", price: "₹49+", time: "48 hours" },
                    { name: "Sharara/Gharara", price: "₹249+", time: "72 hours" },
                    { name: "Anarkali", price: "₹199+", time: "72 hours" }
                  ]}
                />
                
                {/* Men's Wear Dry Cleaning */}
                <PricingTable 
                  category="Men's Wear - Dry Cleaning"
                  items={[
                    { name: "Kurta Pajama", price: "₹99+", time: "48 hours" },
                    { name: "Shirt", price: "₹79+", time: "48 hours" },
                    { name: "T-shirt", price: "₹69+", time: "48 hours" },
                    { name: "Pants/Trousers", price: "₹89+", time: "48 hours" },
                    { name: "Jeans", price: "₹99+", time: "48 hours" },
                    { name: "Suit (2 piece)", price: "₹499+", time: "72 hours" },
                    { name: "Suit (3 piece)", price: "₹599+", time: "72 hours" },
                    { name: "Blazer/Coat", price: "₹299+", time: "72 hours" },
                    { name: "Sherwani", price: "₹499+", time: "72 hours" },
                    { name: "Indo-Western", price: "₹399+", time: "72 hours" }
                  ]}
                />
                
                {/* Children's Wear Dry Cleaning */}
                <PricingTable 
                  category="Children's Wear - Dry Cleaning"
                  items={[
                    { name: "Child Shirt/T-shirt", price: "₹49+", time: "48 hours" },
                    { name: "Child Pants/Jeans", price: "₹59+", time: "48 hours" },
                    { name: "Child Dress", price: "₹99+", time: "48 hours" },
                    { name: "Child Kurta Pajama", price: "₹79+", time: "48 hours" },
                    { name: "Child Lehenga/Ethnic Wear", price: "₹149+", time: "72 hours" },
                    { name: "School Uniform (Set)", price: "₹89+", time: "48 hours" },
                    { name: "Baby Clothes (< 2 years)", price: "₹39+", time: "48 hours" }
                  ]}
                />
              </MotionBox>
            </Stack>
          </TabPanel>
          
          {/* Steam Ironing Tab */}
          <TabPanel px={0}>
            <Stack spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                p={8}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={4}>
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      color="highlight.500"
                      rounded="full"
                      bg="highlight.50"
                      mb={2}
                    >
                      <Icon as={FaTshirt} w={8} h={8} />
                    </Flex>
                    
                    <Heading size="xl" color="gray.800">Steam Ironing</Heading>
                    
                    <Text color="gray.600" fontSize="lg">
                      Professional steam ironing services for all your garments. Our expert pressing ensures crisp, wrinkle-free results with special care for delicate fabrics.
                    </Text>
                    
                    <List spacing={3} mt={4}>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Professional steam ironing for all garment types</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Specialized handling for different fabrics</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Crisp collars and perfect creases</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Quick turnaround options available</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </VStack>
                  
                  <Image 
                    src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    borderRadius="lg"
                    shadow="lg"
                    objectFit="cover"
                    height="100%"
                    maxHeight="300px"
                  />
                </SimpleGrid>
              </MotionBox>
              
              {/* Steam Ironing Pricing */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Heading size="lg" mb={6}>Pricing</Heading>
                <Box 
                  bg="green.50" 
                  p={4} 
                  borderRadius="md" 
                  mb={4} 
                  borderLeft="4px" 
                  borderColor="green.500"
                >
                  <Flex align="center">
                    <Icon as={FaTags} color="green.500" mr={2} />
                    <Text fontWeight="bold" color="green.700">Same-day service available with 20% premium</Text>
                  </Flex>
                </Box>
                
                {/* Men's Wear Steam Ironing */}
                <PricingTable 
                  category="Men's Wear - Steam Ironing"
                  items={[
                    { name: "Shirt/T-shirt", price: "₹ 20", time: "24 hours" },
                    { name: "Trouser/Jeans", price: "₹ 20", time: "24 hours" },
                    { name: "Coat", price: "₹ 100", time: "24 hours" },
                    { name: "Pyjama-Plain", price: "₹ 30", time: "24 hours" },
                    { name: "Pyjama-Silk/Designer", price: "₹ 45", time: "24 hours" }
                  ]}
                />
                
                {/* Women's Wear Steam Ironing */}
                <PricingTable 
                  category="Women's Wear - Steam Ironing"
                  items={[
                    { name: "Kurti Short", price: "₹ 15", time: "24 hours" },
                    { name: "Kurti Long", price: "₹ 30", time: "24 hours" },
                    { name: "Saree-Silk", price: "₹ 150", time: "48 hours" },
                    { name: "Saree-Heavy", price: "₹ 130", time: "48 hours" },
                    { name: "Saree-Designer", price: "₹ 150", time: "48 hours" },
                    { name: "Dupatta-Plain", price: "₹ 15", time: "24 hours" },
                    { name: "Dupatta-Designer", price: "₹ 45", time: "24 hours" },
                    { name: "Kurta-Plain", price: "₹ 30", time: "24 hours" },
                    { name: "Kurta-Silk", price: "₹ 45", time: "24 hours" },
                    { name: "Long Dress", price: "₹ 40", time: "24 hours" }
                  ]}
                />
                
                {/* Home Furnishings Steam Ironing */}
                <PricingTable 
                  category="Home Furnishings - Steam Ironing"
                  items={[
                    { name: "Fabric Wall Panel", price: "₹149+", time: "48 hours" },
                    { name: "Fabric Stool", price: "₹99+", time: "48 hours" },
                    { name: "Designer Leather Chair", price: "₹299+", time: "48 hours" },
                    { name: "Suede Leather Chair", price: "₹249+", time: "48 hours" },
                    { name: "Leather Chair", price: "₹199+", time: "48 hours" },
                    { name: "Fabric Chair (Silk/Designer)", price: "₹299+", time: "48 hours" },
                    { name: "Fabric Chair (Velvet)", price: "₹249+", time: "48 hours" },
                    { name: "Fabric Chair (Linen)", price: "₹199+", time: "48 hours" },
                    { name: "Fabric Chair (Cotton/Polyester Blend)", price: "₹149+", time: "48 hours" }
                  ]}
                />
              </MotionBox>
            </Stack>
          </TabPanel>
          
          {/* Additional tabs for other services */}
          <TabPanel px={0}>
            <Stack spacing={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                p={8}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={4}>
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      color="highlight.500"
                      rounded="full"
                      bg="highlight.50"
                      mb={2}
                    >
                      <Icon as={FaHome} w={8} h={8} />
                    </Flex>
                    
                    <Heading size="xl" color="gray.800">Household Items</Heading>
                    
                    <Text color="gray.600" fontSize="lg">
                      Keep your home linens, accessories, and specialty items fresh, clean and hygienic with our specialized cleaning services.
                    </Text>
                    
                    <List spacing={3} mt={4}>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>All bedding sizes accommodated</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Professional cleaning for shoes & bags</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Specialty jacket & coat cleaning</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Expert stain removal</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon as={FaCheck} color="green.500" />
                          <Text>Careful handling of delicate materials</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </VStack>
                  
                  <Image 
                    src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    borderRadius="lg"
                    shadow="lg"
                    objectFit="cover"
                    height="100%"
                    maxHeight="300px"
                  />
                </SimpleGrid>
              </MotionBox>
              
              {/* Household Cleaning Pricing */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Heading size="lg" mb={6}>Pricing</Heading>
                <Box 
                  bg="green.50" 
                  p={4} 
                  borderRadius="md" 
                  mb={4} 
                  borderLeft="4px" 
                  borderColor="green.500"
                >
                  <Flex align="center">
                    <Icon as={FaTags} color="green.500" mr={2} />
                    <Text fontWeight="bold" color="green.700">Special care for premium materials and branded items</Text>
                  </Flex>
                </Box>
                
                {/* Shoes Cleaning */}
                <PricingTable 
                  category="Shoe Cleaning Services"
                  items={[
                    { name: "Sports Shoes", price: "₹249+", time: "48 hours" },
                    { name: "Canvas Shoes", price: "₹199+", time: "48 hours" },
                    { name: "Leather Shoes", price: "₹299+", time: "72 hours" },
                    { name: "Suede Shoes", price: "₹349+", time: "72 hours" },
                    { name: "Formal Shoes", price: "₹279+", time: "48 hours" },
                    { name: "Boots", price: "₹399+", time: "72 hours" },
                    { name: "Designer Shoes", price: "₹449+", time: "72 hours" }
                  ]}
                />
                
                {/* Bags Cleaning */}
                <PricingTable 
                  category="Bag Cleaning Services"
                  items={[
                    { name: "Handbag (Small)", price: "₹399+", time: "72 hours" },
                    { name: "Handbag (Medium)", price: "₹499+", time: "72 hours" },
                    { name: "Handbag (Large)", price: "₹599+", time: "96 hours" },
                    { name: "Backpack", price: "₹349+", time: "72 hours" },
                    { name: "Leather Bag", price: "₹599+", time: "96 hours" },
                    { name: "Canvas Bag", price: "₹299+", time: "72 hours" },
                    { name: "Designer Bag", price: "₹999+", time: "96 hours" },
                    { name: "Clutch", price: "₹249+", time: "72 hours" },
                    { name: "Wallet/Belt", price: "₹199+", time: "48 hours" }
                  ]}
                />
                
                {/* Jackets Cleaning */}
                <PricingTable 
                  category="Jacket & Coat Cleaning"
                  items={[
                    { name: "Leather Jacket", price: "₹599+", time: "96 hours" },
                    { name: "Suede Jacket", price: "₹649+", time: "96 hours" },
                    { name: "Winter Jacket", price: "₹499+", time: "72 hours" },
                    { name: "Down Jacket", price: "₹549+", time: "96 hours" },
                    { name: "Sports Jacket", price: "₹399+", time: "72 hours" },
                    { name: "Bomber Jacket", price: "₹449+", time: "72 hours" },
                    { name: "Designer Jacket", price: "₹699+", time: "96 hours" },
                    { name: "Wool Coat", price: "₹599+", time: "96 hours" },
                    { name: "Trench Coat", price: "₹649+", time: "96 hours" }
                  ]}
                />
                
                {/* Home Textiles */}
                <PricingTable 
                  category="Home Textiles"
                  items={[
                    { name: "Bedsheet (Single)", price: "₹149+", time: "48 hours" },
                    { name: "Bedsheet (Double)", price: "₹199+", time: "48 hours" },
                    { name: "Duvet Cover (Single)", price: "₹199+", time: "72 hours" },
                    { name: "Duvet Cover (Double)", price: "₹249+", time: "72 hours" },
                    { name: "Comforter/Quilt (Single)", price: "₹399+", time: "96 hours" },
                    { name: "Comforter/Quilt (Double)", price: "₹599+", time: "96 hours" },
                    { name: "Curtains (Per Panel)", price: "₹199+", time: "72 hours" },
                    { name: "Sofa Cover (Per Seat)", price: "₹249+", time: "72 hours" },
                    { name: "Pillow Cover", price: "₹49+", time: "48 hours" },
                    { name: "Table Cloth", price: "₹149+", time: "48 hours" },
                    { name: "Cushion Cover", price: "₹59+", time: "48 hours" }
                  ]}
                />
              </MotionBox>
            </Stack>
          </TabPanel>
          
          <TabPanel px={0}>
            <Service
              title="Express Delivery"
              description="Quick turnaround when you need it most - have your clean clothes back within hours."
              image="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              icon={FaBolt}
              color="accent"
              features={[
                "Same-day service available",
                "Priority processing",
                "Rush hour pickup & delivery",
                "Text notifications",
                "Professional handling"
              ]}
            />
          </TabPanel>
          
          <TabPanel px={0}>
            <Service
              title="Subscription Plans"
              description="Regular service at discounted rates - sign up for weekly, biweekly, or monthly pickup and delivery."
              image="https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&auto=format&fit=crop&w=715&q=80"
              icon={FaCalendarAlt}
              color="brand"
              features={[
                "Regular scheduled service",
                "Up to 20% discount on regular prices",
                "Free pickup and delivery",
                "Personalized preferences saved",
                "Cancel or pause anytime"
              ]}
            />
          </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      
      <Box
        bg="brand.500"
        py={12}
      >
        <Container maxW={'7xl'}>
          <Heading color="white" textAlign="center" mb={4}>
            Eco-Friendly Commitment
          </Heading>
          <Text color="white" textAlign="center" fontSize="lg" maxW="3xl" mx="auto">
            Whites & Brights is committed to environmentally sustainable practices. We use biodegradable detergents, energy-efficient machines, and water-saving technologies to minimize our environmental footprint while delivering exceptional cleaning results.
          </Text>
        </Container>
      </Box>

    </Box>
  );
}
