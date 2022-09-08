import styled from "styled-components";

interface PropsCellWrapper {
    isWeekday?: boolean
    isSelectedMonth?: boolean
    isTitleWeeks?: boolean
}

interface PropsRowInCell {
    justifyContent?: string
    pr?: number
}

export const CellWrapper = styled.div<PropsCellWrapper>`
	min-height: ${props => props.isTitleWeeks ? 20 : 80}px;
	min-width: 140px;
	background-color: ${props => props.isWeekday ? '#27282A' : '#1E1F21'};
	color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;

export const RowInCell = styled.div<PropsRowInCell>`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
	${props => props.pr && `padding-right: ${props.pr}px`}
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: #4D4C4D;
`;

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DayWrapper = styled.div`
	height: 31px;
	width: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
;`

export const ShowDayWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

export const EventListWrapper = styled('ul')`
	margin: unset;
	list-style-position: inside;
	padding-left: 20px;
	list-style-type: none;
`;

export const EventItemWrapper = styled('button')`
	position: relative;
	left: -14px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 114px;
	border: unset;
	background: unset;
	color: #DDDDDD;
	cursor: pointer;
	margin: 0;
	padding: 0;
	text-align: left;
`;

export const ShadowWrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow:hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

