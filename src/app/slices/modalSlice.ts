import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";

interface CallBack {
  name: string;
  phone: string;
  date: string;
  id: string;
}
interface Record {
  name: string;
  time: string;
  phone: string;
  date: string;
  doctor: string;
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
export const postRecord = createAsyncThunk(
  "modals/postRecord",
  async (Record: Record) => {
    try {
      const responce = await axios.post("http://localhost:666/record", Record);
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
  RecordIsOpen: boolean;
  RecordTelValue: string;
  RecordNameValue: string;
  RecordDateValue: string;
  RecordDoctorValue: string;
  RecordShiftValue: string;
}

const initialState: ModalSlice = {
  CallBackIsOpen: false,
  CallBackTelValue: "",
  CallBackNameValue: "",
  RecordIsOpen: false,
  RecordTelValue: "",
  RecordNameValue: "",
  RecordDateValue: "",
  RecordDoctorValue: "",
  RecordShiftValue: "",
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
    isRecordOpen: (state) => {
      state.RecordIsOpen = !state.RecordIsOpen;
    },
    recordTelValueChange: (state, action) => {
      state.RecordTelValue = action.payload;
    },
    recordNameValueChange: (state, action) => {
      state.RecordNameValue = action.payload;
    },
    recordDateValueChange: (state, action) => {
      state.RecordDateValue = action.payload;
    },
    recordDoctorValueChange: (state, action) => {
      state.RecordDoctorValue = action.payload;
    },
    recordShiftValueChange: (state, action) => {
      state.RecordShiftValue = action.payload;
    },
  },
  extraReducers: {
    "modals/ postCallBack / pending": (state, action) => {},
    "modals/ postCallBack / fullfield": (state, action) => {},
    "modals/ postCallBack / regected": (state, action) => {},

    "modals/ postRecord / pending": (state, action) => {},
    "modals/ postRecord / fullfield": (state, action) => {},
    "modals/ postRecord / regected": (state, action) => {},
  },
});

export const {
  isCallBackOpen,
  callBackTelValueChange,
  callBackNameValueChange,
  isRecordOpen,
  recordTelValueChange,
  recordNameValueChange,
  recordDateValueChange,
  recordDoctorValueChange,
  recordShiftValueChange,
} = modalSlice.actions;

export const modal = (state: RootState) => state.modal;

export default modalSlice.reducer;
