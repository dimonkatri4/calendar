import {RootState} from "../store";

export const getEvents = (state: RootState) => state.events.events;
export const getIsActiveForm = (state: RootState) => state.events.isActiveForm;
export const getIdChangeEvent = (state: RootState) => state.events.idChangeEvent;
/*
export const getCountChanges= (state: RootState) => state.events.countChanges;
export const getDateCreate= (state: RootState) => state.events.dateCreate;
export const getDateUpdate= (state: RootState) => state.events.dateUpdate; */
