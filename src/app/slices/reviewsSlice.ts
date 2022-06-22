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

export const getThisPageOfReviews = createAsyncThunk(
  "reviews/get",
  async (page: string) => {
    try {
      const reviews = await axios.get(
        `http://localhost:666/reviews?_page=${page}&_limit=5`
      );
      return reviews.data;
    } catch (e) {
      new Error();
    }
  }
);

export const getTotalCountReviews = createAsyncThunk(
  "reviews/getTotal",
  async () => {
    try {
      const reviews = await axios.get(
        "http://localhost:666/reviews?_page=1&_limit=5"
      );
      return reviews.headers["x-total-count"];
    } catch (e) {
      new Error();
    }
  }
);

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
  loadingNewReviews: boolean;
  countReviews: string;
  currentPage: string;
  newRating: number;
  newName: string;
  newReview: string;
}

const initialState: reviewsSlice = {
  reviews: [],
  countReviews: "",
  currentPage: "1",
  loadingReviews: false,
  loadingNewReviews: false,
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
    isLoadingNewReviews: (state) => {
      state.loadingNewReviews = !state.loadingNewReviews;
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
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    "reviews/get/pending": (state, action) => {
      state.loadingReviews = true;
    },
    "reviews/get/fulfilled": (state, action) => {
      state.reviews = action.payload;
      state.loadingReviews = false;
      state.loadingNewReviews = false;
    },
    "reviews/get/rejected": (state, action) => {
      state.loadingReviews = false;
      new Error();
    },
    "reviews/getTotal/pending": (state, action) => {},
    "reviews/getTotal/fulfilled": (state, action) => {
      state.countReviews = action.payload;
    },
    "reviews/getTotal/rejected": (state, action) => {
      new Error();
    },
    "reviews/post/pending": (state, action) => {},
    "reviews/post/fulfilled": (state, action) => {},
    "reviews/post/rejected": (state, action) => {
      new Error();
    },
  },
});

export const {
  setCurrentPage,
  isLoadingReviews,
  setNewRating,
  setNewName,
  setNewReview,
  isLoadingNewReviews,
} = reviewsSlice.actions;

export const loadingReviews = (state: RootState) => state.reviews;
export default reviewsSlice.reducer;
