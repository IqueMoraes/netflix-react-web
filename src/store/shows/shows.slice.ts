import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './shows.reducer';
import { Shows } from './shows.type';

const initialState: Shows = {
  data: {
    showsList: [],
    movies: [],
    tvShows: [],
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export { initialState, showsSlice };
