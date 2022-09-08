import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Event {
    title: string
    description: string
    date: string
    id: number
}

const initialState = {
    events: [] as Event[],
    isActiveForm: false
}

const createNewEvent = (title: string, description: string, date: string, id: number) => (
    {title, description, date, id}
)

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<Omit<Event, 'id'>>) => {
            const {title, description, date} = action.payload
            const newEvent = createNewEvent(title, description, date, state.events.length)
            state.events = [...state.events, newEvent]
        },
        toggleIsActiveForm: (state, action: PayloadAction<boolean>) => {
            state.isActiveForm = action.payload
        },
        updateEvent: (state, action) => {
            state.events.map(event => {
                if (event.id === action.payload.id) {
                    event = {...event, ...action.payload.data}
                }
            })
        }
    }
})

export const {setEvents, toggleIsActiveForm} = eventsSlice.actions
export default eventsSlice.reducer