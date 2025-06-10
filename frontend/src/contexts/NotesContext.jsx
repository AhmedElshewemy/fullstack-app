import React, { createContext, useState, useEffect } from 'react';
import { useNoteThemes } from '../hooks/useNoteThemes';
import { getNotes, createNote } from '../services/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    date: 'all',
    status: 'all',
    sortBy: 'newest'
  });
  const { themes, updateTheme } = useNoteThemes();

  // Apply filters and sorting to notes
  useEffect(() => {
    let result = [...notes];

    // Date filtering
    if (filters.date !== 'all') {
      const now = new Date();
      switch (filters.date) {
        case 'today':
          result = result.filter(note => {
            const noteDate = new Date(note.createdAt);
            return noteDate.toDateString() === now.toDateString();
          });
          break;
        case 'week':
          const weekAgo = new Date(now.setDate(now.getDate() - 7));
          result = result.filter(note => new Date(note.createdAt) >= weekAgo);
          break;
        case 'month':
          const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
          result = result.filter(note => new Date(note.createdAt) >= monthAgo);
          break;
      }
    }

    // Status filtering
    if (filters.status !== 'all') {
      result = result.filter(note => note.status === filters.status);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredNotes(result);
  }, [notes, filters]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

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
