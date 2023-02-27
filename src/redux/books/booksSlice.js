import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
    bookRemoved: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
