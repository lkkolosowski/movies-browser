import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesListReducer from "./features/moviesListSlice";
import peopleListReducer from "./features/peopleListSlice";
import movieDetailsReducer from "./features/movieDetailsSlice";
import personDetailsReducer from "./features/personSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
    peopleList: peopleListReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
