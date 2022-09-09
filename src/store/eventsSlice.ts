import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IEvent {
    title: string
    description: string
    date: string
    id: number
}

interface UpdateEvent {
    id:number,
    data: Omit<IEvent, 'id'>
}

const initialState = {
    events: [] as IEvent[],
    isActiveForm: false,
    idChangeEvent: 0
}

const createNewEvent = (title: string, description: string, date: string, id: number) => (
    {title, description, date, id}
)

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addNewEvent: (state, action: PayloadAction<Omit<IEvent, 'id'>>) => {
            const {title, description, date} = action.payload
            const newEvent = createNewEvent(title, description, date, state.events.length)
            state.events = [...state.events, newEvent]
        },
        toggleIsActiveForm: (state, action: PayloadAction<boolean>) => {
            state.isActiveForm = action.payload
        },
        setIdChangeEvent: (state, action: PayloadAction<number>) => {
            state.idChangeEvent = action.payload
        },
        updateEvent: (state, action:PayloadAction<UpdateEvent>) => {
            const {description, title, date} = action.payload.data;
            state.events.map(event => {
                if (event.id === action.payload.id) {
                    event.title = title;
                    event.description = description;
                    event.date = date;
                }
                return event;
            })
        },
        deleteEvent: (state, action: PayloadAction<number>) => {
            state.events = state.events.filter(e => e.id !== action.payload)
        }
    }
})

export const {addNewEvent, toggleIsActiveForm, setIdChangeEvent, deleteEvent,updateEvent} = eventsSlice.actions
export default eventsSlice.reducer