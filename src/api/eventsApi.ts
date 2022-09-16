import {instance} from "./baseApi";
import {IEvent, INewEventData} from "../types/IEvents";

interface IResponse {
    resultCode: number
}

export const eventsApi = {
    getEvents() {
        return instance.get<IEvent[]>('/events').then(res => res.data)
    },
    addEvent(newEvent: INewEventData) {
        return instance.post<IResponse>('/events/add', {newEvent}).then(res => res.data)
    },
    updateEvent(eventId: number, event: INewEventData) {
        return instance.put<IResponse>(`/events/update/${eventId}`, {event}).then(res => res.data)
    },
    deleteEvent(eventId:number) {
        return instance.delete<IResponse>(`/events/delete/${eventId}`).then(res => res.data)
    }
}