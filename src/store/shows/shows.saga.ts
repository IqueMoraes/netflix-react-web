import showsService from 'services/shows/shows.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsSlice, initialState } from 'store/shows/shows.slice';
import {
  MoviesList, ShowCategory,
  ShowsResponse, TvShowsList,
} from 'services/shows/shows.type';

function* loadAllShows() {
  try {
    const response:ShowsResponse = yield call(showsService().allShowslist);

    const moviesList = response
      .data
      .filter((show) => show.category === ShowCategory.MOVIE) as MoviesList;

    const tvShowsList = response
      .data
      .filter((show) => show.category === ShowCategory.TV_SHOWS) as TvShowsList;

    yield put(showsSlice.actions.setShows(response.data));
    yield put(showsSlice.actions.setMovies(moviesList));
    yield put(showsSlice.actions.setTvShows(tvShowsList));
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
