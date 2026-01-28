import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.deities'), id: 'deities' },
    { name: t('nav.events'), id: 'events' },
  ];

  return (
    <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{t('header.temple_trust_name')}</h3>
            </div>
            <p className="text-orange-200 font-sans">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quick_links')}</h4>
            <div className="space-y-2 font-sans">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="block text-orange-200 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.temple_timings')}</h4>
            <div className="space-y-2 text-orange-200 font-sans">
              <p>{t('footer.morning_timings')}</p>
              <p>{t('footer.evening_timings')}</p>
              <p className="mt-4 font-bold text-white">{t('footer.daily_aarti')}</p>
              <p>{t('footer.aarti_times')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-700 pt-8 text-center">
          <p className="text-orange-200 font-sans">
            {t('footer.copyright')}
          </p>
          <p className="text-orange-300 mt-2 text-2xl">{t('footer.mantra')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
