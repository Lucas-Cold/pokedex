// Favorites.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleRemoveFavorite = (pokemonId) => {
    removeFavorite(pokemonId);
  };

  return (
    <div className="favorites-container">
      <h1>Favoritos</h1>
      <ul className="favorites-list">
        {favorites.map((pokemon) => {
          if (!pokemon.id || !pokemon.name) {
            console.error('Invalid Pokemon:', pokemon);
            return null;
          }

          const imageUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/sprites/front_default`;

          return (
            <li key={pokemon.id} className="favorite-item">
              <img
                src={imageUrl}
                alt={pokemon.name}
                className="favorite-image"
                onError={() => {
                  console.error('Failed to load image:', imageUrl);
                }}
              />
              <span className="favorite-name">{pokemon.name}</span>
              <button onClick={() => handleRemoveFavorite(pokemon.id)} className="remove-button">
                Remover
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <button className="back-button">Retornar à Página Inicial</button>
      </Link>
    </div>
  );
}

export default Favorites;







