import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getSelectedDay} from "../../store/selectors/dateSelectors";
import {useAppDispatch} from "../../hooks/redux";
import { setSelectedDay } from '../../store/dateSlice';
import moment from "moment";

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

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
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

const Header = () => {

    const dispatch =useAppDispatch();
    const selectedDay = useSelector(getSelectedDay);

    const prevHandler = () => dispatch(setSelectedDay(selectedDay.clone().subtract(1, 'month')));
    const todayHandler = () => dispatch(setSelectedDay(moment()));
    const nextHandler = () => dispatch(setSelectedDay(selectedDay.clone().add(1, 'month')));

    return (
        <DivWrapper>
            <div>
                <TitleWrapper>{selectedDay.format('MMM')}</TitleWrapper>
                <TextWrapper>{selectedDay.format('YYYY')}</TextWrapper>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
            </ButtonsWrapper>
        </DivWrapper>
    );
};

export default Header;