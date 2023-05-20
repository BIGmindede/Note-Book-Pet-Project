import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from 'universal-cookie'

const cookie = new Cookie()

const initialState = {
    notes: "",
    status: "loading"
}

export const fetchNotes = createAsyncThunk('fetchNotes', 
    async (date) => {
        const {data} = await axios.get(`http://server:8088/notes/${date}`,
            {
                headers: {
                    "Authorization": "Bearer " + cookie.get("token")
                }
            }
        )
        return data
    }
)

export const fetchAddNotes = createAsyncThunk('fetchNotes',
    async (props) => {
        const {data} = await axios.post(`http://server:8088/notes/${props.date}`,props.value,
            {
                headers: {
                    "Authorization": "Bearer " + cookie.get("token")
                }
            }
        )
        return data
    }
)

export const fetchUpdateNotes = createAsyncThunk('fetchNotes',
    async (props) => {
        const {data} = await axios.put(`http://server:8088/notes/${props.date}`,props.value,
            {
                headers: {
                    "Authorization": "Bearer " + cookie.get("token")
                }
            }
        )
        return data
    }
)

const notesSlice = createSlice({
    name: "notesSlice",
    initialState,
    reducers: {},
    extraReducers: {
        //Отправка запроса на получение записей
        [fetchNotes.pending]: (state) => {
            state.status = "loading"
        },
        [fetchNotes.fulfilled]: (state, action) => {
            state.notes = action.payload.notes
            state.status = "loaded"
        },
        [fetchNotes.rejected]: (state) => {
            state.status = "error"
        },
        //Отправка запроса на добавление записей
        [fetchAddNotes.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAddNotes.fulfilled]: (state, action) => {
            state.notes = action.payload.notes
            state.status = "loaded"
        },
        [fetchAddNotes.rejected]: (state) => {
            state.status = "error"
        },
        //Отправка запроса на изменение записей
        [fetchAddNotes.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAddNotes.fulfilled]: (state, action) => {
            state.notes = action.payload.notes
            state.status = "loaded"
        },
        [fetchAddNotes.rejected]: (state) => {
            state.status = "error"
        }
    }
})

export const notesReducer = notesSlice.reducer
export const selectNotes = (state) => state.notes.notes