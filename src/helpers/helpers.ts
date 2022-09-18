import moment, { Moment } from 'moment'
import { IEvent } from '../types/IEvents'

export const isCurrentDay = (day: Moment): boolean => moment().isSame(day, 'day')

export const isSelectedMonth = (day: Moment, selectedDay: Moment): boolean =>
    selectedDay.isSame(day, 'month')

export const dateToUnix = (date: Moment): string => date.format('X')

export const dateToMoment = (date: string): Moment => moment(date, 'X')

export const currentDate = (): string => moment().format('X')

export const dayContainCurrentEvent = (events: IEvent[], dayItem: Moment) =>
    events.filter(
        (event) =>
            event.date >= dayItem.startOf('day').format('X') &&
            event.date <= dayItem.clone().endOf('day').format('X')
    )
