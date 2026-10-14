import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Text, Flex, Icon } from '@chakra-ui/react';
import { PiPlusBold } from 'react-icons/pi';
import { EASE } from '../theme';

/* Minimal hairline accordion with a rotating "+" toggle. items: [{ q, a }] */
export default function FaqList({ items, ...rest }) {
  return (
    <Accordion allowToggle borderTop="1px solid" borderColor="gray.200" {...rest}>
      {items.map((f) => (
        <AccordionItem key={f.q} borderTop="none" borderBottom="1px solid" borderColor="gray.200">
          {({ isExpanded }) => (
            <>
              <AccordionButton px={0} py={6} _hover={{ bg: 'transparent' }} gap={4}>
                <Text flex={1} textAlign="left" fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500} color="ink.900" letterSpacing="-0.02em">
                  {f.q}
                </Text>
                <Flex
                  w={9}
                  h={9}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={isExpanded ? 'ink.900' : 'gray.200'}
                  align="center"
                  justify="center"
                  flexShrink={0}
                  bg={isExpanded ? 'ink.900' : 'transparent'}
                  color={isExpanded ? 'white' : 'ink.900'}
                  transition={`all 0.4s ${EASE}`}
                >
                  <Icon as={PiPlusBold} boxSize={3.5} transform={isExpanded ? 'rotate(45deg)' : 'none'} transition={`transform 0.4s ${EASE}`} />
                </Flex>
              </AccordionButton>
              <AccordionPanel px={0} pt={0} pb={6} color="gray.600" maxW="600px" fontSize={{ base: 'md', md: 'lg' }}>
                {f.a}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
