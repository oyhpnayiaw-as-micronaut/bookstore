import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: null,
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusChecked: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { statusChecked } = slice.actions;

export default slice.reducer;

export const selectCategorystatus = (state) => state.categories.status;
