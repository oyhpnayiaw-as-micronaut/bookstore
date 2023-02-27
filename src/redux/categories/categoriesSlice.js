import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { statusChecked } = slice.actions;

export default slice.reducer;
