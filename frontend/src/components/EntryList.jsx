import JournalEntry from './JournalEntry';

function EntryList({ entries, activeEntry, onSelectEntry, onDeleteEntry }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="empty-state">
        <p>No entries, start journaling to get started</p>
      </div>
    );
  }

  {/*Claude helped debug the scrollbar issue here */}
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <JournalEntry
          key={entry._id}
          entry={entry}
          isActive={activeEntry?._id === entry._id}
          onSelect={() => onSelectEntry && onSelectEntry(entry)}
          onDelete={() => onDeleteEntry(entry._id)}
        />
      ))}
    </div>
  );
}

export default EntryList;