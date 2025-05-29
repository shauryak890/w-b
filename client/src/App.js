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
      50: '#E0F7FF',
      100: '#B8EBFF',
      200: '#8BDFFF',
      300: '#5ED3FF',
      400: '#31C7FF',
      500: '#04BBFF',  // Primary brand color
      600: '#0095CC',
      700: '#007099',
      800: '#004B66',
      900: '#002533',
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
            <Route path="/franchise" element={<Franchise />} />
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
