import React from 'react';
import './App.css';
import Header from "./Header/Header";
import TitleWeeks from "./TitleWeeks/TitleWeeks";
import CalendarGrid from "./CalendarGrid/CalendarGrid";
import {ShadowWrapper} from "../containers/styledComponents";

function App() {
    return (
        <>
            <ShadowWrapper>
                <Header/>
                <TitleWeeks/>
                <CalendarGrid/>
            </ShadowWrapper>
        </>
    );
}

export default App;
