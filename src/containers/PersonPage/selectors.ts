import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

const selectPersonState = (state: RootState) => state.person;

export const selectPersonError = createSelector(
  selectPersonState,
  person => person.error,
);

export const selectPersonRequestStatus = createSelector(
  selectPersonState,
  person => person.request_status,
);

export const selectPersonDetails = createSelector(
  selectPersonState,
  person => person.person,
);
