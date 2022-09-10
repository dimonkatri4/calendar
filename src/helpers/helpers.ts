import moment, {Moment} from "moment";

export const isCurrentDay = (day: Moment):boolean => moment().isSame(day, 'day');

export const isSelectedMonth = (day: Moment, selectedDay: Moment):boolean => selectedDay.isSame(day, 'month');

export const dateToUnix = (date: Moment):string => date.format("X");

export const dateToMoment = (date: string):Moment => moment(date, "X");

export const currentDate = ():string => moment().format("X");