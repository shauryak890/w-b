import React from 'react';
import { Box, Container, Heading, Text, Stack, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PiArrowUpRight } from 'react-icons/pi';
import { StaggerGroup, MotionBox, Accent, ArrowButton, fadeUp } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');

  return (
    <Box as="main" bg="gray.50" pt={{ base: 36, md: 48 }} pb={{ base: 24, md: 36 }}>
      <Container>
        <StaggerGroup animate="show">
          <MotionBox variants={fadeUp}>
            <Text fontFamily="serif" fontStyle="italic" fontSize={{ base: '96px', md: '180px' }} lineHeight="0.8" color="gray.300">
              404
            </Text>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={8}>
            <Heading as="h1" fontSize={{ base: '40px', md: '72px' }} fontWeight={500} color="ink.900" maxW="800px">
              This page went missing <Accent>in the wash.</Accent>
            </Heading>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={6}>
            <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="460px">
              The link may be broken or the page may have moved. Let's get you somewhere useful.
            </Text>
          </MotionBox>
          <MotionBox variants={fadeUp} mt={10}>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
              <ArrowButton as={RouterLink} to="/">Back to home</ArrowButton>
              <Button as={RouterLink} to="/services" variant="outline" h={{ base: 12, md: 14 }} px={6} rightIcon={<Icon as={PiArrowUpRight} />}>
                Services & prices
              </Button>
            </Stack>
          </MotionBox>
        </StaggerGroup>
      </Container>
    </Box>
  );
}
