import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import episodesService from 'services/episodes/episodes.service';
import episodesSlice from './episodes.slice';
import { List } from './episodes.type';

// desconstruindo para encurtar código
// const {
//   setData,
//   setError,
//   setSettings
// } = episodesSlice

function* getList() {
  try {
    yield put(episodesSlice.actions.setSettings({ loading: true }));

    const response: AxiosResponse<List> = yield call(
      episodesService().getList,
      '1',
    );

    yield put(episodesSlice.actions.setData({ list: response.data }));
    yield put(episodesSlice.actions.setError({ code: 200, message: '' }));
  } catch (e) {
    yield put(episodesSlice.actions.setError({ code: 400, message: 'Error' }));
  } finally {
    yield put(episodesSlice.actions.setSettings({ loading: false }));
  }
}

export const epsiodesSaga = [takeLatest('episodes/activateEpisodes', getList)];

export default epsiodesSaga;
