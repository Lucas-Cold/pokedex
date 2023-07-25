// Favorites.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';
import './Favorites.css';

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleRemoveFavorite = (pokemonName) => {
    removeFavorite(pokemonName);
  };

  return (
    <div className="favorites-container">
      <h1>Favoritos</h1>
      <ul className="favorites-list">
        {favorites.map((pokemon) => (
          <li key={pokemon.name} className="favorite-item">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.name}.png`}
              alt={pokemon.name}
              className="favorite-image"
            />
            <span className="favorite-name">{pokemon.name}</span>
            <button onClick={() => handleRemoveFavorite(pokemon.name)} className="remove-button">
              Remover
            </button>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button className="back-button">Retornar à Página Inicial</button>
      </Link>
    </div>
  );
}

export default Favorites;





