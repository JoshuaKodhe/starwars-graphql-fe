import { createSelector } from 'reselect';
import { IPeoplePageState, RootState } from './types';

const selectState = (state: RootState): IPeoplePageState => state.people;

export const selectPeopleData = createSelector(
  selectState,
  people => people.data,
);

export const selectPage = createSelector(selectState, data => data.page);

export const selectRequestStatusAndError = createSelector(selectState, data => ({
  request_status: data?.request_status,
  error: data?.error,
}));

export const selectPeoplepeopleForHome = createSelector(
  selectPeopleData,
  data => ({
    peopleForHome: data?.peopleForHome,
    count: data?.peopleForHome.count,
    next: data?.peopleForHome.next,
    previous: data?.peopleForHome.previous,
    results: data?.peopleForHome.results,
  }),
);
