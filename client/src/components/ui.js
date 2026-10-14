import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Grid, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { PiArrowUpRight } from 'react-icons/pi';
import { EASE } from '../theme';

/* ------------------------------------------------------------------ */
/*  Motion                                                             */
/* ------------------------------------------------------------------ */
export const MotionBox = motion(Box);

const SPRING = [0.32, 0.72, 0, 1];

/* Heavy fade-up that resolves out of a soft blur */
export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: SPRING } },
};

const VIEWPORT = { once: true, margin: '-60px' };

/* Fades its children in when scrolled into view */
export const Reveal = ({ children, ...rest }) => (
  <MotionBox initial="hidden" whileInView="show" viewport={VIEWPORT} variants={fadeUp} {...rest}>
    {children}
  </MotionBox>
);

/* Staggers its <MotionBox variants={fadeUp}> children into view */
export const StaggerGroup = ({ children, stagger = 0.12, ...rest }) => (
  <MotionBox
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    {...rest}
  >
    {children}
  </MotionBox>
);

/* ------------------------------------------------------------------ */
/*  Accent — serif italic emphasis inside headings                     */
/* ------------------------------------------------------------------ */
export const Accent = ({ children, dark = false, ...rest }) => (
  <Text
    as="span"
    fontFamily="serif"
    fontStyle="italic"
    fontWeight={400}
    letterSpacing="-0.01em"
    color={dark ? 'brand.200' : 'brand.700'}
    {...rest}
  >
    {children}
  </Text>
);

/* ------------------------------------------------------------------ */
/*  Eyebrow — tiny tracked label above a heading                       */
/* ------------------------------------------------------------------ */
export const Eyebrow = ({ children, dark = false, ...rest }) => (
  <Flex
    as="span"
    display="inline-flex"
    alignItems="center"
    gap={2}
    px={3}
    py={1}
    borderRadius="full"
    border="1px solid"
    borderColor={dark ? 'whiteAlpha.300' : 'gray.200'}
    bg={dark ? 'whiteAlpha.100' : 'white'}
    color={dark ? 'whiteAlpha.900' : 'ink.700'}
    fontSize="11px"
    fontWeight={500}
    letterSpacing="0.18em"
    textTransform="uppercase"
    lineHeight="1.6"
    {...rest}
  >
    <Box as="span" w={1.5} h={1.5} borderRadius="full" bg="brand.500" />
    {children}
  </Flex>
);

/* Plain uppercase label (no pill) for section kickers */
export const Label = (props) => (
  <Text fontSize="11px" letterSpacing="0.18em" textTransform="uppercase" color="gray.500" {...props} />
);

/* ------------------------------------------------------------------ */
/*  NumberedRows — hairline list of "01 Title / text" rows             */
/* ------------------------------------------------------------------ */
export const NumberedRows = ({ items }) => (
  <StaggerGroup>
    <Box borderTop="1px solid" borderColor="gray.200">
      {items.map((item, i) => (
        <MotionBox key={item.title} variants={fadeUp}>
          <Grid templateColumns="64px 1fr" gap={4} py={{ base: 7, md: 9 }} borderBottom="1px solid" borderColor="gray.200">
            <Text fontFamily="serif" fontStyle="italic" fontSize="3xl" color="gray.300" lineHeight="1">
              0{i + 1}
            </Text>
            <Box>
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{item.title}</Heading>
              <Text mt={2} color="gray.600" maxW="480px">{item.text}</Text>
            </Box>
          </Grid>
        </MotionBox>
      ))}
    </Box>
  </StaggerGroup>
);

/* ------------------------------------------------------------------ */
/*  CalloutBar — white strip with a question and one outline action    */
/* ------------------------------------------------------------------ */
export const CalloutBar = ({ title, text, action, to, ...rest }) => (
  <Reveal {...rest}>
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align={{ base: 'flex-start', md: 'center' }}
      gap={6}
      p={{ base: 7, md: 10 }}
      borderRadius="28px"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
    >
      <Box>
        <Heading fontSize={{ base: '2xl', md: '32px' }} fontWeight={500} color="ink.900">{title}</Heading>
        <Text mt={2} color="gray.600">{text}</Text>
      </Box>
      <Button as={RouterLink} to={to} variant="outline" h={12} px={6} rightIcon={<Icon as={PiArrowUpRight} />} flexShrink={0}>
        {action}
      </Button>
    </Flex>
  </Reveal>
);

/* ------------------------------------------------------------------ */
/*  ArrowButton — pill CTA with the arrow nested in its own circle     */
/* ------------------------------------------------------------------ */
export const ArrowButton = ({ children, variant = 'gradient', icon = PiArrowUpRight, ...rest }) => (
  <Button
    variant={variant}
    role="group"
    h={{ base: 12, md: 14 }}
    pl={{ base: 5, md: 7 }}
    pr={2}
    fontSize={{ base: 'sm', md: 'md' }}
    gap={4}
    {...rest}
  >
    {children}
    <Flex
      as="span"
      align="center"
      justify="center"
      w={{ base: 8, md: 10 }}
      h={{ base: 8, md: 10 }}
      borderRadius="full"
      // The nested circle needs to contrast with the pill it sits in
      bg={variant === 'light' || variant === 'outline' ? 'ink.900' : 'whiteAlpha.200'}
      color="white"
      transition={`transform 0.5s ${EASE}`}
      _groupHover={{ transform: 'translate(2px, -2px) scale(1.06)' }}
    >
      <Icon as={icon} boxSize={4} />
    </Flex>
  </Button>
);

/* ------------------------------------------------------------------ */
/*  Bezel — nested "tray + plate" card: outer shell, inner core        */
/* ------------------------------------------------------------------ */
export const Bezel = ({ children, inner = {}, dark = false, radius = 28, pad = 6, ...rest }) => (
  <Box
    p={`${pad}px`}
    borderRadius={`${radius}px`}
    bg={dark ? 'whiteAlpha.100' : 'rgba(6,29,35,0.035)'}
    border="1px solid"
    borderColor={dark ? 'whiteAlpha.200' : 'rgba(6,29,35,0.06)'}
    {...rest}
  >
    <Box
      h="100%"
      borderRadius={`${radius - pad}px`}
      bg={dark ? 'ink.800' : 'white'}
      boxShadow={dark ? 'inset 0 1px 1px rgba(255,255,255,0.08)' : 'bezel'}
      overflow="hidden"
      position="relative"
      {...inner}
    >
      {children}
    </Box>
  </Box>
);

/* ------------------------------------------------------------------ */
/*  Counter — eases a number up from 0 when it scrolls into view       */
/* ------------------------------------------------------------------ */
export const Counter = ({ to, duration = 1.8, prefix = '', suffix = '', ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setValue(to * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <Box as="span" ref={ref} {...rest}>
      {prefix}
      {Math.round(value).toLocaleString()}
      {suffix}
    </Box>
  );
};

/* ------------------------------------------------------------------ */
/*  Shared form field styling (Input / Textarea / Select `sx`)         */
/* ------------------------------------------------------------------ */
export const inputStyles = {
  bg: 'gray.50',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '14px',
  fontSize: 'md',
  transition: `all 0.3s ${EASE}`,
  _placeholder: { color: 'gray.400' },
  _hover: { borderColor: 'gray.300' },
  _focus: { borderColor: 'ink.900', boxShadow: '0 0 0 3px rgba(0, 163, 179, 0.18)', bg: 'white' },
};

export const labelStyles = {
  fontSize: 'sm',
  fontWeight: 500,
  color: 'ink.900',
  mb: 2,
};
