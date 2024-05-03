import React from 'react';
import PokemonCard from '../components/pokemonCard';


function Home({ pokemonId, deleteHandler }) {
  return (
    <>
      <div className="pokemon-cards-main-div">
        {pokemonId.map((pokemonId) => (
          <PokemonCard
            key={pokemonId}
            pokemonId={pokemonId}
            onDelete={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
