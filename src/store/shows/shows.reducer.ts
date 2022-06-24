import { PayloadAction } from '@reduxjs/toolkit';
import {
  MoviesList, Show, TvShowsList,
} from 'services/shows/shows.type';
import { Shows } from './shows.type';
// import { Shows } from './shows.type';

const activateList = (_state: any, _action: PayloadAction<undefined>) => {};

const setShows = (state: Shows, action: PayloadAction<Show[]>) => {
  state.data.showsList = action.payload;
};

const setMovies = (state: Shows, action: PayloadAction<MoviesList>) => {
  state.data.movies = action.payload;
};

const setTvShows = (state: Shows, action: PayloadAction<TvShowsList>) => {
  state.data.tvShows = action.payload;
};

const setError = (state: Shows, action: PayloadAction<Shows['error']>) => {
  state.error = action.payload;
};

const reducers = {
  activateList,
  setShows,
  setMovies,
  setTvShows,
  setError,
};

export { reducers };
