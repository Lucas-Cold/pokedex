import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="pokdex-container">
      <h1>Pokémons Favoritos</h1>
      <p>Lista de Pokémons favoritos:</p>
      <ul className="pokemon-list">
        {favorites.map(pokemon => (
          <li key={pokemon.name} className="pokemon-item">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
              className="pokemon-image"
            />
            {pokemon.name}{' '}
            <button onClick={() => removeFavorite(pokemon.name)} className="pokemon-button">Remover dos Favoritos</button>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button className="pokemon-button">Retornar à Página Inicial</button>
      </Link>
    </div>
  );
}

export default Favorites;

