import React, { useState } from 'react';

const DEFAULT_COLORS = [
  '#ffffff', // White
  '#f8d7da', // Light Red
  '#d4edda', // Light Green
  '#cce5ff', // Light Blue
  '#fff3cd', // Light Yellow
  '#e2e3e5', // Light Gray
];

export function ColorPicker({ currentColor, onColorChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="color-picker">
      <button 
        className="color-picker-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: currentColor || DEFAULT_COLORS[0] }}
      >
        <span className="sr-only">Choose note color</span>
      </button>
      
      {isOpen && (
        <div className="color-picker-dropdown">
          {DEFAULT_COLORS.map((color) => (
            <button
              key={color}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => {
                onColorChange(color);
                setIsOpen(false);
              }}
            >
              <span className="sr-only">Select {color}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
