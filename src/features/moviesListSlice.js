import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
    totalPages: 0,
    movies: [],
    genres: [],
    status: "loading",
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.status = "loading";
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.totalPages =
        movies.data.total_pages > 500 ? 500 : movies.data.total_pages;
      state.status = "success";
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    goToPage: (state, { payload: movies }) => {
      state.status = "loading";
      state.page = movies.page;
    },
  },
});
export const { fetchMoviesListSuccess, fetchMoviesListError, goToPage } =
  moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) =>
  selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesListState(state).page;
export const selectTotalPages = (state) =>
  selectMoviesListState(state).totalPages;

export default moviesListSlice.reducer;
