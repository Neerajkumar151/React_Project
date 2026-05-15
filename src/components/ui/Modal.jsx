import React, { useRef, useEffect } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

/**
 * Reusable Modal component utilizing useRef to detect click-outside events
 * and manage focus trapping / body scrolling.
 */
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  // Close modal when clicking outside the modal content container
  useClickOutside(modalRef, onClose, isOpen);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef} 
        className="relative w-full max-w-lg p-6 mx-4 rounded-2xl shadow-2xl transition-all"
        style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:opacity-70"
            style={{ backgroundColor: 'var(--color-bg-main)', color: 'var(--color-text-secondary)' }}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div style={{ color: 'var(--color-text-primary)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
