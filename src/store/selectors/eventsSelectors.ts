import {RootState} from "../store";

export const getEvents = (state: RootState) => state.events.events;
export const getIsActiveForm = (state: RootState) => state.events.isActiveForm;
export const getIdChangeEvent = (state: RootState) => state.events.idChangeEvent;