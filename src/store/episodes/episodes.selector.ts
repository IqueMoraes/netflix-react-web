import { Store } from 'store/store/store.type';

export const episodesSelector = (state: Store) => state.episodes.data.list;
