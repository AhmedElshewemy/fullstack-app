import React, { useContext } from 'react';
import NoteCard from './NoteCard';
import { NotesContext } from '../contexts/NotesContext';
import '../styles/Notes.css';

const NotesList = () => {
  const { notes, themes, updateTheme } = useContext(NotesContext);

  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteCard 
          key={note.id} 
          note={note}
          themeColor={themes[note.id] || '#ffffff'}
          onThemeChange={(color) => updateTheme(note.id, color)}
        />
      ))}
    </div>
  );
};

export default NotesList;
