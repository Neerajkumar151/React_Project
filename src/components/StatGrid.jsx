import React from 'react';
import { stats } from '../constants/stats';

/**
 * StatItem — renders a single stat card.
 * Extracted as its own component so it's independently reusable.
 */
function StatItem({ stat }) {
  const trendColor = stat.trendType === 'up'
    ? 'text-green-600'
    : stat.trendType === 'down'
      ? 'text-red-600'
      : 'text-gray-500';

  const trendIcon = stat.trendType === 'up'
    ? 'trending_up'
    : stat.trendType === 'down'
      ? 'trending_down'
      : null;

  return (
    <div
      className="rounded-xl p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(53,37,205,0.15)] cursor-pointer"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
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
          <span
            className="material-symbols-outlined text-[28px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {stat.icon}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {trendIcon && (
          <span className={`material-symbols-outlined text-[16px] ${trendColor}`}>
            {trendIcon}
          </span>
        )}
        <span className={`text-sm font-medium ${trendColor}`}>
          {stat.trend}
        </span>
      </div>
    </div>
  );
}

/**
 * StatGrid — renders the dashboard stats grid.
 * Add new stats in constants/stats.js — no changes needed here.
 */
function StatGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

export default StatGrid;
