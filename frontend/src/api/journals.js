const API_URL = 'http://localhost:3000';

//Fetch all journal entries
export const getJournal = async (userId) => {
  const response = await fetch(`${API_URL}/api/journals/user/${userId}`);
  if (!response.ok) throw new Error('Failed to fetch entry');
  return response.json();
};

//Create a new jounral entry
export const createEntry = async (entryData) => {
  const response = await fetch(`${API_URL}/api/journals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entryData),
  });
  if (!response.ok) throw new Error('Failed to create entry');
  return response.json();
};

//delete a journal entry
export const deleteEntry = async (id, userId) => {
  const response = await fetch(`${API_URL}/api/journals/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) throw new Error('Failed to delete entry');
  return response.json();
};