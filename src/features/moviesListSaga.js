import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
  goToPage,
} from "./moviesListSlice";
import { getGenres, getPopularMovies } from "./getDataFromAPI";

function* fetchMoviesListHandler() {
  try {
    yield delay(1000);

    const genres = yield call(getGenres);
    const page = yield select(selectPage);
    const data = yield call(getPopularMovies, page);

    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(goToPage.type, fetchMoviesListHandler);
}
