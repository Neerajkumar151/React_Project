import React from 'react';
import Button from './ui/Button';
import CreatorCard from './CreatorCard';
import { creators } from '../constants/creators';

/**
 * FeaturedCreators — renders a grid of creator cards from centralized data.
 * Add more creators in constants/creators.js — this component needs no changes.
 */
function FeaturedCreators({ onViewAll, onViewProfile }) {
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
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCreators;
