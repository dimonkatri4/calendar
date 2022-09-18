import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getIsShowDay, getSelectedDay } from '../../store/selectors/dateSelectors'
import { useAppDispatch } from '../../hooks/redux'
import { setSelectedDay, setIsShowDay } from '../../store/dateSlice'
import moment from 'moment'
import { dateToUnix } from '../../helpers/helpers'
import { addNewEvent, setIdChangeEvent, toggleIsActiveForm } from '../../store/eventsSlice'
import { getEvents } from '../../store/selectors/eventsSelectors'
import { ButtonWrapper } from '../../containers/styledComponents'
import Datepicker from '../Datepicker/Datepicker'
import calendarIcon from '../../assets/icons/calendar-icon.png'
import {
    AddEventButton,
    BlockWrapper,
    ButtonsWrapper,
    DivWrapper,
    ImgWrapper,
    TextWrapper,
    TitleWrapper,
    TodayButton,
    ToggleDayMonth,
} from './styledHeader'

const Header = () => {
    const dispatch = useAppDispatch()
    const selectedDay = useSelector(getSelectedDay)
    const events = useSelector(getEvents)
    const [isDatepicker, setIsDatepicker] = useState(false)
    const isShowDay = useSelector(getIsShowDay)

    const prevNextValue = isShowDay ? 'day' : 'month'

    const setState = (value: boolean) => {
        setIsDatepicker(value)
    }

    const prevHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().subtract(1, prevNextValue))
        dispatch(setSelectedDay(newDate))
    }

    const todayHandler = () => dispatch(setSelectedDay(dateToUnix(moment())))

    const nextHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().add(1, prevNextValue))
        dispatch(setSelectedDay(newDate))
    }

    const openAddForm = () => {
        dispatch(addNewEvent({ title: '', description: '', date: '' }))
        dispatch(setIdChangeEvent(events.length))
        dispatch(toggleIsActiveForm(true))
    }

    const setDisplayMode = (value: boolean) => {
        {
            value === true && todayHandler()
        }
        dispatch(setIsShowDay(value))
    }

    return (
        <DivWrapper>
            <BlockWrapper>
                {isShowDay ? <TitleWrapper>{selectedDay.format('DD')}</TitleWrapper> : null}
                <TitleWrapper>{selectedDay.format('MMM')}</TitleWrapper>
                <TextWrapper>{selectedDay.format('YYYY')}</TextWrapper>
                <div>
                    <AddEventButton onClick={openAddForm}>+</AddEventButton>
                </div>
            </BlockWrapper>
            <ButtonsWrapper>
                <ToggleDayMonth
                    isShowDay={!isShowDay}
                    onClick={() => setDisplayMode(false)}
                    disabled={!isShowDay}
                >
                    Month
                </ToggleDayMonth>
                <ToggleDayMonth
                    isShowDay={isShowDay}
                    onClick={() => setDisplayMode(true)}
                    disabled={isShowDay}
                >
                    Day
                </ToggleDayMonth>
            </ButtonsWrapper>
            <BlockWrapper direction="column" width="145">
                <div>
                    <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
                    <TodayButton onClick={todayHandler}>Today</TodayButton>
                    <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
                </div>
                {isDatepicker ? (
                    <Datepicker setState={setState} />
                ) : (
                    <ImgWrapper
                        src={calendarIcon}
                        alt="iconCalendar"
                        onClick={() => setIsDatepicker(true)}
                    />
                )}
            </BlockWrapper>
        </DivWrapper>
    )
}

export default Header
