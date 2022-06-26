import { Store } from 'store/store/store.type';

export const listSelector = (state: Store) => state.shows.data.list;

export const myListSelector = (state: Store) => state.shows.data.myList;

export const showDetailSelector = (state: Store) => state.shows.data.showDetail;

export const loadingSelector = (state: Store) => state.shows.settings.loading;
