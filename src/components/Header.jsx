import React, { useState, useRef } from 'react';
import useTheme from '../hooks/useTheme';
import useClickOutside from '../hooks/useClickOutside';
import SearchInput from './ui/SearchInput';

// Static notification data — move to constants/notifications.js when this feature is built.
const notifications = [
  { id: 1, message: 'Sarah Jenkins liked your post', time: '2 minutes ago' },
  { id: 2, message: 'New follower: @design_guru',    time: '1 hour ago' },
  { id: 3, message: 'System update completed',       time: 'Yesterday' },
];

/**
 * Header — top navigation bar.
 * Uses useTheme for dark mode and useClickOutside for the notification dropdown.
 */
function Header({ onMenuClick }) {
  const { isDark, toggleTheme } = useTheme();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');

  useClickOutside(notifRef, () => setIsNotifOpen(false), isNotifOpen);

  return (
    <header
      className="header relative z-40 flex items-center justify-between px-3 md:px-6 py-2 md:py-4"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0">
          <span
            className="material-symbols-outlined text-[18px] md:text-[24px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            cloud
          </span>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-black text-primary tracking-tight leading-none mb-1">
            Nexora
          </h1>
          <p className="text-[10px] md:text-sm font-medium text-on-surface-variant leading-none hidden sm:block">
            Where creators build influence
          </p>
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Search (desktop) */}
        <div className="hidden md:block w-[20vw] relative z-50">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search creators..."
            style={{ borderRadius: '9999px' }}
            onSelect={(creator) => {
              console.log('Selected creator from Header:', creator.name);
              // In the future, this might navigate to /creators/:id
            }}
          />
        </div>

        {/* Search icon (mobile) */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>

        {/* Theme toggle */}
        <button
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors"
          title={isDark ? 'Light Mode' : 'Dark Mode'}
          onClick={toggleTheme}
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors relative"
            title="Notifications"
            onClick={() => setIsNotifOpen((prev) => !prev)}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span className="material-symbols-outlined text-[20px] md:text-[24px]">notifications</span>
            <span className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
          </button>

          {isNotifOpen && (
            <div
              className="absolute right-0 mt-2 w-72 md:w-80 rounded-xl shadow-xl py-2 border z-50 animate-fade-in"
              style={{ backgroundColor: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}
            >
              <div
                className="px-4 py-2 border-b font-bold flex justify-between items-center"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}
              >
                Notifications
                <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">
                  {notifications.length} New
                </span>
              </div>

              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notif, index) => (
                  <div
                    key={notif.id}
                    className="notif-item px-4 py-3 cursor-pointer transition-colors"
                    style={{
                      borderBottom: index < notifications.length - 1
                        ? `1px solid var(--color-border)`
                        : 'none',
                    }}
                  >
                    <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
                      {notif.message}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                      {notif.time}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="px-4 py-2 border-t text-center cursor-pointer text-sm font-bold text-primary mt-1 hover-text-primary"
                style={{ borderColor: 'var(--color-border)' }}
              >
                View All
              </div>
            </div>
          )}
        </div>

        {/* User profile */}
        <div
          className="flex items-center gap-2 md:gap-3 pl-2 md:pl-6 border-l"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="text-right hidden sm:block">
            <p
              className="text-xs md:text-sm font-bold leading-none mb-1"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Neeraj Kumar
            </p>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Neeraj+Kumar&background=3525cd&color=fff&bold=true"
            alt="User Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 cursor-pointer hover:opacity-70 transition-opacity shrink-0"
            style={{ borderColor: 'var(--color-border)' }}
          />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex items-center justify-center p-1 rounded transition-colors"
          onClick={onMenuClick}
          title="Open Menu"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '30px' }}>
            menu
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
