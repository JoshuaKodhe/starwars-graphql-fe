import { createSlice } from '@reduxjs/toolkit';
import { IPeoplePageState, Status } from '../types';

const initialState: IPeoplePageState = {
  data: null,
  request_status: Status.idle,
  page: 1,
  error: null,
};

const PeoplePageSlice = createSlice({
  name: 'peoplePage',
  initialState,
  reducers: {
    setPeople(state, action) {
      state.data = action.payload;
    },
    setRequestStatus(state, action) {
      state.request_status = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPeople, setRequestStatus, setPage } = PeoplePageSlice.actions;
export default PeoplePageSlice.reducer;
