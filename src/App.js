import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function PokemonDetails({ pokemonUrl }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(pokemonUrl)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon details:', error);
      });
  }, [pokemonUrl]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

function Pokdex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokemons:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Pokédex</h1>
      {pokemons.map(pokemon => (
        <PokemonDetails key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
}

export default Pokdex;

