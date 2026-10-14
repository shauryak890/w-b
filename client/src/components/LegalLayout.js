import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Heading, Text, Stack, Button, Icon, HStack, UnorderedList, ListItem } from '@chakra-ui/react';
import { PiPrinterLight } from 'react-icons/pi';
import PageHero from './PageHero';
import { Accent } from './ui';
import { EASE } from '../theme';
import { EMAIL, PHONE_DISPLAY, outlets } from '../data/business';

const OFFSET = 120;

/* Body helpers so policy pages read like documents */
export const P = (props) => <Text color="gray.700" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.75" {...props} />;
export const Bullets = ({ items }) => (
  <UnorderedList spacing={2.5} pl={5} color="gray.700" fontSize={{ base: 'md', md: 'lg' }} sx={{ 'li::marker': { color: 'brand.500' } }}>
    {items.map((i) => (
      <ListItem key={typeof i === 'string' ? i : i.key} pl={1}>{i}</ListItem>
    ))}
  </UnorderedList>
);

export function LegalContact({ intro }) {
  return (
    <Box p={{ base: 6, md: 8 }} borderRadius="24px" bg="white" border="1px solid" borderColor="gray.200">
      <P>{intro}</P>
      <Stack spacing={1.5} mt={5} fontSize={{ base: 'md', md: 'lg' }} color="ink.900">
        <Text>Email: <Box as="a" href={`mailto:${EMAIL}`} fontWeight={500} borderBottom="1px solid">{EMAIL}</Box></Text>
        <Text>Phone: <Box as="a" href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} fontWeight={500} borderBottom="1px solid">{PHONE_DISPLAY}</Box></Text>
        <Text>Address: {outlets[0].address}</Text>
      </Stack>
    </Box>
  );
}

/**
 * sections: [{ id, title, content }]
 */
export default function LegalLayout({ eyebrow, title, accent, lastUpdated, sections }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - OFFSET, behavior: 'smooth' });
  };

  return (
    <Box as="main">
      <PageHero
        eyebrow={eyebrow}
        title={
          <>
            {title} <Accent>{accent}</Accent>
          </>
        }
        aside={
          <Stack spacing={5} align="flex-start">
            <Text color="gray.600">Last updated: <Text as="span" color="ink.900" fontWeight={500}>{lastUpdated}</Text></Text>
            <Button
              onClick={() => window.print()}
              variant="outline"
              h={12}
              px={5}
              leftIcon={<Icon as={PiPrinterLight} boxSize={5} />}
              sx={{ '@media print': { display: 'none' } }}
            >
              Print / save as PDF
            </Button>
          </Stack>
        }
        pb={{ base: 10, md: 16 }}
      />

      <Box as="section" bg="gray.50" pb={{ base: 20, md: 28 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '3fr 9fr' }} gap={{ base: 8, lg: 16 }} alignItems="start">
            {/* Table of contents */}
            <Box as="nav" aria-label="On this page" position={{ lg: 'sticky' }} top={{ lg: `${OFFSET}px` }} display={{ base: 'none', lg: 'block' }}>
              <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="gray.500" mb={4}>On this page</Text>
              <Stack spacing={0} borderLeft="1px solid" borderColor="gray.200">
                {sections.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <Box
                      key={s.id}
                      as="button"
                      type="button"
                      onClick={() => jump(s.id)}
                      textAlign="left"
                      py={2}
                      pl={4}
                      ml="-1px"
                      borderLeft="2px solid"
                      borderColor={isActive ? 'ink.900' : 'transparent'}
                      color={isActive ? 'ink.900' : 'gray.500'}
                      fontSize="sm"
                      fontWeight={isActive ? 500 : 400}
                      transition={`all 0.3s ${EASE}`}
                      _hover={{ color: 'ink.900' }}
                    >
                      {i + 1}. {s.title}
                    </Box>
                  );
                })}
              </Stack>
            </Box>

            <Box maxW="760px">
              {sections.map((s, i) => (
                <Box key={s.id} id={s.id} as="section" py={{ base: 8, md: 10 }} borderTop={i ? '1px solid' : 'none'} borderColor="gray.200">
                  <HStack spacing={3} align="baseline" mb={5}>
                    <Text fontFamily="serif" fontStyle="italic" fontSize="2xl" color="gray.400">{String(i + 1).padStart(2, '0')}</Text>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">{s.title}</Heading>
                  </HStack>
                  <Stack spacing={4}>{s.content}</Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
