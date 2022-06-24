import { PayloadAction } from '@reduxjs/toolkit';

export interface Episode {
  id: number
  title: string
  description: string
  cover: string
  duration: number
}

export type List = Episode[];

export type Data = {
  list: List
};

export type Settings = {
  loading: boolean
};

export type Error = {
  code: number
  message: string
};

export type Episodes = {
  data: Data
  settings: Settings
  error: Error
};

export type BaseReducer<Payload> = (state: Episodes, action:PayloadAction<Payload>) => void;

export type GetList = BaseReducer<undefined>;

export type SetData = BaseReducer<Data>;

export type SetSettings = BaseReducer<Settings>;

export type SetError = BaseReducer<Error>;
