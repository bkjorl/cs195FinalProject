const API_URL = 'http://localhost:3000';

//Fetch all users
export const getUser = async () => {
  const response = await fetch(`${API_URL}/api/users`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

//Create a new user
export const createUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to create user');
  return response.json();
};