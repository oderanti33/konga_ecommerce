import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { biggestscreen } from './Mobile';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { AuthContext } from './AuthContext';
import { useAuth } from './Auth-hook';

const MobileTab = ({ iconsi, text1, text2 }) => {

    return (
        <MobileTabContainer>
            {iconsi} <TabText><TabTopText>{text1}</TabTopText> <TabBottomText>{text2}</TabBottomText></TabText>
        </MobileTabContainer>
    )
};

const CategoryDiv = ({ text }) => {

    return (
        <CategoryDivContainer>
            <TabText><TabTopText>{text}</TabTopText></TabText> <KeyboardArrowRightIcon />
        </CategoryDivContainer>
    )
};

const MobileLogin = ({ onClick }) => {

    const auth = useContext(AuthContext);

    const { email, firstName, lastName, userId, token } = useAuth();

    const history = useHistory();

    const handleContactUs = () => {
        history.push('/contact-us');
        onClick();
    };

    const handlePolicy = () => {
        history.push('/return-policy');
        onClick();
    };

    const handleLogout = () => {
        auth.logout();
        onClick();
    };


    return (
        <Container>
            <MobileLoginDiv>
                {!auth.isLogin && <ButtonDiv>
                    <Anchor href={'/account/login'}><SignUpButton2 onClick={onClick}><SignUpH4>Login</SignUpH4></SignUpButton2></Anchor>
                    <Anchor href={'/account/signup'}><SignUpButton2 onClick={onClick}><SignUpH4>Signup</SignUpH4></SignUpButton2></Anchor>
                </ButtonDiv>}
                <UserInfo>
                    <Text1>O</Text1><div><Text2>{token} { }</Text2> <Text3>{token}</Text3></div>
                </UserInfo>
                <GridContainer>
                    <GridItem1><MobileTab iconsi={<LocationOnIcon />} text1='Track Orders' text2='View Orders Status' /></GridItem1>
                    <GridItem2><MobileTab iconsi={<StarBorderIcon />} text1='Pending Items' text2='' /></GridItem2>
                    <GridItem1><MobileTab iconsi={<LocalOfferIcon />} text1='Sell on Konga' text2='Join other Merchants' /></GridItem1>
                    <GridItem2><MobileTab iconsi={<StorefrontIcon />} text1='Physical Store' text2='Stores Around You' /></GridItem2>
                </GridContainer>
                <CategoryContainer>
                    <CategoryTopText>Category</CategoryTopText>
                    <CategoryDiv text='Computers and Accessories' />
                    <CategoryDiv text='Phones and Tablets' />
                    <CategoryDiv text='Electronics' />
                    <CategoryDiv text='Konga Fashion' />
                    <CategoryDiv text='Home and Kitchen' />
                    <CategoryDiv text='Baby, Kids and Toys' />
                    <CategoryDiv text='Other Categories' />
                    <CategoryDiv text='Groceries' />
                </CategoryContainer>
                <BottomDiv>
                    <ContactDiv onClick={handleContactUs}><CallIcon /> <ConText>Contact Us</ConText></ContactDiv>
                    <ContactDiv onClick={handlePolicy}><KeyboardReturnIcon /> <ConText>Konga Return Policy</ConText></ContactDiv>
                    {auth.isLogin && <ContactDiv onClick={handleLogout}><LogoutIcon /> <ConText>Logout</ConText></ContactDiv>}
                </BottomDiv>
            </MobileLoginDiv>
        </Container>
    )
}

export default MobileLogin;


const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: scroll;
`

const MobileLoginDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 44px;
    background-color: white;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    ${biggestscreen({ display: 'none' })};
`

const Text1 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    color: black;
    margin-left: 10px;
`
const Text2 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    color: black;
    margin-left: 10px;
`
const Text3 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    color: black;
    margin-left: 10px;
`
const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    margin: 10px 0px;
    box-sizing: border-box;
`
const ContactDiv = styled.a`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    color: black;
    text-decoration: none;
`

const ConText = styled.h3`
    font-size: 1em;
    font-weight: 400;
    color: black;
    margin-left: 10px;
`

const BottomDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0px 20px;
    margin: 10px 0px;
    margin-bottom: 60px;
    box-sizing: border-box;
`
const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    background-color: white;
    padding: 0px 20px;
    margin: 10px 0px;
    box-sizing: border-box;
`
const GridItem1 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #F2F2F2;
    border-left: none;
`
const GridItem2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #F2F2F2;
    border-right: none;
`

const MobileTabContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    margin-left: 10px;
`
const TabText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 10px;
`
const TabTopText = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: black;
`
const TabBottomText = styled.h4`
    font-size: 14px;
    font-weight: 300;
    color: black;
`

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const CategoryDivContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: solid 1px gray;
`

const CategoryTopText = styled.h3`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: solid 1px gray;
`

const SignUpButton2 = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F2F2F2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #ED017F;
    padding: 0px 55px;
    box-sizing: border-box;
    border-radius: 5px;
    ${biggestscreen({ display: 'none' })};
`

const SignUpH4 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #ED017F;
`

const Anchor = styled.a`
    text-decoration: none;
    flex: 1;
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
`