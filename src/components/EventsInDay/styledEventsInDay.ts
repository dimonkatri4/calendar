import styled from "styled-components";


export const DayShowWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid #464648;
  width: 986px
`;

export const EventsListWrapper = styled('div')`
  background-color: #1E1F21;
  color: #DDDDDD;
  flex-grow: 1;
`;

export const ScaleWrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`;

export const ScaleCellWrapper = styled('div')`
  flex-grow: 1;
  position: relative;
  &:not(:last-child){
    border-bottom: 1px solid #464648;
  }
  margin-left: 32px;
`;

export const ScaleCellTimeWrapper = styled('div')`
  position: absolute;
  left: -26px;
  top: -6px;
  font-size: 8px;
`;

export const ScaleCellEventWrapper = styled('div')`
  min-height: 22px;
`;

export const EventItemButton = styled('button')`
	position: relative;
	flex-grow: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	min-width: 50px;
    width: unset;
    margin-left: 4px;
	border: unset;
	color: #DDDDDD;
	cursor: pointer;
	padding: 0;
	text-align: left;
	background-color: #5d5f63;
	border: 1px solid #5d5f63;
	border-radius: 2px;
`;
