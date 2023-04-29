import { all } from "redux-saga/effects";
import { watchFetchMoviesList } from "./features/moviesListSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMoviesList(),
  ]);
}
