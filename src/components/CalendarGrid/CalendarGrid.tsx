import React from 'react';
import {useSelector} from "react-redux";
import {getDaysMap, getSelectedDay} from "../../store/selectors/dateSelectors";
import {
    CellWrapper,
    CurrentDay,
    DayWrapper, EventItemWrapper, EventListWrapper,
    GridWrapper,
    RowInCell,
    ShowDayWrapper
} from "../../containers/styledComponents";
import {isCurrentDay, isSelectedMonth} from "../../helpers/helpers";
import {getEvents} from "../../store/selectors/eventsSelectors";
import {toggleIsActiveForm} from "../../store/eventsSlice";
import {useAppDispatch} from "../../hooks/redux";

const CalendarGrid = () => {

    const daysMap = useSelector(getDaysMap);
    const selectedDay = useSelector(getSelectedDay);
    const events = useSelector(getEvents);
    const dispatch = useAppDispatch();

    const openAddForm = () => {
        dispatch(toggleIsActiveForm(true))
    }

    return (
        <GridWrapper>
            {daysMap.map(dayItem => (
                <CellWrapper
                    key={dayItem.unix()}
                    isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
                    isSelectedMonth={isSelectedMonth(dayItem, selectedDay)}
                >
                    <RowInCell justifyContent={'flex-end'}>
                        <ShowDayWrapper>
                            <DayWrapper>
                                {isCurrentDay(dayItem) ? <CurrentDay>{dayItem.format('D')}</CurrentDay> :
                                    dayItem.format('D')
                                }
                            </DayWrapper>
                        </ShowDayWrapper>
                        <EventListWrapper>
                            {
                                events.filter(event => event.date >= dayItem.format('X') &&
                                    event.date <= dayItem.clone().endOf('day').format('X'))
                                    .map(event => (
                                        <li key={event.id}>
                                            <EventItemWrapper onClick={openAddForm}>
                                                {event.title}
                                            </EventItemWrapper>
                                        </li>
                                    ))
                            }
                        </EventListWrapper>
                    </RowInCell>
                </CellWrapper>

            ))}
        </GridWrapper>
    );
};

export default CalendarGrid;