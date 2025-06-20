import React from 'react';
import { ColorPicker } from './ColorPicker';
import { ErrorMessage } from './ErrorMessage';

export default function NoteCard({ note, themeColor, onThemeChange, onDelete, onEdit, error }) {

  const handleClickOutside = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setPickerOpen(false);
    }
  };

  useEffect(() => {
    if (pickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pickerOpen]);

  return (
    <div
      className="note-card"
      style={{
        background: `linear-gradient(135deg, ${lighten(themeColor, 0.4)}, ${themeColor})`,
        padding: '16px',
        position: 'relative'
      }}
    >
      <div
        className="theme-button"
        onClick={() => setPickerOpen(open => !open)}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          cursor: 'pointer'
        }}
        title="Change card color"
      >
        🎨
      </div>

      {pickerOpen && (
        <div
          ref={pickerRef}
          style={{
            position: 'absolute',
            top: '32px',
            right: '8px',
            background: '#fff',
            padding: '4px',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            zIndex: 10
          }}
        >
          <input
            type="color"
            value={themeColor}
            onChange={(e) => {
              onThemeChange(e.target.value);
              setPickerOpen(false);
            }}
          />
        </div>
      )}

      <h3
        style={{
          margin: '0 0 12px 0',
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#222',
          letterSpacing: '0.5px',
          textShadow: '0 1px 2px rgba(0,0,0,0.04)'
        }}
      >
        {note.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: '1rem',
          color: '#333',
          lineHeight: 1.6,
          wordBreak: 'break-word',
          whiteSpace: 'pre-line'
        }}
      >
        {note.content}
      </p>
    </div>
  );
}
