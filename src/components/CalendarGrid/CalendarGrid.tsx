import React from 'react'
import {useSelector} from 'react-redux'
import {getDaysMap, getIsShowDay, getSelectedDay} from '../../store/selectors/dateSelectors'
import {GridWrapper,} from '../../containers/styledComponents'
import {getEvents, getIsActiveForm} from '../../store/selectors/eventsSelectors'
import {setIdChangeEvent, toggleIsActiveForm} from '../../store/eventsSlice'
import {useAppDispatch} from '../../hooks/redux'
import InputForm from '../InputForm/InputForm'
import CalendarCell from "../CalendarCell/CalendarCell";
import EventsInDay from "../EventsInDay/EventsInDay";

const CalendarGrid = () => {
    const daysMap = useSelector(getDaysMap)
    const selectedDay = useSelector(getSelectedDay)
    const events = useSelector(getEvents)
    const dispatch = useAppDispatch()
    const isActiveForm = useSelector(getIsActiveForm)
    const isShowDay = useSelector(getIsShowDay)

    const openAddForm = (idEvent: number) => {
        dispatch(setIdChangeEvent(idEvent))
        dispatch(toggleIsActiveForm(true))
    }

    return (
        <>
            {isActiveForm ? <InputForm /> : null}
            {!isShowDay ? <GridWrapper>
                {daysMap.map((dayItem) => (
                    <CalendarCell
                        key={dayItem.unix()}
                        dayItem={dayItem}
                        selectedDay={selectedDay}
                        events={events}
                        openAddForm={openAddForm}/>
                ))}
            </GridWrapper>
               : <EventsInDay openAddForm={openAddForm} />}
        </>
    )
}

export default CalendarGrid
