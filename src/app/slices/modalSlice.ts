import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";

interface CallBack {
  name: string;
  phone: string;
  date: string;
  id: string;
}

export const postCallBack = createAsyncThunk(
  "modals/postCallBack",
  async (CallBack: CallBack) => {
    try {
      const responce = await axios.post(
        "http://localhost:666/callBacks",
        CallBack
      );
      return responce.data;
    } catch (e) {
      new Error();
    }
  }
);

interface ModalSlice {
  CallBackIsOpen: boolean;
  CallBackTelValue: string;
  CallBackNameValue: string;
}

const initialState: ModalSlice = {
  CallBackIsOpen: false,
  CallBackTelValue: "",
  CallBackNameValue: "",
};

export const modalSlice = createSlice({
  name: "Modals",
  initialState,
  reducers: {
    isCallBackOpen: (state) => {
      state.CallBackIsOpen = !state.CallBackIsOpen;
    },
    callBackTelValueChange: (state, action) => {
      state.CallBackTelValue = action.payload;
    },
    callBackNameValueChange: (state, action) => {
      state.CallBackNameValue = action.payload;
    },
  },
  extraReducers: {
    "modals/ postCallBack / pending": (state, action) => {},
    "modals/ postCallBack / fullfield": (state, action) => {},
    "modals/ postCallBack / regected": (state, action) => {},
  },
});

export const {
  isCallBackOpen,
  callBackTelValueChange,
  callBackNameValueChange,
} = modalSlice.actions;

export const modal = (state: RootState) => state.modal;

export default modalSlice.reducer;
