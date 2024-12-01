export const jiraConfig = {
  baseUrl: process.env.JIRA_API_URL,
  email: process.env.JIRA_EMAIL,
  apiToken: process.env.JIRA_API_TOKEN,
  defaultProject: process.env.JIRA_DEFAULT_PROJECT || 'MYPROJECT',
  maxResults: 50,
  defaultFields: [
    'summary',
    'status',
    'priority',
    'assignee',
    'created',
    'updated',
    'duedate'
  ]
};