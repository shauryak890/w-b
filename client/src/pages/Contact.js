import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Icon,
  Stack,
  HStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Alert,
  AlertIcon,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import {
  PiWhatsappLogoFill,
  PiPhoneLight,
  PiEnvelopeSimpleLight,
  PiArrowUpRight,
  PiStarFill,
  PiClockLight,
  PiCheckCircleFill,
  PiPaperPlaneTiltLight,
} from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Reveal, StaggerGroup, MotionBox, Accent, ArrowButton, Bezel, inputStyles, labelStyles, fadeUp, Label } from '../components/ui';
import { EASE } from '../theme';
import { outlets, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, EMAIL } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

const channels = [
  { icon: PiWhatsappLogoFill, label: 'WhatsApp', value: 'Fastest way to book', href: WHATSAPP_URL, external: true, color: '#25D366' },
  { icon: PiPhoneLight, label: 'Call us', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: PiEnvelopeSimpleLight, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
];

const mapSrc = (address) => `https://www.google.com/maps?q=${encodeURIComponent(`Whites & Brights, ${address}`)}&output=embed`;

const Outlets = () => {
  const [selectedId, setSelectedId] = useState(outlets[0].id);
  const selected = outlets.find((o) => o.id === selectedId) || outlets[0];

  return (
    <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={4}>
      <Stack spacing={3}>
        {outlets.map((o) => {
          const active = o.id === selectedId;
          return (
            <Box
              key={o.id}
              as="button"
              type="button"
              onClick={() => setSelectedId(o.id)}
              aria-pressed={active}
              textAlign="left"
              p={{ base: 5, md: 6 }}
              borderRadius="24px"
              bg={active ? 'ink.900' : 'white'}
              color={active ? 'white' : 'ink.900'}
              border="1px solid"
              borderColor={active ? 'ink.900' : 'gray.200'}
              transition={`all 0.45s ${EASE}`}
              _hover={{ borderColor: 'ink.900' }}
            >
              <Flex justify="space-between" align="flex-start" gap={4}>
                <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500}>{o.name}</Heading>
                <HStack spacing={1} fontSize="sm" flexShrink={0}>
                  <Icon as={PiStarFill} color="#F4B400" />
                  <Text>{o.rating.toFixed(1)}</Text>
                </HStack>
              </Flex>
              <Text mt={2} fontSize="sm" color={active ? 'whiteAlpha.800' : 'gray.600'}>{o.address}</Text>
              <HStack mt={4} spacing={1.5} fontSize="sm" color={active ? 'whiteAlpha.800' : 'gray.600'}>
                <Icon as={PiClockLight} />
                <Text>Open till {o.closes}</Text>
              </HStack>
            </Box>
          );
        })}
        <ArrowButton as="a" href={selected.mapUrl} target="_blank" rel="noopener noreferrer" variant="outline" justifyContent="space-between">
          Directions to {selected.area}
        </ArrowButton>
      </Stack>
      <Bezel radius={28} inner={{ minH: { base: '320px', lg: '100%' } }}>
        <Box
          as="iframe"
          key={selected.id}
          title={`Map of the ${selected.name} outlet`}
          src={mapSrc(selected.address)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          border={0}
          sx={{ filter: 'grayscale(0.35) contrast(1.05)' }}
        />
      </Bezel>
    </Grid>
  );
};

export default function Contact() {
  usePageMeta('Contact', 'Book a pickup, ask a question or visit one of three Whites & Brights outlets in Patna.');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });

  const [searchParams] = useSearchParams();

  // Prefill the form when arriving from another page (e.g. Careers "Apply Now"
  // links to /contact?enquiry=career&role=Rider).
  useEffect(() => {
    const enquiryParam = searchParams.get('enquiry');
    const roleParam = searchParams.get('role');
    // Default to a pickup booking — most visitors arrive from a "Book a pickup" button
    setEnquiry(enquiryParam || 'pickup');
    if (roleParam) {
      setMessage(`I'd like to apply for the ${roleParam} role. `);
    }
  }, [searchParams]);

  const toast = useToast();

  // Google Apps Script Web App URL for Contact form submissions
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwr9Gv2EfU5D3w1qHRZUid2wrQcGlbxfZM7SbC_z5JNgO9erDLhlkH5y91tnVtN_Sk49Q/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('enquiry', enquiry);
      formData.append('phone', phone);
      // Phone is also prefixed to the message so it reaches the existing sheet columns
      formData.append('message', phone ? `Phone: ${phone}\n${message}` : message);
      formData.append('timestamp', new Date().toISOString());

      // Send data to Google Sheets (no-cors: response is opaque, assume success if no throw)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setFormStatus({
        success: true,
        error: false,
        message: 'Thanks — we have your message and will get back to you shortly.',
      });

      toast({
        title: 'Message sent',
        description: 'We have received your message and will contact you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
        icon: <Icon as={PiCheckCircleFill} boxSize={5} />,
      });

      setName('');
      setEmail('');
      setPhone('');
      setEnquiry('pickup');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);

      setFormStatus({
        success: false,
        error: true,
        message: 'Something went wrong. Please try again later.',
      });

      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="main">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's get your <Accent>laundry sorted.</Accent>
          </>
        }
        aside={
          <Stack spacing={0} borderTop="1px solid" borderColor="gray.200">
            {channels.map((c) => (
              <Flex
                key={c.label}
                as="a"
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                role="group"
                align="center"
                gap={4}
                py={5}
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Flex w={12} h={12} borderRadius="16px" bg="white" border="1px solid" borderColor="gray.200" align="center" justify="center" flexShrink={0}>
                  <Icon as={c.icon} boxSize={6} color={c.color || 'ink.900'} />
                </Flex>
                <Box flex={1}>
                  <Text fontSize="sm" color="gray.500">{c.label}</Text>
                  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={500} color="ink.900">{c.value}</Text>
                </Box>
                <Icon as={PiArrowUpRight} boxSize={5} color="gray.400" transition={`all 0.4s ${EASE}`} _groupHover={{ color: 'ink.900', transform: 'translate(2px,-2px)' }} />
              </Flex>
            ))}
          </Stack>
        }
      />

      {/* Form */}
      <Box as="section" bg="gray.50" pb={{ base: 20, md: 28 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '4fr 8fr' }} gap={{ base: 10, lg: 16 }} alignItems="start">
            <StaggerGroup>
              <MotionBox variants={fadeUp}>
                <Label>Send a message</Label>
              </MotionBox>
              <MotionBox variants={fadeUp} mt={6}>
                <Heading fontSize={{ base: '32px', md: '44px' }} fontWeight={500} color="ink.900">
                  Book a pickup, ask a question, <Accent>or just say hi.</Accent>
                </Heading>
              </MotionBox>
              <MotionBox variants={fadeUp} mt={5}>
                <Text color="gray.600">We usually reply within a few hours during working hours.</Text>
              </MotionBox>
            </StaggerGroup>

            <Reveal>
              <Bezel radius={32} inner={{ p: { base: 6, md: 10 } }}>
                {formStatus.success && (
                  <Alert status="success" borderRadius="14px" mb={6}>
                    <AlertIcon />
                    {formStatus.message}
                  </Alert>
                )}
                {formStatus.error && (
                  <Alert status="error" borderRadius="14px" mb={6}>
                    <AlertIcon />
                    {formStatus.message}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel {...labelStyles}>What can we help with?</FormLabel>
                      <Select value={enquiry} onChange={(e) => setEnquiry(e.target.value)} size="lg" sx={inputStyles}>
                        <option value="pickup">Book a pickup</option>
                        <option value="services">Question about services</option>
                        <option value="business">Business / bulk laundry</option>
                        <option value="franchise">Franchise</option>
                        <option value="career">Career / jobs</option>
                      </Select>
                    </FormControl>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                      <FormControl isRequired>
                        <FormLabel {...labelStyles}>Your name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" size="lg" autoComplete="name" sx={inputStyles} />
                      </FormControl>
                      <FormControl>
                        <FormLabel {...labelStyles}>Phone</FormLabel>
                        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" size="lg" autoComplete="tel" sx={inputStyles} />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl isRequired>
                      <FormLabel {...labelStyles}>Email</FormLabel>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" size="lg" autoComplete="email" sx={inputStyles} />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel {...labelStyles}>Message</FormLabel>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={enquiry === 'pickup' ? 'Your area and a convenient pickup time…' : 'Tell us a little more…'}
                        rows={5}
                        sx={inputStyles}
                      />
                    </FormControl>

                    <ArrowButton type="submit" isLoading={isSubmitting} loadingText="Sending…" w="full" justifyContent="space-between" mt={2} icon={PiPaperPlaneTiltLight}>
                      Send message
                    </ArrowButton>
                  </Stack>
                </form>
              </Bezel>
            </Reveal>
          </Grid>
        </Container>
      </Box>

      {/* Outlets */}
      <Box as="section" bg="white" py={{ base: 20, md: 32 }}>
        <Container>
          <Reveal mb={{ base: 10, md: 14 }}>
            <Label mb={6}>Visit us</Label>
            <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
              Three outlets <Accent>across Patna.</Accent>
            </Heading>
          </Reveal>
          <Reveal>
            <Outlets />
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
