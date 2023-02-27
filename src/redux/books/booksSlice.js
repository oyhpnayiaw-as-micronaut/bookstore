import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.list.push(action.payload);
    },
    bookRemoved: (state, action) => {
      state.list = state.list.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
