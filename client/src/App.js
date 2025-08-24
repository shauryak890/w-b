import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

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

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'gray.50',
      },
    },
  },
  colors: {
    brand: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00B4C5',  // Primary brand color
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#02495A',  // Darker brand color
    },
    accent: {
      50: '#F0F4FF',
      100: '#DBE4FF',
      200: '#BAC8FF',
      300: '#99ACFF',
      400: '#7890FF',
      500: '#5774FF',  // Secondary accent color
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
      500: '#FF406E',  // Highlight color
      600: '#FF1A51',
      700: '#F0003D',
      800: '#BD0030',
      900: '#8A0023',
    },
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/associate" element={<Associate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/policies/terms-of-service" element={<TermsOfService />} />
            <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <WhatsappButton />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
