import React, { useState, useEffect, useCallback } from "react";
import CreatorDirectoryCard from "../components/CreatorDirectoryCard";
import CreatorDirectoryCardSkeleton from "../components/CreatorDirectoryCardSkeleton";
import SearchInput from "../components/ui/SearchInput";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import { useCreatorsContext } from "../context/CreatorsContext";
import useCreatorFilter from "../hooks/useCreatorFilter";

// Filter option constants — add new categories here only
const CATEGORIES = [
  "All",
  "Tech",
  "Lifestyle",
  "Fashion",
  "Gaming",
  "Health",
  "Travel",
];

// Reusable styled select dropdown with label
function FilterSelect({ value, onChange, options, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-sm font-semibold"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}:
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        style={{
          padding: "8px 32px 8px 12px",
          borderRadius: "8px",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg-surface)",
          color: "var(--color-text-primary)",
          fontSize: "0.875rem",
          fontWeight: "500",
          cursor: "pointer",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
          outline: "none",
        }}
      >
        {options.map((opt) =>
          typeof opt === "string" ? (
            <option key={opt} value={opt === "All" ? "all" : opt.toLowerCase()}>
              {opt}
            </option>
          ) : (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ),
        )}
      </select>
    </div>
  );
}

// Pagination controls component
function Pagination({ page, totalPages, totalCount, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div
      className="flex items-center justify-between mt-8 pt-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
        Page{" "}
        <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
          {page}
        </span>{" "}
        of{" "}
        <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
          {totalPages}
        </span>{" "}
        ·{" "}
        <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
          {totalCount}
        </span>{" "}
        creators
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)",
            color: "var(--color-text-secondary)",
          }}
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className="w-9 h-9 rounded-lg text-sm font-bold transition-all"
            style={{
              border: p === page ? "none" : "1px solid var(--color-border)",
              backgroundColor:
                p === page ? "var(--color-primary)" : "var(--color-bg-surface)",
              color:
                p === page
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-secondary)",
            }}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)",
            color: "var(--color-text-secondary)",
          }}
        >
          Next
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

/**
 * CreatorsPage — full Creators Directory page.
 * Uses useCreatorFilter hook for all filtering and pagination logic.
 */
function CreatorsPage() {
  const { creators, isLoading: isContextLoading, error } = useCreatorsContext();

  const {
    search,
    setSearch,
    category,
    setCategory,
    page,
    setPage,
    totalPages,
    totalCount,
    paginated,
  } = useCreatorFilter(creators);

  const [manageModalId, setManageModalId] = useState(null);

  // Memoized handlers to prevent unnecessary re-renders of child cards
  const handleManage = useCallback((id) => {
    setManageModalId(id);
  }, []);

  const handleMessage = useCallback((id) => {
    alert(`Message interface coming soon for: ${id}`);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
        <div>
          <h2
            className="text-2xl font-black mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            Creators Directory
          </h2>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Manage and discover talent across your publishing network.
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div
        className="flex flex-wrap gap-4 items-center p-4 rounded-xl mb-6"
        style={{
          backgroundColor: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Search */}
        <SearchInput
          onChange={setSearch}
          placeholder="Search by name or handle..."
          className="w-full sm:w-72"
          style={{ borderRadius: "8px" }}
        />

        {/* Category */}
        <FilterSelect
          label="Category"
          value={category}
          onChange={setCategory}
          options={CATEGORIES}
        />

        {/* Result count */}
        <p
          className="text-sm ml-auto shrink-0"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
            {totalCount}
          </span>{" "}
          results
        </p>
      </div>

      {/* Creator Grid */}
      {isContextLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <CreatorDirectoryCardSkeleton key={`skeleton-${i}`} />
          ))}
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-24 rounded-xl" style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
          <span className="material-symbols-outlined text-[48px] mb-4 text-red-500">error</span>
          <p className="font-bold text-lg mb-1" style={{ color: 'var(--color-text-primary)' }}>Error Loading Creators</p>
          <p className="text-sm text-red-500 max-w-md text-center px-4">{error}</p>
        </div>
      ) : paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((creator) => (
            <CreatorDirectoryCard
              key={creator.id}
              creator={creator}
              onManage={handleManage}
              onMessage={handleMessage}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-24 rounded-xl"
          style={{
            backgroundColor: "var(--color-bg-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <span
            className="material-symbols-outlined text-[48px] mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            person_search
          </span>
          <p
            className="font-bold text-lg mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            No creators found
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Try adjusting your search or filters.
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={setPage}
      />

      {/* Manage Modal */}
      <Modal
        isOpen={!!manageModalId}
        onClose={() => setManageModalId(null)}
        title="Manage Creator"
      >
        <div className="py-4">
          <p className="mb-4">
            Management actions for creator <strong>{manageModalId}</strong> are
            currently being developed. Check back later!
          </p>
          <div className="flex justify-end gap-3 mt-8">
            <Button
              text="Cancel"
              onClick={() => setManageModalId(null)}
              bgColor="transparent"
              textColor="var(--color-text-secondary)"
            />
            <Button
              text="Save Changes"
              onClick={() => setManageModalId(null)}
              bgColor="var(--color-primary)"
              textColor="var(--color-text-inverse)"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreatorsPage;
