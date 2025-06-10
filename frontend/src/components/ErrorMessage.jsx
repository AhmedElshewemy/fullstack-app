import React from 'react';

export function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
    </div>
  );
}
