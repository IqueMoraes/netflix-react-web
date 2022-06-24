import { MoviesList, Show } from 'services/shows/shows.type';

export type Data = {
  showsList?: Show[]
  movies?: MoviesList
  tvShows?: Show[]
};

export type Shows = {
  data: Data
  error: string
};
