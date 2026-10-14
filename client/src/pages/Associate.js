import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Stack,
  useToast,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
} from '@chakra-ui/react';
import { PiArrowUpRight } from 'react-icons/pi';
import PageHero from '../components/PageHero';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, Bezel, inputStyles, labelStyles, fadeUp } from '../components/ui';

import usePageMeta from '../hooks/usePageMeta';
const benefits = [
  { title: 'A trusted brand', text: 'Professional service standards and a name customers already rate 4.9 on Google.' },
  { title: 'Training & guidance', text: 'Hands-on operational training so you can deliver the W&B standard from day one.' },
  { title: 'Marketing & leads', text: 'Local marketing support and lead generation to help you grow in your area.' },
];

const nextSteps = ['We review your details', 'A call to understand your area', 'Onboarding and training'];

export default function Associate() {
  usePageMeta('Become an Associate', 'Partner with WNB Cleantech Pvt Ltd as a Whites & Brights associate in your area.');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Google Apps Script Web App URL (to write to Google Sheets)
  // Set in client/.env as REACT_APP_ASSOCIATE_SHEETS_URL
  const GOOGLE_SCRIPT_URL = process.env.REACT_APP_ASSOCIATE_SHEETS_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Missing REACT_APP_ASSOCIATE_SHEETS_URL');
      }

      const body = new URLSearchParams({
        name,
        email,
        phone,
        address,
        timestamp: new Date().toISOString(),
      }).toString();

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
        mode: 'no-cors',
      });

      toast({
        title: 'Application submitted',
        description: 'Thanks for your interest. We will contact you shortly.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (err) {
      toast({
        title: 'Submission failed',
        description: GOOGLE_SCRIPT_URL
          ? 'Please try again later.'
          : 'Setup required: add REACT_APP_ASSOCIATE_SHEETS_URL in client/.env',
        status: 'error',
        duration: 4000,
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
        eyebrow="Partnership"
        title={
          <>
            Bring Whites & Brights <Accent>to your area.</Accent>
          </>
        }
        description="Partner with WNB Cleantech Pvt Ltd as an associate and offer premium laundry in your neighbourhood. Fill in the form and we'll reach out soon."
      />

      <Box as="section" bg="gray.50" pb={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="start">
            <Box>
              <StaggerGroup>
                <Box borderTop="1px solid" borderColor="gray.200">
                  {benefits.map((b, i) => (
                    <MotionBox key={b.title} variants={fadeUp}>
                      <Grid templateColumns="56px 1fr" gap={4} py={{ base: 6, md: 8 }} borderBottom="1px solid" borderColor="gray.200">
                        <Text fontFamily="serif" fontStyle="italic" fontSize="3xl" color="gray.300" lineHeight="1">0{i + 1}</Text>
                        <Box>
                          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{b.title}</Heading>
                          <Text mt={2} color="gray.600">{b.text}</Text>
                        </Box>
                      </Grid>
                    </MotionBox>
                  ))}
                </Box>
              </StaggerGroup>
              <Reveal mt={10}>
                <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="gray.500" mb={4}>What happens next</Text>
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3}>
                  {nextSteps.map((s, i) => (
                    <Box key={s} p={4} borderRadius="18px" bg="white" border="1px solid" borderColor="gray.200">
                      <Text fontSize="xs" color="brand.700" fontWeight={600}>Step {i + 1}</Text>
                      <Text mt={1} fontSize="sm" color="ink.900">{s}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Reveal>
            </Box>

            <Reveal position={{ lg: 'sticky' }} top={{ lg: '120px' }}>
              <Bezel radius={32} inner={{ p: { base: 6, md: 10 } }}>
                <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">Associate application</Heading>
                <Text mt={2} color="gray.600" mb={8}>Your details stay private and are only used to contact you.</Text>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel {...labelStyles}>Full name</FormLabel>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" size="lg" autoComplete="name" sx={inputStyles} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel {...labelStyles}>Address</FormLabel>
                      <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, city, state, PIN" rows={3} autoComplete="street-address" sx={inputStyles} />
                    </FormControl>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                      <FormControl isRequired>
                        <FormLabel {...labelStyles}>Phone</FormLabel>
                        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" size="lg" autoComplete="tel" sx={inputStyles} />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel {...labelStyles}>Email</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" size="lg" autoComplete="email" sx={inputStyles} />
                      </FormControl>
                    </SimpleGrid>
                    <ArrowButton type="submit" isLoading={isSubmitting} loadingText="Submitting…" w="full" justifyContent="space-between" mt={2} icon={PiArrowUpRight}>
                      Submit application
                    </ArrowButton>
                  </Stack>
                </form>
              </Bezel>
            </Reveal>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
