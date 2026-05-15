import React, { useState, useRef, useMemo } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import useDebounce from '../../hooks/useDebounce';
import { useCreatorsContext } from '../../context/CreatorsContext';

function SearchInput({ value, onChange, placeholder, className = '', style = {}, onSelect }) {
  const { creators } = useCreatorsContext();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setIsOpen(false), isOpen);

  // Debounce the input value for suggestions dropdown
  const debouncedValue = useDebounce(value, 300);

  const suggestions = useMemo(() => {
    if (!debouncedValue || debouncedValue.trim() === '') return [];
    const q = debouncedValue.toLowerCase();
    return creators
      .filter((c) => c.name.toLowerCase().includes(q) || c.handle.toLowerCase().includes(q))
      .slice(0, 5); // top 5 suggestions
  }, [debouncedValue]);

  const handleSelect = (creator) => {
    onChange(creator.name);
    setIsOpen(false);
    if (onSelect) onSelect(creator);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <span
        className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px]"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        search
      </span>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="focus:ring-2 focus:ring-primary-container transition-all"
        style={{
          width: '100%',
          padding: '8px 12px 8px 36px',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-main)',
          color: 'var(--color-text-primary)',
          fontSize: '0.875rem',
          outline: 'none',
          ...style,
        }}
      />

      {isOpen && suggestions.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-xl shadow-xl border overflow-hidden z-50 animate-fade-in"
          style={{ backgroundColor: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}
        >
          {suggestions.map((creator, index) => (
            <div
              key={creator.id}
              onClick={() => handleSelect(creator)}
              className="notif-item flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors"
              style={{
                borderBottom: index < suggestions.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-bold truncate" style={{ color: 'var(--color-text-primary)' }}>
                  {creator.name}
                </p>
                <p className="text-xs truncate" style={{ color: 'var(--color-text-secondary)' }}>
                  {creator.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
