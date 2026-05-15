import React from 'react';
import Button from './ui/Button';

/**
 * ComingSoon — shown for pages that haven't been built yet.
 * Uses CSS variables for all colors to fully support dark mode.
 */
function ComingSoon({ pageName, onGoBack }) {
  const formattedName = pageName
    ? pageName.charAt(0).toUpperCase() + pageName.slice(1)
    : 'Feature';

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <div className="relative mb-10 animate-float">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-primary opacity-20 blur-2xl rounded-full animate-pulse-soft" />

        {/* Icon container */}
        <div
          className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-xl flex items-center justify-center transform transition-transform hover:scale-105 hover:rotate-3 duration-300"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span
            className="material-symbols-outlined text-[48px] md:text-[64px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            construction
          </span>
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
        <span className="gradient-text">Page</span> in progress.
      </h2>

      <p
        className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        We're crafting a powerful{' '}
        <strong style={{ color: 'var(--color-text-primary)' }}>{formattedName}</strong>{' '}
        experience behind the scenes. It will be available very soon!
      </p>

      <Button
        bgColor="var(--color-primary)"
        textColor="var(--color-text-inverse)"
        onClick={onGoBack}
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          Return to Dashboard
        </div>
      </Button>
    </div>
  );
}

export default ComingSoon;
