import React from 'react';

/**
 * Loading skeleton that matches the exact dimensions of CreatorDirectoryCard
 */
function CreatorDirectoryCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-2xl p-6 md:p-8 h-full"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center text-center gap-4 mb-6 mt-2">
        <div className="w-24 h-24 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
        
        {/* Name and Handle */}
        <div className="flex flex-col items-center gap-2 w-full mt-1">
          <div className="h-6 w-40 rounded animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
          <div className="h-4 w-24 rounded animate-pulse mt-1" style={{ backgroundColor: 'var(--color-border)' }} />
        </div>
      </div>

      {/* Stats */}
      <div
        className="flex justify-around gap-6 py-5 mb-6 mt-auto border-t border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-3 w-16 rounded animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
          <div className="h-8 w-20 rounded animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-3 w-16 rounded animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
          <div className="h-8 w-20 rounded animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
        </div>
      </div>

      {/* Actions */}
      <div className="w-full h-12 rounded-lg animate-pulse" style={{ backgroundColor: 'var(--color-border)' }} />
    </div>
  );
}

export default CreatorDirectoryCardSkeleton;
