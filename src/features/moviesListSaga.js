import { call, delay, put, select } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectQuery,
} from "./moviesListSlice";
import { getGenres, getPopularMovies, searchMovie } from "./getDataFromAPI";

function* fetchMoviesListHandler() {
  try {
    yield delay(1000);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    let data;
    if (query !== '') {
      data = yield call(searchMovie, { query: query });
    } else {
      data = yield call(getPopularMovies);
    }
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield fetchMoviesListHandler();
}
