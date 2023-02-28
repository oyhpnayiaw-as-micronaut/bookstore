import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import * as api from 'src/api';

const initialState = {
  list: [],
  isFetching: false,
  filter: {
    category: 'All',
  },
};

// Async Thunks Actions
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await api.getBooks();
  return res;
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  const res = await api.postBook(book);
  return res;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await api.deleteBook(id);
  return id;
});

// Slice
const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookCategoryChanged: (state, { payload }) => {
      state.filter.category = payload.category;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.list = payload;
      })
      .addCase(createBook.fulfilled, (state, { payload }) => {
        state.list.push(payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.list = state.list.filter((e) => e.id !== action.payload);
      });
  },
});

export const { bookCategoryChanged } = slice.actions;

export default slice.reducer;

// Selectors
export const selectBookList = createSelector(
  (state) => state.books.list,
  (state) => state.books.filter,
  (list, filter) => {
    if (filter.category === 'All') {
      return list;
    }

    return list.filter((e) => e.category === filter.category);
  },
);

export const selectBookCategories = createSelector(
  (state) => state.books.list,
  (list) => {
    const categories = list.map((e) => e.category);
    return ['All', ...new Set(categories)];
  },
);

export const selectBookCount = (state) => state.books.list.length;

export const selectBookFetchingState = (state) => state.books.isFetching;
