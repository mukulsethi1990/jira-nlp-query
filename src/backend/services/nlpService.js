export async function processNaturalLanguage(query) {
  // Convert natural language to JQL
  const keywords = {
    'high-priority': 'priority = High',
    'last sprint': 'sprint in openSprints()',
    'my tickets': 'assignee = currentUser()',
    'open': 'status = Open',
    'in progress': 'status = "In Progress"'
  };
  
  let jql = 'project = MYPROJECT';
  
  // Simple keyword matching (to be enhanced with proper NLP)
  for (const [key, value] of Object.entries(keywords)) {
    if (query.toLowerCase().includes(key)) {
      jql += ` AND ${value}`;
    }
  }
  
  return jql;
}