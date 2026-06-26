import { extendTheme } from '@chakra-ui/react';

/**
 * Whites & Brights — premium theme.
 * Brand palette is logo-derived (cyan #00B4C5) and intentionally unchanged.
 * Everything else (type scale, shadows, radii, component styles) is tuned
 * for a modern, layered, "premium SaaS" feel.
 */
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  colors: {
    brand: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00B4C5', // Primary brand color
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#02495A', // Deep brand navy (used for dark sections)
    },
    accent: {
      50: '#F0F4FF',
      100: '#DBE4FF',
      200: '#BAC8FF',
      300: '#99ACFF',
      400: '#7890FF',
      500: '#5774FF', // Secondary accent
      600: '#2F4BFF',
      700: '#0022FF',
      800: '#001ACC',
      900: '#001299',
    },
    highlight: {
      50: '#FFF0F4',
      100: '#FFD9E2',
      200: '#FFB3C5',
      300: '#FF8DA8',
      400: '#FF668B',
      500: '#FF406E',
      600: '#FF1A51',
      700: '#F0003D',
      800: '#BD0030',
      900: '#8A0023',
    },
    // Cool, slightly blue-tinted neutrals for a cleaner premium base
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#566377',
      700: '#3B4658',
      800: '#222B3A',
      900: '#141A24',
    },
  },

  fonts: {
    heading: '"Plus Jakarta Sans", "Poppins", sans-serif',
    body: '"Inter", sans-serif',
  },

  fontWeights: {
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
    '4xl': '2.5rem',
  },

  shadows: {
    soft: '0 2px 10px rgba(2, 73, 90, 0.06)',
    card: '0 10px 30px rgba(2, 73, 90, 0.08)',
    cardHover: '0 22px 48px rgba(2, 73, 90, 0.16)',
    floating: '0 24px 60px rgba(2, 73, 90, 0.20)',
    glass: '0 8px 32px rgba(2, 73, 90, 0.14)',
    glow: '0 12px 34px rgba(0, 180, 197, 0.38)',
    glowAccent: '0 12px 34px rgba(87, 116, 255, 0.38)',
    insetTop: 'inset 0 1px 0 rgba(255,255,255,0.6)',
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        fontFeatureSettings: '"cv11", "ss01"',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
        overflowX: 'hidden',
      },
      '::selection': {
        background: 'rgba(0, 180, 197, 0.22)',
      },
      // Custom premium scrollbar (WebKit)
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 180, 197, 0.35)',
        borderRadius: '9999px',
        border: '2px solid transparent',
        backgroundClip: 'content-box',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(0, 180, 197, 0.6)',
        backgroundClip: 'content-box',
      },
    },
  },

  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
      },
    },

    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: 'full',
        letterSpacing: '-0.01em',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        _focusVisible: {
          boxShadow: '0 0 0 3px rgba(0, 180, 197, 0.45)',
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        // Signature gradient CTA (cyan -> blue). The blue end keeps white text legible.
        gradient: {
          bgGradient: 'linear(to-r, brand.500, accent.500)',
          color: 'white',
          boxShadow: 'glow',
          position: 'relative',
          overflow: 'hidden',
          _hover: {
            bgGradient: 'linear(to-r, brand.600, accent.600)',
            transform: 'translateY(-2px)',
            boxShadow: 'floating',
            _disabled: { transform: 'none' },
          },
          _active: { transform: 'translateY(0)' },
        },
        // Frosted-glass button for use on imagery / dark heroes
        glass: {
          bg: 'whiteAlpha.200',
          color: 'white',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: 'whiteAlpha.400',
          _hover: {
            bg: 'whiteAlpha.300',
            transform: 'translateY(-2px)',
          },
          _active: { transform: 'translateY(0)' },
        },
        solid: (props) => {
          const { colorScheme: c } = props;
          if (c === 'brand') {
            return {
              bg: 'brand.600',
              color: 'white',
              boxShadow: '0 8px 20px rgba(0, 172, 193, 0.28)',
              _hover: {
                bg: 'brand.700',
                transform: 'translateY(-2px)',
                boxShadow: '0 14px 30px rgba(0, 151, 167, 0.34)',
                _disabled: { transform: 'none' },
              },
              _active: { transform: 'translateY(0)' },
            };
          }
          return {
            _hover: { transform: 'translateY(-2px)', _disabled: { transform: 'none' } },
            _active: { transform: 'translateY(0)' },
          };
        },
        outline: {
          borderWidth: '2px',
          _hover: { transform: 'translateY(-2px)' },
          _active: { transform: 'translateY(0)' },
        },
      },
    },

    Badge: {
      baseStyle: {
        borderRadius: 'full',
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.01em',
      },
    },

    Container: {
      baseStyle: {
        maxW: '1200px',
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
