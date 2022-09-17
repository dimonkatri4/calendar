import styled from "styled-components";
import {ButtonWrapper} from "../../containers/styledComponents";

export const TextWrapper = styled('span')`
  font-size: 32px;
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

export const BlockWrapper = styled('div')<{direction?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  ${props => props.direction && `flex-direction: ${props.direction}` } 
`;


export const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
	font-weight: bold;
`;

export const AddEventButton = styled(ButtonWrapper)`
    margin-left: 15px;
    font-size: 20px;
    height: fit-content;
`;

export const ImgWrapper = styled('img') `
    height: 4vh;
`;

export const DivWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F21;
	color: #DCDDDD;
	padding: 0 16px;
`;