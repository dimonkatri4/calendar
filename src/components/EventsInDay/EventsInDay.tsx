import React from 'react';
import {IEvent} from "../../types/IEvents";
import {dateToMoment, dayContainCurrentEvent} from "../../helpers/helpers";
import {Moment} from "moment";
import {
    DayShowWrapper, EventItemButton,
    EventsListWrapper, ScaleCellEventWrapper,
    ScaleCellTimeWrapper,
    ScaleCellWrapper,
    ScaleWrapper
} from "./styledEventsInDay";
import {useSelector} from "react-redux";
import {getSelectedDay} from "../../store/selectors/dateSelectors";
import {getEvents} from "../../store/selectors/eventsSelectors";

const EventsInDay = () => {

    const selectedDay = useSelector(getSelectedDay)
    const events = useSelector(getEvents)
    const eventList = dayContainCurrentEvent(events, selectedDay)

    const cells = [...new Array(24)].map((_, i) => {
        const temp: IEvent[] = [];
        eventList.forEach(event => {
            if (dateToMoment(event.date).format('H') === `${i}`) {
                temp.push(event);
            }
        })
        return temp;
    })

    return (
        <DayShowWrapper>
            <EventsListWrapper>
                <ScaleWrapper>
                    {
                        cells.map((eventsList, i) => (
                            <ScaleCellWrapper key={i}>
                                <ScaleCellTimeWrapper>
                                    {
                                        i ? (
                                            <>
                                                {`${i}`.padStart(2, '0')}:00
                                            </>
                                        ) : null
                                    }
                                </ScaleCellTimeWrapper>
                                <ScaleCellEventWrapper>
                                    {
                                        eventsList.map(event => (
                                            <EventItemButton key={event.id}>
                                                {event.title}
                                            </EventItemButton>
                                        ))
                                    }
                                </ScaleCellEventWrapper>
                            </ScaleCellWrapper>
                        ))
                    }
                </ScaleWrapper>
            </EventsListWrapper>
        </DayShowWrapper>
    );
};

export default EventsInDay;