import React from 'react';
import './App.css';
import moment from 'moment';
import Header from "./Header/Header";
import TitleWeeks from "./TitleWeeks/TitleWeeks";
import CalendarGrid from "./CalendarGrid/CalendarGrid";

function App() {

    moment.updateLocale('en', {week: {dow: 1}});
    const startDay = moment().clone().startOf('month').startOf('week');

    return (
        <div className="App">
            <Header/>
            <TitleWeeks/>
            <CalendarGrid startDay={startDay}/>
        </div>
    );
}

export default App;
