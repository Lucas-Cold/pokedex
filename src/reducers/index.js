import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Importe o createStore do Redux
import App from './App';
import favoritesReducer from './favoritesReducer'; 
import '../styles.css';

const store = createStore(favoritesReducer); // Crie a store passando o reducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

