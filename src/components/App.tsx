import React from 'react'
import './App.css'
import Header from './Header/Header'
import TitleWeeks from './TitleWeeks/TitleWeeks'
import CalendarGrid from './CalendarGrid/CalendarGrid'
import { ShadowWrapper } from '../containers/styledComponents'
import {useSelector} from "react-redux";
import {getIsShowDay} from "../store/selectors/dateSelectors";

function App() {

    const isShowDay = useSelector(getIsShowDay)

    return (
        <>
            <ShadowWrapper>
                <Header />
                {isShowDay ? null : <TitleWeeks/>}
                <CalendarGrid />
            </ShadowWrapper>
        </>
    )
}

export default App
