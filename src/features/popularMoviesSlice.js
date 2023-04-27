import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: 1,
    movies: [],
    status: "loading", //success, loading or error
  },
  reducers: {
    fetchPopularMoviesSuccess: (state, { payload }) => {
      state.movies = payload;
      state.status = "success";
    },
    fetchPopularMoviesError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchPopularMoviesSuccess, fetchPopularMoviesError } =
  popularMoviesSlice.actions;

export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).movies;
export const selectStatus = (state) =>
  selectPopularMoviesState(state).status;

export default popularMoviesSlice.reducer;
