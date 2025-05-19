import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const Service = ({ title, description, image, features }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      transform="auto"
      _hover={{ translateY: -2 }}
      transition="transform 0.2s"
    >
      <Box h={'200px'} overflow={'hidden'} borderTopRadius="lg">
        <Image
          src={image || 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Box p={6}>
        <Heading fontSize={'2xl'} fontFamily={'body'} mb={4} color="brand.600">
          {title}
        </Heading>
        <Text color={'gray.500'} mb={4}>
          {description}
        </Text>
        <Stack spacing={3}>
          {features.map((feature, index) => (
            <Flex key={index} align="center">
              <Icon as={FaCheck} color="green.500" mr={2} />
              <Text fontSize="sm">{feature}</Text>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default function Services() {
  return (
    <Box pt={20} bg={'gray.50'}>
      <Container maxW={'7xl'} py={16}>
        <Heading
          textAlign="center"
          fontSize={{ base: '3xl', md: '4xl' }}
          mb={3}
        >
          Our Premium Laundry Services
        </Heading>
        <Text
          textAlign="center"
          fontSize="xl"
          maxW="3xl"
          mx="auto"
          mb={16}
          color="gray.600"
        >
          At Whites & Brights, we offer a comprehensive range of premium laundry services tailored to meet your specific needs.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Service
            title="Wash & Fold"
            description="Our standard wash and fold service gives your clothes the premium treatment they deserve."
            image="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            image="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            features={[
              "Expert handling of delicate fabrics",
              "Stain treatment specialists",
              "Garment inspection & button check",
              "Pressed and hung with care",
              "Eco-friendly solvents"
            ]}
          />
          
          <Service
            title="Bedding & Linens"
            description="Keep your home linens fresh, clean and hygienic with our specialized linen cleaning service."
            image="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            features={[
              "All bedding sizes accommodated",
              "Duvet covers & inserts",
              "Table linens & napkins",
              "Allergen removal treatment",
              "Perfectly pressed & folded"
            ]}
          />
          
          <Service
            title="Business Attire"
            description="Professional cleaning and pressing for your work wardrobe, ensuring you always look your best."
            image="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            features={[
              "Suits, shirts & blouses",
              "Hand-finished details",
              "Starch options available",
              "Minor repairs included",
              "Hung for wrinkle-free delivery"
            ]}
          />
          
          <Service
            title="Specialty Items"
            description="Expert care for your unique and specialty items that require custom attention."
            image="https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
            features={[
              "Wedding dresses & formal wear",
              "Leather & suede items",
              "Handmade & designer pieces",
              "Vintage & heirloom garments",
              "Custom cleaning methods"
            ]}
          />
          
          <Service
            title="Commercial Services"
            description="Tailored solutions for businesses requiring regular, professional laundry services."
            image="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            features={[
              "Restaurants & hospitality",
              "Salons & spas",
              "Corporate office needs",
              "Custom billing options",
              "Delivery & pickup service"
            ]}
          />
        </SimpleGrid>
      </Container>
      
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
