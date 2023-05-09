import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
    movies: [],
    genres: [],
    status: "loading",
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload }) => {
      state.movies = payload.data.results;
      state.genres = payload.genres;
      state.status = "success";
      state.totalResults = payload.data.total_results;
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      state.status = "loading";
    },
  },
});
export const { fetchMoviesListSuccess, fetchMoviesListError, setQuery } =
  moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) =>
  selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectQuery = (state) => selectMoviesListState(state).query;
export const selectTotalResults = (state) => selectMoviesListState(state).totalResults;

export default moviesListSlice.reducer;
