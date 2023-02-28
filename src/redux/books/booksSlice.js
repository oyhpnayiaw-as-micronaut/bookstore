import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  list: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  filter: {
    category: 'All',
  },
};

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.list.push({ ...action.payload, id: crypto.randomUUID() });
      state.filter.category = 'All';
    },
    bookRemoved: (state, action) => {
      state.list = state.list.filter((e) => e.id !== action.payload.id);
    },
    bookCategoryChanged: (state, action) => {
      state.filter.category = action.payload.category;
    },
  },
});

export const { bookAdded, bookRemoved, bookCategoryChanged } = slice.actions;

export default slice.reducer;

// Selectors
export const selectBookList = createSelector(
  (state) => state.books.list,
  (state) => state.books.filter,
  (list, filter) => {
    if (filter.category === 'All') {
      return list;
    }

    if (filter.category === 'Uncategorized') {
      return list.filter((e) => !e.category);
    }

    return list.filter((e) => e.category === filter.category);
  },
);

export const selectBookCategories = createSelector(
  (state) => state.books.list,
  (list) => {
    const categories = list.map((e) => e.category || 'Uncategorized');
    return ['All', ...new Set(categories)];
  },
);

export const selectBookCount = (state) => state.books.list.length;
