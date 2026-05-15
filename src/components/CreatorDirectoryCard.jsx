import React from 'react';
import Button from './ui/Button';
import { getStatusColor } from '../utils/colors';

/**
 * CreatorDirectoryCard — card for the Creators Directory page.
 * Different from CreatorCard (dashboard) — no banner, shows engagement, has Manage + message actions.
 */
function CreatorDirectoryCard({ creator, onManage, onMessage }) {
  return (
    <div
      className="flex flex-col rounded-2xl p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(53,37,205,0.2)] cursor-pointer h-full"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Avatar + badges */}
      <div className="flex flex-col items-center text-center gap-4 mb-6 mt-2">
        <div className="relative shrink-0">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-24 h-24 rounded-full object-cover shadow-sm"
            style={{ border: '4px solid var(--color-border)' }}
          />
          {/* Online status dot */}
          <span
            className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4`}
            style={{
              backgroundColor: creator.isOnline ? '#22c55e' : '#94a3b8',
              borderColor: 'var(--color-bg-surface)',
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h4
              className="font-black text-xl truncate"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {creator.name}
            </h4>
            {creator.isVerified && (
              <span
                className={`material-symbols-outlined text-[20px] shrink-0 ${getStatusColor('verified')} bg-clip-text`}
                style={{ fontVariationSettings: "'FILL' 1", color: 'var(--color-primary)' }}
              >
                verified
              </span>
            )}
          </div>
          <p className="text-base truncate font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {creator.handle}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div
        className="flex justify-around gap-6 py-5 mb-6 mt-auto border-t border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Followers
          </p>
          <p className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>
            {creator.followers}
          </p>
        </div>
        <div className="text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Reactions
          </p>
          <p className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>
            {creator.reactions}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          text="Manage"
          bgColor="var(--color-primary)"
          textColor="var(--color-text-inverse)"
          onClick={() => onManage && onManage(creator.id)}
          className="flex-1 text-base font-bold shadow-md hover:shadow-lg transition-shadow"
          style={{ padding: '12px 16px' }}
        />
      </div>
    </div>
  );
}

export default React.memo(CreatorDirectoryCard);
