import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

interface Doctor {
  id: number;
  name: string;
  title: string;
  education: string;
  photo: string;
  about: string;
}

export const getDoctors = createAsyncThunk("specialists/get", async () => {
  try {
    const doctors = await (
      await axios.get("http://localhost:666/doctors")
    ).data;
    return doctors;
  } catch (e) {
    new Error();
  }
});

interface SpecialistsSlice {
  specialists: Doctor[];
  loadingSpecialists: boolean;
}

const initialState: SpecialistsSlice = {
  specialists: [],
  loadingSpecialists: false,
};

export const spesialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {
    isLoadingSpetialists: (state) => {
      state.loadingSpecialists = !state.loadingSpecialists;
    },
  },
  extraReducers: {
    "specialists/get/pending": (state, action) => {
      state.loadingSpecialists = true;
    },
    "specialists/get/fulfilled": (state, action) => {
      state.specialists = action.payload;
      state.loadingSpecialists = false;
    },
    "specialists/get/rejected": (state, action) => {
      state.loadingSpecialists = false;

      new Error();
    },
  },
});

export const { isLoadingSpetialists } = spesialistsSlice.actions;

export const loadingServices = (state: RootState) => state.loadingServices;
export default spesialistsSlice.reducer;
