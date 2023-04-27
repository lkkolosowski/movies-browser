import { call, put } from "redux-saga/effects";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} from "./popularMoviesSlice";
import { getPopularMovies } from "./getDataFromAPI";

function* fetchPopularMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies.results));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield fetchPopularMoviesHandler();
}
