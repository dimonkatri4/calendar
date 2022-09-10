import styled from 'styled-components'
import { ButtonWrapper, ShadowWrapper } from '../../containers/styledComponents'

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
`

export const FormWrapper = styled(ShadowWrapper)`
    width: 40vh;
    background-color: #1e1f21;
    color: #dddddd;
    box-shadow: unset;
`

export const ButtonsWrapper = styled('div')`
    padding: 10px 15px;
    display: flex;
    justify-content: center;
`

export const ButtonInForm = styled(ButtonWrapper)`
    height: 25px;
    margin-right: 10px;
`

export const DateChangeWrapper = styled('div')`
    border-bottom: 1px solid #464648;
    padding: 5px 15px;
    font-size: 0.7rem;
    color: grey;
`
