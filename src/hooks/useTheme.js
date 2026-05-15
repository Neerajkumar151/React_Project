import { useState, useEffect } from 'react';

/**
 * useTheme — manages dark/light mode by toggling the [data-theme="dark"] attribute
 * on the root <html> element, which activates the CSS variable overrides in index.css.
 *
 * @returns {{ isDark: boolean, toggleTheme: function }}
 */
function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}

export default useTheme;
