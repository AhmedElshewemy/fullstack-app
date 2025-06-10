import React, { useState } from 'react';
import '../styles/FilterPanel.css';

export function FilterPanel({ onFilterChange, isOpen, onToggle }) {
  const [filters, setFilters] = useState({
    date: 'all',
    status: 'all',
    sortBy: 'newest'
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <>
      <button 
        className="filter-toggle-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="filter-panel"
      >
        <span className="filter-icon">🔍</span>
        Filters
      </button>

      <div className={`filter-panel ${isOpen ? 'open' : ''}`} id="filter-panel">
        <div className="filter-section">
          <h3>Sort by Date</h3>
          <select
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Status</h3>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Sort Order</h3>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>
      </div>
    </>
  );
}
