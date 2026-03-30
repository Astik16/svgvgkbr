import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import HistorySection from './components/HistorySection';
import ActivitiesSection from './components/ActivitiesSection';
import GallerySection from './components/GallerySection';
import SymbolsSection from './components/SymbolsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#f0ead6]">
      <NavBar scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <SymbolsSection />
      <ActivitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
