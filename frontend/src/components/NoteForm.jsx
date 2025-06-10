import React, { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [error, setError] = useState('');

  const validateNote = () => {
    if (!note.title.trim()) {
      setError('Title is required');
      return false;
    }
    if (!note.content.trim()) {
      setError('Content is required');
      return false;
    }
    if (note.title.length > 100) {
      setError('Title must be less than 100 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (validateNote()) {
      onSubmit(note);
      setNote({ title: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', width: '100%' }}>
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        className="note-title-input"
        style={{ flex: 1 }}
      />
      <textarea
        placeholder="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        className="note-content-input"
        style={{ flex: 2, minHeight: '36px', resize: 'vertical' }}
      />
      <button type="submit" className="note-save-btn">
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
