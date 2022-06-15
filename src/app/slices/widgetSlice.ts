import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface WidgetSlice {
  isOpen: boolean;
}

const initialState: WidgetSlice = {
  isOpen: false,
};

export const widgetSlice = createSlice({
  name: "widgetMenu",
  initialState,
  reducers: {
    widgetMenuIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { widgetMenuIsOpen } = widgetSlice.actions;

export const widget = (state: RootState) => state.widget;

export default widgetSlice.reducer;
