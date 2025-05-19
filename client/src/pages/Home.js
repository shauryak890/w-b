import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { FaWater, FaTshirt, FaSoap, FaClock, FaArrowUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

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
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, brand.500, accent.500)"
        color="white"
        py={{ base: 24, md: 32 }}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bg: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          bgSize: 'cover',
          bgPosition: 'center',
          opacity: 0.1,
          filter: 'blur(2px)',
        }}
      >
        <Container maxW="1200px">
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            gap={10}
          >
            <Stack spacing={6} maxW="lg">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="bold"
                  lineHeight="1.2"
                  bgGradient="linear(to-r, white, highlight.200)"
                  bgClip="text"
                >
                  Premium Laundry Service for Your Finest Garments
                </Heading>
              </MotionBox>
              <MotionText
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                fontSize="xl"
                opacity={0.9}
                maxW="xl"
              >
                Experience the difference with our expert care and attention to detail.
                Your clothes deserve the best treatment.
              </MotionText>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
              >
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                size="lg"
                colorScheme="accent"
                _hover={{ bg: 'accent.600' }}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                bg="whiteAlpha.300"
                _hover={{ bg: 'whiteAlpha.400' }}
              >
                Learn More
              </Button>
                </Stack>
              </MotionBox>
            </Stack>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              flex={1}
              display={{ base: 'none', lg: 'block' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
                alt="Modern Laundry Service"
                borderRadius="2xl"
                boxShadow="2xl"
                objectFit="cover"
                w="full"
                h="400px"
              />
            </MotionBox>
          </MotionFlex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box 
        py={24} 
        bg="gray.50"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          bgGradient: 'linear(to-r, transparent, brand.200, transparent)',
        }}
      >
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
                  fontSize={{ base: '3xl', md: '4xl' }}
                  bgGradient="linear(to-r, brand.500, accent.500)"
                  bgClip="text"
                >
                  Why Choose Whites & Brights?
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
                We combine expertise with cutting-edge technology to deliver exceptional laundry services.
              </MotionText>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              <Feature
                icon={FaWater}
                title="Expert Care"
                text="Specialized treatment for each fabric type"
              />
              <Feature
                icon={FaTshirt}
                title="Perfect Finish"
                text="Crisp, clean, and professionally pressed"
              />
              <Feature
                icon={FaSoap}
                title="Eco-Friendly"
                text="Using environmentally safe products"
              />
              <Feature
                icon={FaClock}
                title="Quick Service"
                text="24-hour turnaround available"
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

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
