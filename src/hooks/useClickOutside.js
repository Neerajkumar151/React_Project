import { useEffect } from 'react';

/**
 * useClickOutside — fires `callback` when a click occurs outside of `ref`.
 * Use this for dropdowns, modals, and any floating UI that should close on outside click.
 *
 * @param {React.RefObject} ref - ref attached to the element to watch
 * @param {function} callback - function to call when clicking outside
 * @param {boolean} enabled - only attach the listener when `true` (e.g. when dropdown is open)
 */
function useClickOutside(ref, callback, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback, enabled]);
}

export default useClickOutside;
