import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';
import mobile from './Mobile'


function Footer() {
    return (
        <Container>
            <TopDetail>
                <TopdetailContainer>
                    <FooterNavbar>
                        <Icon><EmailRoundedIcon /></Icon><NavbarDetail><NavbarDetail1>EMAIL SUPPORT</NavbarDetail1><NavbarDetail2>help@konga.com</NavbarDetail2></NavbarDetail>
                    </FooterNavbar>
                    <FooterNavbar>
                        <Icon><CallRoundedIcon /></Icon><NavbarDetail><NavbarDetail1>PHONE SUPPORT</NavbarDetail1><NavbarDetail2>0708 063 5700, 0809 460 5555, 01 888 3435</NavbarDetail2></NavbarDetail>
                    </FooterNavbar>
                    <FooterNavbar>
                        <Icon><WhatsAppIcon /></Icon><NavbarDetail><NavbarDetail1>WHATSAPP</NavbarDetail1><NavbarDetail2>0907 0038 400, 0809 460 5555</NavbarDetail2></NavbarDetail>
                    </FooterNavbar>
                    <FooterNavbar>
                        <NavbarDetail><NavbarDetail1>GET LATEST DEALS</NavbarDetail1><NavbarDetail2 width='large' >Our best promotions sent to your inbox.</NavbarDetail2></NavbarDetail>
                    </FooterNavbar>
                    <FooterNavbar>
                        <FooterNavbarInput placeholder='   Email Address' /><FooterNavbarInputSpan>subscribe</FooterNavbarInputSpan>
                    </FooterNavbar>
                </TopdetailContainer>
            </TopDetail>
            <BottomdetailContainer>
                <BottomDetail1>
                    <BottomFooterNavbar width='large'>
                        <BottomNavbarDetail1>ABOUT KONGA</BottomNavbarDetail1>
                        <BottomNavbarDetail2div>
                            <BottomNavbarDetailSpan>Contact Us</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>About Us</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Careers</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Our Blog</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Forum</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Terms & Conditions</BottomNavbarDetailSpan>
                        </BottomNavbarDetail2div>
                    </BottomFooterNavbar>
                    <BottomFooterNavbar>
                        <BottomNavbarDetail1>PAYMENT</BottomNavbarDetail1>
                        <BottomNavbarDetail2div>
                            <BottomNavbarDetailSpan>KongaPay</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Wallet</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Verve</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Mastercard</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Visa</BottomNavbarDetailSpan>
                        </BottomNavbarDetail2div>
                    </BottomFooterNavbar>
                    <BottomFooterNavbar width='large'>
                        <BottomNavbarDetail1>BUYING ON KONGA</BottomNavbarDetail1>
                        <BottomNavbarDetail2div>
                            <BottomNavbarDetailSpan>Buyer Safety Centre</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>FAQs</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Delivery</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Konga Return Policy</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Digital Services</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Bulk Purchase</BottomNavbarDetailSpan>
                        </BottomNavbarDetail2div>
                    </BottomFooterNavbar>
                    <BottomFooterNavbar>
                        <BottomNavbarDetail1>MORE INFO</BottomNavbarDetail1>
                        <BottomNavbarDetail2div>
                            <BottomNavbarDetailSpan>Site Map</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Track My Order</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Privacy Policy</BottomNavbarDetailSpan>
                            <BottomNavbarDetailSpan>Authentic Items Policy</BottomNavbarDetailSpan>
                        </BottomNavbarDetail2div>
                    </BottomFooterNavbar>
                    <BottomFooterNavbar width='large'>
                        <BottomNavbarDetail1>MAKE MONEY ON KONGA</BottomNavbarDetail1>
                        <BottomNavbarDetail2div>
                            <BottomNavbarDetailSpan>Become a Konga Affiliate</BottomNavbarDetailSpan>
                        </BottomNavbarDetail2div>
                    </BottomFooterNavbar>
                </BottomDetail1>
                <BottomDetail2>
                    <BottomDetail2Header>DOWNLOAD & CONNECT WITH US</BottomDetail2Header>
                    <BottomDetail2ButtonContainer>
                        <BottomDetail2Button>
                            <DivButtonSvg><AppleIcon /></DivButtonSvg> <DivButton><h5>Download on</h5><h3>App Store</h3></DivButton>
                        </BottomDetail2Button>
                        <BottomDetail2Button>
                            <DivButtonSvg><PhoneAndroidIcon /></DivButtonSvg> <DivButton><h5>Download on</h5><h3>Google Play</h3></DivButton>
                        </BottomDetail2Button>
                    </BottomDetail2ButtonContainer>
                    <BottomDetail2MidHeader>CONNECT WITH US</BottomDetail2MidHeader>
                    <BottomDetail2IconContainer>
                        <BottomDetail2IconSpan><FacebookIcon /></BottomDetail2IconSpan>
                        <BottomDetail2IconSpan><Twitter /></BottomDetail2IconSpan>
                        <BottomDetail2IconSpan><Instagram /></BottomDetail2IconSpan>
                        <BottomDetail2IconSpan><YouTube /></BottomDetail2IconSpan>
                    </BottomDetail2IconContainer>
                </BottomDetail2>
            </BottomdetailContainer>
        </Container>
    )
}
export default Footer

const Container = styled.div`
    width: 100%;
    background-color: #0C0C0C;
    ${mobile({ height: '400px', marginTop: '50px', width: '370px', display: 'none' })}
`

const TopdetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ${mobile({ flexDirection: 'column', margin: '20px 0px' })}
`

const TopDetail = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #2E2E2E;
    ${mobile({ height: '310px' })};
`
const FooterNavbar = styled.div`
    flex: 1;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ width: '320px', justifyContent: 'flex-start', })}
`

const Icon = styled.div`
    width: 30px;
    padding: 3px;
    border-radius: 18px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavbarDetail = styled.div`
    margin-left: 10px;
`

const NavbarDetail1 = styled.h5`
    font-size: 16px;
    margin-bottom: 10px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    ${mobile({ fontSize: '15px', fontWeight: '300', })}
`
const NavbarDetail2 = styled.h5`
    font-size: 16px;
    color: white;
    ${mobile({ fontSize: '15px', fontWeight: '300', })}
`

const FooterNavbarInput = styled.input`
    flex: 1;
    height: 45px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border: none;
    outline: none;
`
const FooterNavbarInputSpan = styled.h5`
    display: flex;
    font-size: 16px;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #ED017F;
    padding: 0px 10px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
`

const BottomdetailContainer = styled.div`
    margin: 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ display: 'none' })}
`

const BottomDetail1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 15px;
    flex:4;
`
const BottomFooterNavbar = styled.div`
    flex: ${props => props.width === 'large' ? 2 : 1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 10px;
`

const BottomNavbarDetail1 = styled.h1`
    font-size: 16px;
    margin-bottom: 10px;
    color: white;
`
const BottomNavbarDetail2div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const BottomNavbarDetailSpan = styled.h4`
    margin: 5px 0px;
    font-size: 15px;
    font-weight: 300;
    color: white;
`

const BottomDetail2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 2;
    padding-right: 200px;
`
const BottomDetail2Header = styled.h1`
    font-size: 16px;
    margin: 10px 0px;
    color: white;
`
const BottomDetail2ButtonContainer = styled.div`
    margin: 10px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const BottomDetail2Button = styled.button`
    height: 50px;
    width: 160px;
    background-color: #000000;
    border-radius: 5px;
    color: white;
    display: flex;
    padding: 0px 20px;
    border: none;
    justify-content: space-between;
    align-items: center;
`

const DivButtonSvg = styled.svg`
    height: 45px;
    width: 45px;
`

const DivButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const BottomDetail2MidHeader = styled.h4`
    font-size: 16px;
    margin: 10px 0px;
    color: white;

`
const BottomDetail2IconContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0px;
`
const BottomDetail2IconSpan = styled.span`
    display: flex;
    background-color: #333333;
    color: white;
    padding: 10px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`