import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button, Flex, Icon, IconButton } from '@chakra-ui/react';
import { PiWhatsappLogoFill, PiPhoneLight, PiArrowUpRight } from 'react-icons/pi';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from './ui';
import { PHONE_TEL, WHATSAPP_URL } from '../data/business';
import { enquiryUrl } from '../data/academy';

// The main action depends on what the page is selling
const PRIMARY = {
  '/franchise': { label: 'Apply for a franchise', to: '/contact?enquiry=franchise' },
  '/academy': { label: 'Enquire about training', href: enquiryUrl() },
};
const DEFAULT_PRIMARY = { label: 'Book a free pickup', to: '/contact' };

// Hidden where a form is being filled in (it would sit on top of the keyboard)
const HIDDEN_ON = ['/contact', '/associate'];

/* Phone-only bar pinned to the bottom: primary action, WhatsApp and call */
export default function MobileActionBar() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Appears once the page's own opening call-to-action has scrolled away
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const primary = PRIMARY[pathname] || DEFAULT_PRIMARY;
  const linkProps = primary.to
    ? { as: RouterLink, to: primary.to }
    : { as: 'a', href: primary.href, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <AnimatePresence>
      {visible && !HIDDEN_ON.includes(pathname) && (
        <MotionBox
          key="mobile-action-bar"
          display={{ base: 'block', md: 'none' }}
          position="fixed"
          left={3}
          right={3}
          bottom={3}
          zIndex={998}
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <Flex as="nav" aria-label="Quick actions" align="center" gap={2} p={1.5} bg="white" borderRadius="full" border="1px solid" borderColor="gray.200" boxShadow="floating">
            <Button {...linkProps} variant="gradient" flex={1} h={12} fontSize="sm" rightIcon={<Icon as={PiArrowUpRight} />}>
              {primary.label}
            </Button>
            <IconButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              w={12}
              h={12}
              borderRadius="full"
              bg="#25D366"
              color="white"
              _hover={{ bg: '#1EBE5A' }}
              icon={<Icon as={PiWhatsappLogoFill} boxSize={6} />}
            />
            <IconButton
              as="a"
              href={`tel:${PHONE_TEL}`}
              aria-label="Call us"
              variant="ghost"
              w={12}
              h={12}
              borderRadius="full"
              bg="gray.100"
              color="ink.900"
              _hover={{ bg: 'gray.200' }}
              icon={<Icon as={PiPhoneLight} boxSize={6} />}
            />
          </Flex>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
