import React, { useRef } from 'react';
import styled from 'styled-components';

const InputComponent = ({ label, placeholder, type, value, onChange, name, errorText }) => {

    const inputRef = useRef(null);
    const InputFocus = () => {
        inputRef.current.focus();
    };
    return (
        <InputDiv>
            <H1Input onClick={InputFocus} >{label}</H1Input>
            <Input placeholder={placeholder} ref={inputRef} type={type} value={value} onChange={onChange} name={name} errors={errorText} required />
            <ErrorText>{errorText}</ErrorText>
        </InputDiv>
    )
}

export default InputComponent

const InputDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0px;
`
const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border: ${props => props.errors ? 'solid 1px red' : 'solid 1px gray'};
    border-radius: 5px;
    margin: 5px 0px;
    padding-left: 10px;
    box-sizing: border-box;
    background-color: #E8F0FE;
    outline: none;
`
const H1Input = styled.h1`
    font-size: 14px;
    font-weight: 400;
`

const ErrorText = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: red;
`
