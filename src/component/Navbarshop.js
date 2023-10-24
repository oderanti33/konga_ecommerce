import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import mobile from './Mobile';
import LoginSideDraw from './LoginSideDraw';
import Loginpage from './Loginpage';
import { useState } from 'react';
import { AuthContext } from './AuthContext';


function Navbarshop() {
    const [drawIsOpen, setDrawIsOpen] = useState(false);
    const OpenDraw = () => setDrawIsOpen(true);
    const closeDraw = () => setDrawIsOpen(false);
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    const [isShownAccount, setIsshownAccount] = useState(false);

    const [isShownhelp, setIsshownHelp] = useState(false);

    const auth = useContext(AuthContext);
    const history = useHistory();

    const hoverInAccount = () => {
        setIsshownAccount(true);
    };
    const hoverInHelp = () => {
        setIsshownHelp(true);
    };

    const hoverOutAccount = () => {
        setIsshownAccount(false);
    };
    const hoverOutHelp = () => {
        setIsshownHelp(false);
    };

    const logoutHandler = (e) => {
        auth.logout();
        setIsshownAccount(false)
    };

    const contactHandler = (e) => {
        history.push('/contact-us');
    };

    const policyHandler = (e) => {
        history.push('/return-policy');
    };



    return (
        <React.Fragment>
            {drawIsOpen && <Loginpage onClick={closeDraw} />}
            <Container>
                <Link to={'/'}><Image src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586895/Konga/kongalogo_liwzkv.png' /></Link>
                <NavLabel>
                    <NavText>Store <br /> Locator</NavText>
                </NavLabel>
                <NavLabel>
                    <NavText>Sell on <br /> Konga</NavText>
                </NavLabel>
                <NavSearchContainer>
                    <SearchInput placeholder='Search for products brands and categories' /> <NavSearchLabelSpan><NavSearchLabelSvg><SearchIcon /></NavSearchLabelSvg></NavSearchLabelSpan>
                </NavSearchContainer>
                <NavLabel onMouseEnter={hoverInHelp} onMouseLeave={hoverOutHelp}>
                    <NavHelp><QuestionMarkIcon /></NavHelp>Help<KeyboardArrowDownIcon />
                    {isShownhelp && <ExtendDetails>
                        <NavTextUser onClick={contactHandler}>Contact Us</NavTextUser>
                        <NavTextUser onClick={policyHandler}>Konga Return Policy</NavTextUser>
                    </ExtendDetails>}
                </NavLabel>
                {!auth.isLogin && <NavLabel onClick={OpenDraw} >
                    <NavText>Login / <br /> Signup</NavText>
                </NavLabel>}
                {auth.isLogin && <NavLabelSpecial onMouseEnter={hoverInAccount} onMouseLeave={hoverOutAccount}>
                    My Account<KeyboardArrowDownIcon />
                    {isShownAccount && <ExtendDetails>
                        <NavTextUser>Hi <Logspan>USER</Logspan></NavTextUser>
                        <NavTextUser onClick={logoutHandler}><LogoutIcon /> <Logspan>Logout</Logspan></NavTextUser>
                    </ExtendDetails>}
                </NavLabelSpecial>}
                <Link to={'/cart/overview'} style={{ textDecoration: 'none' }}>
                    <NavButton >
                        <NavCartSpan><NavHelpButton><ShoppingCartIcon /></NavHelpButton> <NavTextButton>My <br /> Cart</NavTextButton></NavCartSpan> <NavCartNum>{cartTotalQuantity}</NavCartNum>
                    </NavButton>
                </Link>
            </Container>
        </React.Fragment>
    )
}

export default Navbarshop;

const Container = styled.div`
    height: 60px;
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 900;
    // left: 0;
    ${mobile({ display: 'none' })};
`;

const styledNav = styled.div``

const NavLabel = styled(styledNav)`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    // padding: 5px;
    background-color: none;
    color: white;
    cursor: pointer;
    position: relative;
    &:hover,
    &:focus {
    background-color: white;
    color: red;
    };
  }
  }
`

const NavSearchContainer = styled.div`
    flex: 4;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 35px;
    border-radius: 10px;
`
const SearchInput = styled.input`
    height: 100%;
    width: 92%;
    border: none;
    outline: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    padding-left: 10px
`

const NavSearchLabelSpan = styled.span`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    background-color: #FBA100;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
`
const NavSearchLabelSvg = styled.svg`
    width:16px;
    height: 16px;
    color: white;
`

const Image = styled.img`
    width: 100px;
    height: 100%;
    flex: 1;
`

const NavText = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 25px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
        &:hover,
        &:focus {
        color: red;
        }
`
const NavTextButton = styled.h5`
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
`

const NavHelp = styled.svg`
    color: white;
    background-color: grey;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 10px;
    padding: 0.5px;
`


const NavHelpButton = styled.span`
    color: white;
`

const NavButton = styled.div`
    background-color: #33B27B;
    border-radius: 5px;
    height: 35px;
    width: 100px;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    border-color: none;
`
const NavCartNum = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 2px;
    width: 20px;
    height: 20px 
`

const NavCartSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLabelSpecial = styled(styledNav)`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    color: white;
    background-color: none;
    cursor: pointer;
    position: relative;
    &:hover{
    background-color: white;
    color: red;
    };
`

const NavTextUser = styled.h5`
    font-size: 14px;
    font-weight: 700;
    color: black;
    width: 100%;
    height: 100%;
    padding: 10px 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
        &:hover,
        &:focus {
        color: red;
        background-color: #f2f2f2;
        }
`

const NavTexta = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: black;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding-left: 30px;
    padding: 10px 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
        &:hover,
        &:focus {
        color: red;
        background-color: #f2f2f2;
        }
`
const Logspan = styled.span`
    margin-left: 10px;
    font-size: 16px;
`

const ExtendDetails = styled.div`
    position: absolute;
    min-width: 150%;
    left: 0;
    top: 58px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: white;
`