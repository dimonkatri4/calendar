import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {ShadowWrapper} from "../../containers/styledComponents";
import {useAppDispatch} from "../../hooks/redux";
import moment from "moment";
import { setEvents, toggleIsActiveForm } from '../../store/eventsSlice';

interface Props {
    isActive: boolean
}

const FormPositionWrapper = styled('div')`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled(ShadowWrapper)`
  width: 200px;
  //height: 300px;
  background-color: #1E1F21;
  color: #DDDDDD;
  box-shadow:unset;
`;

const EventTitle = styled('input')`
  padding: 4px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

const EventBody = styled('textarea')`
  padding: 4px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

const ButtonsWrapper = styled('div')`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;


const InputForm = ({isActive}: Props) => {
    const dispatch = useAppDispatch();
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const closeForm = () => {
        dispatch(toggleIsActiveForm(false))
    }

    const handleSubmit = () => {
        const fullDate = (`${date} ${time}`);
        const unixFullDate = moment(fullDate, "YYYY-MM-DD HH:mm").format("X");
        dispatch(setEvents({title, description, date: unixFullDate}));
    }

    return (
        <FormPositionWrapper onClick={closeForm}>
            <FormWrapper onClick={e => e.stopPropagation()}>
                <EventTitle
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    required
                />
                <EventBody
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                />
                <EventTitle value={date} required type={"date"} onChange={(e) => setDate(e.target.value)}/>
                <EventTitle value={time} type={"time"} onChange={(e) => setTime(e.target.value)}/>
                <ButtonsWrapper>
                    <button onClick={closeForm}>Cancel</button>
                    <button onClick={handleSubmit}>Create</button>
                </ButtonsWrapper>
            </FormWrapper>
        </FormPositionWrapper>
    );
};

export default InputForm;