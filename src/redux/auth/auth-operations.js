import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginError, registerError } from 'helpers/notifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', payload);
      token.set(data.token);
      return data;
    } catch (error) {
      registerError();
      return thunkAPI.rejectWithValue();
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', payload);
    token.set(data.token);
    return data;
  } catch (error) {
    loginError();
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
