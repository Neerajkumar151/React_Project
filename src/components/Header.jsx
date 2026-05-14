import React, { useState, useEffect, useRef } from 'react';

const Header = ({ onMenuClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Apply theme change to HTML document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Click-outside listener to close the notification dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    };

    if (isNotifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotifOpen]);

  return (
    <header className="header relative z-40 bg-white dark:bg-gray-900 flex items-center justify-between px-3 md:px-6 py-2 md:py-4" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      {/* 1. Left side: Logo and Text */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0">
          <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-black text-primary tracking-tight leading-none mb-1">Nexora</h1>
          <p className="text-[10px] md:text-sm font-medium text-on-surface-variant leading-none hidden sm:block">Where creators build influence</p>
        </div>
      </div>

      {/* Right Side Group */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* 2. Search Bar (Hidden on Mobile) */}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" style={{ fontSize: '20px' }}>search</span>
          <input 
            type="text" 
            className="pl-10 pr-4 py-2 border rounded-full w-[20vw] focus:ring-2 transition-all focus:ring-primary-container" 
            placeholder="Search creators, posts, or insights..."
            style={{ 
              borderColor: 'var(--color-border)', 
              backgroundColor: 'var(--color-bg-main)',
              color: 'var(--color-text-primary)'
            }}
          />
        </div>

        {/* Mobile Search Icon (Shows only on small screens) */}
        <button className="md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>

        {/* 3. Theme Toggle */}
        <button 
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors" 
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* 4. Notification Icon & Dropdown */}
        <div className="relative" ref={notifRef}>
          <button 
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors relative" 
            title="Notifications"
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span className="material-symbols-outlined text-[20px] md:text-[24px]">notifications</span>
            <span className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* Notification Dropdown Menu */}
          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-72 md:w-80 rounded-xl shadow-xl py-2 border z-50 animate-fade-in" style={{ backgroundColor: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}>
              <div className="px-4 py-2 border-b font-bold flex justify-between items-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}>
                Notifications
                <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">3 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 border-b cursor-pointer transition-colors" style={{ borderColor: 'var(--color-border)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-main)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>Sarah Jenkins liked your post</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>2 minutes ago</p>
                </div>
                <div className="px-4 py-3 border-b cursor-pointer transition-colors" style={{ borderColor: 'var(--color-border)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-main)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>New follower: @design_guru</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>1 hour ago</p>
                </div>
                <div className="px-4 py-3 cursor-pointer transition-colors" onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-main)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>System update completed</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>Yesterday</p>
                </div>
              </div>
              <div className="px-4 py-2 border-t text-center cursor-pointer hover:underline text-sm font-bold text-primary mt-1" style={{ borderColor: 'var(--color-border)' }}>
                View All
              </div>
            </div>
          )}
        </div>

        {/* 5. Logged In User Profile */}
        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-6 border-l" style={{ borderColor: 'var(--color-border)' }}>
          <div className="text-right hidden sm:block">
            <p className="text-xs md:text-sm font-bold color-text-primary leading-none mb-1">Neeraj Kumar</p>
          </div>
          <img 
            src="https://ui-avatars.com/api/?name=Neeraj+Kumar&background=3525cd&color=fff&bold=true" 
            alt="User Profile" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 cursor-pointer hover:opacity-70 transition-opacity shrink-0"
            style={{ borderColor: 'var(--color-border)' }}
          />
        </div>

        {/* Hamburger Menu (Mobile Only) - Moved to Right Side */}
        <button 
          className="md:hidden flex items-center justify-center p-1 rounded hover:bg-gray-100 transition-colors"
          onClick={onMenuClick}
          title="Open Menu"
        >
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '30px' }}>menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
