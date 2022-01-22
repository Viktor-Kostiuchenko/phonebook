import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  darkTheme: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.darkTheme = payload;
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.darkTheme = payload.darkTheme;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, _action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _action) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, _action) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const { changeTheme } = authSlice.actions;
export default authSlice.reducer;
