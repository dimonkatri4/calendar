import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const getSelectedDay = (state: RootState) => state.date.selectedDay;
export const getTotalDays = (state: RootState) => state.date.totalDaysInCalendar;

export const getStartDayInCalendar = createSelector(getSelectedDay, (selectedDay) => {
    return selectedDay.clone().startOf('month').startOf('week');
})

export const getDaysMap = createSelector(
    getTotalDays,
    getStartDayInCalendar,
    (totalDays, startDay) => {
        const day = startDay.clone().subtract(1, 'day');
        const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
        return daysMap
    })