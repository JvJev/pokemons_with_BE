const express = require('express');
const axios = require('axios');
const sequelize = require('./models');
const Pokemon = require('./models/pokemon');


const app = express();
const PORT = 5000;

app.use(express.json());

const testConnection = async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: 'Connection to PostgreSQL successful!' });
  } catch (error) {
    console.error('Error testing connection:', error);
    res.status(500).json({ message: 'Error connecting to database' });
  }
};

const fetchPokemonData = async (url) => {
  const { data } = await axios.get(url);
  const { id, name, height, weight, abilities, types, stats } = data;

  return {
    id,
    name,
    height,
    weight,
    abilities: abilities.map(a => a.ability.name).join(', '),
    types: types.map(t => t.type.name).join(', '),
    stats: stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(', '),
  };
};

const fetchAndAddPokemons = async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3');
    const pokemons = response.data.results;

    const pokemonDataArray = await Promise.all(pokemons.map(p => fetchPokemonData(p.url)));

    for (const pokemon of pokemonDataArray) {
      await Pokemon.upsert(pokemon);
    }

    res.json({ message: 'Pokémons added to the database successfully!' });
  } catch (error) {
    console.error('Error fetching and adding Pokémon:', error);
    res.status(500).json({ message: 'Error fetching and adding Pokémon' });
  }
};

const getPokemons = async (req, res) => {
  const pokePromises = Array.from({ length: 20 }, (_, i) => axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`));

  try {
    const results = await Promise.all(pokePromises);
    const pokemons = results.map(response => {
      const { id, name, height, weight, abilities, types, stats } = response.data;
      return {
        id,
        name,
        height,
        weight,
        abilities: abilities.map(a => ({ name: a.ability.name, is_hidden: a.is_hidden, slot: a.slot })),
        types: types.map(t => ({ slot: t.slot, name: t.type.name })),
        stats: stats.map(s => ({ base_stat: s.base_stat, effort: s.effort, name: s.stat.name })),
      };
    });

    res.json(pokemons);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error); // Logging the error
    res.status(500).json({ error: 'Failed to fetch Pokemon data' });
  }
};

app.get('/test-connection', testConnection);
app.get('/fetch-and-add-pokemons', fetchAndAddPokemons);
app.get('/pokemons', getPokemons);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});