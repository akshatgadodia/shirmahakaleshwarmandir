import React from 'react';

const ShivaDivider = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-600"></div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-200 overflow-hidden transform hover:scale-110 transition-transform">
          <img 
            src="/images/shiva-logo.jpg" 
            alt="Om" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-600"></div>
      </div>
    </div>
  );
};

export default ShivaDivider;