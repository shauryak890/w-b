import React from 'react';
import { Box } from '@chakra-ui/react';

// Colours sampled from the official Whites & Brights logo
export const LOGO_NAVY = '#0E3A50';
export const LOGO_CYAN = '#00B4C5';

/**
 * The Whites & Brights hanger-and-swoosh mark, redrawn as SVG so it stays sharp
 * at any size. `light` renders the hanger in white for dark backgrounds.
 * Keep in sync with public/favicon.svg.
 */
export default function BrandMark({ size = 40, light = false, title, ...rest }) {
  const hanger = light ? '#FFFFFF' : LOGO_NAVY;
  return (
    <Box
      as="svg"
      viewBox="0 0 64 64"
      w={`${size}px`}
      h={`${size}px`}
      flexShrink={0}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {/* Hook + shoulders */}
      <path
        d="M32 21.5V17.2c0-1.6 3.4-2.4 3.4-5.2a3.4 3.4 0 0 0-6.8 0"
        fill="none"
        stroke={hanger}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 21.5 9.5 35.2h45L32 21.5Z"
        fill="none"
        stroke={hanger}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      {/* Swoosh */}
      <path d="M10.5 41.5c9.5 6.6 23.6 8.2 30-1.6 2.6-4 2.6-8.6 1.1-12.4 3.9 5.3 4.4 12.7-.4 17.8-7.6 8.1-22.2 5.5-30.7-3.8Z" fill={LOGO_CYAN} />
      <path d="M8 43.6c9.6 7.9 24.7 10.3 32.6 2.8" fill="none" stroke={hanger} strokeWidth="1.3" strokeLinecap="round" opacity="0.85" />
      {/* Sparkle */}
      <path d="M39.6 37.4l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" fill={light ? '#FFFFFF' : '#FFFFFF'} />
    </Box>
  );
}
