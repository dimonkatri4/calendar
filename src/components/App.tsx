import React from 'react';
import './App.css';
import Header from "./Header/Header";
import TitleWeeks from "./TitleWeeks/TitleWeeks";
import CalendarGrid from "./CalendarGrid/CalendarGrid";
import {ShadowWrapper} from "../containers/styledComponents";
import InputForm from "./InputForm/InputForm";
import {useSelector} from "react-redux";
import {getIsActiveForm} from "../store/selectors/eventsSelectors";


function App() {

    const isActiveForm = useSelector(getIsActiveForm);

    return (
        <>
            {
                isActiveForm ? <InputForm isActive={isActiveForm}/> : null
            }
            <ShadowWrapper>
                <Header/>
                <TitleWeeks/>
                <CalendarGrid/>
            </ShadowWrapper>
        </>
    );
}

export default App;
