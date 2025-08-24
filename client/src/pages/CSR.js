import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion.div;
const MotionHeading = motion.h2;
const MotionText = motion.p;

export default function CSR() {
  return (
    <Box pt={20}>
      {/* Hero Section */}
      <Box bg={'brand.500'} color="white" py={16}>
        <Container maxW="7xl">
          <MotionHeading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            textAlign="center"
            mb={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Corporate Social Responsibility
          </MotionHeading>
          <MotionText
            fontSize="xl"
            textAlign="center"
            maxW="4xl"
            mx="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our initiative "Do Roti" aims to provide fresh, nutritious meals to homeless and hungry people. We believe a better community starts with dignity and a warm meal.
          </MotionText>
        </Container>
      </Box>

      {/* Initiative Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Stack spacing={5}>
                <Heading size="lg" color="gray.800">Introducing "Do Roti"</Heading>
                <Text fontSize="lg" color="gray.600">
                  "Do Roti" is our commitment to serving the less fortunate by organizing regular food distribution drives. With the support of our associates and community partners, we ensure food safety, hygiene, and compassion at every step.
                </Text>
                <Text fontSize="md" color="gray.600">
                  We run weekly drives, and during emergencies or extreme weather, we scale up distribution to reach more people in need.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2}>
                  <Button as={RouterLink} to="/contact" colorScheme="brand" variant="solid">
                    Contact Us
                  </Button>
                  <Button as={RouterLink} to="/associate" colorScheme="brand" variant="outline">
                    Become an Associate
                  </Button>
                </Stack>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.pexels.com/photos/699520/pexels-photo-699520.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                alt="Serving food with care"
                rounded="xl"
                shadow="xl"
                objectFit="cover"
                fallbackSrc="https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      

      {/* Callout */}
      <Box py={12} bg="brand.50">
        <Container maxW="7xl">
          <Stack spacing={4} textAlign="center" align="center">
            <Heading size="md" color="brand.700">
              Support "Do Roti"
            </Heading>
            <Text color="gray.600" maxW="3xl">
              We welcome responsible partners and volunteers to expand the reach of this program. Get in touch to know how you can contribute or collaborate.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button as={RouterLink} to="/contact" colorScheme="brand">Get in Touch</Button>
              <Button as={RouterLink} to="/associate" colorScheme="brand" variant="outline">Partner with Us</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
