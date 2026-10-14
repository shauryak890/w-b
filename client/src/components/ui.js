import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text, Heading, Stack, Button, Icon } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { PiArrowUpRight } from 'react-icons/pi';
import { EASE } from '../theme';

/* ------------------------------------------------------------------ */
/*  Motion-wrapped Chakra primitives + reusable variants               */
/* ------------------------------------------------------------------ */
export const MotionBox = motion(Box);
export const MotionFlex = motion(Flex);
export const MotionText = motion(Text);
export const MotionHeading = motion(Heading);

const SPRING = [0.32, 0.72, 0, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: SPRING } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fromRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* Signature reveal — heavy fade-up that resolves out of a soft blur */
export const unfold = fadeUp;

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/* ------------------------------------------------------------------ */
/*  Reveal — fades/slides children in when scrolled into view          */
/* ------------------------------------------------------------------ */
export const Reveal = ({ children, variant = fadeUp, delay = 0, once = true, ...rest }) => (
  <MotionBox
    initial="hidden"
    whileInView="show"
    viewport={{ once, margin: '-60px' }}
    variants={variant}
    transition={{ delay }}
    {...rest}
  >
    {children}
  </MotionBox>
);

/* A container that staggers its <Reveal>/<MotionBox variants> children */
export const StaggerGroup = ({ children, stagger = 0.12, delay = 0, once = true, ...rest }) => (
  <MotionBox
    initial="hidden"
    whileInView="show"
    viewport={{ once, margin: '-60px' }}
    variants={staggerContainer(stagger, delay)}
    {...rest}
  >
    {children}
  </MotionBox>
);

/* ------------------------------------------------------------------ */
/*  Accent — serif italic emphasis inside headings.                     */
/*  (Named GradientText for backwards compatibility; it no longer       */
/*  renders a gradient. `from` sets the colour on dark backgrounds.)    */
/* ------------------------------------------------------------------ */
export const GradientText = ({ children, from = 'brand.500', to, ...rest }) => (
  <Text
    as="span"
    fontFamily="serif"
    fontStyle="italic"
    fontWeight={400}
    letterSpacing="-0.01em"
    color={from === 'brand.500' ? 'brand.700' : from}
    {...rest}
  >
    {children}
  </Text>
);
export const Accent = GradientText;

/* ------------------------------------------------------------------ */
/*  SectionBadge — tiny tracked eyebrow label above a heading           */
/* ------------------------------------------------------------------ */
export const SectionBadge = ({ children, icon, dark = false, ...rest }) => (
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
    {icon || <Box as="span" w={1.5} h={1.5} borderRadius="full" bg="brand.500" />}
    {children}
  </Flex>
);
export const Eyebrow = SectionBadge;

/* ------------------------------------------------------------------ */
/*  ArrowButton — pill CTA with the arrow nested in its own circle      */
/* ------------------------------------------------------------------ */
export const ArrowButton = ({ children, variant = 'gradient', icon = PiArrowUpRight, ...rest }) => {
  // The nested circle needs to contrast with the pill it sits in
  const circleBg = variant === 'light' || variant === 'outline' ? 'ink.900' : 'whiteAlpha.200';
  return (
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
        bg={circleBg}
        color="white"
        transition={`transform 0.5s ${EASE}`}
        _groupHover={{ transform: 'translate(2px, -2px) scale(1.06)' }}
      >
        <Icon as={icon} boxSize={4} />
      </Flex>
    </Button>
  );
};

/* ------------------------------------------------------------------ */
/*  Bezel — nested "tray + plate" card: outer shell, inner core         */
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
/*  SectionHeading — badge + title + subtitle, revealed together       */
/* ------------------------------------------------------------------ */
export const SectionHeading = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  maxW = '3xl',
  color = 'ink.900',
  subColor = 'gray.600',
  ...rest
}) => (
  <StaggerGroup>
    <Stack spacing={5} align={align === 'center' ? 'center' : 'flex-start'} textAlign={align} {...rest}>
      {badge && (
        <MotionBox variants={fadeUp}>
          <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>
        </MotionBox>
      )}
      <MotionHeading
        variants={fadeUp}
        fontSize={{ base: '34px', md: '48px', lg: '56px' }}
        color={color}
        lineHeight="1.04"
        maxW="4xl"
      >
        {title}
      </MotionHeading>
      {subtitle && (
        <MotionText variants={fadeUp} color={subColor} fontSize={{ base: 'md', md: 'lg' }} maxW={maxW}>
          {subtitle}
        </MotionText>
      )}
    </Stack>
  </StaggerGroup>
);

/* ------------------------------------------------------------------ */
/*  GlassCard — frosted translucent surface                            */
/* ------------------------------------------------------------------ */
export const GlassCard = ({ children, ...rest }) => (
  <Box
    bg="rgba(255,255,255,0.85)"
    border="1px solid"
    borderColor="rgba(255,255,255,0.7)"
    boxShadow="glass"
    borderRadius="2xl"
    {...rest}
  >
    {children}
  </Box>
);

/* ------------------------------------------------------------------ */
/*  FloatingCard — gentle continuous bob (for hero decoration)         */
/* ------------------------------------------------------------------ */
export const FloatingCard = ({ children, duration = 5, delay = 0, distance = 14, ...rest }) => (
  <MotionBox
    animate={{ y: [0, -distance, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    {...rest}
  >
    {children}
  </MotionBox>
);

/* ------------------------------------------------------------------ */
/*  Counter — eases a number up from 0 when it scrolls into view       */
/* ------------------------------------------------------------------ */
export const Counter = ({
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(to * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <Box as="span" ref={ref} {...rest}>
      {prefix}
      {formatted}
      {suffix}
    </Box>
  );
};

/* ------------------------------------------------------------------ */
/*  Marquee — seamless infinite horizontal scroll                      */
/* ------------------------------------------------------------------ */
export const Marquee = ({ children, duration = 28, gap = 12, reverse = false }) => {
  const items = React.Children.toArray(children);
  return (
    <Box overflow="hidden" position="relative" width="100%" sx={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
      <MotionBox
        display="flex"
        width="max-content"
        gap={gap}
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1].map((dup) => (
          <Flex key={dup} gap={gap} pr={gap} flexShrink={0} align="center">
            {items}
          </Flex>
        ))}
      </MotionBox>
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
