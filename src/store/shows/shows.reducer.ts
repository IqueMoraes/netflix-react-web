import { PayloadAction } from '@reduxjs/toolkit';
import { Show } from 'services/shows/shows.type';
import { List, ShowId, Shows } from './shows.type';

const activateList = (_state: any, _action: PayloadAction<undefined>) => {};

const activateMyList = (_state: any, _action: PayloadAction<undefined>) => {};

const activateShowDetail = (_state: any, _action: PayloadAction<ShowId>) => {};

const setList = (state: Shows, action: PayloadAction<List>) => {
  state.data.list = action.payload;
};

const setMyList = (state: Shows, action: PayloadAction<Show[]>) => {
  state.data.myList = action.payload;
};

const setShowDetail = (state: Shows, action: PayloadAction<Show>) => {
  state.data.showDetail = action.payload;
};

const setLoading = (state: Shows, action: PayloadAction<boolean>) => {
  state.settings.loading = action.payload;
};

const setError = (state: Shows, action: PayloadAction<Shows['error']>) => {
  state.error = action.payload;
};

const reducers = {
  activateList,
  activateMyList,
  activateShowDetail,
  setList,
  setMyList,
  setShowDetail,
  setLoading,
  setError,
};

export { reducers };
