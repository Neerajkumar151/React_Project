/**
 * Formats a number to a shortened string (e.g., 3645 -> 3.6K, 1500000 -> 1.5M)
 * 
 * @param {number} num 
 * @returns {string} Formatted string
 */
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}
