import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import mobile from './Mobile';
import { biggestscreen } from './Mobile';
import MobileFooter from './MobileFooter';
import { AuthContext } from './AuthContext';
import InputComponent from './InputComponent';



function Loginpage(props) {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const [errorText, setError] = useState('');

    const auth = useContext(AuthContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const userData = {
            email: state.email,
            password: state.password
        };
        axios.post("http://localhost:5000/api/users/login", userData).then((response) => {
            console.log(response.data.status, response.data.userId, response.data.firstName, response.data.lastName, response.data.email, response.data.token)
            auth.login(response.data.userId, response.data.firstName, response.data.lastName, response.data.email, response.data.token)
            props.onClick();
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data.message);
            } else if (error.request) {
                console.log("network error");
            }
            const errorMessage = error.response.data.message;
            setError(errorMessage);
        });
    };
    return (
        <React.Fragment>
            <Backdrop onClick={props.onClick}>

            </Backdrop>
            <BigContainer>
                <NavLabel>
                    <Link to={'/'}><Image src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586895/Konga/kongalogo_liwzkv.png' /></Link>
                </NavLabel>
                <TopDiv>
                    <H1>Login</H1>
                    <CloseButton onClick={props.onClick}><SvgDiv><CloseIcon /></SvgDiv><CloseH4>close</CloseH4></CloseButton>
                </TopDiv>
                <BottomDiv onSubmit={handleSubmit}>
                    <InputComponent label='Email Address' placeholder='Enter Email Address' type='email' value={state.email} name="email" onChange={handleChange} errorText={errorText} />
                    <InputComponent label='Password' placeholder='Enter Password' type='password' value={state.password} name="password" onChange={handleChange} />
                    <ButtonDiv>
                        <RightSideButton type='submit'><H3>Login</H3></RightSideButton>
                    </ButtonDiv>
                </BottomDiv>
                <SignUpDiv>
                    <a href="/account/signup">
                        <SignUpButton><SignUpH3>Don’t have an account? <SignUpSpan>Sign Up</SignUpSpan></SignUpH3></SignUpButton>
                    </a>
                </SignUpDiv>
                <MobileFooter />
            </BigContainer>
        </React.Fragment>
    )
}

export default Loginpage

const BigContainer = styled.div`
    width: 34%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    ${mobile({ height: '800px', backgroundColor: 'red', padding: 0, alignItems: 'center', width: '110%' })};
`

const Backdrop = styled.div`
    width: 66%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 990;
    position: fixed;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
`

const NavLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    background-color: #F2F2F2;
    cursor: pointer;
    ${biggestscreen({ display: 'none' })};
`

const Image = styled.img`
width: 100px;
height: 50px;
`

const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 34%;
    padding: 0px 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    ${mobile({ boxShadow: 'none', position: 'relative', width: '100%', backgroundColor: 'white', justifyContent: 'center', height: '80px', borderBottom: 'solid 1px #F2F2F2' })};

`

const BottomDiv = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    margin-top: 5px;
    ${mobile({ marginTop: '0px', paddingTop: '0px', backgroundColor: 'white', width: '100%', border: 'solid 20px white' })};
`

const H1 = styled.h1`
    font-size: 25px;
    font-weight: bold;
`
const CloseButton = styled.div`
    width: 55px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    ${mobile({ display: 'none' })};
`
const SvgDiv = styled.svg`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
`
const CloseH4 = styled.h4`
    font-size: 16px;
    font-weight: 300;
    line-height: 0;
    color: gray;
`

const RightSideButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #33B27B;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const H3 = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: white;
`

const SignUpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${mobile({ flexDirection: 'column', backgroundColor: '#F2F2F2', width: '100%', padding: '10px 30px', marginTop: '20px' })};
`

const SignUpButton = styled.div`
    width: 34%;
    height: 40px;
    background-color: #F2F2F2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    ${mobile({ position: 'relative', width: '100%' })};
`
const SignUpH3 = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: #ED017F;
    ${mobile({ color: 'gray', fontWeight: '200' })};
`

const SignUpSpan = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #ED017F;
    ${mobile({ display: 'none' })};
`