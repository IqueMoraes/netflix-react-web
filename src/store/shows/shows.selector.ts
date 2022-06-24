import { Store } from 'store/store/store.type';

export const showsSelector = (state: Store) => state.shows.data.showsList;

export const moviesSelector = (state: Store) => state.shows.data.movies;

export const tvShowsSelector = (state: Store) => state.shows.data.tvShows;
