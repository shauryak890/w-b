import React from 'react';
import { Box, Container, Heading, Text, Grid, SimpleGrid, Stack, HStack, Flex, Icon, Button, Link as ChakraLink } from '@chakra-ui/react';
import {
  PiDeviceMobileLight,
  PiWhatsappLogoFill,
  PiEnvelopeSimpleLight,
  PiTrashLight,
  PiArchiveLight,
} from 'react-icons/pi';
import PageHero from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, Bezel, fadeUp } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { WHATSAPP_BASE, EMAIL, PHONE_DISPLAY } from '../data/business';

const WHATSAPP_URL = `${WHATSAPP_BASE}?text=Please%20delete%20my%20Whites%20and%20Brights%20account`;
const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('Delete my account')}`;

const META_TITLE = 'Delete Account | Whites and Brights';
const META_DESCRIPTION = 'How to request deletion of your Whites and Brights app account and data.';

const OptionLabel = ({ children }) => (
  <Text fontSize="11px" letterSpacing="0.16em" textTransform="uppercase" color="brand.700" fontWeight={500}>
    {children}
  </Text>
);

export default function DeleteAccount() {
  usePageMeta(META_TITLE, META_DESCRIPTION, { full: true });

  return (
    <Box as="main">
      <PageHero
        eyebrow="Account & data"
        title={
          <>
            Delete your <Accent>Whites and Brights</Accent> account
          </>
        }
        description="You can request deletion of your Whites and Brights account and its associated data at any time."
      />

      <Box as="section" bg="gray.50" pb={{ base: 20, md: 28 }}>
        <Container>
          <StaggerGroup stagger={0.1}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {/* Option 1 */}
              <MotionBox variants={fadeUp} h="100%">
                <Bezel h="100%" inner={{ p: { base: 7, md: 10 } }}>
                  <Flex justify="space-between" align="flex-start">
                    <OptionLabel>Option 1</OptionLabel>
                    <Icon as={PiDeviceMobileLight} boxSize={8} color="ink.900" />
                  </Flex>
                  <Heading as="h2" mt={4} fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">
                    Delete from the app
                  </Heading>
                  <Stack as="ol" spacing={0} mt={8} listStyleType="none">
                    {[
                      'Open the Whites and Brights app',
                      <>Go to <Text as="strong" fontWeight={600}>Profile → Delete Account</Text></>,
                      <>Type <Text as="strong" fontWeight={600}>DELETE</Text> and confirm</>,
                    ].map((step, i) => (
                      <HStack as="li" key={i} spacing={4} py={4} borderTop="1px solid" borderColor="gray.100" align="flex-start">
                        <Flex w={7} h={7} borderRadius="full" bg="ink.900" color="white" fontSize="sm" align="center" justify="center" flexShrink={0}>
                          {i + 1}
                        </Flex>
                        <Text color="gray.700" fontSize={{ base: 'md', md: 'lg' }}>{step}</Text>
                      </HStack>
                    ))}
                  </Stack>
                  <Text mt={4} color="gray.600">Your account is deleted immediately.</Text>
                </Bezel>
              </MotionBox>

              {/* Option 2 */}
              <MotionBox variants={fadeUp} h="100%">
                <Bezel h="100%" inner={{ p: { base: 7, md: 10 } }}>
                  <Flex justify="space-between" align="flex-start">
                    <OptionLabel>Option 2</OptionLabel>
                    <Icon as={PiWhatsappLogoFill} boxSize={8} color="#25D366" />
                  </Flex>
                  <Heading as="h2" mt={4} fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">
                    Request deletion without the app
                  </Heading>
                  <Text mt={6} color="gray.700" fontSize={{ base: 'md', md: 'lg' }}>
                    If you've uninstalled the app, message us from your registered phone number:
                  </Text>
                  <Button
                    as="a"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    mt={6}
                    h={14}
                    px={7}
                    w={{ base: '100%', sm: 'auto' }}
                    bg="#25D366"
                    color="white"
                    _hover={{ bg: '#1EBE5A' }}
                    leftIcon={<Icon as={PiWhatsappLogoFill} boxSize={5} />}
                  >
                    Request via WhatsApp
                  </Button>
                  <HStack mt={6} spacing={3} align="flex-start" color="gray.700">
                    <Icon as={PiEnvelopeSimpleLight} boxSize={5} mt={0.5} flexShrink={0} />
                    <Text>
                      Or email{' '}
                      <ChakraLink href={EMAIL_URL} color="ink.900" fontWeight={600} borderBottom="1px solid" wordBreak="break-word">
                        {EMAIL}
                      </ChakraLink>{' '}
                      with the subject "Delete my account"
                    </Text>
                  </HStack>
                  <Text mt={4} color="gray.600">We'll verify your request and delete your account within 30 days.</Text>
                </Bezel>
              </MotionBox>
            </SimpleGrid>
          </StaggerGroup>

          {/* Data */}
          <Reveal mt={{ base: 16, md: 24 }}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} borderTop="1px solid" borderColor="gray.200">
              <Box py={{ base: 8, md: 10 }} pr={{ md: 10 }} borderBottom={{ base: '1px solid', md: 'none' }} borderColor="gray.200">
                <HStack spacing={3}>
                  <Icon as={PiTrashLight} boxSize={6} color="ink.900" />
                  <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">Data that is deleted</Heading>
                </HStack>
                <Text mt={4} color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>
                  Name, phone number, saved addresses, location data, and account profile.
                </Text>
              </Box>
              <Box py={{ base: 8, md: 10 }} pl={{ md: 10 }} borderLeft={{ md: '1px solid' }} borderColor="gray.200">
                <HStack spacing={3}>
                  <Icon as={PiArchiveLight} boxSize={6} color="ink.900" />
                  <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">Data that is kept</Heading>
                </HStack>
                <Text mt={4} color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>
                  Order and payment records (invoice number, amount, date) are kept for up to 6 years as required by Indian tax and GST laws, then permanently deleted. This data is not used for marketing.
                </Text>
              </Box>
            </Grid>
          </Reveal>

          <Reveal mt={{ base: 10, md: 14 }}>
            <Box p={{ base: 7, md: 10 }} borderRadius="28px" bg="white" border="1px solid" borderColor="gray.200">
              <Heading as="h2" fontSize={{ base: '2xl', md: '28px' }} fontWeight={500} color="ink.900">Questions?</Heading>
              <Text mt={3} color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>
                Contact us at{' '}
                <ChakraLink href={`mailto:${EMAIL}`} color="ink.900" fontWeight={600} borderBottom="1px solid" wordBreak="break-word">
                  {EMAIL}
                </ChakraLink>{' '}
                or on WhatsApp at{' '}
                <ChakraLink href={WHATSAPP_BASE} isExternal color="ink.900" fontWeight={600} borderBottom="1px solid" whiteSpace="nowrap">
                  {PHONE_DISPLAY}
                </ChakraLink>
                .
              </Text>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
