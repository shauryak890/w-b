import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/associate" element={<Associate />} />
            <Route path="/careers" element={<Careers />} />
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
