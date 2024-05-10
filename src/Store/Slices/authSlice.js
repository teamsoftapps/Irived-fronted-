import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
