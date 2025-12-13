function JournalEntry({ entry, isActive, onSelect, onDelete }) {
  return (
    <div 
      className={`entry-item ${isActive ? 'active' : ''}`}
      onClick={onSelect}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
    >
      {/* Entry text - Claude helped to debug*/}
      <div className="entry-content">
        <p className="entry-text" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {entry.entry || 'Empty entry'}
        </p>
        <small className="entry-date" style={{ display: 'block', marginTop: '8px', color: '#666' }}>
          {new Date(entry.createdAt).toLocaleDateString()} 

        </small>
      </div>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="delete-button"
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  );
}

export default JournalEntry;
