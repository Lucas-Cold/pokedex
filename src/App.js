import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './FavoritesContext';
import Pokdex from './Pokdex';
import Favorites from './Favorites';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Pokdex />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
