import { useState, useMemo } from 'react';
import useDebounce from './useDebounce';

const ITEMS_PER_PAGE = 9;

/**
 * useCreatorFilter — handles search, filter, and pagination for the Creators Directory.
 * All filter changes automatically reset to page 1.
 *
 * @param {Array} creators - full creators array from constants
 * @returns filter state, setters, paginated results, and pagination controls
 */
function useCreatorFilter(creators) {
  const [search, setSearch]       = useState('');
  const [category, setCategory]   = useState('all');
  const [status, setStatus]       = useState('all');
  const [page, setPage]           = useState(1);

  // Debounce the search input to avoid expensive filters on every keystroke
  const debouncedSearch = useDebounce(search, 300);

  // Reset to page 1 whenever any filter changes
  const updateFilter = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = creators;

    // Search by name or handle (using the DEBOUNCED search value)
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (c) => c.name.toLowerCase().includes(q) || c.handle.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (category !== 'all') {
      result = result.filter((c) => c.category.toLowerCase() === category.toLowerCase());
    }

    // Status filter
    if (status !== 'all') {
      result = result.filter((c) => c.status === status);
    }

    return result;
  }, [creators, debouncedSearch, category, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage   = Math.min(page, totalPages);
  const paginated  = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  return {
    // Filter state & setters
    search,      setSearch:     updateFilter(setSearch),
    category,    setCategory:   updateFilter(setCategory),
    status,      setStatus:     updateFilter(setStatus),
    // Pagination
    page: safePage,
    setPage,
    totalPages,
    totalCount: filtered.length,
    paginated,
  };
}

export default useCreatorFilter;
