# Jira NLP Query Interface

A visual interface for querying Jira data using natural language processing. This application allows users to query their Jira data using natural language and provides visualizations of the results.

## Features

- Natural language query processing
- Real-time Jira data integration
- Result caching for improved performance
- Visual data presentation
- Responsive web interface

## Architecture

- Frontend: React with Tailwind CSS
- Backend: Node.js/Express
- Cache: Redis
- External API: Jira REST API

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your Jira credentials
4. Start the server: `npm start`

## Development

Run in development mode: `npm run dev`

## Project Structure

```
src/
  frontend/
    components/
      SearchBar.jsx
      ResultsDisplay.jsx
      VisualizationPanel.jsx
    services/
      api.js
      cache.js
    App.jsx
    
  backend/
    server.js
    services/
      jiraService.js
      nlpService.js
      cacheService.js
    routes/
      api.js
    config/
      jira.js
```