import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date: new Date()
}

const dateSlice = createSlice({
    name: "dateSlice",
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.date = new Date(action.payload)
            console.log(action.payload)
        }
    }
})

export const dateReducer = dateSlice.reducer
export const { setDate } = dateSlice.actions
export const selectDate = (state) => state.date.date