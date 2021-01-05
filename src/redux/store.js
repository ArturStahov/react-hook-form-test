import {
  configureStore,
  getDefaultMiddleware,
  createReducer,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import * as action from './contact-action';

const contactReducer = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
