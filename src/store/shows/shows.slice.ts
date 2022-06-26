import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './shows.reducer';
import { Shows } from './shows.type';

const initialState: Shows = {
  data: {
    myList: [],
    list: {},
    showDetail: {},
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export { initialState, showsSlice };
