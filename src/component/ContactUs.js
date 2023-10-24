import React from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import mobile from './Mobile';
import InputComponent from './InputComponent';


const ContactUs = () => {
    return (
        <Container>
            <TopContainer>
                <Top>
                    <Text1>Home</Text1><SvgDiv><KeyboardArrowRightIcon /></SvgDiv> <Text1>Home</Text1> <SvgDiv><KeyboardArrowRightIcon /></SvgDiv><Text2>Contact Us</Text2>
                </Top>
                <Bottom>
                    <Text3>Contact Us</Text3>
                </Bottom>
            </TopContainer>
            <BottomContainer>
                <FormContainer>
                    <InputComponent label='Email Address:' />
                    <InputComponent label='How can we help you?' />
                    <InputComponent label='Message:' />
                    <InputDiv>
                        <H1Input></H1Input>
                        <SubmitButton><H1Button>Submit</H1Button></SubmitButton>
                    </InputDiv>
                </FormContainer>
            </BottomContainer>
        </Container>
    )
}

export default ContactUs


const Container = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 60px;
    ${mobile({ marginTop: '60px' })};
`

const TopContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    box-sizing: border-box;
    ${mobile({ display: 'none' })};

`

const Top = styled.div`
    width: 100%;
    background-color: white;
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`

const Text1 = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: black;
`

const Text2 = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: red;
`
const Text3 = styled.h1`
    font-size: 45px;
    font-weight: 700;
    color: black;
`

const SvgDiv = styled.svg`
    width: 14px;
    height: 14px;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bottom = styled.div`
    width: 100%;
`

const BottomContainer = styled.div`
    width: 100%;
    background-color: #3BB6D5;
    padding: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: solid 20px #f2f2f2;
    box-sizing: border-box;
`
const FormContainer = styled.div`
    width: 50%;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    box-sizing: border-box;
    ${mobile({ width: '100%' })};

`

const InputDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0px;
`

const H1Input = styled.h1`
    flex: 2;
    font-size: 14px;
    font-weight: 400;
`
const SubmitButton = styled.button`
    padding-left: 10px;
    flex: 5;
    background-color: green;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
`

const H1Button = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: white;
`