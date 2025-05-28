import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Image,
  Flex,
  keyframes,
  IconButton,
  Badge,
  VStack,
  HStack,
  useBreakpointValue,
  Circle,
  Divider,
  Center,
} from '@chakra-ui/react';
import { 
  FaWater, 
  FaTshirt, 
  FaSoap, 
  FaClock, 
  FaArrowUp, 
  FaLeaf, 
  FaMoneyBillWave, 
  FaSmile, 
  FaSnowflake, 
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaShirt,
  FaHandsWash
} from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Feature = ({ title, text, icon }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Stack
        spacing={4}
        align="center"
        textAlign="center"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="xl"
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: '2xl',
        }}
        transition="all 0.3s ease-in-out"
      >
        <Box
          p={3}
          bg="brand.50"
          borderRadius="full"
          animation={`${float} 3s ease-in-out infinite`}
        >
          <Icon as={icon} w={8} h={8} color="brand.500" />
        </Box>
        <Heading size="md" color="gray.800">{title}</Heading>
        <Text color="gray.600" fontSize="lg">{text}</Text>
      </Stack>
    </MotionBox>
  );
};

export default function Home() {
  const control = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    control.start({ opacity: 1, y: 0 });
  }, [control]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Next/Prev methods for carousel
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  // Carousel slide data
  const carouselSlides = [
    {
      id: 1,
      title: "Premium Laundry Service",
      subtitle: "Experience The Perfect Clean",
      description: "Using eco-friendly products and cutting-edge technology for your finest garments.",
      buttonText: "Our Services",
      buttonLink: "/services",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      highlights: ["Professional Care", "100% Satisfaction", "Free Pickup & Delivery"],
    },
    {
      id: 2,
      title: "Eco-Friendly Cleaning",
      subtitle: "Care For Your Clothes & The Planet",
      description: "Our sustainable approach ensures your clothes stay bright while protecting the environment.",
      buttonText: "Learn More",
      buttonLink: "/about",
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      highlights: ["Biodegradable Products", "Water Conservation", "Energy Efficient"],
    },
    {
      id: 3,
      title: "On-Demand Service",
      subtitle: "Convenience At Your Doorstep",
      description: "Schedule pickups and deliveries that fit your busy lifestyle, with real-time tracking.",
      buttonText: "Book Now",
      buttonLink: "/contact",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      highlights: ["24-Hour Turnaround", "Online Scheduling", "SMS Notifications"],
    }
  ];

  return (
    <Box>
      {/* Hero Carousel Section */}
      <Box
        as="section"
        pt={{ base: 0, md: 0 }}
        pb={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
        bg="white"
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
        />
        <Box
          position="absolute"
          bottom="-15%"
          left="-10%"
          width="600px"
          height="600px"
          borderRadius="full"
          bg="accent.50"
          filter="blur(90px)"
          opacity="0.4"
          zIndex="0"
        />

        <Box position="relative" height={{ base: "auto", md: "700px" }} width="100%" zIndex="1">
          <Box 
            position="absolute" 
            top="50%" 
            left="20px" 
            zIndex="2" 
            transform="translateY(-50%)"
            display={{ base: 'none', md: 'block' }}
          >
            <IconButton
              aria-label="Previous slide"
              icon={<FaChevronLeft />}
              onClick={gotoPrev}
              colorScheme="brand"
              variant="solid"
              rounded="full"
              opacity="0.8"
              _hover={{ opacity: 1 }}
            />
          </Box>
          
          <Box 
            position="absolute" 
            top="50%" 
            right="20px" 
            zIndex="2" 
            transform="translateY(-50%)"
            display={{ base: 'none', md: 'block' }}
          >
            <IconButton
              aria-label="Next slide"
              icon={<FaChevronRight />}
              onClick={gotoNext}
              colorScheme="brand"
              variant="solid"
              rounded="full"
              opacity="0.8"
              _hover={{ opacity: 1 }}
            />
          </Box>
          
          <Slider ref={sliderRef} {...carouselSettings}>
            {carouselSlides.map((slide) => (
              <Box key={slide.id} height={{ base: "auto", md: "700px" }} position="relative">
                <Box
                  position="absolute"
                  inset="0"
                  bgImage={`url(${slide.image})`}
                  bgSize="cover"
                  bgPosition="center"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    bg: 'blackAlpha.600',
                    zIndex: 0
                  }}
                />
                
                <Container maxW="1200px" height="100%" position="relative" zIndex="1">
                  <Flex 
                    height="100%"
                    direction={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="space-between"
                    pt={{ base: 20, md: 0 }}
                  >
                    <Stack spacing={{ base: 6, md: 8 }} maxW="lg" color="white">
                      <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Badge 
                          colorScheme="brand" 
                          fontSize={{ base: "sm", md: "md" }} 
                          px={3} 
                          py={1} 
                          borderRadius="full"
                          textTransform="none"
                          fontWeight="medium"
                          mb={2}
                        >
                          {slide.subtitle}
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
                          lineHeight="1.1"
                          letterSpacing="tight"
                        >
                          {slide.title}
                        </Heading>
                      </MotionBox>

                      <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Text
                          fontSize={{ base: 'md', md: 'xl' }}
                          lineHeight="tall"
                        >
                          {slide.description}
                        </Text>
                      </MotionBox>

                      <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Stack spacing={4} direction={{ base: 'column', sm: 'row' }}>
                          <Button
                            as={RouterLink}
                            to={slide.buttonLink}
                            size={{ base: "md", md: "lg" }}
                            colorScheme="brand"
                            fontWeight="medium"
                            px={6}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                            transition="all 0.3s"
                          >
                            {slide.buttonText}
                          </Button>
                          <Button
                            as={RouterLink}
                            to="/contact"
                            size={{ base: "md", md: "lg" }}
                            variant="outline"
                            colorScheme="whiteAlpha"
                            fontWeight="medium"
                            px={6}
                            _hover={{ bg: 'whiteAlpha.200' }}
                            transition="all 0.3s"
                          >
                            Contact Us
                          </Button>
                        </Stack>
                      </MotionBox>

                      <Stack direction="row" spacing={4} pt={4}>
                        {slide.highlights.map((highlight, index) => (
                          <HStack key={index} spacing={1}>
                            <Icon as={FaCheck} color="brand.400" />
                            <Text fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
                              {highlight}
                            </Text>
                          </HStack>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Right side space for potential additional content */}
                  </Flex>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Container intentionally left empty - stats section removed */}
      </Box>

      {/* Features Section */}
      <Box 
        py={24} 
        bg="gray.50"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative Elements */}
        <Box
          position="absolute"
          top="5%"
          left="-10%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="brand.50"
          filter="blur(70px)"
          opacity="0.4"
          zIndex="0"
        />
        <Box
          position="absolute"
          bottom="10%"
          right="-5%"
          width="250px"
          height="250px"
          borderRadius="full"
          bg="accent.50"
          filter="blur(60px)"
          opacity="0.3"
          zIndex="0"
        />

        <Container maxW="1200px" position="relative" zIndex="1">
          <Stack spacing={16} direction="column">
            {/* Section Header */}
            <Stack spacing={5} align="center" textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Text
                  color="brand.500"
                  fontWeight="600"
                  fontSize="lg"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={2}
                >
                  Our Best Services
                </Text>
                <Heading 
                  fontSize={{ base: '3xl', md: '4xl' }}
                  color={useColorModeValue('gray.800', 'white')}
                  letterSpacing="tight"
                  mb={4}
                >
                  Premium Laundry Solutions <Text as="span" color="brand.500">For You</Text>
                </Heading>
              </MotionBox>
              <MotionText
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                color={useColorModeValue('gray.600', 'gray.400')}
                maxW="xl"
                mx="auto"
                fontSize="lg"
              >
                We combine expertise with cutting-edge technology to deliver exceptional laundry services 
                that respect both your garments and the environment.
              </MotionText>
            </Stack>

            {/* Services Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
              {/* Service Card 1 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Flex 
                  direction="column"
                  align="center"
                  bg={useColorModeValue('white', 'gray.800')}
                  rounded="xl"
                  borderWidth="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  p={6}
                  textAlign="center"
                  boxShadow="lg"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  transition="all 0.3s ease"
                  height="100%"
                >
                  <Circle 
                    size={20} 
                    bg="brand.50" 
                    color="brand.500"
                    mb={5}
                  >
                    <Icon as={FaTshirt} fontSize="2xl" />
                  </Circle>
                  <Heading size="md" mb={3}>Dry Cleaning</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Professional cleaning for your delicate fabrics and specialty garments
                  </Text>
                </Flex>
              </MotionBox>

              {/* Service Card 2 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Flex 
                  direction="column"
                  align="center"
                  bg={useColorModeValue('white', 'gray.800')}
                  rounded="xl"
                  borderWidth="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  p={6}
                  textAlign="center"
                  boxShadow="lg"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  transition="all 0.3s ease"
                  height="100%"
                >
                  <Circle 
                    size={20} 
                    bg="accent.50" 
                    color="accent.500"
                    mb={5}
                  >
                    <Icon as={FaHandsWash} fontSize="2xl" />
                  </Circle>
                  <Heading size="md" mb={3}>Wash & Iron</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Complete laundry service with premium detergents and expert ironing
                  </Text>
                </Flex>
              </MotionBox>

              {/* Service Card 3 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Flex 
                  direction="column"
                  align="center"
                  bg={useColorModeValue('white', 'gray.800')}
                  rounded="xl"
                  borderWidth="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  p={6}
                  textAlign="center"
                  boxShadow="lg"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  transition="all 0.3s ease"
                  height="100%"
                >
                  <Circle 
                    size={20} 
                    bg="green.50" 
                    color="green.500"
                    mb={5}
                  >
                    <Icon as={FaLeaf} fontSize="2xl" />
                  </Circle>
                  <Heading size="md" mb={3}>Eco Laundry</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Environmentally friendly cleaning with water-saving technology
                  </Text>
                </Flex>
              </MotionBox>

              {/* Service Card 4 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Flex 
                  direction="column"
                  align="center"
                  bg={useColorModeValue('white', 'gray.800')}
                  rounded="xl"
                  borderWidth="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  p={6}
                  textAlign="center"
                  boxShadow="lg"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  transition="all 0.3s ease"
                  height="100%"
                >
                  <Circle 
                    size={20} 
                    bg="purple.50" 
                    color="purple.500"
                    mb={5}
                  >
                    <Icon as={FaTruck} fontSize="2xl" />
                  </Circle>
                  <Heading size="md" mb={3}>Pickup & Delivery</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Convenient doorstep service with scheduled pickups and deliveries
                  </Text>
                </Flex>
              </MotionBox>
            </SimpleGrid>

            {/* View All Services Button */}
            <Box textAlign="center" mt={8}>
              <Button
                as={RouterLink}
                to="/services"
                size="lg"
                colorScheme="brand"
                rightIcon={<Icon as={FaArrowUp} transform="rotate(45deg)" />}
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                transition="all 0.3s"
              >
                View All Services
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Our Services Section removed as requested */}

      {/* Scroll to Top Button */}
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        size="lg"
        colorScheme="brand"
        position="fixed"
        bottom="4"
        right="4"
        borderRadius="full"
        boxShadow="lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'xl',
        }}
        transition="all 0.2s"
      />
    </Box>
  );
}
