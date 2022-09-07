import React from 'react';
import './App.css';
import Header from "./Header/Header";
import TitleWeeks from "./TitleWeeks/TitleWeeks";
import CalendarGrid from "./CalendarGrid/CalendarGrid";
import styled from 'styled-components';

const ShadowWrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow:hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

function App() {
    return (
        <ShadowWrapper>
            <Header />
            <TitleWeeks/>
            <CalendarGrid />
        </ShadowWrapper>
    );
}

export default App;
