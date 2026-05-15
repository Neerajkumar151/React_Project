import { useState, useEffect } from 'react';

/**
 * useDebounce — delays the state update of a value by the specified delay.
 * Helpful for preventing excessive filtering/API calls on every keystroke.
 *
 * @param {any} value - The value to debounce
 * @param {number}  - The delay in milliseconds
 * @returns {any} The debounced value
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
