import { call, put, debounce, select } from "redux-saga/effects";
import {
  fetchDataSuccess,
  fetchDataError,
  goToPage,
  selectPage,
  selectQuery,
} from "./peopleListSlice";
import { getPopularPeople, searchPerson } from "./getDataFromAPI";

function* fetchPopularPeopleHandler() {
  try {
    const page = yield select(selectPage);
    const query = yield select(selectQuery);
    let data;
    if (query !== "") {
      data = yield call(searchPerson, { page: page, query: query });
    } else {
      data = yield call(getPopularPeople, { page: page });
    }
    yield put(fetchDataSuccess({ data }));
  } catch (error) {
    yield put(fetchDataError());
  }
}

export function* watchFetchPeopleList() {
  yield debounce(1000, goToPage.type, fetchPopularPeopleHandler);
}
