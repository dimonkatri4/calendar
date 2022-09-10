import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { dateToMoment } from '../../helpers/helpers'

export const getSelectedDay = (state: RootState) => dateToMoment(state.date.selectedDay)
export const getTotalDays = (state: RootState) => state.date.totalDaysInCalendar
export const getMonthsMap = (state: RootState) => state.date.monthsMap
export const getYearsMap = (state: RootState) => state.date.yearsMap

export const getStartDayInCalendar = createSelector(getSelectedDay, (selectedDay) => {
    return selectedDay.clone().startOf('month').startOf('week')
})

export const getDaysMap = createSelector(
    getTotalDays,
    getStartDayInCalendar,
    (totalDays, startDay) => {
        const day = startDay.clone().subtract(1, 'day')
        const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
        return daysMap
    }
)
