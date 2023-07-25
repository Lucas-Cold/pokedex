import React, { createContext, useReducer } from 'react';

const initialState = {
  favorites: [],
};

export const FavoritesContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.name !== action.payload.name),
      };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavorite = (pokemon) => {
    dispatch({ type: 'ADD_FAVORITE', payload: pokemon });
  };

  const removeFavorite = (pokemon) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: pokemon });
  };

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


