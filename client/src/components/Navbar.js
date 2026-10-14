import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Tooltip,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  PiWashingMachineLight,
  PiCoatHangerLight,
  PiTShirtLight,
  PiHouseLineLight,
  PiLightningLight,
  PiCalendarCheckLight,
  PiCaretDownBold,
  PiSignInLight,
  PiGooglePlayLogoFill,
  PiWhatsappLogoFill,
  PiArrowUpRight,
} from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowButton } from './ui';
import { EASE } from '../theme';
import { PLAY_STORE_URL, WHATSAPP_URL } from '../data/business';

const MotionBox = motion(Box);
const SPRING = [0.32, 0.72, 0, 1];

const services = [
  { icon: PiWashingMachineLight, title: 'Laundry by KG', description: 'Wash & fold, wash & iron', to: '/services?tab=1' },
  { icon: PiCoatHangerLight, title: 'Dry Cleaning', description: 'Suits, sarees, delicates', to: '/services?tab=2' },
  { icon: PiTShirtLight, title: 'Steam Ironing', description: 'Crisp pressing, per piece', to: '/services?tab=3' },
  { icon: PiHouseLineLight, title: 'Household Items', description: 'Curtains to comforters', to: '/services?tab=4' },
  { icon: PiLightningLight, title: 'Express Delivery', description: 'Same-day when it matters', to: '/services?tab=5' },
  { icon: PiCalendarCheckLight, title: 'Subscription Plans', description: 'Monthly packs, lower rates', to: '/services?tab=6' },
];

const company = [
  { title: 'About us', to: '/about' },
  { title: 'CSR — Do Roti', to: '/csr' },
  { title: 'Become an associate', to: '/associate' },
  { title: 'Careers', to: '/careers' },
];

const linkStyles = (active) => ({
  px: 3.5,
  h: 9,
  fontSize: 'sm',
  fontWeight: 500,
  borderRadius: 'full',
  color: active ? 'ink.900' : 'gray.600',
  bg: active ? 'gray.100' : 'transparent',
  transition: `all 0.4s ${EASE}`,
  _hover: { color: 'ink.900', bg: 'gray.100' },
  _active: { bg: 'gray.100' },
});

const NavLink = ({ children, to, isActive }) => (
  <Button as={RouterLink} to={to} variant="ghost" {...linkStyles(isActive)}>
    {children}
  </Button>
);

const menuListStyles = {
  p: 2,
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '24px',
  boxShadow: 'floating',
  bg: 'white',
};

const Logo = () => (
  <Flex as={RouterLink} to="/" align="center" role="group" flexShrink={0} aria-label="Whites & Brights home">
    <Flex
      align="center"
      justify="center"
      bg="ink.900"
      color="white"
      fontWeight={700}
      fontSize="13px"
      h={10}
      w={10}
      borderRadius="14px"
      mr={2.5}
      letterSpacing="-0.04em"
      transition={`transform 0.5s ${EASE}`}
      _groupHover={{ transform: 'rotate(-8deg)' }}
      position="relative"
    >
      W
      <Box as="span" color="brand.400">&amp;</Box>B
    </Flex>
    <Box lineHeight="1.1" whiteSpace="nowrap">
      <Text fontSize="15px" fontWeight={600} color="ink.900" letterSpacing="-0.03em">
        Whites &amp; Brights
      </Text>
      <Text fontSize="11px" color="gray.500" letterSpacing="0.02em">
        Laundry · Patna
      </Text>
    </Box>
  </Flex>
);

/* Two lines that rotate into an X */
const MenuToggle = ({ isOpen, onClick }) => (
  <IconButton
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    onClick={onClick}
    variant="ghost"
    borderRadius="full"
    w="44px"
    h="44px"
    bg={isOpen ? 'ink.900' : 'gray.100'}
    _hover={{ bg: isOpen ? 'ink.700' : 'gray.200' }}
    icon={
      <Box position="relative" w="18px" h="12px">
        {[0, 1].map((i) => (
          <Box
            key={i}
            position="absolute"
            left={0}
            w="18px"
            h="1.5px"
            borderRadius="full"
            bg={isOpen ? 'white' : 'ink.900'}
            top={isOpen ? '5.25px' : i === 0 ? '0' : '10.5px'}
            transform={isOpen ? `rotate(${i === 0 ? 45 : -45}deg)` : 'none'}
            transition={`all 0.5s ${EASE}`}
          />
        ))}
      </Box>
    }
  />
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and lock page scroll while it is open
  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (to) => pathname === to;
  const companyActive = company.some((c) => pathname === c.to);

  return (
    <>
      <MotionBox
        as="header"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: SPRING }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        px={{ base: 3, md: 5 }}
        pt={{ base: 3, md: 4 }}
        pointerEvents="none"
      >
        <Flex
          maxW="1240px"
          mx="auto"
          h={{ base: 14, md: 16 }}
          pl={{ base: 2, md: 3 }}
          pr={2}
          align="center"
          justify="space-between"
          borderRadius="full"
          bg={scrolled || isOpen ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0.72)'}
          backdropFilter="blur(18px) saturate(180%)"
          border="1px solid"
          borderColor="rgba(255,255,255,0.6)"
          boxShadow={scrolled ? 'card' : 'soft'}
          pointerEvents="auto"
          sx={{ transition: `background 0.5s ${EASE}, box-shadow 0.5s ${EASE}` }}
        >
          <Logo />

          {/* Desktop links */}
          <HStack as="nav" spacing={0.5} display={{ base: 'none', lg: 'flex' }}>
            <NavLink to="/" isActive={isActive('/')}>Home</NavLink>

            <Menu autoSelect={false} isLazy placement="bottom">
              <MenuButton as={Button} variant="ghost" rightIcon={<Icon as={PiCaretDownBold} boxSize={2.5} />} {...linkStyles(pathname === '/services')}>
                Services
              </MenuButton>
              <MenuList minW="520px" {...menuListStyles}>
                <SimpleGrid columns={2} spacing={1}>
                  {services.map((s) => (
                    <MenuItem key={s.title} as={RouterLink} to={s.to} p={3} borderRadius="16px" _hover={{ bg: 'gray.50' }} _focus={{ bg: 'gray.50' }}>
                      <Flex align="center" gap={3}>
                        <Flex align="center" justify="center" w={10} h={10} borderRadius="12px" bg="gray.50" border="1px solid" borderColor="gray.100" color="ink.900" flexShrink={0}>
                          <Icon as={s.icon} boxSize={5} />
                        </Flex>
                        <Box>
                          <Text fontWeight={500} fontSize="sm" color="ink.900">{s.title}</Text>
                          <Text fontSize="xs" color="gray.500">{s.description}</Text>
                        </Box>
                      </Flex>
                    </MenuItem>
                  ))}
                </SimpleGrid>
                <MenuItem as={RouterLink} to="/services" mt={1} p={3} borderRadius="16px" bg="gray.50" fontSize="sm" fontWeight={500} color="ink.900" justifyContent="space-between" _hover={{ bg: 'gray.100' }}>
                  See all services &amp; prices
                  <Icon as={PiArrowUpRight} boxSize={4} />
                </MenuItem>
              </MenuList>
            </Menu>

            <NavLink to="/franchise" isActive={isActive('/franchise')}>Franchise</NavLink>

            <Menu autoSelect={false} isLazy placement="bottom">
              <MenuButton as={Button} variant="ghost" rightIcon={<Icon as={PiCaretDownBold} boxSize={2.5} />} {...linkStyles(companyActive)}>
                Company
              </MenuButton>
              <MenuList minW="240px" {...menuListStyles}>
                {company.map((c) => (
                  <MenuItem key={c.to} as={RouterLink} to={c.to} px={3} py={2.5} borderRadius="14px" fontSize="sm" color={isActive(c.to) ? 'ink.900' : 'gray.700'} fontWeight={isActive(c.to) ? 600 : 400} _hover={{ bg: 'gray.50' }} _focus={{ bg: 'gray.50' }}>
                    {c.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
          </HStack>

          {/* Desktop actions */}
          <HStack spacing={1.5} display={{ base: 'none', lg: 'flex' }}>
            <Tooltip label="Staff login" hasArrow openDelay={300}>
              <IconButton
                as="a"
                href="https://dashboard.whitesandbrights.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Staff login"
                variant="ghost"
                borderRadius="full"
                w={10}
                h={10}
                color="gray.600"
                _hover={{ bg: 'gray.100', color: 'ink.900' }}
                icon={<Icon as={PiSignInLight} boxSize={5} />}
              />
            </Tooltip>
            <Button
              as="a"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              h={10}
              px={3.5}
              fontSize="sm"
              color="ink.900"
              borderRadius="full"
              _hover={{ bg: 'gray.100' }}
              leftIcon={<Icon as={PiGooglePlayLogoFill} boxSize={4} />}
            >
              Get the app
            </Button>
            <ArrowButton as={RouterLink} to="/contact" h="44px" pl={5} pr="6px" fontSize="sm">
              Book a pickup
            </ArrowButton>
          </HStack>

          {/* Mobile actions */}
          <HStack spacing={2} display={{ base: 'flex', lg: 'none' }}>
            <Button as={RouterLink} to="/contact" variant="gradient" h="44px" px={4} fontSize="sm" display={{ base: 'none', sm: 'inline-flex' }}>
              Book pickup
            </Button>
            <MenuToggle isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
          </HStack>
        </Flex>
      </MotionBox>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            key="mobile-menu"
            position="fixed"
            inset={0}
            zIndex={999}
            bg="rgba(244,246,245,0.94)"
            backdropFilter="blur(24px)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: SPRING }}
            overflowY="auto"
            display={{ lg: 'none' }}
          >
            <Stack spacing={0} pt={28} pb={10} px={6} minH="100dvh">
              {[
                { title: 'Home', to: '/' },
                { title: 'Services & prices', to: '/services' },
                { title: 'Franchise', to: '/franchise' },
                ...company,
                { title: 'Contact', to: '/contact' },
              ].map((l, i) => (
                <MotionBox
                  key={l.to}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: SPRING, delay: 0.05 + i * 0.045 }}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                >
                  <Flex
                    as={RouterLink}
                    to={l.to}
                    py={3.5}
                    align="center"
                    justify="space-between"
                    fontSize="26px"
                    fontWeight={500}
                    letterSpacing="-0.03em"
                    color={isActive(l.to) ? 'brand.700' : 'ink.900'}
                  >
                    {l.title}
                    <Icon as={PiArrowUpRight} boxSize={5} color="gray.400" />
                  </Flex>
                </MotionBox>
              ))}

              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: SPRING, delay: 0.5 }}
                pt={8}
              >
                <Stack spacing={3}>
                  <ArrowButton as={RouterLink} to="/contact" w="full" justifyContent="space-between">
                    Book a pickup
                  </ArrowButton>
                  <HStack spacing={3}>
                    <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" flex={1} h={12} variant="outline" leftIcon={<Icon as={PiWhatsappLogoFill} boxSize={5} color="#25D366" />}>
                      WhatsApp
                    </Button>
                    <Button as="a" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" flex={1} h={12} variant="outline" leftIcon={<Icon as={PiGooglePlayLogoFill} boxSize={4} />}>
                      Get the app
                    </Button>
                  </HStack>
                </Stack>
              </MotionBox>
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}
