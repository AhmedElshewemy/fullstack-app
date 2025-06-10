import React, { useContext, useState } from 'react';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';
import { NotesContext } from '../contexts/NotesContext';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import StatusChart from '../components/StatusChart';
import '../styles/Notes.css';

const NotesPage = () => {
  const { filteredNotes, addNote, loading, error, setFilters } = useContext(NotesContext);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  return (
    <div className="notes-page">
      <h1>My Notes</h1>
      <ErrorMessage message={error} />
      <div className="note-form">
        <NoteForm onSubmit={addNote} />
      </div>
      {/* Mini Dashboard Chart */}
      <StatusChart notes={filteredNotes} />
      <FilterPanel 
        isOpen={isFilterPanelOpen}
        onToggle={toggleFilterPanel}
        onFilterChange={handleFilterChange}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <NotesList notes={filteredNotes} />
      )}
    </div>
  );
};

export default NotesPage;
