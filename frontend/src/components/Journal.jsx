import { useState, useEffect } from 'react';
import '../App.css';
import EntryList from './EntryList';
import { getJournal, createEntry, updateEntry, deleteEntry } from '../api/journals';

function App() {
  // State management
  const [entries, setEntries] = useState([]);
  const [activeEntry, setActiveEntry] = useState(null);
  const [newEntryText, setNewEntryText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load entries from database on mount
  useEffect(() => {
    loadEntries();
  }, []);

  //Fetch all entries from backend
  const loadEntries = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getJournal();
      setEntries(data);
    } catch (err) {
      console.error('Error loading entries:', err);
      setError('Failed to load entries. Make sure your backend is running.');
    } finally {
      setLoading(false);
    }
  };

  //Add a new entry
  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (!newEntryText.trim()) return;

    try {
      // 1. Save to database via backend
      const newEntry = await createEntry({ entry: newEntryText });
      
      // 2. Update React state (add to beginning of list)
      setEntries([newEntry, ...entries]);
      
      // 3. Clear input
      setNewEntryText('');
    } catch (err) {
      console.error('Error creating entry:', err);
      setError('Failed to add entry');
    }
  };

  // Delete a entry
  const handleDeleteEntry = async (entryId) => {
    try {
      // 1. Delete from database
      await deleteEntry(entryId);
      
      // 2. Remove from React state
      setEntries(entries.filter(e => e._id !== entryId));
      
      // 3. Clear active entry if it was deleted
      if (activeEntry?._id === entryId) {
        setActiveEntry(null);
      }
    } catch (err) {
      console.error('Error deleting entry:', err);
      setError('Failed to delete entry');
    }
  };

  // Select an entry
  const handleSelectEntry = (entry) => {
    setActiveEntry(entry);
  };

  // Loading state
  if (loading) {
    return (
      <div className="app loading">
        <div className="spinner"></div>
        <p>Loading journal...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Your Journal</h1>
      </header>

      {error && (
        <div className="error-banner">
          ⚠️ {error}
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      <div className="main-content">
        {/* Left Column: Add Entry Form */}
        <div className="entry-section">
          <h2>New Entry</h2>
          <form onSubmit={handleAddEntry} className="add-entry-form" style={{ display: 'flex', flexDirection: 'column' }}>
            <textarea
              value={newEntryText}
              onChange={(e) => setNewEntryText(e.target.value)}
              className="entry-input"
              rows="10"
              style={{ resize: 'vertical', minHeight: '200px' }}
            />
            <button type="submit" className="add-button">
              Add Entry
            </button>
          </form>
        </div>

        {/*Entry List - debugged scrollbar issue with Claude */}
        <div className="entry-section" style={{ display: 'flex', flexDirection: 'column', maxHeight: '600px' }}>
          <h2 style={{ flexShrink: 0 }}>Previous Journal Entries</h2>

          <div style={{ overflowY: 'auto', flex: 1 }}>
            {entries.length === 0 ? (
              <div className="empty-state">
                <p>No entries yet. Start writing!</p>
              </div>
            ) : (
              <EntryList
                entries={entries}
                activeEntry={activeEntry}
                onSelectEntry={handleSelectEntry}
                onDeleteEntry={handleDeleteEntry}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;