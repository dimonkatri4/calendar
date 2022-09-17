import React from 'react';
import {dayContainCurrentEvent, isSelectedMonth} from "../../helpers/helpers";
import {CellWrapper, RowInCell} from "../../containers/styledComponents";
import {Moment} from "moment";
import {IEvent} from "../../types/IEvents";
import Events from "../Events/Events";
import DayInCell from "../DayInCell/DayInCell";

interface Props {
    dayItem: Moment
    selectedDay: Moment
    events: IEvent[]
    openAddForm: (idEvent: number) => void
}

const CalendarCell = ({dayItem, selectedDay, events, openAddForm}: Props) => {

    const eventsInCurrentDay = dayContainCurrentEvent(events, dayItem)

    return (
        <CellWrapper
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem, selectedDay)}
        >
            <RowInCell justifyContent={'flex-end'}>
                <DayInCell dayItem={dayItem} />
                <Events events={eventsInCurrentDay} openAddForm={openAddForm} />
            </RowInCell>
        </CellWrapper>
    );
};

export default CalendarCell;