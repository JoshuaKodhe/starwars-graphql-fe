import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import peoplePageReducer from '../containers/PeoplePage/peoplePageSlice';

export const store = configureStore({
  reducer: {
    people: peoplePageReducer,
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
