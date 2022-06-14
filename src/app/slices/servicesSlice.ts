import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";

export interface Service {
  type: string;
  title: string;
  body: string;
  description: string;
  img: string;
}

export const getServices = createAsyncThunk("services/get", async () => {
  try {
    const services = await (
      await axios.get("http://localhost:666/servicesTypes")
    ).data;
    return services;
  } catch (e) {
    new Error();
  }
});
export const getServicesByType = createAsyncThunk(
  "services/getByType",
  async (payload: string) => {
    try {
      const services = await (
        await axios.get("http://localhost:666/services?type=" + `${payload}`)
      ).data;
      return services;
    } catch (e) {
      new Error();
    }
  }
);

interface ServicesSlice {
  services: Service[];
  servicesByType: Service[];
  loadingServices: boolean;
}

const initialState: ServicesSlice = {
  services: [],
  servicesByType: [],
  loadingServices: false,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    isLoadingServices: (state) => {
      state.loadingServices = !state.loadingServices;
    },
  },
  extraReducers: {
    "services/get/pending": (state, action) => {
      state.loadingServices = true;
    },
    "services/get/fulfilled": (state, action) => {
      state.services = action.payload;
      state.loadingServices = false;
    },
    "services/get/rejected": (state, action) => {
      new Error();
      state.loadingServices = false;
    },
    "services/getByType/pending": (state, action) => {
      state.loadingServices = true;
    },
    "services/getByType/fulfilled": (state, action) => {
      state.servicesByType = action.payload;
      state.loadingServices = false;
    },
    "services/getByType/rejected": (state, action) => {
      new Error();
      state.loadingServices = false;
    },
  },
});

export const { isLoadingServices } = servicesSlice.actions;

export const loadingServices = (state: RootState) => state.loadingServices;
export default servicesSlice.reducer;
