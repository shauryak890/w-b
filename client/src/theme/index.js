import { extendTheme } from '@chakra-ui/react';

/**
 * Whites & Brights — "fresh linen" theme.
 * Calm off-white base, deep teal-ink for dark surfaces and primary actions,
 * and the logo cyan (#00B4C5, intentionally unchanged) as the single accent.
 * Neutrals are tinted toward the brand teal so every grey belongs to one family.
 */

// Shared easing — a soft spring-like curve used across hover/press transitions
export const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';

// Subtle paper grain, applied once as a fixed overlay (never on scrolling layers)
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  colors: {
    brand: {
      50: '#E6F8FA',
      100: '#C2EEF2',
      200: '#8FE0E8',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00B4C5', // Primary brand color (logo)
      600: '#00A3B3',
      700: '#00838F', // Accessible cyan for text/buttons on light backgrounds
      800: '#036A74',
      900: '#02495A',
    },
    // Deep teal-ink — dark sections, primary buttons, headings
    ink: {
      50: '#EEF4F4',
      100: '#D5E3E4',
      200: '#A9C4C7',
      300: '#79A1A6',
      400: '#4D7C83',
      500: '#2E5E66',
      600: '#1D4950',
      700: '#133940',
      800: '#0A2A31',
      900: '#061D23',
    },
    // Kept for backwards compatibility with existing pages; prefer brand/ink
    accent: {
      50: '#EEF4F4',
      100: '#D5E3E4',
      200: '#A9C4C7',
      300: '#79A1A6',
      400: '#4D7C83',
      500: '#00838F',
      600: '#036A74',
      700: '#133940',
      800: '#0A2A31',
      900: '#061D23',
    },
    highlight: {
      50: '#FFF4EC',
      100: '#FFE3CF',
      200: '#FFC9A3',
      300: '#FFAA72',
      400: '#F98B47',
      500: '#E8742C', // Warm offer accent — used sparingly
      600: '#C95E1C',
      700: '#A04914',
      800: '#7A370F',
      900: '#55260A',
    },
    // Teal-tinted neutrals — one grey family across the whole site
    gray: {
      50: '#F4F6F5',
      100: '#EAEEED',
      200: '#DCE2E1',
      300: '#C3CCCB',
      400: '#97A3A2',
      500: '#6B7978',
      600: '#4F5D5D',
      700: '#364343',
      800: '#1F2C2D',
      900: '#121C1D',
    },
  },

  fonts: {
    heading: '"Geist", -apple-system, "Segoe UI", sans-serif',
    body: '"Geist", -apple-system, "Segoe UI", sans-serif',
    serif: '"Instrument Serif", Georgia, serif',
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  radii: {
    xl: '0.875rem',
    '2xl': '1.25rem',
    '3xl': '1.75rem',
    '4xl': '2.25rem',
  },

  shadows: {
    soft: '0 1px 2px rgba(6, 29, 35, 0.04), 0 8px 24px -12px rgba(6, 29, 35, 0.10)',
    card: '0 2px 4px rgba(6, 29, 35, 0.03), 0 24px 48px -24px rgba(6, 29, 35, 0.16)',
    cardHover: '0 2px 4px rgba(6, 29, 35, 0.04), 0 36px 64px -28px rgba(6, 29, 35, 0.28)',
    floating: '0 40px 80px -32px rgba(6, 29, 35, 0.36)',
    glass: '0 8px 32px -8px rgba(6, 29, 35, 0.18)',
    glow: '0 16px 40px -16px rgba(0, 131, 143, 0.45)',
    glowAccent: '0 16px 40px -16px rgba(0, 131, 143, 0.45)',
    insetTop: 'inset 0 1px 0 rgba(255,255,255,0.6)',
    bezel: 'inset 0 1px 1px rgba(255,255,255,0.7)',
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
        overflowX: 'hidden',
      },
      // Fixed grain overlay for a tactile, paper-like surface
      'body::after': {
        content: '""',
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1500,
        opacity: 0.035,
        backgroundImage: GRAIN,
      },
      '::selection': {
        background: 'rgba(0, 180, 197, 0.22)',
      },
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(6, 29, 35, 0.22)',
        borderRadius: '9999px',
        border: '2px solid transparent',
        backgroundClip: 'content-box',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(6, 29, 35, 0.4)',
        backgroundClip: 'content-box',
      },
    },
  },

  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 600,
        letterSpacing: '-0.035em',
        lineHeight: 1.08,
        textWrap: 'balance',
      },
    },

    Text: {
      baseStyle: {
        textWrap: 'pretty',
      },
    },

    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 'full',
        letterSpacing: '-0.01em',
        transition: `all 0.45s ${EASE}`,
        _active: { transform: 'scale(0.98)' },
        _focusVisible: {
          boxShadow: '0 0 0 3px rgba(0, 163, 179, 0.45)',
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        // Primary CTA. Historically a cyan→blue gradient; now solid deep ink so it
        // reads as the single strongest action on the page.
        gradient: {
          bg: 'ink.900',
          color: 'white',
          boxShadow: 'soft',
          _hover: {
            bg: 'ink.700',
            boxShadow: 'glow',
            _disabled: { bg: 'ink.900' },
          },
        },
        // Light pill for dark sections
        light: {
          bg: 'white',
          color: 'ink.900',
          _hover: { bg: 'brand.50' },
        },
        // Frosted button for imagery / dark heroes
        glass: {
          bg: 'whiteAlpha.100',
          color: 'white',
          border: '1px solid',
          borderColor: 'whiteAlpha.300',
          _hover: {
            bg: 'whiteAlpha.200',
            borderColor: 'whiteAlpha.500',
          },
        },
        solid: (props) => {
          const { colorScheme: c } = props;
          if (c === 'brand') {
            return {
              bg: 'brand.700',
              color: 'white',
              _hover: {
                bg: 'brand.800',
                _disabled: { bg: 'brand.700' },
              },
            };
          }
          return {};
        },
        outline: (props) => {
          const { colorScheme: c } = props;
          if (c === 'brand') {
            return {
              borderWidth: '1px',
              borderColor: 'gray.300',
              color: 'ink.900',
              _hover: { bg: 'white', borderColor: 'ink.900' },
            };
          }
          return { borderWidth: '1px' };
        },
      },
    },

    Badge: {
      baseStyle: {
        borderRadius: 'full',
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: '0.01em',
      },
    },

    Container: {
      baseStyle: {
        maxW: '1240px',
        px: { base: 5, md: 8 },
      },
    },

    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
});

export default theme;
