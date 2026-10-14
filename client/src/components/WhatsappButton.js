import React from 'react';
import { Box, Icon, Tooltip } from '@chakra-ui/react';
import { PiWhatsappLogoFill } from 'react-icons/pi';
import { EASE } from '../theme';
import { WHATSAPP_URL } from '../data/business';

const WhatsappButton = () => (
  <Tooltip label="Chat with us on WhatsApp" placement="left" hasArrow openDelay={300}>
    <Box
      as="a"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      position="fixed"
      bottom={{ base: 4, md: 6 }}
      right={{ base: 4, md: 6 }}
      zIndex={998}
      w={{ base: 14, md: 14 }}
      h={{ base: 14, md: 14 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      bg="#25D366"
      color="white"
      boxShadow="0 16px 32px -12px rgba(6, 29, 35, 0.45)"
      border="3px solid white"
      transition={`transform 0.45s ${EASE}`}
      _hover={{ transform: 'scale(1.08)' }}
      _active={{ transform: 'scale(0.96)' }}
    >
      <Icon as={PiWhatsappLogoFill} boxSize={7} />
    </Box>
  </Tooltip>
);

export default WhatsappButton;
