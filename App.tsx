import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import AboutSection from './AboutSection';
import HistorySection from './HistorySection';
import ActivitiesSection from './ActivitiesSection';
import GallerySection from './GallerySection';
import SymbolsSection from './SymbolsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import BlogPage from './BlogPage';
import NewsFeedSection from './NewsFeedSection';
import CommunityPage from './CommunityPage';

const BLOG_HASH_ROUTE = '#/blog';
const COMMUNITY_HASH_ROUTE = '#/community';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [hashRoute, setHashRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setHashRoute(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    handleHashChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (hashRoute === BLOG_HASH_ROUTE) {
    return <BlogPage />;
  }
  if (hashRoute === COMMUNITY_HASH_ROUTE) {
    return <CommunityPage />;
  }

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#f0ead6]">
      <NavBar scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <SymbolsSection />
      <ActivitiesSection />
      <NewsFeedSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
