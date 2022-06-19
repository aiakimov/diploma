import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

interface Review {
  id: number;
  name: string;
  grade: number;
  date: string;
  body: string;
}

export const getReviews = createAsyncThunk("reviews/get", async () => {
  try {
    const reviews = await (
      await axios.get("http://localhost:666/reviews")
    ).data;
    return reviews;
  } catch (e) {
    new Error();
  }
});

export const postReview = createAsyncThunk(
  "reviews/post",
  async (review: Review) => {
    try {
      await axios.post("http://localhost:666/reviews", review);
    } catch (e) {
      new Error();
    }
  }
);

interface reviewsSlice {
  reviews: Review[];
  loadingReviews: boolean;
  newRating: number;
  newName: string;
  newReview: string;
}

const initialState: reviewsSlice = {
  reviews: [],
  loadingReviews: false,
  newRating: 4,
  newName: "",
  newReview: "",
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    isLoadingReviews: (state) => {
      state.loadingReviews = !state.loadingReviews;
    },
    setNewRating: (state, action: PayloadAction<number>) => {
      if (action.payload < 1) {
        state.newRating = 1;
        return;
      }
      state.newRating = action.payload;
    },
    setNewName: (state, action: PayloadAction<string>) => {
      state.newName = action.payload;
    },
    setNewReview: (state, action: PayloadAction<string>) => {
      state.newReview = action.payload;
    },
  },
  extraReducers: {
    "reviews/get/pending": (state, action) => {
      state.loadingReviews = true;
    },
    "reviews/get/fulfilled": (state, action) => {
      state.reviews = action.payload;
      state.loadingReviews = false;
    },
    "reviews/get/rejected": (state, action) => {
      state.loadingReviews = false;
      new Error();
    },
    "reviews/post/pending": (state, action) => {},
    "reviews/post/fulfilled": (state, action) => {},
    "reviews/post/rejected": (state, action) => {
      new Error();
    },
  },
});

export const { isLoadingReviews, setNewRating, setNewName, setNewReview } =
  reviewsSlice.actions;

export const loadingReviews = (state: RootState) => state.reviews;
export default reviewsSlice.reducer;
