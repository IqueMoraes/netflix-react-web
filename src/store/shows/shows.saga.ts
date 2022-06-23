import showsService from 'services/shows/shows.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsSlice, initialState } from 'store/shows/shows.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ShowsResponse } from 'services/shows/shows.type';

function* loadAllShows(action: PayloadAction<undefined>) {
  try {
    const response:ShowsResponse = yield call(showsService().allShowslist, action.payload);

    yield put(showsSlice.actions.setMovies(response));
    yield put(showsSlice.actions.setTvShows(response));
    yield put(showsSlice.actions.setError(initialState.error));
  } catch (e) {
    // @ts-ignore
    const { response: { data } } = e as AxiosError;
    // @ts-ignore
    yield put(showsSlice.actions.setError(data.message));
  }
}

function* showsSaga() {
  yield takeLatest('shows/activateList', loadAllShows);
}

export default showsSaga;
