import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
    movies: [],
    genres: [],
    status: "loading",
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload }) => {
      state.movies = payload.data.results;
      state.genres = payload.genres;
      state.status = "success";
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMoviesListSuccess, fetchMoviesListError } =
  moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) =>
  selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;

export default moviesListSlice.reducer;
