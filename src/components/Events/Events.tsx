import React from 'react';
import {EventItemWrapper, EventListWrapper} from "../../containers/styledComponents";
import {IEvent} from "../../types/IEvents";
import styled from "styled-components";

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


const Events = ({events, openAddForm}: Props) => {
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
                        <EventItemWrapper >
                            show more...
                        </EventItemWrapper>
                    </EventListItemWrapper>
                ) : null
            }

        </EventListWrapper>
    );
};

export default Events;