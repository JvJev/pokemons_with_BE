import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pokemonCard.css';

const PokemonCard = ({ pokemonId, onDelete }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error message:', error);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const handleDelete = () => {
    onDelete(pokemonId);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-info">
        <p className="pokemon-name"> {pokemonData.name}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Height: {pokemonData.height}</p>
      </div>
      <img
        className="pokemon-image"
        src={pokemonData.sprites.front_default}
        alt={`Pokemon ${pokemonData.name}`}
      />
      <div className="about">
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/pokemon/${pokemonId}`}>About this pokemon</Link>
      </div>
    </div>
  );
};

export default PokemonCard;
