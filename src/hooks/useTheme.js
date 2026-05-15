import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * useTheme — consumes the global ThemeContext.
 *
 * @returns {{ isDark: boolean, toggleTheme: function }}
 */
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;
