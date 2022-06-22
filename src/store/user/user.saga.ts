import userService from 'services/user/user.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AuthErrorMessage, AuthPayload, AuthResponse, SignUpPayload,
} from 'services/user/user.type';
import { userSlice, initialState } from 'store/user/user.slice';
import { PayloadAction } from '@reduxjs/toolkit';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
  } catch (e) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* createUser(action: PayloadAction<SignUpPayload>) {
  try {
    yield call(userService().signUp, action.payload);

    yield put(userSlice.actions.setError(initialState.error));
  } catch (e) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* userSaga() {
  yield takeLatest('user/authentication', authentication);
  yield takeLatest('user/creationUser', createUser);
}

export default userSaga;
