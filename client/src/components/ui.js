import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text, Heading, Badge, Stack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Motion-wrapped Chakra primitives + reusable variants               */
/* ------------------------------------------------------------------ */
export const MotionBox = motion(Box);
export const MotionFlex = motion(Flex);
export const MotionText = motion(Text);
export const MotionHeading = motion(Heading);

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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

/* Signature reveal — a subtle perspective "unfold", echoing the fabric hero */
export const unfold = {
  hidden: { opacity: 0, y: 28, rotateX: -14, transformPerspective: 900 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 900,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

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
/*  GradientText — brand cyan -> blue gradient clipped text            */
/* ------------------------------------------------------------------ */
export const GradientText = ({ children, from = 'brand.500', to = 'accent.500', ...rest }) => (
  <Text
    as="span"
    bgGradient={`linear(to-r, ${from}, ${to})`}
    bgClip="text"
    sx={{ WebkitTextFillColor: 'transparent' }}
    {...rest}
  >
    {children}
  </Text>
);

/* ------------------------------------------------------------------ */
/*  SectionBadge — small pill above a section heading                  */
/* ------------------------------------------------------------------ */
export const SectionBadge = ({ children, icon, colorScheme = 'brand', ...rest }) => (
  <Badge
    display="inline-flex"
    alignItems="center"
    gap={2}
    px={4}
    py={1.5}
    fontSize="sm"
    bg="brand.50"
    color="brand.700"
    border="1px solid"
    borderColor="brand.100"
    {...rest}
  >
    {icon}
    {children}
  </Badge>
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
  color = 'gray.900',
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
        fontSize={{ base: '3xl', md: '4xl', lg: '44px' }}
        color={color}
        lineHeight="1.1"
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
    bg="rgba(255,255,255,0.75)"
    backdropFilter="blur(16px) saturate(160%)"
    border="1px solid"
    borderColor="rgba(255,255,255,0.6)"
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
