import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Heading, Text, Stack, Grid, SimpleGrid, Flex, HStack, Icon, Button, Link } from '@chakra-ui/react';
import {
  PiWhatsappLogoFill,
  PiPhoneLight,
  PiEnvelopeSimpleLight,
  PiMapPinLight,
  PiArrowRight,
  PiArrowUpRight,
  PiCheckBold,
} from 'react-icons/pi';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageHero, { SectionIntro } from '../components/PageHero';
import FaqList from '../components/FaqList';
import { MotionBox, Reveal, StaggerGroup, Accent, ArrowButton, Bezel, Label, fadeUp } from '../components/ui';
import { EASE } from '../theme';
import {
  EDITION,
  HEAD_OFFICE,
  GST_NOTE,
  MAX_DAYS,
  stats,
  audiences,
  programs,
  tracks,
  enrolSteps,
  included,
  faqs,
  formatFee,
  enquiryUrl,
} from '../data/academy';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../data/business';
import usePageMeta from '../hooks/usePageMeta';

// Bar + badge colour per level, light → dark as programs get more advanced
const LEVEL = {
  Foundation: { bg: 'brand.200', color: 'ink.900' },
  Advanced: { bg: 'brand.500', color: 'white' },
  Specialist: { bg: 'ink.900', color: 'white' },
};

const CodeBadge = ({ code, level, size = 'md' }) => (
  <Flex
    align="center"
    justify="center"
    flexShrink={0}
    w={size === 'lg' ? 14 : 10}
    h={size === 'lg' ? 14 : 10}
    borderRadius={size === 'lg' ? '16px' : '12px'}
    fontWeight={600}
    fontSize={size === 'lg' ? 'lg' : 'sm'}
    letterSpacing="-0.02em"
    {...LEVEL[level]}
  >
    {code}
  </Flex>
);

/* One row of the program map: code + title, duration bar drawn to scale, fee */
const ProgramRow = ({ program, selected, onSelect }) => (
  <Grid
    as="button"
    type="button"
    onClick={onSelect}
    aria-pressed={selected}
    w="full"
    textAlign="left"
    templateColumns={{ base: '1fr auto', md: '300px 1fr 120px' }}
    templateAreas={{ base: `"name fee" "bar bar"`, md: `"name bar fee"` }}
    columnGap={{ base: 4, md: 8 }}
    rowGap={3}
    alignItems="center"
    py={{ base: 5, md: 6 }}
    px={{ base: 3, md: 5 }}
    mx={{ base: -3, md: -5 }}
    borderRadius="20px"
    bg={selected ? 'white' : 'transparent'}
    boxShadow={selected ? 'soft' : 'none'}
    transition={`all 0.45s ${EASE}`}
    _hover={{ bg: 'white' }}
  >
    <HStack gridArea="name" spacing={4} minW={0}>
      <CodeBadge code={program.code} level={program.level} />
      <Box minW={0}>
        <Text fontWeight={500} color="ink.900" fontSize={{ base: 'md', md: 'lg' }} letterSpacing="-0.02em">{program.title}</Text>
        <Text fontSize="xs" color="gray.500">{program.level}</Text>
      </Box>
    </HStack>
    <Box gridArea="bar" h={9} borderRadius="10px" bg="gray.100" position="relative" overflow="hidden">
      <MotionBox
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
        style={{ transformOrigin: 'left' }}
        h="100%"
        w={`${(program.days / MAX_DAYS) * 100}%`}
        borderRadius="10px"
        display="flex"
        alignItems="center"
        px={3}
        fontSize="xs"
        fontWeight={600}
        whiteSpace="nowrap"
        {...LEVEL[program.level]}
      >
        {program.days} days
      </MotionBox>
    </Box>
    <Text gridArea="fee" textAlign="right" fontWeight={600} fontSize={{ base: 'lg', md: 'xl' }} color="ink.900" letterSpacing="-0.03em" sx={{ fontVariantNumeric: 'tabular-nums' }}>
      {formatFee(program.fee)}
    </Text>
  </Grid>
);

const Fact = ({ label, children, sub }) => (
  <Box>
    <Label color="brand.200" letterSpacing="0.14em">{label}</Label>
    <Text mt={2} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500} letterSpacing="-0.02em">{children}</Text>
    {sub && <Text fontSize="xs" color="whiteAlpha.600" mt={0.5}>{sub}</Text>}
  </Box>
);

/* Full detail for the selected program */
const ProgramDetail = ({ program }) => (
  <Bezel radius={36} pad={8} inner={{ bg: 'white' }}>
    <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }}>
      {/* Summary panel */}
      <Flex direction="column" bg="ink.900" color="white" p={{ base: 7, md: 10 }} gap={8}>
        <Box>
          <HStack spacing={4}>
            <CodeBadge code={program.code} level={program.level === 'Specialist' ? 'Advanced' : program.level} size="lg" />
            <Label color="brand.200">{program.level} program</Label>
          </HStack>
          <Heading as="h3" mt={6} fontSize={{ base: '32px', md: '40px' }} fontWeight={500} lineHeight="1.02">
            {program.title}
          </Heading>
          <Text mt={4} color="whiteAlpha.800">{program.summary}</Text>
        </Box>
        <SimpleGrid columns={2} spacingX={6} spacingY={6} pt={8} borderTop="1px solid" borderColor="whiteAlpha.200">
          <Fact label="Duration">{program.days} days</Fact>
          <Fact label="Program fee" sub={GST_NOTE}>{formatFee(program.fee)}</Fact>
          <Fact label="Format">{program.format}</Fact>
          <Fact label="Ideal for">{program.idealFor}</Fact>
        </SimpleGrid>
        <Stack spacing={3} mt="auto">
          <ArrowButton as="a" href={enquiryUrl(program)} target="_blank" rel="noopener noreferrer" variant="light" icon={PiWhatsappLogoFill} justifyContent="space-between">
            Enquire about {program.code}
          </ArrowButton>
          <Link
            as={RouterLink}
            to={`/contact?enquiry=training&program=${encodeURIComponent(`${program.code} ${program.title}`)}`}
            fontSize="sm"
            color="whiteAlpha.700"
            textAlign="center"
            _hover={{ color: 'white' }}
          >
            or send an enquiry by form
          </Link>
        </Stack>
      </Flex>

      {/* Curriculum */}
      <Box p={{ base: 6, md: 10 }}>
        <Flex justify="space-between" align="baseline" pb={4} borderBottom="2px solid" borderColor="ink.900">
          <Heading as="h4" fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">Curriculum</Heading>
          <Label letterSpacing="0.14em">{program.days}-day schedule</Label>
        </Flex>
        <Box as="ol" listStyleType="none">
          {program.curriculum.map(([days, topic, detail]) => (
            <Grid
              as="li"
              key={days}
              templateColumns={{ base: '84px 1fr', md: '96px 1fr', xl: '96px 1fr auto' }}
              columnGap={4}
              py={3.5}
              borderBottom="1px solid"
              borderColor="gray.100"
              alignItems="baseline"
            >
              <Text fontSize="sm" fontWeight={600} color="brand.700" sx={{ fontVariantNumeric: 'tabular-nums' }}>{days}</Text>
              <Text fontWeight={500} color="ink.900">{topic}</Text>
              <Text gridColumn={{ base: '2', xl: 'auto' }} fontSize="sm" color="gray.500" textAlign={{ xl: 'right' }}>{detail}</Text>
            </Grid>
          ))}
        </Box>
        <Grid templateColumns={{ base: '1fr', md: '96px 1fr' }} columnGap={4} rowGap={1} mt={6} alignItems="baseline">
          <Label color="brand.700" letterSpacing="0.14em">Outcome</Label>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight={500} color="ink.900" letterSpacing="-0.02em">{program.outcome}</Text>
        </Grid>
      </Box>
    </Grid>
  </Bezel>
);

export default function Academy() {
  usePageMeta(
    'Academy — Laundry Training Programs',
    'Whites & Brights Academy: five role-based laundry training programs, 10 to 60 days, taught inside working outlets in Patna. Curriculum, fees and how to enrol.'
  );
  const [searchParams] = useSearchParams();
  // Deep links such as /academy?program=A1 open on that program
  const linked = (searchParams.get('program') || '').toUpperCase();
  const linkedCode = programs.some((p) => p.code === linked) ? linked : null;
  const [selected, setSelected] = useState(linkedCode || programs[0].code);
  const detailRef = useRef(null);
  const program = programs.find((p) => p.code === selected) || programs[0];

  useEffect(() => {
    if (linkedCode) setSelected(linkedCode);
  }, [linkedCode]);

  const select = (code, scroll = true) => {
    setSelected(code);
    if (scroll && detailRef.current) {
      const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Box as="main">
      <PageHero
        dark
        eyebrow={`Whites & Brights Academy · ${EDITION}`}
        title={
          <>
            Laundry training <Accent dark>program.</Accent>
          </>
        }
        description="Professional fabric-care education, taught inside working Whites & Brights outlets — by the people who run them."
        actions={
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
            <ArrowButton as="a" href={enquiryUrl()} target="_blank" rel="noopener noreferrer" variant="light" icon={PiWhatsappLogoFill} justifyContent="space-between">
              Enquire on WhatsApp
            </ArrowButton>
            <Button as="a" href="#programs" variant="glass" h={{ base: 12, md: 14 }} px={6}>
              See the programs
            </Button>
          </Stack>
        }
      >
        <SimpleGrid columns={{ base: 2, lg: 4 }} borderTop="1px solid" borderColor="whiteAlpha.200">
          {stats.map((s, i) => (
            <Box key={s.label} pt={6} pb={2} pr={4} pl={{ base: i % 2 ? 4 : 0, lg: i ? 6 : 0 }} borderLeft={{ base: i % 2 ? '1px solid' : 'none', lg: i ? '1px solid' : 'none' }} borderColor="whiteAlpha.200">
              <Text fontSize={{ base: '36px', md: '56px' }} fontWeight={500} letterSpacing="-0.05em" lineHeight="1" color="brand.200">{s.value}</Text>
              <Text mt={3} fontSize="sm" color="whiteAlpha.800" maxW="200px">{s.label}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </PageHero>

      {/* About */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Label mb={6}>About the academy</Label>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                Learn it where it's <Accent>actually done.</Accent>
              </Heading>
            </Reveal>
            <StaggerGroup>
              <MotionBox variants={fadeUp}>
                <Text fontSize={{ base: 'xl', md: '28px' }} lineHeight="1.35" letterSpacing="-0.02em" color="ink.900">
                  Most laundry courses stop at theory. Ours run on the floor of live Whites & Brights outlets, using the same SOPs, stain charts, quality checks and reports our own stores depend on.
                </Text>
              </MotionBox>
              <MotionBox variants={fadeUp} mt={6}>
                <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="620px">
                  Every program is built for a specific role — owner, manager, washerman, pressman or technician — so trainees spend their time on the work they will actually do. Foundation programs start from zero. Advanced and specialist programs build on real floor experience and go deep on business, garment care or machines.
                </Text>
              </MotionBox>
            </StaggerGroup>
          </Grid>

          <Reveal mt={{ base: 14, md: 20 }}>
            <Label mb={5}>Who it's for</Label>
          </Reveal>
          <StaggerGroup stagger={0.08}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
              {audiences.map((a) => (
                <MotionBox key={a.title} variants={fadeUp} h="100%">
                  <Bezel h="100%" inner={{ p: { base: 6, md: 7 } }}>
                    <Icon as={a.icon} boxSize={8} color="brand.700" />
                    <Heading as="h3" mt={6} fontSize="xl" fontWeight={500} color="ink.900">{a.title}</Heading>
                    <Text mt={2} fontSize="sm" color="gray.600">{a.text}</Text>
                  </Bezel>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>
        </Container>
      </Box>

      {/* Program map + explorer */}
      <Box id="programs" as="section" bg="white" py={{ base: 24, md: 36 }} scrollMarginTop="100px">
        <Container>
          <SectionIntro
            eyebrow="Program map"
            title={<>Five programs. <Accent>One clear path.</Accent></>}
            description="Start with a Foundation program, then specialise. Durations are drawn to scale — pick a program to see its full curriculum."
          />

          <Reveal>
            <Box bg="gray.50" borderRadius="28px" border="1px solid" borderColor="gray.100" p={{ base: 5, md: 8 }}>
              <HStack spacing={5} mb={4} fontSize="xs" color="gray.600" flexWrap="wrap">
                {Object.keys(LEVEL).map((level) => (
                  <HStack key={level} spacing={2}>
                    <Box w={3} h={3} borderRadius="4px" bg={LEVEL[level].bg} />
                    <Text>{level}</Text>
                  </HStack>
                ))}
                <Text ml="auto" display={{ base: 'none', md: 'block' }}>Fee per trainee, excl. 18% GST</Text>
              </HStack>
              <Stack spacing={1}>
                {programs.map((p) => (
                  <ProgramRow key={p.code} program={p} selected={p.code === selected} onSelect={() => select(p.code)} />
                ))}
              </Stack>
            </Box>
          </Reveal>

          {/* Recommended progressions */}
          <Reveal mt={{ base: 10, md: 14 }}>
            <Label mb={5}>Recommended progressions</Label>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              {tracks.map((t) => {
                const from = programs.find((p) => p.code === t.from);
                const to = programs.find((p) => p.code === t.to);
                return (
                  <Flex key={t.title} direction="column" gap={4} p={6} borderRadius="24px" border="1px solid" borderColor="gray.200">
                    <HStack spacing={3}>
                      <Button onClick={() => select(from.code)} variant="unstyled" h="auto" minW={0} aria-label={`Show ${from.code} ${from.title}`}>
                        <CodeBadge code={from.code} level={from.level} />
                      </Button>
                      <Box flex={1} borderTop="2px dotted" borderColor="brand.500" />
                      <Icon as={PiArrowRight} color="brand.700" />
                      <Button onClick={() => select(to.code)} variant="unstyled" h="auto" minW={0} aria-label={`Show ${to.code} ${to.title}`}>
                        <CodeBadge code={to.code} level={to.level} />
                      </Button>
                    </HStack>
                    <Text fontWeight={500} color="ink.900">{t.title}</Text>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Reveal>

          {/* Explorer */}
          <Box ref={detailRef} mt={{ base: 14, md: 20 }}>
            <HStack spacing={2} mb={5} overflowX="auto" sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }} role="tablist" aria-label="Programs">
              {programs.map((p) => {
                const isActive = p.code === selected;
                return (
                  <Button
                    key={p.code}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => select(p.code, false)}
                    flexShrink={0}
                    h="44px"
                    px={5}
                    fontSize="sm"
                    variant="ghost"
                    bg={isActive ? 'ink.900' : 'gray.50'}
                    color={isActive ? 'white' : 'gray.700'}
                    border="1px solid"
                    borderColor={isActive ? 'ink.900' : 'gray.200'}
                    _hover={{ bg: isActive ? 'ink.900' : 'gray.100' }}
                    transition={`all 0.4s ${EASE}`}
                  >
                    {p.code}
                    <Text as="span" ml={2} fontWeight={400} display={{ base: 'none', md: 'inline' }} color={isActive ? 'whiteAlpha.800' : 'gray.500'}>{p.title}</Text>
                  </Button>
                );
              })}
            </HStack>
            <AnimatePresence mode="wait" initial={false}>
              <MotionBox
                key={program.code}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              >
                <ProgramDetail program={program} />
              </MotionBox>
            </AnimatePresence>
          </Box>
        </Container>
      </Box>

      {/* Enrolment */}
      <Box as="section" bg="gray.50" py={{ base: 24, md: 36 }}>
        <Container>
          <SectionIntro
            eyebrow="Enrolment"
            title={<>Four steps <Accent>to your first day.</Accent></>}
            description="Batches fill on a first-come basis and run year-round. Batch dates are shared when you enquire."
          />
          <StaggerGroup stagger={0.1}>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10, lg: 6 }}>
              {enrolSteps.map((s, i) => (
                <MotionBox key={s.title} variants={fadeUp}>
                  <Box h="3px" bg={i === 0 ? 'brand.500' : 'ink.900'} borderRadius="full" mb={6} />
                  <Text fontFamily="serif" fontStyle="italic" fontSize="5xl" lineHeight="1" color="gray.300">0{i + 1}</Text>
                  <Heading as="h3" mt={4} fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} color="ink.900">{s.title}</Heading>
                  <Text mt={2} color="gray.600" maxW="280px">{s.text}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </StaggerGroup>

          <Reveal mt={{ base: 16, md: 24 }}>
            <Label mb={5}>Included with every program</Label>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} bg="white" borderRadius="28px" border="1px solid" borderColor="gray.200" overflow="hidden">
              {included.map((item) => (
                <HStack key={item.title} align="flex-start" spacing={4} p={{ base: 6, md: 8 }} boxShadow="0 0 0 0.5px var(--chakra-colors-gray-200)">
                  <Icon as={item.icon} boxSize={7} color="brand.700" flexShrink={0} />
                  <Box>
                    <Text fontWeight={500} color="ink.900" fontSize="lg">{item.title}</Text>
                    <Text mt={1} fontSize="sm" color="gray.600">{item.text}</Text>
                  </Box>
                </HStack>
              ))}
            </SimpleGrid>
          </Reveal>
        </Container>
      </Box>

      {/* Fees + FAQ */}
      <Box as="section" bg="white" py={{ base: 24, md: 36 }}>
        <Container>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 20 }}>
            <Reveal>
              <Label mb={6}>Fees & payment</Label>
              <Heading fontSize={{ base: '36px', md: '56px' }} fontWeight={500} color="ink.900">
                Clear fees, <Accent>paid upfront.</Accent>
              </Heading>
              <Stack spacing={3} mt={8}>
                {[
                  `From ${formatFee(Math.min(...programs.map((p) => p.fee)))} to ${formatFee(Math.max(...programs.map((p) => p.fee)))} per trainee`,
                  'Exclusive of 18% GST',
                  'Paid in full by bank transfer before the batch begins',
                ].map((line) => (
                  <HStack key={line} spacing={3} align="flex-start">
                    <Icon as={PiCheckBold} boxSize={3.5} color="brand.700" mt="5px" />
                    <Text color="gray.700">{line}</Text>
                  </HStack>
                ))}
              </Stack>
            </Reveal>
            <Reveal>
              <FaqList items={faqs} />
            </Reveal>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container>
          <Reveal>
            <Bezel radius={40} pad={8} inner={{ bg: 'ink.900', color: 'white', p: { base: 8, md: 16 } }}>
              <Grid templateColumns={{ base: '1fr', lg: '1.3fr 1fr' }} gap={{ base: 10, lg: 16 }} alignItems="end">
                <Box>
                  <Label color="brand.200">Batches open year-round</Label>
                  <Heading mt={6} fontSize={{ base: '44px', md: '72px' }} fontWeight={500} lineHeight="0.98" letterSpacing="-0.05em">
                    Start your <Accent dark>training.</Accent>
                  </Heading>
                  <Text mt={6} color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} maxW="460px">
                    Speak to our team about the right program, upcoming batch dates and group enrolment for franchise partners.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} mt={10}>
                    <ArrowButton as="a" href={enquiryUrl()} target="_blank" rel="noopener noreferrer" variant="light" icon={PiWhatsappLogoFill} justifyContent="space-between">
                      WhatsApp us
                    </ArrowButton>
                    <Button as="a" href={`tel:${PHONE_TEL}`} variant="glass" h={{ base: 12, md: 14 }} px={6} leftIcon={<Icon as={PiPhoneLight} boxSize={5} />}>
                      {PHONE_DISPLAY}
                    </Button>
                  </Stack>
                </Box>
                <Stack spacing={0} borderTop="1px solid" borderColor="whiteAlpha.200">
                  <Flex as="a" href={`mailto:${EMAIL}`} align="center" gap={4} py={5} borderBottom="1px solid" borderColor="whiteAlpha.200" role="group">
                    <Icon as={PiEnvelopeSimpleLight} boxSize={6} color="brand.200" />
                    <Box flex={1}>
                      <Label color="whiteAlpha.600" letterSpacing="0.14em">E-mail</Label>
                      <Text mt={1} fontWeight={500} wordBreak="break-word">{EMAIL}</Text>
                    </Box>
                    <Icon as={PiArrowUpRight} color="whiteAlpha.500" transition={`transform 0.4s ${EASE}`} _groupHover={{ transform: 'translate(2px,-2px)', color: 'white' }} />
                  </Flex>
                  <Flex align="center" gap={4} py={5} borderBottom="1px solid" borderColor="whiteAlpha.200">
                    <Icon as={PiMapPinLight} boxSize={6} color="brand.200" />
                    <Box>
                      <Label color="whiteAlpha.600" letterSpacing="0.14em">Head office</Label>
                      <Text mt={1} fontWeight={500}>{HEAD_OFFICE}</Text>
                    </Box>
                  </Flex>
                </Stack>
              </Grid>
            </Bezel>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
