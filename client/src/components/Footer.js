import React from 'react';
import { Box, Container, Grid, Text, Link as ChakraLink, IconButton, HStack, Flex, Icon, Heading, Stack, Button } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { PiFacebookLogo, PiInstagramLogo, PiArrowUpBold, PiArrowUpRight, PiPhoneLight, PiEnvelopeSimpleLight } from 'react-icons/pi';
import { ArrowButton, Accent, Reveal } from './ui';
import { EASE } from '../theme';
import { outlets, PHONE_DISPLAY, PHONE_TEL } from '../data/business';

const FooterLink = ({ to, children }) => (
  <ChakraLink
    as={RouterLink}
    to={to}
    fontSize="sm"
    color="whiteAlpha.700"
    transition={`color 0.4s ${EASE}`}
    _hover={{ color: 'white' }}
  >
    {children}
  </ChakraLink>
);

const ColumnTitle = ({ children }) => (
  <Text fontSize="11px" fontWeight={500} letterSpacing="0.18em" textTransform="uppercase" color="whiteAlpha.500" mb={5}>
    {children}
  </Text>
);

const companyLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'CSR — Do Roti', to: '/csr' },
  { label: 'Become an associate', to: '/associate' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Laundry by KG', to: '/services?tab=1' },
  { label: 'Dry cleaning', to: '/services?tab=2' },
  { label: 'Steam ironing', to: '/services?tab=3' },
  { label: 'Household items', to: '/services?tab=4' },
  { label: 'Express delivery', to: '/services?tab=5' },
  { label: 'Subscription plans', to: '/services?tab=6' },
];

const socialStyles = {
  variant: 'ghost',
  borderRadius: 'full',
  border: '1px solid',
  borderColor: 'whiteAlpha.200',
  color: 'white',
  _hover: { bg: 'white', color: 'ink.900' },
};

function Footer() {
  const { pathname } = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box as="footer" position="relative" bg="ink.900" color="whiteAlpha.800" overflow="hidden">
      {/* CTA band — Home already ends on its own booking CTA */}
      {!['/', '/franchise'].includes(pathname) && (
        <Container pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 20 }} borderBottom="1px solid" borderColor="whiteAlpha.100">
          <Reveal>
            <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'flex-end' }} justify="space-between" gap={8}>
              <Heading color="white" fontSize={{ base: '40px', md: '64px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1">
                Fresh clothes,
                <br />
                <Accent from="brand.200">zero effort.</Accent>
              </Heading>
              <ArrowButton as={RouterLink} to="/contact" variant="light" flexShrink={0}>
                Book a free pickup
              </ArrowButton>
            </Flex>
          </Reveal>
        </Container>
      )}

      <Container pt={{ base: 16, md: 20 }} pb={8} position="relative">
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: '1.4fr 1fr 1fr 1.4fr' }} gap={{ base: 12, lg: 10 }}>
          {/* Brand */}
          <Stack spacing={6} gridColumn={{ sm: 'span 2', lg: 'auto' }}>
            <Text fontSize="sm" color="whiteAlpha.700" maxW="xs" lineHeight="1.7">
              Laundry, dry cleaning and shoe care for Patna — with free doorstep pickup and a 48-hour turnaround.
            </Text>
            <Stack spacing={2.5} fontSize="sm">
              <ChakraLink href={`tel:${PHONE_TEL}`} display="inline-flex" alignItems="center" gap={2.5} color="white" _hover={{ color: 'brand.200' }}>
                <Icon as={PiPhoneLight} boxSize="18px" /> {PHONE_DISPLAY}
              </ChakraLink>
              <ChakraLink href="mailto:info@whitesandbrights.com" display="inline-flex" alignItems="center" gap={2.5} color="white" _hover={{ color: 'brand.200' }}>
                <Icon as={PiEnvelopeSimpleLight} boxSize="18px" /> info@whitesandbrights.com
              </ChakraLink>
            </Stack>
            <HStack spacing={2}>
              <IconButton as="a" href="https://www.facebook.com/share/19RzE26f5Q/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" icon={<Icon as={PiFacebookLogo} boxSize={5} />} {...socialStyles} />
              <IconButton as="a" href="https://www.instagram.com/whitesandbrights.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" icon={<Icon as={PiInstagramLogo} boxSize={5} />} {...socialStyles} />
            </HStack>
          </Stack>

          <Box>
            <ColumnTitle>Company</ColumnTitle>
            <Stack spacing={3}>
              {companyLinks.map((l) => (
                <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <ColumnTitle>Services</ColumnTitle>
            <Stack spacing={3}>
              {serviceLinks.map((l) => (
                <FooterLink key={l.label} to={l.to}>{l.label}</FooterLink>
              ))}
            </Stack>
          </Box>

          <Box gridColumn={{ sm: 'span 2', lg: 'auto' }}>
            <ColumnTitle>Outlets</ColumnTitle>
            <Stack spacing={4}>
              {outlets.map((o) => (
                <ChakraLink key={o.id} href={o.mapUrl} isExternal role="group" display="block">
                  <Flex align="center" gap={1.5} color="white" fontSize="sm" fontWeight={500}>
                    {o.name}
                    <Icon as={PiArrowUpRight} boxSize={3.5} color="whiteAlpha.500" transition={`transform 0.4s ${EASE}`} _groupHover={{ transform: 'translate(2px,-2px)', color: 'brand.200' }} />
                  </Flex>
                  <Text fontSize="xs" color="whiteAlpha.600" mt={0.5}>Open till {o.closes}</Text>
                </ChakraLink>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Oversized wordmark */}
        <Text
          aria-hidden="true"
          mt={{ base: 16, md: 24 }}
          fontSize={{ base: '11vw', xl: '136px' }}
          fontWeight={600}
          letterSpacing="-0.06em"
          lineHeight="0.8"
          color="whiteAlpha.100"
          whiteSpace="nowrap"
          userSelect="none"
        >
          Whites <Box as="span" fontFamily="serif" fontStyle="italic" fontWeight={400}>&amp;</Box> Brights
        </Text>

        <Flex
          mt={10}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={4}
          pr={{ md: 16 }}
        >
          <Box fontSize="xs" color="whiteAlpha.500">
            <Text>&copy; {new Date().getFullYear()} WNB Cleantech Pvt Ltd · CIN U96010BR2025PTC077191</Text>
          </Box>
          <HStack spacing={5} fontSize="sm" flexWrap="wrap">
            <FooterLink to="/policies/terms-of-service">Terms</FooterLink>
            <FooterLink to="/policies/privacy-policy">Privacy</FooterLink>
            <FooterLink to="/delete-account">Delete account</FooterLink>
            <FooterLink to="/help-center">Help</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              color="whiteAlpha.800"
              fontWeight={400}
              px={0}
              _hover={{ color: 'white' }}
              rightIcon={<Icon as={PiArrowUpBold} boxSize={3} />}
            >
              Back to top
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
