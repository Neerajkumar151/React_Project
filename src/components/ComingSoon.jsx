import React from 'react';
import Button from './ui/Button';

const ComingSoon = ({ pageName, onGoBack }) => {
  const formattedName = pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : 'Feature';

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <div className="relative mb-10 animate-float">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-primary opacity-20 blur-2xl rounded-full animate-pulse-soft"></div>
        
        {/* Icon container */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-gray-100 transform transition-transform hover:scale-105 hover:rotate-3 duration-300">
          <span className="material-symbols-outlined text-[48px] md:text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            construction
          </span>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-gray-900">
        <span className="gradient-text">Page</span> in progress.
      </h2>
      
      <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
        We're politely crafting a generous and powerful <strong className="text-gray-800">{formattedName}</strong> experience behind the scenes. It will be available very soon!
      </p>
      
      <Button variant="primary" onClick={onGoBack}>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          Return to Dashboard
        </div>
      </Button>
    </div>
  );
};

export default ComingSoon;
