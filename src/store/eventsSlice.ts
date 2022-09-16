import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentDate} from "../helpers/helpers";
import {INewEventData, IEvent, IUpdateEvent} from "../types/IEvents";

const initialState = {
    events: [] as IEvent[],
    isActiveForm: false,
    idChangeEvent: 0,
    isFetching: false,
}

const createNewEvent = (title: string,
                        description: string,
                        date: string,
                        id: number,
                        countChanges: number,
                        dateCreate: string,
                        dateUpdate: string | null
                        ) => (
    {title, description, date, id, countChanges, dateCreate, dateUpdate}
)

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action:PayloadAction<IEvent[]>) => {
          state.events = action.payload
        },
        addNewEvent: (state, action: PayloadAction<INewEventData>) => {
            const {title, description, date} = action.payload;
            const dateCreate = currentDate();
            const newEvent = createNewEvent(title, description, date,
                state.events.length, 0, dateCreate, null )
            state.events = [...state.events, newEvent];
        },
        toggleIsActiveForm: (state, action: PayloadAction<boolean>) => {
            state.isActiveForm = action.payload
        },
        setIdChangeEvent: (state, action: PayloadAction<number>) => {
            state.idChangeEvent = action.payload
        },
        updateEvent: (state, action:PayloadAction<IUpdateEvent>) => {
            const {description, title, date} = action.payload.data;
            state.events.map(event => {
                if (event.id === action.payload.id) {
                    event.title = title;
                    event.description = description;
                    event.date = date;
                    event.countChanges += 1;
                    event.dateUpdate = currentDate()
                }
                return event;
            })
        },
        deleteEvent: (state, action: PayloadAction<number>) => {
            state.events = state.events.filter(e => e.id !== action.payload)
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
    }
})

export const {addNewEvent, toggleIsActiveForm, setIdChangeEvent, deleteEvent,updateEvent, setEvents, toggleIsFetching} = eventsSlice.actions
export default eventsSlice.reducer