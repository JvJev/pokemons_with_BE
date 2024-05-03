import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './singleCard.css';

function SingleCard() {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error message:', error);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div className="loading">Loading...</div>;
  }

  const abilities = pokemonData.abilities
    .map((ability) => ability.ability.name)
    .join(', ');
  const types = pokemonData.types.map((type) => type.type.name).join(', ');
  const stats = pokemonData.stats
    .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
    .join(', ');

  return (
    <div className="single-background">
      <div className="single-card">
        <h2 className="pokemon-name">{pokemonData.name}</h2>
        <div className="pokemon-details">
          <div className="pokemon-image-container">
            <img
              className="pokemon-image"
              src={pokemonData.sprites.front_default}
              alt={`Pokemon ${pokemonData.name}`}
            />
          </div>
          <div className="pokemon-stats">
            <div className="basic-data">
              <p>Weight: {pokemonData.weight}</p>
              <p>Height: {pokemonData.height}</p>
              <p>Abilities: {abilities}</p>
              <p>Types: {types}</p>
            </div>
            <p className="combat-stats">
              Stats:<br></br> {stats}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
