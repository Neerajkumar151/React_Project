import React from 'react';
import Button from './ui/Button';
import CreatorCard from './CreatorCard';
import { useCreatorsContext } from '../context/CreatorsContext';

/**
 * FeaturedCreators — renders a grid of creator cards from centralized data.
 * Add more creators in constants/creators.js — this component needs no changes.
 */
function FeaturedCreators({ onViewAll, onViewProfile }) {
  const { creators, isLoading, error } = useCreatorsContext();

  return (
    <section className="mt-10 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Featured Creators
        </h3>
        <Button
          text="View All"
          bgColor="var(--color-bg-surface)"
          textColor="var(--color-text-primary)"
          onClick={onViewAll}
          style={{ border: '1px solid var(--color-border)' }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="col-span-full text-center text-sm text-gray-500 py-10">Loading featured creators...</p>
        ) : error ? (
          <p className="col-span-full text-center text-sm text-red-500 py-10">{error}</p>
        ) : creators.length === 0 ? (
          <p className="col-span-full text-center text-sm text-gray-500 py-10">No creators found.</p>
        ) : (
          creators.slice(0, 3).map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onViewProfile={onViewProfile}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default FeaturedCreators;
