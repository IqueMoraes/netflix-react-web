import { AxiosResponse } from 'axios';
import { Episodes } from 'store/episodes/episodes.type';

export enum ShowCategory {
  MOVIE = 'MOVIE',
  TV_SHOWS = 'TV_SHOWS',
}

export type Show = {
  id: number
  cover: string
  title: string
  director: string
  actors: string
  description: string
  category: ShowCategory
  episodes: Episodes[]
};

export type Movie = {
  id: number
  cover: string
  title: string
  director: string
  actors: string
  description: string
  category: ShowCategory.MOVIE
};

export type TvShow = {
  id: number
  cover: string
  title: string
  director: string
  actors: string
  description: string
  category: ShowCategory.TV_SHOWS
  episodes: Episodes[]
};

export type MoviesList = Movie[];
export type TvShowsList = TvShow[];
export type ShowsResponse = AxiosResponse<Show[]>;
