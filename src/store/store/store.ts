import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import epsiodesSaga from 'store/episodes/episodes.saga';
import showsSaga from 'store/shows/shows.saga';
import { showsSlice } from 'store/shows/shows.slice';
import userSaga from 'store/user/user.saga';
import { userSlice } from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsSlice.reducer,
  },
  middleware: [
    saga,
  ],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
    ...epsiodesSaga,
  ]);
}

saga.run(storeSaga);

export default store;
