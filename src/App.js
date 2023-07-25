import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes
import Favorites from './Favorites';
import Pokdex from './Pokdex';
import FavoritesProvider from './FavoritesContext';
import './styles.css';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Routes> {}
          <Route path="/" element={<Pokdex />} /> {}
          <Route path="/favorites" element={<Favorites />} /> {}
        </Routes>
      </FavoritesProvider>
    </Router>
  );
}

export default App;





