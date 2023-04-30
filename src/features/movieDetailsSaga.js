import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectMovieId,
} from "./movieDetailsSlice";
import { getMovieDetails } from "./getDataFromAPI";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    yield put(fetchMovieDetailsSuccess({ details }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
