import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import type { RootState } from "../../app/store";
import { menuLinks } from "../../components/Navigation/";

interface ToBackBtnSlice {
  oldHref: string;
  oldNavIndex: number;
  isScrolling: boolean;
}

const initialState: ToBackBtnSlice = {
  oldHref: "/",
  oldNavIndex: 0,
  isScrolling: false,
};

export const toBackBtnSlice = createSlice({
  name: "ToBackBtn",
  initialState,
  reducers: {
    toBackButton: (state, action) => {
      state.oldHref = action.payload.replace(/^.*\/\/[^\/]+/, "");
      state.oldNavIndex = menuLinks.findIndex(
        (el) => el.link === state.oldHref
      );
    },
    isScrollingWindow: (state, action) => {
      state.isScrolling = action.payload;
    },
  },
});

export const { toBackButton, isScrollingWindow } = toBackBtnSlice.actions;

export const toBackBtn = (state: RootState) => state.widget;

export default toBackBtnSlice.reducer;
