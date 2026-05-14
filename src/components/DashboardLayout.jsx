import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const DashboardLayout = ({ children, currentPage, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    // Close sidebar on mobile after clicking a link
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-container relative h-screen flex flex-col overflow-hidden">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="dashboard-main relative flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={isSidebarOpen} 
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto" style={{ backgroundColor: 'var(--color-bg-main)' }}>
          <main className="flex-1 p-4 md:p-8 w-full max-w-[1600px] mx-auto">
            {children}
          </main>
          <Footer onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
