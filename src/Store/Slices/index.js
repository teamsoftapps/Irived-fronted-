import {combineReducers} from '@reduxjs/toolkit';
import {Auth} from './authSlice';
import {cartSlice} from './cartSlice';

export const Reducerss = combineReducers({
  Auth: Auth.reducer,
  Cart: cartSlice.reducer,
});
