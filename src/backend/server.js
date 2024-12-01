import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { processNaturalLanguage } from './services/nlpService.js';
import { queryJira } from './services/jiraService.js';
import { getCachedResult, cacheResult } from './services/cacheService.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    
    // Check cache first
    const cachedResult = await getCachedResult(query);
    if (cachedResult) {
      return res.json(cachedResult);
    }
    
    // Process query and get JQL
    const jql = await processNaturalLanguage(query);
    
    // Query Jira
    const result = await queryJira(jql);
    
    // Cache result
    await cacheResult(query, result);
    
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});