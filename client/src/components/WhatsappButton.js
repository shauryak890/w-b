import React from 'react';
import { Box, Icon, Tooltip, Text, Flex } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918102733336';
    const message = encodeURIComponent('Hello, I would like to inquire about Whites and Brights');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Tooltip label="Chat with us on WhatsApp" placement="left" isDisabled={{ base: true, md: false }}>
      <Box
        position="fixed"
        bottom={{ base: "4", md: "6" }}
        right={{ base: "4", md: "6" }}
        zIndex="9999"
        onClick={handleWhatsAppClick}
        cursor="pointer"
        bg="green.500"
        color="white"
        p={{ base: "3", md: "4" }}
        borderRadius="full"
        boxShadow="0 4px 12px rgba(0,0,0,0.15)"
        transition="all 0.3s"
        _hover={{
          transform: 'scale(1.1)',
          bg: 'green.600',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
        }}
        _active={{
          transform: 'scale(0.95)',
          bg: 'green.700',
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex align="center" display={{ base: "flex", md: "flex" }}>
          <Icon as={FaWhatsapp} w={{ base: 6, md: 6 }} h={{ base: 6, md: 6 }} />
          <Text 
            display={{ base: "none", md: "none" }} 
            ml="2" 
            fontWeight="medium"
          >
            Chat Now
          </Text>
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default WhatsappButton;
