import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Deities from './pages/Deities';
import Timings from './pages/Timings';
import Events from './pages/Events';
import TrusteesPage from './pages/TrusteesPage';
import Committee from './pages/Committee';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'deities':
        return <Deities />;
      case 'timings':
        return <Timings />;
      case 'events':
        return <Events />;
      case 'trustees':
        return <TrusteesPage />;
      case 'committee':
        return <Committee />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-serif">
        {/* Decorative Border Pattern */}
        <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 z-50"></div>
        <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 z-50"></div>
        
        <Navigation
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          scrolled={scrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main>
          {renderSection()}
        </main>

        <Footer setActiveSection={handleSectionChange} />
      </div>
    </LanguageProvider>
  );
}

export default App;
