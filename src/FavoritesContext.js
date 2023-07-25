// FavoritesContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  favorites: [],
};

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((pokemon) => pokemon.name !== action.payload),
      };
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addFavorite = (pokemon) => {
    dispatch({ type: 'ADD_FAVORITE', payload: pokemon });
  };

  const removeFavorite = (pokemonName) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: pokemonName });
  };

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };









