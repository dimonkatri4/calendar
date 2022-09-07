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
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
	${props => props.pr && `padding-right: ${props.pr}px`}
`;