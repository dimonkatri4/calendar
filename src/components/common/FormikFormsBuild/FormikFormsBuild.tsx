import React from "react";
import {FieldHookConfig, useField} from "formik";
import styled from "styled-components";

interface Props {
    hasError?: boolean
}

export const EventInput = styled('input')<Props>`
  padding: 5px 15px;
  font-size: 1rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
  ${props => props.hasError && `border: solid 1px #ff5756`}
`;

export const EventTextarea = styled('textarea')<Props>`
  padding: 4px 14px;
  font-size: 1rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
  resize: none;
  height: 20vh;
  ${props => props.hasError && `border: solid 1px #ff5756`}
`;

const ErrorSpan = styled('span')<Props>`
    ${props => props.hasError && `
        color: #ff5756;
        font-size: .8rem; 
        margin: 5px 0 0 5px;`}
`;

const InputBlock = styled('div')`
    display: flex;
    flex-flow: column;
`;

export function MyTextInput({style ,...props}: FieldHookConfig<string>) {
    const [field, meta] = useField(props)
    const hasError = !!(meta.touched && meta.error)
    return (
        <div>
            <InputBlock title={props.title}>
                {hasError && <ErrorSpan hasError={hasError}>{meta.error}</ErrorSpan>}
                <EventInput
                    hasError={hasError}
                    {...field}
                    placeholder={props.placeholder}
                    type={props.type}
                    style={style}
                />
            </InputBlock>
        </div>
    )
}

export function MyTextarea({...props}: FieldHookConfig<string>) {
    const [field, meta] = useField(props)
    const hasError = !!(meta.touched && meta.error)
    return (
        <div>
            <InputBlock title={props.title}>
                {hasError && <ErrorSpan hasError={hasError}>{meta.error}</ErrorSpan>}
                <EventTextarea
                    hasError={hasError}
                    {...field}
                    placeholder={props.placeholder}
                />
            </InputBlock>
        </div>
    )
}