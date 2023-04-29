import { call, delay, put } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
} from "./moviesListSlice";
import { getGenres, getPopularMovies } from "./getDataFromAPI";

function* fetchMoviesListHandler() {
  try {
    yield delay(1000);
    const data = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield fetchMoviesListHandler();
}
