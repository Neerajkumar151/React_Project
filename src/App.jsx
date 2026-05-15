import { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import StatGrid from './components/StatGrid';
import ComingSoon from './components/ComingSoon';
import FeaturedCreators from './components/FeaturedCreators';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' ? (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
              Welcome back, Neeraj! 👋
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
      ) : (
        <ComingSoon pageName={currentPage} onGoBack={() => setCurrentPage('dashboard')} />
      )}
    </DashboardLayout>
  );
}

export default App;
