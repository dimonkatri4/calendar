import {configureStore} from "@reduxjs/toolkit";
import dateReducer from './dateSlice'
import eventsReducer from './eventsSlice'

export const store = configureStore({
    reducer: {
        date: dateReducer,
        events: eventsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch