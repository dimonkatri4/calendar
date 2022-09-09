import moment from "moment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentDate} from "../helpers/helpers";

moment.updateLocale('en', {week: {dow: 1}});

window.moment = moment

const initialState = {
    selectedDay: currentDate(),
    totalDaysInCalendar: 42
}

export const dateSlice =createSlice({
    name: 'date',
    initialState,
    reducers: {
        setSelectedDay: (state, action: PayloadAction<string>) => {
            state.selectedDay = action.payload
        },
    }
})

export const {setSelectedDay} = dateSlice.actions;

export default dateSlice.reducer