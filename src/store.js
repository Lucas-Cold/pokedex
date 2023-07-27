import { createStore } from 'redux';
import favoritesReducer from './caminho/para/o/favoritesReducer';

const store = createStore(favoritesReducer);

export default store;
