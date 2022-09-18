import { AppDispatch } from './store'
import { eventsApi } from '../api/eventsApi'
import { addNewEvent, setEvents, toggleIsFetching, updateEvent, deleteEvent } from './eventsSlice'
import { INewEventData, IUpdateEvent } from '../types/IEvents'

export const getEventsThunk = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const data = await eventsApi.getEvents()
        dispatch(toggleIsFetching(false))
        dispatch(setEvents(data))
    } catch (e) {
        console.error(e)
        alert('Some error. Please reload the page.')
    }
}

export const addEventThunk = (newEvent: INewEventData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        await eventsApi.addEvent(newEvent)
        dispatch(toggleIsFetching(false))
        dispatch(addNewEvent(newEvent))
    } catch (e) {
        console.error(e)
        alert('Some error. Please reload the page.')
    }
}

export const updateEventThunk =
    (updateEventData: IUpdateEvent) => async (dispatch: AppDispatch) => {
        try {
            dispatch(toggleIsFetching(true))
            await eventsApi.updateEvent(updateEventData.id, updateEventData.data)
            dispatch(toggleIsFetching(false))
            dispatch(updateEvent(updateEventData))
        } catch (e) {
            console.error(e)
            alert('Some error. Please reload the page.')
        }
    }

export const deleteEventThunk = (eventId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        await eventsApi.deleteEvent(eventId)
        dispatch(toggleIsFetching(false))
        dispatch(deleteEvent(eventId))
    } catch (e) {
        console.error(e)
        alert('Some error. Please reload the page.')
    }
}
