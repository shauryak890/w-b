import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  Icon,
  Button,
  Link as ChakraLink,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { FaWhatsapp, FaEnvelope, FaMobileAlt, FaTrashAlt, FaArchive, FaQuestionCircle, FaUserSlash } from 'react-icons/fa';
import { MotionBox, Reveal, SectionBadge, fadeUp, StaggerGroup } from '../components/ui';

// Number used for WhatsApp across the site (see WhatsappButton.js)
const WHATSAPP_NUMBER = '918102733336';
const SUPPORT_EMAIL = 'info@whitesandbrights.com';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Please%20delete%20my%20Whites%20and%20Brights%20account`;
const EMAIL_URL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Delete my account')}`;

const META_TITLE = 'Delete Account | Whites and Brights';
const META_DESCRIPTION = 'How to request deletion of your Whites and Brights app account and data.';

// Swap the document title and meta description while this page is mounted
const usePageMeta = (title, description) => {
  useEffect(() => {
    const prevTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (created) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDescription = meta.getAttribute('content');

    document.title = title;
    meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) meta.remove();
      else meta.setAttribute('content', prevDescription);
    };
  }, [title, description]);
};

const Section = ({ icon, title, children }) => (
  <Reveal w="100%">
    <Box
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="soft"
      p={{ base: 5, md: 8 }}
    >
      <HStack spacing={3} mb={4} align="center">
        <Circle size={10} bg="brand.50" color="brand.500" flexShrink={0}>
          <Icon as={icon} boxSize={4} />
        </Circle>
        <Heading as="h2" size="md" color="gray.900">{title}</Heading>
      </HStack>
      <Box color="gray.700" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
        {children}
      </Box>
    </Box>
  </Reveal>
);

export default function DeleteAccount() {
  usePageMeta(META_TITLE, META_DESCRIPTION);

  return (
    <Box overflow="hidden">
      {/* Hero */}
      <Box
        position="relative"
        bgGradient="linear(130deg, brand.900 0%, brand.700 60%, brand.500 100%)"
        color="white"
        pt={{ base: 28, md: 36 }}
        pb={{ base: 14, md: 20 }}
        overflow="hidden"
      >
        <Box position="absolute" top="-20%" right="-5%" w="420px" h="420px" borderRadius="full" bg="whiteAlpha.100" />
        <Container maxW="3xl" position="relative">
          <StaggerGroup>
            <VStack spacing={5} textAlign="center">
              <MotionBox variants={fadeUp}>
                <SectionBadge bg="whiteAlpha.200" color="white" borderColor="whiteAlpha.400" icon={<Icon as={FaUserSlash} boxSize={3.5} />}>
                  Account & Data
                </SectionBadge>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Heading as="h1" fontSize={{ base: '32px', md: '52px' }} lineHeight="1.1" letterSpacing="-0.03em">
                  Delete your Whites and Brights account
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900">
                  You can request deletion of your Whites and Brights account and its associated data at any time.
                </Text>
              </MotionBox>
            </VStack>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Content */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="3xl">
          <VStack spacing={{ base: 5, md: 6 }} align="stretch">
            <Section icon={FaMobileAlt} title="Option 1 — Delete from the app">
              <OrderedList spacing={2} pl={1}>
                <ListItem>Open the Whites and Brights app</ListItem>
                <ListItem>Go to <Text as="strong">Profile → Delete Account</Text></ListItem>
                <ListItem>Type <Text as="strong">DELETE</Text> and confirm</ListItem>
              </OrderedList>
              <Text mt={4}>Your account is deleted immediately.</Text>
            </Section>

            <Section icon={FaWhatsapp} title="Option 2 — Request deletion without the app">
              <Text>If you've uninstalled the app, message us from your registered phone number:</Text>
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                mt={5}
                size="lg"
                h={14}
                px={8}
                w={{ base: '100%', sm: 'auto' }}
                bg="#25D366"
                color="white"
                _hover={{ bg: '#1EBE5A', transform: 'translateY(-2px)' }}
                _active={{ bg: '#19A84F' }}
                leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
              >
                Request via WhatsApp
              </Button>
              <HStack mt={5} spacing={3} align="flex-start">
                <Icon as={FaEnvelope} color="brand.500" mt={1.5} flexShrink={0} />
                <Text>
                  Or email{' '}
                  <ChakraLink href={EMAIL_URL} color="brand.600" fontWeight={600} wordBreak="break-word">
                    {SUPPORT_EMAIL}
                  </ChakraLink>{' '}
                  with the subject "Delete my account"
                </Text>
              </HStack>
              <Text mt={4}>We'll verify your request and delete your account within 30 days.</Text>
            </Section>

            <Section icon={FaTrashAlt} title="Data that is deleted">
              <Text>Name, phone number, saved addresses, location data, and account profile.</Text>
            </Section>

            <Section icon={FaArchive} title="Data that is kept">
              <Text>
                Order and payment records (invoice number, amount, date) are kept for up to 6 years as required by
                Indian tax and GST laws, then permanently deleted. This data is not used for marketing.
              </Text>
            </Section>

            <Section icon={FaQuestionCircle} title="Questions?">
              <Text>
                Contact us at{' '}
                <ChakraLink href={`mailto:${SUPPORT_EMAIL}`} color="brand.600" fontWeight={600} wordBreak="break-word">
                  {SUPPORT_EMAIL}
                </ChakraLink>{' '}
                or on WhatsApp at{' '}
                <ChakraLink href={`https://wa.me/${WHATSAPP_NUMBER}`} isExternal color="brand.600" fontWeight={600} whiteSpace="nowrap">
                  +91 81027 33336
                </ChakraLink>
                .
              </Text>
            </Section>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
