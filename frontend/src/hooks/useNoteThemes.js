import { useState, useEffect } from 'react';

export function useNoteThemes() {
  const [themes, setThemes] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('noteThemes');
    if (stored) {
      try {
        setThemes(JSON.parse(stored));
      } catch (_) {
        setThemes({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('noteThemes', JSON.stringify(themes));
  }, [themes]);

  function updateTheme(noteId, color) {
    setThemes(prev => ({
      ...prev,
      [noteId]: color
    }));
  }

  return { themes, updateTheme };
}
