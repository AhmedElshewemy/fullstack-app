import React, { createContext, useState, useEffect } from 'react';
import { useNoteThemes } from '../hooks/useNoteThemes';
import { getNotes, createNote } from '../services/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { themes, updateTheme } = useNoteThemes();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getNotes();
      setNotes(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (note) => {
    try {
      setLoading(true);
      setError(null);
      const response = await createNote(note);
      setNotes(prev => [...prev, response.data]);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create note');
    } finally {
      setLoading(false);
    }
  };

  return (
    <NotesContext.Provider value={{ 
      notes, 
      addNote, 
      themes, 
      updateTheme, 
      loading, 
      error 
    }}>
      {children}
    </NotesContext.Provider>
  );
};
