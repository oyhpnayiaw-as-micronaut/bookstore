import { configureStore, combineReducers } from '@reduxjs/toolkit';

import booksReducer from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

export default function createStore() {
  const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesSlice,
  });

  return configureStore({
    reducer: rootReducer,
  });
}
