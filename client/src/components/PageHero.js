import React from 'react';
import { Box, Container, Grid, Heading, Text, Stack } from '@chakra-ui/react';
import { MotionBox, StaggerGroup, Eyebrow, fadeUp } from './ui';

/**
 * Editorial page opener used by interior pages.
 * Left: eyebrow + oversized heading. Right: intro copy + actions.
 * `children` renders full-width below (image band, stats, nav…).
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  dark = false,
  children,
  pb = { base: 14, md: 20 },
  ...rest
}) {
  return (
    <Box
      as="section"
      position="relative"
      bg={dark ? 'ink.900' : 'gray.50'}
      color={dark ? 'white' : 'ink.900'}
      pt={{ base: 32, md: 44 }}
      pb={pb}
      overflow="hidden"
      {...rest}
    >
      {dark && (
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(90% 80% at 90% 0%, #0B5C6A 0%, #073A44 40%, #061D23 80%)"
        />
      )}
      <Container position="relative">
        <StaggerGroup stagger={0.1} animate="show">
          <Grid templateColumns={{ base: '1fr', lg: '1.35fr 1fr' }} gap={{ base: 8, lg: 16 }} alignItems="end">
            <Box>
              {eyebrow && (
                <MotionBox variants={fadeUp}>
                  <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
                </MotionBox>
              )}
              <MotionBox variants={fadeUp} mt={{ base: 6, md: 8 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '44px', sm: '56px', md: '76px', xl: '88px' }}
                  fontWeight={500}
                  lineHeight="0.96"
                  letterSpacing="-0.05em"
                  color={dark ? 'white' : 'ink.900'}
                >
                  {title}
                </Heading>
              </MotionBox>
            </Box>
            <MotionBox variants={fadeUp}>
              {aside || (
                <Stack spacing={7}>
                  {description && (
                    <Text fontSize={{ base: 'md', md: 'lg' }} color={dark ? 'whiteAlpha.800' : 'gray.600'} maxW="460px" lineHeight="1.65">
                      {description}
                    </Text>
                  )}
                  {actions}
                </Stack>
              )}
            </MotionBox>
          </Grid>
          {children && (
            <MotionBox variants={fadeUp} mt={{ base: 12, md: 20 }}>
              {children}
            </MotionBox>
          )}
        </StaggerGroup>
      </Container>
    </Box>
  );
}

/* Reusable left-aligned section heading: eyebrow + heading (+ optional side copy) */
export function SectionIntro({ eyebrow, title, description, children, dark = false, mb = { base: 10, md: 16 } }) {
  return (
    <Grid templateColumns={{ base: '1fr', lg: '1.2fr 1fr' }} gap={{ base: 6, lg: 16 }} alignItems="end" mb={mb}>
      <StaggerGroup>
        {eyebrow && (
          <MotionBox variants={fadeUp}>
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
          </MotionBox>
        )}
        <MotionBox variants={fadeUp} mt={eyebrow ? 6 : 0}>
          <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color={dark ? 'white' : 'ink.900'}>
            {title}
          </Heading>
        </MotionBox>
      </StaggerGroup>
      {(description || children) && (
        <StaggerGroup>
          <MotionBox variants={fadeUp}>
            {description && (
              <Text color={dark ? 'whiteAlpha.800' : 'gray.600'} fontSize={{ base: 'md', md: 'lg' }} maxW="460px">
                {description}
              </Text>
            )}
            {children}
          </MotionBox>
        </StaggerGroup>
      )}
    </Grid>
  );
}
