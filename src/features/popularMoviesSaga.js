import { call, delay, put } from "redux-saga/effects";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} from "./popularMoviesSlice";
import { getPopularMovies } from "./getDataFromAPI";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(1000);
    const movies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies.results));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield fetchPopularMoviesHandler();
}
