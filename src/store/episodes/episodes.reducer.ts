import {
  GetList, SetData,
  SetError, SetSettings,
} from './episodes.type';

const activateEpisodes: GetList = () => {};

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings.loading = action.payload.loading;
};

const setError: SetError = (state, action) => {
  state.error = { ...state.error, ...action.payload };
};

const reducers = {
  setData,
  setSettings,
  setError,
  activateEpisodes,
};

export default reducers;
