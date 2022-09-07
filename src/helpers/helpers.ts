import moment, {Moment} from "moment";

export const isCurrentDay = (day: Moment) => moment().isSame(day, 'day');
export const isSelectedMonth = (day: Moment, selectedDay: Moment) => selectedDay.isSame(day, 'month');