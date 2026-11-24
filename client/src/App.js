import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import TermsOfService from './pages/policies/TermsOfService';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import Franchise from './pages/Franchise';
import Associate from './pages/Associate';
import CSR from './pages/CSR';
import Careers from './pages/Careers';
import DeleteAccount from './pages/DeleteAccount';
import Academy from './pages/Academy';
import NotFound from './pages/NotFound';

// CSS-only so a page is never left invisible if scripts or animations stall
const pageIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Routes wrapped so each page fades in when the path changes
function Pages() {
  const location = useLocation();
  return (
    <Box key={location.pathname} flex="1" animation={`${pageIn} 0.45s ease-out`}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/associate" element={<Associate />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/policies/terms-of-service" element={<TermsOfService />} />
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Flex direction="column" minH="100dvh">
          <Navbar />
          <Pages />
          <Footer />
          <WhatsappButton />
          <MobileActionBar />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
