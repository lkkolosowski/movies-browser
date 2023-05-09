import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
  goToPage,
  selectQuery,
} from "./moviesListSlice";

import {
  getGenres,
  getPopularMovies,
  searchMovie,
} from "./getDataFromAPI";

function* fetchMoviesListHandler() {
  try {
    yield delay(1000);

    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    let data;
    if (query !== "") {
      data = yield call(searchMovie, { query: query });
    } else {
      data = yield call(getPopularMovies, page);
    }
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(goToPage.type, fetchMoviesListHandler);
}
