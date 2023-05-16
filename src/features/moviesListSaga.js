import { call, put, select, debounce } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
  goToPage,
  selectQuery,
} from "./moviesListSlice";

import { getGenres, getPopularMovies, searchMovie } from "./getDataFromAPI";

function* fetchMoviesListHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    let data;
    if (query !== "") {
      data = yield call(searchMovie, { page: page, query: query });
    } else {
      data = yield call(getPopularMovies, { page: page });
    }
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield debounce(1000, goToPage.type, fetchMoviesListHandler);
}
