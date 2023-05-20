import { configureStore } from "@reduxjs/toolkit";
import { dateReducer } from "./slices/date";
import { notesReducer } from "./slices/notes";

export default configureStore({
    reducer: {
        date: dateReducer,
        notes: notesReducer
    }
})