import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface AlertsSlice {
  fieldInput: boolean;
  validateAlert: boolean;
  successAlert: boolean;
}

const initialState: AlertsSlice = {
  fieldInput: false,
  validateAlert: false,
  successAlert: false,
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    fieldInputAlert: (state, action) => {
      state.fieldInput = action.payload;
    },
    validateAlert: (state, action) => {
      state.validateAlert = action.payload;
    },
    successAlert: (state, action) => {
      state.successAlert = action.payload;
    },
  },
});

export const { fieldInputAlert, validateAlert, successAlert } =
  alertsSlice.actions;

export const alerts = (state: RootState) => state.alerts;

export default alertsSlice.reducer;
