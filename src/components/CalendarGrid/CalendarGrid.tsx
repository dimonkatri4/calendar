import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getDaysMap, getSelectedDay} from "../../store/selectors/dateSelectors";
import {CellWrapper, RowInCell} from "../../containers/styledComponents";
import {isCurrentDay, isSelectedMonth} from "../../helpers/helpers";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: #4D4C4D;
`;

const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayWrapper = styled.div`
	height: 31px;
	width: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
;`

const CalendarGrid = () => {

    const daysMap = useSelector(getDaysMap);
    const selectedDay = useSelector(getSelectedDay);

    return (
        <GridWrapper>
            {daysMap.map(dayItem => (
                <CellWrapper
                    key={dayItem.unix()}
                    isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
                    isSelectedMonth={isSelectedMonth(dayItem, selectedDay)}
                >
                    <RowInCell justifyContent={'flex-end'}>
                        <DayWrapper>
                            {isCurrentDay(dayItem) ? <CurrentDay>{dayItem.format('D')}</CurrentDay> :
                                dayItem.format('D')
                            }
                        </DayWrapper>
                    </RowInCell>
                </CellWrapper>

            ))}
        </GridWrapper>
    );
};

export default CalendarGrid;