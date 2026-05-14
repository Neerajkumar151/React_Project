import React from 'react';

const Sidebar = ({ isOpen, currentPage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'creators', icon: 'group', label: 'Creators' },
    { id: 'analytics', icon: 'analytics', label: 'Analytics' },
    { id: 'posts', icon: 'article', label: 'Posts' },
    { id: 'notifications', icon: 'notifications', label: 'Notifications' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <aside className={`
      sidebar flex flex-col
      absolute md:relative z-30 h-full md:h-auto
      transition-all duration-300 ease-in-out
      w-64 md:w-24 lg:w-64 shrink-0
      px-4 py-6 md:px-3 lg:px-4
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <nav className="flex-1 overflow-y-auto overflow-x-visible custom-scrollbar">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`flex items-center gap-4 cursor-pointer px-4 py-3 md:px-0 md:justify-center lg:px-4 lg:justify-start rounded-lg ${currentPage === item.id ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined text-[24px] shrink-0">{item.icon}</span>
                <span className="md:hidden lg:block whitespace-nowrap">{item.label}</span>
              </a>
              
              {/* Custom Tooltip for collapsed state */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-md opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible lg:hidden transition-all duration-200 z-50 whitespace-nowrap shadow-xl">
                {item.label}
                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-4 mt-8 border-t shrink-0 overflow-visible" style={{ borderColor: 'var(--color-border)' }}>
        <div className="relative group">
          <button 
            className="flex items-center gap-4 text-red-600 hover:bg-red-50 w-full px-4 py-3 md:px-0 md:justify-center lg:px-4 lg:justify-start rounded-lg transition-colors font-medium"
          >
            <span className="material-symbols-outlined text-[24px] shrink-0">logout</span>
            <span className="md:hidden lg:block whitespace-nowrap">Log Out</span>
          </button>

          {/* Custom Tooltip for Log Out */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-md opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible lg:hidden transition-all duration-200 z-50 whitespace-nowrap shadow-xl">
            Log Out
            <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
