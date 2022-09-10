import moment from "moment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentDate} from "../helpers/helpers";

moment.updateLocale('en', {week: {dow: 1}});

const getMonths = () => {
    const monthsMap: string[] = [];
    for (let i = 0; i < 12; i++) {
        monthsMap[i] = moment((1 + i), "MM").clone().format('MMMM')
    }
    return monthsMap
}
const getYears = () => {
    const yearsMap: number[] = [];
    for (let i = 0; i <= 200; i++) {
        yearsMap.push(1900 + i)
    }
    return yearsMap
}

const initialState = {
    selectedDay: currentDate(),
    totalDaysInCalendar: 42,
    monthsMap: getMonths(),
    yearsMap: getYears()
}

export const dateSlice = createSlice({
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