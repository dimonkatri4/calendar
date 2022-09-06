import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {

    moment.updateLocale('en', {week: {dow: 1}});
    const startDay = moment().startOf('month').startOf('week');
    const endDay = moment().endOf('month').endOf('week');

    const day = startDay.clone();
    const calendar = [];

    while (!day.isAfter(endDay)) {
        calendar.push(day.clone());
        day.add(1, 'day')
    }

    const daysOfWeek = 7;
    const weeksOfMonth = 5;

    const arrayWeeksOfMonth = [];
    for (let i = 0; i < weeksOfMonth; i += 1) {
        arrayWeeksOfMonth[i] = calendar.slice(i * daysOfWeek, i * daysOfWeek + daysOfWeek);
    }

    console.log(arrayWeeksOfMonth)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
