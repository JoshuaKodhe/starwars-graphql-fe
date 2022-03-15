import { createSlice } from '@reduxjs/toolkit';
import { IPersonPageState, Status } from '../types';

const initialState: IPersonPageState = {
  person: null,
  request_status: Status.idle,
  error: null,
};

const PersonPageSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setPerson(state, action) {
      state.person = action.payload;
    },
    setPersonRequestStatus(state, action) {
      state.request_status = action.payload;
    },
  },
});

export const { setPerson, setPersonRequestStatus } = PersonPageSlice.actions;
export default PersonPageSlice.reducer;
