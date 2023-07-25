import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';

function Pokdex() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
        .then(response => response.json())
        .then(data => {
          const filteredPokemons = data.results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setPokemons(filteredPokemons);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then(response => response.json())
        .then(data => {
          setPokemons(data.results);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [searchTerm]);

  return (
    <div className="pokdex-container">
      <h1>Pokédex</h1>
      <p>Pesquisar Pokémon:</p>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul className="pokemon-list">
        {pokemons.map(pokemon => (
          <li key={pokemon.name} className="pokemon-item">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <span className="pokemon-name">{pokemon.name}</span>
            {favorites.some(favorite => favorite.name === pokemon.name) ? (
              <button onClick={() => removeFavorite(pokemon)} className="pokemon-button">Remover</button>
            ) : (
              <button onClick={() => addFavorite(pokemon)} className="pokemon-button">Adicionar</button>
            )}
          </li>
        ))}
      </ul>
      <Link to="/favorites">
        <button className="favorites-button">Ir para Favoritos</button>
      </Link>
    </div>
  );
}

export default Pokdex;





