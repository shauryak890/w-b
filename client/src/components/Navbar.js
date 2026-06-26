import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Divider,
  Collapse,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  FaTshirt,
  FaSnowflake,
  FaHome,
  FaBolt,
  FaCalendarAlt,
  FaArrowRight,
  FaSignInAlt,
  FaDownload,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Direct APK download for the Whites & Brights Android app
const APK_URL = 'https://expo.dev/artifacts/eas/jtCGCCG9waug_EtK7A97bdJORvN2lDZijkaAAB1HkiA.apk';

const MotionBox = motion(Box);

const NavLink = ({ children, to, isActive, onClick }) => (
  <RouterLink to={to} onClick={onClick}>
    <Button
      variant="ghost"
      px={3}
      h={10}
      fontSize="sm"
      fontWeight={isActive ? 600 : 500}
      color={isActive ? 'brand.600' : 'gray.700'}
      borderRadius="full"
      bg={isActive ? 'brand.50' : 'transparent'}
      transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{ color: 'brand.600', bg: 'brand.50', transform: 'translateY(-1px)' }}
      _active={{ transform: 'translateY(0)' }}
    >
      {children}
    </Button>
  </RouterLink>
);

const ServiceMenuItem = ({ icon, title, description, to, onClick }) => (
  <RouterLink to={to} onClick={onClick}>
    <MenuItem py={3} px={3} borderRadius="xl" _hover={{ bg: 'brand.50' }} transition="all 0.2s">
      <Flex align="center">
        <Flex
          align="center"
          justify="center"
          w={10}
          h={10}
          borderRadius="lg"
          bg="brand.50"
          color="brand.500"
          mr={3}
          flexShrink={0}
        >
          <Icon as={icon} boxSize={5} />
        </Flex>
        <Box>
          <Text fontWeight={600} fontSize="sm" color="gray.800">{title}</Text>
          <Text fontSize="xs" color="gray.500">{description}</Text>
        </Box>
      </Flex>
    </MenuItem>
  </RouterLink>
);

const services = [
  { icon: FaTshirt, title: 'Laundry by KG', description: 'Pay only for what you need cleaned', to: '/services?tab=1' },
  { icon: FaSnowflake, title: 'Dry Cleaning', description: 'Professional care for delicate fabrics', to: '/services?tab=2' },
  { icon: FaTshirt, title: 'Steam Ironing', description: 'Professional pressing for all garments', to: '/services?tab=3' },
  { icon: FaHome, title: 'Household Items', description: 'From curtains to comforters', to: '/services?tab=4' },
  { icon: FaBolt, title: 'Express Delivery', description: 'Quick turnaround when you need it most', to: '/services?tab=5' },
  { icon: FaCalendarAlt, title: 'Subscription Plans', description: 'Regular service at discounted rates', to: '/services?tab=6' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) => pathname === to;

  return (
    <MotionBox
      as="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      bg={scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.72)'}
      backdropFilter="blur(14px) saturate(180%)"
      borderBottom="1px solid"
      borderColor={scrolled ? 'gray.100' : 'transparent'}
      boxShadow={scrolled ? 'soft' : 'none'}
      sx={{ transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
    >
      <Container maxW="1200px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ bg: 'brand.50' }}
          />

          <HStack spacing={{ md: 4, lg: 8 }} alignItems="center">
            <RouterLink to="/">
              <Flex align="center" role="group" flexShrink={0}>
                <Flex
                  align="center"
                  justify="center"
                  bgGradient="linear(135deg, brand.400, accent.500)"
                  color="white"
                  fontWeight={800}
                  fontSize={{ base: '15px', md: '17px' }}
                  h={{ base: '40px', md: '44px' }}
                  w={{ base: '40px', md: '44px' }}
                  borderRadius="xl"
                  mr={3}
                  boxShadow="glow"
                  letterSpacing="-0.02em"
                  transition="all 0.25s"
                  _groupHover={{ transform: 'rotate(-6deg) scale(1.05)' }}
                  flexShrink={0}
                >
                  W&B
                </Flex>
                <Box lineHeight="1.15" whiteSpace="nowrap">
                  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={800} color="gray.800" letterSpacing="-0.02em">
                    Whites &amp; Brights
                  </Text>
                  <Text fontSize="10px" fontWeight={600} color="brand.500" letterSpacing="0.16em" textTransform="uppercase">
                    Premium Laundry
                  </Text>
                </Box>
              </Flex>
            </RouterLink>

            <HStack as="nav" spacing={1} display={{ base: 'none', lg: 'flex' }}>
              <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
              <NavLink to="/franchise" isActive={isActive('/franchise')}>Franchise</NavLink>

              <Menu autoSelect={false} isLazy>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  px={3}
                  h={10}
                  fontSize="sm"
                  fontWeight={pathname === '/services' ? 600 : 500}
                  color={pathname === '/services' ? 'brand.600' : 'gray.700'}
                  borderRadius="full"
                  bg={pathname === '/services' ? 'brand.50' : 'transparent'}
                  transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{ color: 'brand.600', bg: 'brand.50', transform: 'translateY(-1px)' }}
                  _active={{ bg: 'brand.50', transform: 'translateY(0)' }}
                >
                  Services
                </MenuButton>
                <MenuList
                  minW="340px"
                  p={2}
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="2xl"
                  boxShadow="floating"
                  bg="rgba(255,255,255,0.96)"
                  backdropFilter="blur(12px)"
                >
                  {services.map((s, i) => (
                    <ServiceMenuItem key={i} {...s} />
                  ))}
                  <Divider my={2} />
                  <RouterLink to="/services">
                    <MenuItem py={2.5} px={3} borderRadius="xl" color="brand.600" fontWeight={600} fontSize="sm" _hover={{ bg: 'brand.50' }}>
                      View all services <Icon as={FaArrowRight} ml={2} boxSize={3} />
                    </MenuItem>
                  </RouterLink>
                </MenuList>
              </Menu>

              <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
              <NavLink to="/csr" isActive={isActive('/csr')}>CSR</NavLink>
              <NavLink to="/associate" isActive={isActive('/associate')}>Associate</NavLink>
              <NavLink to="/careers" isActive={isActive('/careers')}>Careers</NavLink>
              <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
            </HStack>
          </HStack>

          <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
            <Tooltip label="Staff login" hasArrow openDelay={300}>
              <IconButton
                as="a"
                href="https://dashboard.whitesandbrights.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Staff login"
                size="sm"
                h={10}
                w={10}
                variant="outline"
                colorScheme="brand"
                color="brand.700"
                borderColor="brand.200"
                icon={<Icon as={FaSignInAlt} boxSize={4} />}
                _hover={{ bg: 'brand.50', borderColor: 'brand.300', transform: 'translateY(-2px)' }}
              />
            </Tooltip>
            <Button
              as="a"
              href={APK_URL}
              rel="noopener"
              size="sm"
              h={10}
              px={4}
              colorScheme="brand"
              variant="solid"
              leftIcon={<Icon as={FaDownload} boxSize={3.5} />}
            >
              Get App
            </Button>
            <Button
              size="sm"
              h={10}
              px={4}
              variant="gradient"
              rightIcon={<Icon as={FaArrowRight} boxSize={3} />}
              as={RouterLink}
              to="/contact"
            >
              Book Now
            </Button>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as="nav" spacing={1}>
              <NavLink to="/" isActive={isActive('/')} onClick={onClose}>Home</NavLink>
              <NavLink to="/franchise" isActive={isActive('/franchise')} onClick={onClose}>Franchise</NavLink>
              <NavLink to="/services" isActive={isActive('/services')} onClick={onClose}>Services</NavLink>
              <Stack pl={4} spacing={0} borderLeft="2px solid" borderColor="brand.100" ml={2}>
                {services.map((s, i) => (
                  <NavLink key={i} to={s.to} onClick={onClose}>{s.title}</NavLink>
                ))}
              </Stack>
              <NavLink to="/about" isActive={isActive('/about')} onClick={onClose}>About</NavLink>
              <NavLink to="/csr" isActive={isActive('/csr')} onClick={onClose}>CSR</NavLink>
              <NavLink to="/associate" isActive={isActive('/associate')} onClick={onClose}>Associate</NavLink>
              <NavLink to="/careers" isActive={isActive('/careers')} onClick={onClose}>Careers</NavLink>
              <NavLink to="/contact" isActive={isActive('/contact')} onClick={onClose}>Contact</NavLink>
              <Button mt={3} as="a" href={APK_URL} rel="noopener" colorScheme="brand" variant="solid" w="full" leftIcon={<Icon as={FaDownload} boxSize={3.5} />}>
                Download App
              </Button>
              <Button mt={2} variant="gradient" w="full" as={RouterLink} to="/contact" onClick={onClose} rightIcon={<Icon as={FaArrowRight} boxSize={3} />}>
                Book Now
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </MotionBox>
  );
}
