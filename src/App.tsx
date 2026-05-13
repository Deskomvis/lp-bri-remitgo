import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreviewSlider from './components/AppPreviewSlider';
import ProblemSection from './components/ProblemSection';
import USPSection from './components/USPSection';
import HowToSection from './components/HowToSection';
import TrustSection from './components/TrustSection';
import PromoSection from './components/PromoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AppPreviewSlider />
      <ProblemSection />
      <USPSection />
      <HowToSection />
      <TrustSection />
      <PromoSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
