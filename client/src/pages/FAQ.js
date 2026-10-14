import React, { useMemo, useState } from 'react';
import { Box, Container, Grid, Heading, Text, Stack, Icon, Input, InputGroup, InputLeftElement, Flex, Button } from '@chakra-ui/react';
import { PiMagnifyingGlassLight, PiWhatsappLogoFill, PiArrowUpRight } from 'react-icons/pi';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FaqList from '../components/FaqList';
import { Reveal, Accent, inputStyles } from '../components/ui';
import { EASE } from '../theme';
import { faqCategories } from '../data/faq';
import { WHATSAPP_URL } from '../data/business';

import usePageMeta from '../hooks/usePageMeta';
export default function FAQ() {
  usePageMeta('FAQ', 'Answers about pickups, pricing, garment care and policies at Whites & Brights.');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqCategories;
    return faqCategories
      .map((c) => ({ ...c, questions: c.questions.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)) }))
      .filter((c) => c.questions.length);
  }, [query]);

  const scrollTo = (id) => {
    const el = document.getElementById(`faq-${id}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
  };

  return (
    <Box as="main">
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers, <Accent>before you ask.</Accent>
          </>
        }
        aside={
          <Stack spacing={4}>
            <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="460px">
              Everything about pickups, pricing, garment care and policies.
            </Text>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none" h="full">
                <Icon as={PiMagnifyingGlassLight} boxSize={5} color="gray.500" />
              </InputLeftElement>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search frequently asked questions"
                h={14}
                sx={{ ...inputStyles, bg: 'white', borderRadius: 'full' }}
              />
            </InputGroup>
          </Stack>
        }
      />

      <Box as="section" bg="gray.50" pb={{ base: 24, md: 32 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '3fr 9fr' }} gap={{ base: 6, lg: 16 }} alignItems="start">
            {/* Category nav */}
            <Stack
              spacing={1}
              position={{ lg: 'sticky' }}
              top={{ lg: '120px' }}
              direction={{ base: 'row', lg: 'column' }}
              overflowX={{ base: 'auto', lg: 'visible' }}
              sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
            >
              {faqCategories.map((c) => (
                <Button
                  key={c.id}
                  onClick={() => scrollTo(c.id)}
                  variant="ghost"
                  justifyContent="flex-start"
                  flexShrink={0}
                  h="44px"
                  px={4}
                  fontSize="sm"
                  fontWeight={500}
                  color="gray.700"
                  leftIcon={<Icon as={c.icon} boxSize={5} />}
                  isDisabled={!filtered.some((f) => f.id === c.id)}
                  _hover={{ bg: 'white', color: 'ink.900' }}
                  transition={`all 0.4s ${EASE}`}
                >
                  {c.title}
                </Button>
              ))}
            </Stack>

            <Stack spacing={{ base: 12, md: 16 }}>
              {filtered.length === 0 && (
                <Reveal>
                  <Box p={{ base: 8, md: 12 }} borderRadius="28px" bg="white" border="1px solid" borderColor="gray.200">
                    <Heading fontSize="2xl" fontWeight={500} color="ink.900">No answers for “{query}”</Heading>
                    <Text mt={2} color="gray.600">Try a different word, or ask us directly — we reply quickly on WhatsApp.</Text>
                    <Flex mt={6} gap={3} wrap="wrap">
                      <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="gradient" h={12} px={5} leftIcon={<Icon as={PiWhatsappLogoFill} color="#25D366" boxSize={5} />}>
                        Ask on WhatsApp
                      </Button>
                      <Button variant="outline" h={12} px={5} onClick={() => setQuery('')}>Clear search</Button>
                    </Flex>
                  </Box>
                </Reveal>
              )}
              {filtered.map((c) => (
                <Box key={c.id} id={`faq-${c.id}`}>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={c.icon} boxSize={6} color="brand.700" />
                    <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">{c.title}</Heading>
                  </Flex>
                  <FaqList items={c.questions} />
                </Box>
              ))}
            </Stack>
          </Grid>

          <Reveal mt={{ base: 16, md: 24 }}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={6} p={{ base: 7, md: 10 }} borderRadius="28px" bg="white" border="1px solid" borderColor="gray.200">
              <Box>
                <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">Still have a question?</Heading>
                <Text mt={2} color="gray.600">Our team is happy to help with anything specific.</Text>
              </Box>
              <Button as={RouterLink} to="/contact?enquiry=services" variant="outline" h={12} px={6} rightIcon={<Icon as={PiArrowUpRight} />} flexShrink={0}>
                Contact support
              </Button>
            </Flex>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
