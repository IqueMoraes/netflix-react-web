import showsService from 'services/shows/shows.service';
import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  initialState,
  showsSlice,
} from 'store/shows/shows.slice';
import {
  Show,
  ShowDetailResponse,
  ShowsResponse,
} from 'services/shows/shows.type';
import { tokenSelector } from 'store/user/user.selector';
import { User } from 'store/user/user.type';
import { PayloadAction } from '@reduxjs/toolkit';
import { ShowId } from './shows.type';

const {
  setList,
  setMyList,
  setShowDetail,
  setLoading,
  setError,
} = showsSlice.actions;

function* loadAllShows() {
  yield put(setLoading(true));
  const token: User['data']['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(setError('Usuário deslogado.'));
    return;
  }

  try {
    const response: ShowsResponse = yield call(
      showsService({ token }).showslist,
    );

    const showslist = response.data.reduce((acc: { }, show: Show) => {
      // @ts-ignore
      const categoryKey = acc[show.category] || [];

      return {
        ...acc,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(setList(showslist));
    yield put(setError(initialState.error));
  } catch (err) {
    console.log('erro', err);
    // @ts-ignore
    const { response: { data } } = err as AxiosError;
    // @ts-ignore
    yield put(setError(ErrorMessageEnum[data?.message] || 'Erro ao carregar filmes e séries.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* loadMyShows() {
  yield put(setLoading(true));
  const token: User['data']['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(setError('Usuário deslogado.'));
    return;
  }

  try {
    const response: ShowsResponse = yield call(
      showsService({ token }).myList,
    );

    yield put(setMyList(response.data));
    yield put(setError(''));
  } catch (err) {
    // @ts-ignore
    const { response: { data } } = err as AxiosError;
    // @ts-ignore
    yield put(setError(ErrorMessageEnum[data?.message] || 'Erro ao carregar sua lista de filmes e séries.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* loadShowDetail(action: PayloadAction<ShowId>) {
  yield put(setLoading(true));
  const token: User['data']['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(setError('Usuário deslogado.'));
    return;
  }

  try {
    const response: ShowDetailResponse = yield call(showsService({ token })
      .showDetail, action.payload);

    yield put(setShowDetail(response.data));
    yield put(setError(''));
  } catch (err) {
    // @ts-ignore
    const { response: { data } } = err as AxiosError;
    // @ts-ignore
    yield put(setError(ErrorMessageEnum[data?.message] || 'Erro ao carregar detalhes do show.'));
  } finally {
    yield put(setLoading(false));
  }
}

const showsSaga = [
  takeLatest('shows/activateList', loadAllShows),
  takeLatest('shows/activateMyList', loadMyShows),
  takeLatest('shows/activateShowDetail', loadShowDetail),
];

export default showsSaga;
