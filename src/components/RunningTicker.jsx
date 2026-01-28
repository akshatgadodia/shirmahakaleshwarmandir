import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import tickerMessages from '../data/tickerMessages.json';

const RunningTicker = () => {
  const { currentLanguage } = useLanguage();

  const tickerItems = tickerMessages.map(message => message[currentLanguage]);

  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-sans font-semibold">
          {tickerItems.join(' • ')} • {tickerItems.join(' • ')}
        </span>
      </div>
    </div>
  );
};

export default RunningTicker;
