import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

function PokemonDetails({ match }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const { id } = match.params;
  const pokemon = { id, name: "Pikachu" };

  const isFavorite = favorites.some(pokemon => pokemon.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <div>
      <h3>{pokemon.name}</h3>
      {}
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default PokemonDetails;

