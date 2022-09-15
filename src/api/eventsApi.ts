import {instance} from "./baseApi";
import {IEvent} from "../types/IEvents";

export const eventsApi = {
    getEvents() {
        return instance.get<IEvent[]>('/events').then(res => res.data)
    },
}