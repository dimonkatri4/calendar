import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {getSelectedDay} from '../../store/selectors/dateSelectors'
import {useAppDispatch} from '../../hooks/redux'
import {setSelectedDay} from '../../store/dateSlice'
import moment from 'moment'
import {dateToUnix} from '../../helpers/helpers'
import {addNewEvent, setIdChangeEvent, toggleIsActiveForm} from '../../store/eventsSlice'
import {getEvents} from '../../store/selectors/eventsSelectors'
import {ButtonWrapper} from '../../containers/styledComponents'
import Datepicker from '../Datepicker/Datepicker'
import calendarIcon from '../../assets/icons/calendar-icon.png'
import {AddEventButton, BlockWrapper, DivWrapper, ImgWrapper, TextWrapper, TitleWrapper, TodayButton,} from './styledHeader'

const Header = () => {
    const dispatch = useAppDispatch()
    const selectedDay = useSelector(getSelectedDay)
    const events = useSelector(getEvents)
    const [isDatepicker, setIsDatepicker] = useState(false)

    const setState = (value: boolean) => {
        setIsDatepicker(value)
    }

    const prevHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().subtract(1, 'month'))
        dispatch(setSelectedDay(newDate))
    }

    const todayHandler = () => dispatch(setSelectedDay(dateToUnix(moment())))

    const nextHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().add(1, 'month'))
        dispatch(setSelectedDay(newDate))
    }

    const openAddForm = () => {
        dispatch(addNewEvent({ title: '', description: '', date: '' }))
        dispatch(setIdChangeEvent(events.length))
        dispatch(toggleIsActiveForm(true))
    }

    return (
        <DivWrapper>
            <BlockWrapper>
                <TitleWrapper>{selectedDay.format('MMM')}</TitleWrapper>
                <TextWrapper>{selectedDay.format('YYYY')}</TextWrapper>
                <div>
                    <AddEventButton onClick={openAddForm}>+</AddEventButton>
                </div>
            </BlockWrapper>
            <BlockWrapper direction="column">
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
