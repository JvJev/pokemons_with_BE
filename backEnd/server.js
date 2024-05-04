const express = require('express');
const { Pool } = require('pg');

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'yourUsername',     // Your database username
  host: 'localhost',
  database: 'yourDatabase', // Your database name
  password: 'yourPassword', // Your database password
  port: 8008,               // Your PostgreSQL port
});

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.send('Hello World! Test passed.');
});

// Example endpoint to fetch data from PostgreSQL
app.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM your_table_name LIMIT 10');
    res.json(rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
