import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NavigationSlice {
  Selested: number;
}

const initialState: NavigationSlice = {
  Selested: 0,
};

export const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    isSelestedMenuItem: (state, action) => {
      state.Selested = action.payload;
    },
  },
});

export const { isSelestedMenuItem } = NavigationSlice.actions;

export const navigation = (state: RootState) => state.navigation;

export default NavigationSlice.reducer;
