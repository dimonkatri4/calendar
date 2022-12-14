import React from 'react';
import {EventItemWrapper, EventListWrapper} from "../../containers/styledComponents";
import {IEvent} from "../../types/IEvents";
import styled from "styled-components";
import {useAppDispatch} from "../../hooks/redux";
import { setIsShowDay, setSelectedDay } from '../../store/dateSlice';

interface Props {
    events: IEvent[]
    openAddForm: (idEvent: number) => void
}

const EventListItemWrapper = styled('li')`
	padding-left: 2px;
	padding-right: 2px;
	margin-bottom: 2px;
	display: flex;
`;

const ShowMoreButton = styled(EventItemWrapper)`
    text-align: center;
    color: greenyellow;
`;

const Events = ({events, openAddForm}: Props) => {

    const dispatch = useAppDispatch()
    const showEventsInDay = (currentDay: string) => {
        dispatch(setIsShowDay(true))
        dispatch(setSelectedDay(currentDay))
    }

    return (
        <EventListWrapper>
            {events
                .slice(0,2)
                .map((event) => (
                    <EventListItemWrapper key={event.id}>
                        <EventItemWrapper onClick={() => openAddForm(event.id)}>
                            {event.title}
                        </EventItemWrapper>
                    </EventListItemWrapper>
                ))}
            {
                events.length > 2 ? (
                    <EventListItemWrapper key="show more">
                        <ShowMoreButton onClick={() => showEventsInDay(events[0].date)}>
                            show more...
                        </ShowMoreButton>
                    </EventListItemWrapper>
                ) : null
            }

        </EventListWrapper>
    );
};

export default Events;