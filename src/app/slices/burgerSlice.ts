import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface BurgerSlice {
  isOpen: boolean;
}

const initialState: BurgerSlice = {
  isOpen: false,
};

export const burgerSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    burgerMenuIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { burgerMenuIsOpen } = burgerSlice.actions;

export const burger = (state: RootState) => state.burger;

export default burgerSlice.reducer;
