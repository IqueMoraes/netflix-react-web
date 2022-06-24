import userService from 'services/user/user.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AuthErrorMessage, AuthPayload, AuthResponse, ErrorMessageEnum, SignUpPayload,
} from 'services/user/user.type';
import { userSlice, initialState } from 'store/user/user.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { USER_TOKE_COOKIE } from './user.type';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem(USER_TOKE_COOKIE, response.data.token);
  } catch (e) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* createUser(action: PayloadAction<SignUpPayload>) {
  try {
    yield call(userService().signUp, action.payload);

    yield put(userSlice.actions.setError(initialState.error));
  } catch (e) {
    // @ts-ignore
    const { response: { data } } = e as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data.message]));
  }
}

const userSaga = [
  takeLatest('user/authentication', authentication),
  takeLatest('user/creationUser', createUser),
];

export default userSaga;
