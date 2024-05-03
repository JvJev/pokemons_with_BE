import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleCard from './pages/singleCard';
import Navbar from './components/Navbar';
import Home from './pages/home';

function App() {
  const numberOfPokemons = 20;
  const pokemonIdMainArray = Array.from(
    { length: numberOfPokemons },
    (_, index) => index + 1
  );
  const [pokemonId, setPokemonId] = useState(pokemonIdMainArray);

  function deleteHandler(deleteID) {
    setPokemonId((prevId) => prevId.filter((id) => id !== deleteID));
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home pokemonId={pokemonId} deleteHandler={deleteHandler} />
            }
          />
          <Route path="/pokemon/:id" element={<SingleCard />} />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
