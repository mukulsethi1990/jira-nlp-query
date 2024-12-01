const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function searchJira(query) {
  const response = await fetch(`${API_BASE_URL}/api/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to search Jira');
  }

  return response.json();
}