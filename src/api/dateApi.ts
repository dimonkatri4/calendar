import { instance } from './baseApi'

export const dateApi = {
    getSelectedDay() {
        return instance.get<string>('/date').then((res) => res.data)
    },
}
