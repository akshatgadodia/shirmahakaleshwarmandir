import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navigation = ({ activeSection, setActiveSection, scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.deities'), id: 'deities' },
    { name: t('nav.timings'), id: 'timings' },
    { name: t('nav.events'), id: 'events' },
    { name: t('nav.trustees'), id: 'trustees' },
    { name: t('nav.committee'), id: 'committee' },
    { name: t('nav.gallery'), id: 'gallery' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                {t('header.temple_name')}
              </h1>
              {/* <p className="text-xs text-orange-600 font-sans">{t('header.location_short')}</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all font-sans text-sm ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-orange-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-orange-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-200 shadow-lg">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 font-sans ${
                activeSection === item.id ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-600' : 'text-gray-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
