import moment, {Moment} from "moment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

moment.updateLocale('en', {week: {dow: 1}});

const initialState = {
    selectedDay: moment(),
    totalDaysInCalendar: 42
}

export const dateSlice =createSlice({
    name: 'date',
    initialState,
    reducers: {
        setSelectedDay: (state, action: PayloadAction<Moment>) => {
            state.selectedDay = action.payload
        },
    }
})

export const {setSelectedDay} = dateSlice.actions;

export default dateSlice.reducer