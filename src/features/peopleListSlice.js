import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        query: "",
        page: 1,
        totalPages: 0,
        totalResults: 0,
        people: [],        
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";
            state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
            state.totalResults = payload.data.total_results;
            state.people = payload.data.results;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        setQuery: (state, { payload }) => {
            state.query = payload.query;
            state.status="loading";
        },
        goToPage: (state, { payload }) => {
            state.status="loading";
            state.page = payload.page;
        },
    },
});
export const {
    fetchDataSuccess,
    fetchDataError,
    setQuery,
    goToPage,
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleList;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectTotalPages = (state) => selectPeopleListState(state).totalPages;
export const selectTotalResults = (state) => selectPeopleListState(state).totalResults;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectQuery = (state) => selectPeopleListState(state).query;
export const selectStatus = (state) => selectPeopleListState(state).status;

export default peopleListSlice.reducer;
