import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {userSlice} from './redux-modules/userSlice';

export const store = configureStore({
  reducer: {
    userSlice : userSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
