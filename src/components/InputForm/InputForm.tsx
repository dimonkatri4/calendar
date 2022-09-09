import {Form, Formik} from 'formik';
import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {useSelector} from "react-redux";
import {getEvents, getIdChangeEvent} from "../../store/selectors/eventsSelectors";
import {updateEvent, deleteEvent, setIdChangeEvent, toggleIsActiveForm} from "../../store/eventsSlice";
import moment from "moment";
import {dateToMoment} from "../../helpers/helpers";
import {FormPositionWrapper, FormWrapper, ButtonsWrapper} from "./styledInputForm";
import {MyTextarea, MyTextInput} from "../common/FormikFormsBuild/FormikFormsBuild";
import * as Yup from 'yup';
import {ButtonWrapper} from "../../containers/styledComponents";
import styled from "styled-components";

const ButtonInForm = styled(ButtonWrapper)`
    height: 25px;
    margin-right: 10px;
`;


const InputForm = () => {

    const dispatch = useAppDispatch();
    const idChangeEvent = useSelector(getIdChangeEvent);
    const events = useSelector(getEvents);
    const changeEvent = (events.filter(e => e.id === idChangeEvent))[0];
    const {title, description, date} = changeEvent;
    const dateD = date ? dateToMoment(changeEvent.date).format("YYYY-MM-DD") : '';
    const time = date ? dateToMoment(changeEvent.date).format("HH:mm") : '';

    const closeForm = () => {
        date === '' && dispatch(deleteEvent(idChangeEvent));
        dispatch(toggleIsActiveForm(false));
    }

    const removeEvent = () => {
        dispatch(deleteEvent(idChangeEvent));
        dispatch(toggleIsActiveForm(false));
    }

    return (
        <FormPositionWrapper onClick={closeForm}>
            <FormWrapper onClick={e => e.stopPropagation()}>
                <Formik
                    initialValues={{
                        title,
                        description,
                        date: dateD,
                        time
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Title is required"),
                        date: Yup.string().required("Select date")
                    })}
                    onSubmit={({title, description, date, time}) => {
                        const fullDate = (`${date} ${time}`);
                        const unixFullDate = moment(fullDate, "YYYY-MM-DD HH:mm").format("X");
                        dispatch(updateEvent({
                            id: idChangeEvent,
                            data: {
                                title,
                                description,
                                date: unixFullDate
                            }
                        }))
                        dispatch(toggleIsActiveForm(false));
                    }}>
                    <Form>
                        <MyTextInput name='title' type='text' placeholder='Title' />
                        <MyTextarea name='description' placeholder='Description' />
                        <MyTextInput style={{textAlign: 'center'}} name='date' type='date' />
                        <MyTextInput style={{textAlign: 'center'}} name='time' type='time' />
                        <ButtonsWrapper>
                            <ButtonInForm type='submit'>Save</ButtonInForm>
                            <ButtonInForm type='button' onClick={closeForm}>Close</ButtonInForm>
                            {date && <ButtonInForm onClick={removeEvent}>Delete</ButtonInForm> }
                        </ButtonsWrapper>
                    </Form>
                </Formik>
            </FormWrapper>
        </FormPositionWrapper>
    );
};

export default InputForm;