import {Form, Formik} from 'formik';
import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {useSelector} from "react-redux";
import {getEvents, getIdChangeEvent} from "../../store/selectors/eventsSelectors";
import {updateEvent, deleteEvent, toggleIsActiveForm} from "../../store/eventsSlice";
import moment from "moment";
import {dateToMoment} from "../../helpers/helpers";
import {FormPositionWrapper, FormWrapper, ButtonsWrapper, ButtonInForm, DateChangeWrapper} from "./styledInputForm";
import {MyTextarea, MyTextInput} from "../common/FormikFormsBuild/FormikFormsBuild";
import * as Yup from 'yup';

const InputForm = () => {

    const dispatch = useAppDispatch();
    const idChangeEvent = useSelector(getIdChangeEvent);
    const events = useSelector(getEvents);
    const changeEvent = (events.filter(e => e.id === idChangeEvent))[0];
    const {title, description, date, countChanges, dateCreate, dateUpdate} = changeEvent;
    const dateFormat = date ? dateToMoment(changeEvent.date).format("YYYY-MM-DD") : '';
    const time = date ? dateToMoment(changeEvent.date).format("HH:mm") : '';
    const dateCreateNormalFormat = dateToMoment(dateCreate).format('YYYY-MM-DD HH:mm');
    const dateUpdateNormalFormat = dateUpdate ? dateToMoment(dateUpdate).format('YYYY-MM-DD HH:mm') : '';

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
                {countChanges !== 0 ? <DateChangeWrapper>
                    {countChanges >= 1 && <div>Create at: {dateCreateNormalFormat}</div>}
                    {countChanges >= 2 && <div>Update at: {dateUpdateNormalFormat}</div>}
                </DateChangeWrapper> : null}
                <Formik
                    initialValues={{
                        title,
                        description,
                        date: dateFormat,
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
                                date: unixFullDate,
                            }
                        }))
                        dispatch(toggleIsActiveForm(false));
                    }}>
                    <Form>
                        <MyTextInput name='title' type='text' placeholder='Title' title='Title'/>
                        <MyTextarea name='description' placeholder='Description' title='Description'/>
                        <MyTextInput style={{textAlign: 'center'}} name='date' type='date'/>
                        <MyTextInput style={{textAlign: 'center'}} name='time' type='time'/>
                        <ButtonsWrapper>
                            <ButtonInForm type='submit'>Save</ButtonInForm>
                            <ButtonInForm type='button' onClick={closeForm}>Close</ButtonInForm>
                            {date && <ButtonInForm onClick={removeEvent}>Delete</ButtonInForm>}
                        </ButtonsWrapper>
                    </Form>
                </Formik>
            </FormWrapper>
        </FormPositionWrapper>
    );
};

export default InputForm;