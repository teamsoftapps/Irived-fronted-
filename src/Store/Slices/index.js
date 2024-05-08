import {combineReducers} from '@reduxjs/toolkit';
import {Auth} from './authSlice';

export const Reducerss = combineReducers({
  Auth: Auth.reducer,
});
