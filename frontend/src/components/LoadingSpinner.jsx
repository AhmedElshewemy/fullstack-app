import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status">
      <div className="spinner"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
