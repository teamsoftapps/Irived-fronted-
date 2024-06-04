import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isAuthenticated: false,
};

export const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload;
    },
    removeUser: state => {
      state.data = null;
    },
  },
});
export const {setUser, removeUser} = Auth.actions;
export default Auth.reducer;
