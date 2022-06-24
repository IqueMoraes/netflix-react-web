import { createSlice } from '@reduxjs/toolkit';
import reducers from './episodes.reducer';

const initialState = {
  data: {
    list: [],
  },
  settings: {
    loading: false,
  },
  error: {
    code: 200,
    message: '',
  },
};

const episodesSlice = createSlice({
  name: 'episodes',
  reducers,
  initialState,
});

export default episodesSlice;
