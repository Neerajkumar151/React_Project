import React from 'react';

const stats = [
  {
    title: 'Total Blogs',
    value: '142',
    trend: '+12% from last month',
    trendUp: true,
    icon: 'article',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Total Followers',
    value: '24.5K',
    trend: '+800 new this week',
    trendUp: true,
    icon: 'group',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Total Reactions',
    value: '1.2M',
    trend: '1.1M Likes • 100K Dislikes',
    trendUp: true,
    icon: 'favorite',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  }
];

const StatCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="rounded-xl p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(53,37,205,0.15)] cursor-pointer"
          style={{ 
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)'
          }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.title}
              </p>
              <h3 className="text-3xl font-black" style={{ color: 'var(--color-text-primary)' }}>
                {stat.value}
              </h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg} ${stat.iconColor}`}>
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {stat.icon}
              </span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-1.5">
            {stat.title !== 'Total Reactions' && (
              <span className={`material-symbols-outlined text-[16px] ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trendUp ? 'trending_up' : 'trending_down'}
              </span>
            )}
            <span 
              className={`text-sm font-medium ${stat.title !== 'Total Reactions' ? (stat.trendUp ? 'text-green-600' : 'text-red-600') : 'text-gray-500'}`}
            >
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;
