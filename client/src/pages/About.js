import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
  Flex,
  VStack,
  Image,
  Icon,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaUserCog,
  FaCheckCircle,
  FaLeaf,
  FaHandsHelping,
  FaLightbulb,
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <MotionBox
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      textAlign="center"
      whileHover={{ y: -5, boxShadow: '2xl' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Avatar size="xl" src={image} mb={4} />
      <Heading fontSize="xl" mb={2}>{name}</Heading>
      <Text fontWeight="medium" color="brand.500" mb={4}>{role}</Text>
      <Text color="gray.600">{bio}</Text>
    </MotionBox>
  );
};

const ValueCard = ({ title, description, icon }) => {
  return (
    <MotionBox
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      whileHover={{ y: -5, boxShadow: '2xl' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Flex direction="column" align="center" textAlign="center">
        <Box
          bg="brand.50"
          w={16}
          h={16}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          {icon}
        </Box>
        <Heading size="md" mb={4}>{title}</Heading>
        <Text color="gray.600">{description}</Text>
      </Flex>
    </MotionBox>
  );
};

export default function About() {
  return (
    <Box pt={20}>
      {/* Hero Section */}
      <Box 
        py={20} 
        position="relative"
        bgGradient="linear(to-r, brand.50, accent.50)" 
      >
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} position="relative" zIndex={1}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Stack spacing={6}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                >
                  <Text as={'span'} color={'brand.500'}>
                    Our Story
                  </Text>
                </Heading>
                <Text
                  color={'gray.600'}
                  fontSize={'xl'}
                >
                  Whites & Brights was founded with a simple yet powerful vision: to revolutionize the laundry industry by combining cutting-edge technology with eco-friendly practices and exceptional customer service.
                </Text>
                <Text
                  color={'gray.600'}
                >
                  Our journey began when our founders recognized a gap in the market for a truly premium laundry service that didn't compromise on quality or environmental responsibility. After extensive research and development, Whites & Brights was born – a laundry service that combines state-of-the-art cleaning technology with eco-conscious practices.
                </Text>
                <Text
                  color={'gray.600'}
                >
                  Today, we're proud to be preparing for our grand opening, bringing our vision of exceptional laundry services to life. Our commitment to quality, sustainability, and customer satisfaction remains at the heart of everything we do.
                </Text>
              </Stack>
            </MotionBox>
            <MotionFlex 
              justify="center" 
              align="center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <MotionImage
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
                filter="auto"
                brightness="105%"
                contrast="105%"
                alt="Laundry Service"
                rounded="lg"
                shadow="2xl"
                w="full"
                maxW="500px"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </MotionFlex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box 
        py={20} 
        bg="white" 
        position="relative"
        borderTop="1px"
        borderColor="gray.200"
      >
        <Container maxW="7xl">
          <VStack spacing={5} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              bgGradient="linear(to-r, brand.600, accent.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Our Core Values
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="3xl"
            >
              Our commitment to excellence, sustainability, and customer satisfaction
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <ValueCard
              title="Excellence in Quality"
              description="We are committed to delivering exceptional cleaning results every time, paying meticulous attention to detail and using only the finest cleaning agents."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.4L9.2 17L9.8 13.8L7.1 11.6L10.4 11.2L12 8.2L13.6 11.2L16.9 11.6L14.2 13.8L14.8 17L12 15.4Z" fill="#0088ff" />
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ValueCard
              title="Environmental Stewardship"
              description="Our eco-friendly approach incorporates biodegradable detergents, water-saving technologies, and energy-efficient equipment to minimize our environmental impact."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H9.01" stroke="#0088ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 9H15.01" stroke="#0088ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ValueCard
              title="Customer-Centric Service"
              description="We believe in building lasting relationships with our customers through personalized service, clear communication, and exceeding expectations at every opportunity."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ValueCard
              title="Innovation"
              description="We continuously search for and implement the latest advancements in laundry technology and processes to provide superior results and convenience."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L16 12L12 8" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H16" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ValueCard
              title="Integrity"
              description="We operate with complete transparency and honesty in all our business practices, building trust with every customer interaction."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V12" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16H12.01" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ValueCard
              title="Community Engagement"
              description="We believe in being an active, positive force in our community, supporting local initiatives and building meaningful connections."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* What Sets Us Apart Section */}
      <Box 
        py={20} 
        bgGradient="linear(to-b, white, accent.50)" 
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      >
        <Container maxW="7xl">
          <VStack spacing={16} position="relative" mb={16} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              bgGradient="linear(to-r, brand.600, accent.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              What Sets Us Apart
            </Heading>

            {/* Features Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {/* Expertise & Technology */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={6} align="start">
                  <Box
                    p={3}
                    bg="brand.50"
                    borderRadius="lg"
                    color="brand.500"
                  >
                    <Icon as={FaTools} w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color="gray.800">Expertise & Technology</Heading>
                    <UnorderedList spacing={3} pl={4} color="gray.600">
                      <ListItem>Expert staff with extensive fabric care experience</ListItem>
                      <ListItem>State-of-the-art cleaning equipment</ListItem>
                      <ListItem>Premium, eco-friendly cleaning products</ListItem>
                      <ListItem>Advanced stain removal techniques</ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </Box>

              {/* Personalized Service */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={6} align="start">
                  <Box
                    p={3}
                    bg="accent.50"
                    borderRadius="lg"
                    color="accent.500"
                  >
                    <Icon as={FaUserCog} w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color="gray.800">Personalized Service</Heading>
                    <UnorderedList spacing={3} pl={4} color="gray.600">
                      <ListItem>Customized cleaning preferences</ListItem>
                      <ListItem>Garment-specific treatment options</ListItem>
                      <ListItem>Flexible scheduling and pickup options</ListItem>
                      <ListItem>Detailed care instructions for all items</ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </Box>

              {/* Quality Service */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={6} align="start">
                  <Box
                    p={3}
                    bg="green.50"
                    borderRadius="lg"
                    color="green.500"
                  >
                    <Icon as={FaCheckCircle} w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color="gray.800">Quality Service</Heading>
                    <UnorderedList spacing={3} pl={4} color="gray.600">
                      <ListItem>Premium cleaning solutions</ListItem>
                      <ListItem>Attention to detail</ListItem>
                      <ListItem>Expert fabric care</ListItem>
                      <ListItem>Satisfaction guarantee</ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </Box>

              {/* Eco-Friendly */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={6} align="start">
                  <Box
                    p={3}
                    bg="teal.50"
                    borderRadius="lg"
                    color="teal.500"
                  >
                    <Icon as={FaLeaf} w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color="gray.800">Eco-Friendly</Heading>
                    <UnorderedList spacing={3} pl={4} color="gray.600">
                      <ListItem>Biodegradable products</ListItem>
                      <ListItem>Water conservation</ListItem>
                      <ListItem>Energy-efficient machines</ListItem>
                      <ListItem>Minimal packaging waste</ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
          
          {/* Team Section */}
          <VStack spacing={8} position="relative" textAlign="center">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              bgGradient="linear(to-r, brand.600, accent.500)"
              bgClip="text"
              letterSpacing="tight"
              mb={6}
            >
              Meet Our Team
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <TeamMember
                name="Sarah Johnson"
                role="Founder & CEO"
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                bio="With over 15 years in the textile and hospitality industries, Sarah brings a wealth of knowledge and vision to Whites & Brights."
              />
              <TeamMember
                name="David Chen"
                role="Operations Director"
                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                bio="David oversees our day-to-day operations, ensuring efficiency and quality at every stage of our service delivery."
              />
              <TeamMember
                name="Emily Rodriguez"
                role="Sustainability Manager"
                image="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                bio="Emily leads our eco-friendly initiatives, constantly researching and implementing more sustainable practices."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}