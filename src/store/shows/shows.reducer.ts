import { PayloadAction } from '@reduxjs/toolkit';
import { Show, ShowCategory } from 'services/shows/shows.type';
import { Shows } from './shows.type';
// import { Shows } from './shows.type';

const activateList = (_state: any, _action: PayloadAction<undefined>) => {};

const setShows = (state: any, action: PayloadAction<undefined>) => {
  state.data.shows = action.payload;
};

const setMovies = (state: any, action: PayloadAction<Show[]>) => {
  state.data.movies = action.payload.filter((show) => show.category === ShowCategory.MOVIE);
};

const setTvShows = (state: any, action: PayloadAction<Show[]>) => {
  state.data.tvShows = action.payload.filter((show) => show.category === ShowCategory.TV_SHOWS);
};

const setError = (state: any, action: PayloadAction<Shows['error']>) => {
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
