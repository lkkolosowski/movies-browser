import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "personDetails",
    initialState: {
        personId: 0,
        details: [],
        genres: [], 
        cast: [],
        crew: [],
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, { payload }) => {
            state.details = payload.details;
            state.genres = payload.genres;
            state.cast = payload.credits.cast;
            state.crew = payload.credits.crew;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        getDetailsForPerson: (state, { payload }) => {
            state.status="loading";
            state.personId = payload.personId;
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForPerson,
    fetchDataError,
} = personSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectPersonGenres = (state) => selectPersonState(state).genres;
export const selectCrew = (state) => selectPersonState(state).crew;
export const selectCast = (state) => selectPersonState(state).cast;
export const selectStatus = (state) => selectPersonState(state).status;

export default personSlice.reducer;
