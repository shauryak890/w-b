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
                  textAlign="justify"
                >
                  Whites & Brights was founded with a simple yet powerful vision: to revolutionize the laundry industry by combining cutting-edge technology with eco-friendly practices and exceptional customer service.
                </Text>
                <Text
                  color={'gray.600'}
                  textAlign="justify"
                >
                  Our journey began when our founders recognized a gap in the market for a truly premium laundry service that didn't compromise on quality or environmental responsibility. After extensive research and development, Whites & Brights was born – a laundry service that combines state-of-the-art cleaning technology with eco-conscious practices.
                </Text>
                <Text
                  color={'gray.600'}
                  textAlign="justify"
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
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <MotionImage
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Whites & Brights - Premium Laundry Service"
                borderRadius="xl"
                shadow="2xl"
                objectFit="cover"
                maxH="500px"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
            </MotionFlex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Stack spacing={16}>
              <Box mb={12}>
                <Heading size="lg" mb={6}>
                  Our Mission
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="justify">
                  At Whites & Brights, our mission is to provide exceptional laundry and dry cleaning services that not only meet but exceed our customers' expectations, while minimizing our environmental impact. We strive to combine innovative technology, eco-friendly practices, and personalized service to transform the everyday chore of laundry into a seamless, worry-free experience.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" mb={6}>
                  Our Vision
                </Heading>
                <Text fontSize="lg" color="gray.600" textAlign="justify">
                  We envision becoming the leading eco-conscious laundry service provider, recognized for our quality, reliability, and commitment to sustainability. We aim to expand our services nationwide, making premium, environmentally friendly laundry care accessible to all, while continuously innovating to reduce our carbon footprint and set new standards for the industry.
                </Text>
              </Box>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
      
      {/* Values Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Heading
              textAlign="center"
              size="xl"
              mb={16}
            >
              Our Values
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <ValueCard
                title="Quality Excellence"
                description="We are committed to delivering the highest quality of service, using the best products and techniques to ensure your garments receive the care they deserve."
                icon={<Icon as={FaCheckCircle} color="brand.500" w={8} h={8} />}
              />
              
              <ValueCard
                title="Environmental Responsibility"
                description="We prioritize eco-friendly practices throughout our operations, from biodegradable detergents to water and energy conservation."
                icon={<Icon as={FaLeaf} color="green.500" w={8} h={8} />}
              />
              
              <ValueCard
                title="Customer-Centric Approach"
                description="We put our customers at the center of everything we do, tailoring our services to meet individual needs and exceed expectations."
                icon={<Icon as={FaTools} color="accent.500" w={8} h={8} />}
              />
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Highlights */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Heading textAlign="center" size="xl" mb={4}>
                What Sets Us Apart
              </Heading>
              <Text
                textAlign="center"
                fontSize="lg"
                color="gray.600"
                maxW="3xl"
                mx="auto"
              >
                At Whites & Brights, we pride ourselves on our commitment to excellence in every aspect of our service.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {/* Advanced Technology */}
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
                    <Heading size="md" color="gray.800">Advanced Technology</Heading>
                    <UnorderedList spacing={3} pl={4} color="gray.600">
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
        </Container>
      </Box>
    </Box>
  );
}
