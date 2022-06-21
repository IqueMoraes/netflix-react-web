import { createSlice } from '@reduxjs/toolkit';
import { User } from 'store/user/user.type';
import { reducers } from './user.reducer';

const initialState: User = {
  data: {},
};

const userSlice = createSlice({
  name: 'user',
  reducers,
  initialState,
});

export default userSlice;
