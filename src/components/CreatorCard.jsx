import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { getStatusColor } from '../utils/colors';

/**
 * CreatorCard — displays a single creator's profile card.
 * Accepts a `creator` object from constants/creators.js.
 * Ready for future routing via creator.id.
 */
function CreatorCard({ creator, onViewProfile }) {
  return (
    <Card
      className="overflow-hidden flex flex-col transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(53,37,205,0.15)] cursor-pointer group"
      bgColor="var(--color-bg-surface)"
      style={{ padding: 0, margin: 0 }}
    >
      {/* Banner */}
      <div
        className={`h-24 bg-gradient-to-r ${creator.bannerGradient} relative transition-transform duration-700 ease-out group-hover:scale-105 origin-bottom`}
      />

      {/* Profile Content */}
      <div className="px-6 pb-6 -mt-10 flex flex-col items-center text-center relative z-10">
        {/* Avatar */}
        <div className="relative mb-3">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-20 h-20 rounded-full border-4 object-cover"
            style={{ borderColor: 'var(--color-bg-surface)' }}
          />
          {creator.isVerified && (
            <span
              className={`material-symbols-outlined absolute bottom-0 right-0 ${getStatusColor('verified')} text-white text-[16px] p-0.5 rounded-full border-2`}
              style={{ fontVariationSettings: "'FILL' 1", borderColor: 'var(--color-bg-surface)' }}
            >
              verified
            </span>
          )}
        </div>

        <h4 className="font-bold text-lg mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
          {creator.name}
        </h4>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          {creator.handle}
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 w-full mb-6">
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {creator.followers}
            </p>
            <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Followers
            </p>
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {creator.reactions}
            </p>
            <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Reactions
            </p>
          </div>
        </div>

        <Button
          text="View Profile"
          bgColor="var(--color-primary)"
          textColor="var(--color-text-inverse)"
          onClick={() => onViewProfile && onViewProfile(creator.id)}
        />
      </div>
    </Card>
  );
}

export default CreatorCard;
