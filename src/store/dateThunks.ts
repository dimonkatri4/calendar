import {AppDispatch} from "./store";
import {dateApi} from "../api/dateApi";
import { setSelectedDay } from "./dateSlice";
import {currentDate} from "../helpers/helpers";

export const getSelectedDayThunk = () => async (dispatch: AppDispatch) => {
    try {
        const data = await dateApi.getSelectedDay()
        dispatch(setSelectedDay(data))
    } catch (e) {
        console.error(e);
        dispatch(setSelectedDay(currentDate()))
    }
}