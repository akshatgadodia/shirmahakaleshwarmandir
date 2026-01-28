import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const { currentLanguage, switchLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-all border border-orange-200 hover:border-orange-400"
      >
        <Globe className="w-4 h-4 text-orange-600" />
        <span className="font-sans text-sm text-gray-700">{currentLang?.nativeName}</span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-orange-200 z-40 overflow-hidden">
            <div className="py-2">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 font-sans text-sm transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-orange-50 text-orange-700 font-semibold'
                      : 'text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{lang.nativeName}</span>
                    {currentLanguage === lang.code && (
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{lang.name}</div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
