import { AxiosResponse } from 'axios';

export enum ShowCategory {
  MOVIE = 'MOVIE',
  TV_SHOWS = 'TV_SHOWS',
}

export type Episodes = {
  id: number;
  title: string;
  description: string;
  cover: string;
  duration: number;
};

export type Show = {
  id: number;
  cover: string;
  title: string;
  director: string;
  actors: string;
  description: string;
  category: ShowCategory;
  episodes: Episodes[];
};

export type Movie = {
  id: number;
  cover: string;
  title: string;
  director: string;
  actors: string;
  description: string;
  category: ShowCategory.MOVIE;
};

export type TvShow = {
  id: number;
  cover: string;
  title: string;
  director: string;
  actors: string;
  description: string;
  category: ShowCategory.TV_SHOWS;
  episodes: Episodes[];
};

export type ShowsResponse = AxiosResponse<Show[]>;
export type ShowDetailResponse = AxiosResponse<Show>;

export type Props = {
  token: string;
};

export type ShowIdPayload = {
  showId: number
};
