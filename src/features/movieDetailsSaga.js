import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectMovieId,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "./getDataFromAPI";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
