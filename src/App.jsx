import { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import StatGrid from './components/StatGrid';
import ComingSoon from './components/ComingSoon';
import FeaturedCreators from './components/FeaturedCreators';
import CreatorsPage from './pages/CreatorsPage';
import { ThemeProvider } from './context/ThemeContext';
import { CreatorsProvider } from './context/CreatorsContext';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const user="Neeraj Kumar";

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                Welcome back, {user}! 👋
              </h2>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                Here is what's happening with your creator profile today.
              </p>
            </div>
            <StatGrid />
            <FeaturedCreators
              onViewAll={() => setCurrentPage('creators')}
              onViewProfile={(id) => console.log('View profile:', id)}
            />
          </>
        );
      case 'creators':
        return <CreatorsPage />;
      default:
        return <ComingSoon pageName={currentPage} onGoBack={() => setCurrentPage('dashboard')} />;
    }
  };

  return (
    <ThemeProvider>
      <CreatorsProvider>
        <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
          {renderPage()}
        </DashboardLayout>
      </CreatorsProvider>
    </ThemeProvider>
  );
}

export default App;
