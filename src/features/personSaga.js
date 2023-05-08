import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchDataSuccess,
  selectPersonId,
  fetchDataError,
  getDetailsForPerson,
} from "./personSlice";
import {
  getGenres,
  getPersonDetails,
  getPersonMovieCredits,
} from "./getDataFromAPI";

function* fetchPersonDetailsHandler() {
  try {
    const id = yield select(selectPersonId);
    const genres = yield call(getGenres);
    const details = yield call(getPersonDetails, { personId: id });
    const credits = yield call(getPersonMovieCredits, { personId: id });
    yield put(fetchDataSuccess({ details, credits, genres }));
  } catch (error) {
    yield put(fetchDataError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}
