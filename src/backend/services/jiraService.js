export async function queryJira(jql) {
  const baseUrl = process.env.JIRA_API_URL;
  const auth = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString('base64');
  
  const response = await fetch(`${baseUrl}/rest/api/3/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jql,
      maxResults: 50,
      fields: [
        'summary',
        'status',
        'priority',
        'assignee',
        'created',
        'updated',
        'duedate'
      ]
    })
  });
  
  if (!response.ok) {
    throw new Error(`Jira API error: ${response.statusText}`);
  }
  
  return response.json();
}