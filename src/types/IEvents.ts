export interface IEvent {
    title: string
    description: string
    date: string
    id: number
    countChanges: number
    dateCreate: string
    dateUpdate: string | null
};

export type INewEventData = Omit<IEvent, 'id' | 'countChanges' | 'dateCreate' | 'dateUpdate'>;

export interface IUpdateEvent {
    id:number,
    data: INewEventData
}