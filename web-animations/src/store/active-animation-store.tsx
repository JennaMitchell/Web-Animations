import { createSlice } from "@reduxjs/toolkit";

interface State {
  test: boolean;
}
const initialState: State = {
  test: false,
};

export const activeAnimationsStoreSlice = createSlice({
  name: "Active Animations Store",
  initialState: initialState,
  reducers: {
    setTest(state, { payload }) {
      state.test = payload;
    },
  },
});

export const activeAnimationStoreActions = activeAnimationsStoreSlice.actions;
