import { all } from "redux-saga/effects";
import { watchFetchMoviesList } from "./features/moviesListSaga";
import { watchFetchMovieDetails } from "./features/movieDetailsSaga";
import { watchFetchPersonDetails } from "./features/personSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMoviesList(),
    watchFetchMovieDetails(),
    watchFetchPersonDetails(),
  ]);
}
