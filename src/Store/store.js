import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {MMKV} from 'react-native-mmkv';
import {persistReducer, persistStore} from 'redux-persist';
import {Reducerss} from './Slices';

const storage = new MMKV();
const ReduxPersistStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
const persistConfig = {
  key: 'root',
  storage: ReduxPersistStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, Reducerss);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware({serializableCheck: false}).concat(thunk),
});

export const persistor = persistStore(Store);
