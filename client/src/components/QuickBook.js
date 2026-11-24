import React, { useState } from 'react';
import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { PiWhatsappLogoFill } from 'react-icons/pi';
import { ArrowButton, Label } from './ui';
import { categories } from '../data/services';
import { outlets, WHATSAPP_BASE } from '../data/business';

const services = categories.map((c) => c.title);
const areas = [...new Set(outlets.map((o) => o.area)), 'Another area'];

const Field = ({ label, value, onChange, options, ...rest }) => (
  <Box flex={1} px={{ base: 4, md: 6 }} py={{ base: 3, md: 2 }} minW={0} {...rest}>
    <Label as="label" display="block" letterSpacing="0.14em" fontSize="10px">
      {label}
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="unstyled"
        mt={0.5}
        h={8}
        fontSize="md"
        fontWeight={500}
        letterSpacing="-0.01em"
        textTransform="none"
        color="ink.900"
        cursor="pointer"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </Select>
    </Label>
  </Box>
);

/**
 * Booking starter: pick a service and an area, then continue in WhatsApp with
 * the request already written. No backend — the message is the booking.
 */
export default function QuickBook(props) {
  const [service, setService] = useState(services[0]);
  const [area, setArea] = useState(areas[0]);

  const href = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hello, I'd like to book a pickup with Whites and Brights.\nService: ${service}\nArea: ${area}`
  )}`;

  return (
    <Box {...props}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        bg="white"
        borderRadius={{ base: '28px', md: 'full' }}
        p={2}
        boxShadow="floating"
        maxW="760px"
      >
        <Field label="Service" value={service} onChange={setService} options={services} />
        <Field
          label="Pickup area"
          value={area}
          onChange={setArea}
          options={areas}
          borderLeft={{ md: '1px solid' }}
          borderTop={{ base: '1px solid', md: 'none' }}
          borderColor={{ base: 'gray.100', md: 'gray.200' }}
        />
        <ArrowButton
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          icon={PiWhatsappLogoFill}
          justifyContent="space-between"
          flexShrink={0}
          mt={{ base: 2, md: 0 }}
        >
          Book a free pickup
        </ArrowButton>
      </Flex>
      {area === 'Another area' && (
        <Text mt={3} fontSize="sm" color="whiteAlpha.700" aria-live="polite">
          Tell us your locality in the chat and we'll confirm whether we can pick up there.
        </Text>
      )}
    </Box>
  );
}
