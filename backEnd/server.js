const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'pokemons_database', 
  password: 'a', 
  port: 5432, 
});

const app = express();
const PORT = 5000; 

// Middleware to parse JSON bodies
app.use(express.json());

// Test posgres connection
app.get('/test-connection', async (req, res) => {
  try {
    await pool.query('SELECT 1'); 
    res.json({ message: 'Connection to PostgreSQL successful!' });
  } catch (error) {
    console.error('Error testing connection:', error);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.get('/pokemons', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM pokemons_table');
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
