import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getSelectedDay} from "../../store/selectors/dateSelectors";
import {useAppDispatch} from "../../hooks/redux";
import { setSelectedDay } from '../../store/dateSlice';
import moment from "moment";
import {dateToUnix} from "../../helpers/helpers";
import { toggleIsActiveForm } from '../../store/eventsSlice';

const DivWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F21;
	color: #DCDDDD;
	padding: 16px;
`;

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const BlockWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const ButtonWrapper = styled('button')`
    border: unset;
	background-color: #565759;
	height: 20px;
	margin-right: 2px;
	border-radius: 4px;
	color: #E6E6E6;
	outline: unset;
    cursor:pointer;
`;

const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
	font-weight: bold;
`;

const AddEventButton = styled(ButtonWrapper)`
    margin-left: 15px;
    font-size: 20px;
    height: fit-content;
`;

const Header = () => {

    const dispatch =useAppDispatch();
    const selectedDay = useSelector(getSelectedDay);

    const prevHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().subtract(1, 'month'));
        dispatch(setSelectedDay(newDate));
    }
    
    const todayHandler = () => dispatch(setSelectedDay(dateToUnix(moment())));
    
    const nextHandler = () => {
        const newDate = dateToUnix(selectedDay.clone().add(1, 'month'));
        dispatch(setSelectedDay(newDate));
    }

    const openAddForm = () => {
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
            <BlockWrapper>
                <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
            </BlockWrapper>
        </DivWrapper>
    );
};

export default Header;