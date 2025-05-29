import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaTshirt, FaSnowflake, FaHome, FaBolt, FaCalendarAlt } from 'react-icons/fa';

const NavLink = ({ children, to, onClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (onClick) onClick(); // For mobile menu closing
  };
  
  return (
    <RouterLink to={to} onClick={scrollToTop}>
      <Button 
        variant="ghost" 
        p={2} 
        position="relative"
        overflow="hidden"
        _hover={{
          color: 'brand.500',
          bg: 'brand.50',
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: '2px',
          bottom: '0',
          left: '0',
          bg: 'brand.500',
          transformOrigin: 'bottom right',
          transition: 'transform 0.3s ease-out'
        }}
      >
        {children}
      </Button>
    </RouterLink>
  );
};

const ServiceMenuItem = ({ icon, title, description, to }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <RouterLink to={to} onClick={scrollToTop}>
      <MenuItem py={3} px={4} _hover={{ bg: 'brand.50' }} transition="all 0.2s">
        <Flex align="center">
          <Icon as={icon} boxSize={5} color="brand.500" mr={3} />
          <Box>
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize="sm" color="gray.600">{description}</Text>
          </Box>
        </Flex>
      </MenuItem>
    </RouterLink>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box 
      bg={bgColor} 
      px={4} 
      boxShadow="sm" 
      position="fixed"
      width="100%"
      zIndex="999"
      borderBottom="1px"
      borderColor={borderColor}
      transition="all 0.3s ease"
    >
      <Container maxW="1200px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ bg: 'brand.50' }}
          />

          <HStack spacing={8} alignItems="center">
            <RouterLink to="/">
              <Flex 
                align="center" 
                _hover={{ color: 'brand.600' }}
                transition="color 0.2s ease"
              >
                <Flex
                  align="center"
                  justify="center"
                  bgGradient="linear(to-r, brand.500, brand.600)"
                  color="white"
                  fontWeight="bold"
                  fontSize={{ base: "18px", md: "20px" }}
                  h={{ base: "36px", md: "44px" }}
                  w={{ base: "36px", md: "44px" }}
                  borderRadius="md"
                  mr="2"
                  px={2}
                  boxShadow="sm"
                  _hover={{ transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                >
                  W&B
                </Flex>
                <Text 
                  ml="2" 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="brand.500"
                >
                  Whites & Brights
                </Text>
              </Flex>
            </RouterLink>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/">Home</NavLink>
              
              <NavLink to="/franchise">Franchise</NavLink>
              
              <Menu autoSelect={false} isLazy>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  p={2}
                  _hover={{
                    color: 'brand.500',
                    bg: 'brand.50'
                  }}
                >
                  Services
                </MenuButton>
                <MenuList 
                  minW="300px" 
                  boxShadow="lg" 
                  p={2} 
                  border="1px" 
                  borderColor={borderColor}
                  bg={bgColor}
                >
                  <ServiceMenuItem 
                    icon={FaTshirt} 
                    title="Laundry by KG" 
                    description="Pay only for what you need cleaned" 
                    to="/services?tab=1" 
                  />
                  <Divider my={2} />
                  <ServiceMenuItem 
                    icon={FaSnowflake} 
                    title="Dry Cleaning" 
                    description="Professional care for delicate fabrics" 
                    to="/services?tab=2" 
                  />
                  <Divider my={2} />
                  <ServiceMenuItem 
                    icon={FaHome} 
                    title="Household Items" 
                    description="From curtains to comforters" 
                    to="/services?tab=3" 
                  />
                  <Divider my={2} />
                  <ServiceMenuItem 
                    icon={FaBolt} 
                    title="Express Delivery" 
                    description="Quick turnaround when you need it most" 
                    to="/services?tab=4" 
                  />
                  <Divider my={2} />
                  <ServiceMenuItem 
                    icon={FaCalendarAlt} 
                    title="Subscription Plans" 
                    description="Regular service at discounted rates" 
                    to="/services" 
                  />
                </MenuList>
              </Menu>
              
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </HStack>
          </HStack>

          <Button
            display={{ base: 'none', md: 'flex' }}
            size="sm"
            colorScheme="brand"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            transition="all 0.2s"
            as={RouterLink}
            to="/contact"
          >
            Book Now
          </Button>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <NavLink to="/" onClick={onClose}>Home</NavLink>
              <NavLink to="/franchise" onClick={onClose}>Franchise</NavLink>
              <NavLink to="/services" onClick={onClose}>Services</NavLink>
              <Stack pl={4} spacing={2} mt={1} mb={1}>
                <NavLink to="/services?tab=1" onClick={onClose}>Laundry by KG</NavLink>
                <NavLink to="/services?tab=2" onClick={onClose}>Dry Cleaning</NavLink>
                <NavLink to="/services?tab=3" onClick={onClose}>Household Items</NavLink>
                <NavLink to="/services?tab=4" onClick={onClose}>Express Delivery</NavLink>
                <NavLink to="/services" onClick={onClose}>Subscription Plans</NavLink>
              </Stack>
              <NavLink to="/about" onClick={onClose}>About</NavLink>
              <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
              <Button 
                size="sm" 
                colorScheme="brand" 
                w="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                transition="all 0.2s"
                as={RouterLink}
                to="/contact"
              >
                Book Now
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
