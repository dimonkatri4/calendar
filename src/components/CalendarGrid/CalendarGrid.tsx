import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getDaysMap} from "../../store/selectors/dateSelectors";

interface PropsCellWrapper {
    isWeekday: boolean
}

interface PropsRowInCell {
    justifyContent?: string
}


const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: #4D4C4D;
`;

const CellWrapper = styled.div<PropsCellWrapper>`
	min-height: 80px;
	min-width: 140px;
	background-color: ${props => props.isWeekday ? '#27282A' : '#1E1F21'};
	color: #DDDDDD;
`;

const RowInCell = styled.div<PropsRowInCell>`
	display: flex;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
	height: 31px;
	width: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
;`


const CalendarGrid = () => {

    const daysMap = useSelector(getDaysMap);

    return (
        <GridWrapper>
            {daysMap.map(dayItem => (
                <CellWrapper
                    key={dayItem.unix()}
                    isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
                >
                    <RowInCell justifyContent={'flex-end'}>
                        <DayWrapper>
                            {dayItem.format('D')}
                        </DayWrapper>
                    </RowInCell>
                </CellWrapper>

            ))}
        </GridWrapper>
    );
};

export default CalendarGrid;