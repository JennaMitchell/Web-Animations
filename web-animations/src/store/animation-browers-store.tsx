import { createSlice } from "@reduxjs/toolkit";

interface State {
  activeAnimationShape: string;
}
const initialState: State = {
  activeAnimationShape: "cross",
};

export const animationBrowserStoreSlice = createSlice({
  name: "Animation Browser Store",
  initialState: initialState,
  reducers: {
    setActiveAnimationShape(state, { payload }) {
      state.activeAnimationShape = payload;
    },
  },
});

export const animationBrowserSliceActions = animationBrowserStoreSlice.actions;
