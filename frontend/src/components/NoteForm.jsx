import React, { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    setNote({ title: '', content: '' });
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
