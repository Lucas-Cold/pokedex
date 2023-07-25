import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente
import App from './App';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(root).render(app);


