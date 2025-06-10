import React, { useContext } from 'react';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';
import { NotesContext } from '../contexts/NotesContext';
import '../styles/Notes.css';

const NotesPage = () => {
  const { notes, addNote } = useContext(NotesContext);

  return (
    <div className="notes-page">
      <h1>My Notes</h1>
      <div className="note-form">
        <NoteForm onSubmit={addNote} />
      </div>
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesPage;
