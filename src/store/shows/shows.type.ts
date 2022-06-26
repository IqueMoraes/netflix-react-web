import { Show } from 'services/shows/shows.type';

export type List = {
  [key: string]: Show[]
};

export type Data = {
  myList: Show[]
  list: List
  showDetail: (Show | {})
};

export type Settings = {
  loading: boolean
};

export type Shows = {
  data: Data
  settings: Settings
  error: string
};

export type ShowId = {
  showId: number
};
