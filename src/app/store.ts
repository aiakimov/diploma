import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import burgerMenuIsOpen from "./slices/burgerSlice";
import isSelestedMenuItem from "./slices/NavigationSlice";

export const store = configureStore({
  reducer: {
    burger: burgerMenuIsOpen,
    navigation: isSelestedMenuItem,
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
