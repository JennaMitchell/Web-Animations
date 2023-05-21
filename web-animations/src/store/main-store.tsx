import { configureStore } from "@reduxjs/toolkit";
import { activeAnimationsStoreSlice } from "./active-animation-store";
import { animationBrowserStoreSlice } from "./animation-browers-store";
const store = configureStore({
  reducer: {
    activeAnimation: activeAnimationsStoreSlice.reducer,
    animationBrowser: animationBrowserStoreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// used to set it so our usestate perfectly match what is in the store
export type AppDispatch = typeof store.dispatch;
// dispatch is used to type or dispatch actions

export default store;
