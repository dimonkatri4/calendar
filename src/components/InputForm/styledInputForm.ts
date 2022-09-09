import styled from "styled-components";
import {ShadowWrapper} from "../../containers/styledComponents";

export const FormPositionWrapper = styled('div')`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(ShadowWrapper)`
  width: 40vh;
  background-color: #1E1F21;
  color: #DDDDDD;
  box-shadow:unset;
`;

export const ButtonsWrapper = styled('div')`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
`;
