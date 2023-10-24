import React from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DiamondIcon from '@mui/icons-material/Diamond';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import mobile from './Mobile';

const GridItems = ({ gridIcon, gridDetails }) => {
    return (
        <GridItemsContainer>
            <SvgGrid>{gridIcon}</SvgGrid> <GridDiv> <Gridparagrapgh>{gridDetails}</Gridparagrapgh></GridDiv>
        </GridItemsContainer>
    )
};

const GridItemsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    ${mobile({ justifyContent: 'flex-start', alignItems: 'flex-start' })};
`

const Gridparagrapgh = styled.p`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    line-height: 30px;
    ${mobile({ justifyContent: 'flex-start', alignItems: 'flex-start' })};
`
const SvgGrid = styled.svg`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    // ${mobile({ marginRight: 0, justifyContent: 'flex-start', alignItems: 'flex-start' })};
`
const GridDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
`
const GridContainer2 = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 40px;
    box-sizing: border-box;
    ${mobile({ gap: '5px' })};
`
const GridItemsContainer2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;
`
const GridText1 = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: black;
`

const GridText2 = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: black;
`
const GridItems2 = ({ text1, text2, text3 }) => {
    return (
        <GridItemsContainer2>
            <GridText1>{text1}</GridText1>
            <GridText1>{text2}</GridText1>
            <GridText2>{text3}</GridText2>
        </GridItemsContainer2>
    )
};

const ReturnPolicy = () => {
    return (
        <Container>
            <TopContainer>
                <Top>
                    <Text1>Home</Text1><SvgDiv><KeyboardArrowRightIcon /></SvgDiv><Text2>Return Policy</Text2>
                </Top>
                <Bottom>
                    <Text3>Return Policy</Text3>
                </Bottom>
            </TopContainer>
            <BottomContainer>
                <FirstDiv>
                    <LeftParagraph>
                        Konga offers a 7 day return window for items that meet the requirements for return. Please contact us via any of our contact channels within seven days of delivery and we will ensure you get resolution
                    </LeftParagraph>
                    <RightPicture src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/return-policy.png" alt="policy picture" />
                </FirstDiv>
            </BottomContainer>
            <SecondDiv>
                <SecondTopDiv>
                    <H1>
                        Return Instructions
                    </H1>
                </SecondTopDiv>
                <GridContainer>
                    <GridItems2 text1='STEP 1:' text2='Send a Complaint' text3='Also include pictures of the product that was delivered to help@konga.com as a means of evidence.' />
                    <GridItems2 text1='STEP 2:' text2='Return after Authorization' text3='Once your claim is validated, we will provide information on the most suitable means of getting the item from you.' />
                    <GridItems2 text1='STEP 3:' text2='Track Return Status' text3='We will send you a return waybill number, this will enable you to track the status of your return.' />
                    <GridItems2 text1='STEP 4:' text2='Get Resolution' text3='Upon our confirmation of the receipt of the item by the Seller, Konga will assist only by notifying the Seller to resolve the matter as its sole responsibility without any further obligation on Konga.' />

                </GridContainer>
            </SecondDiv>
            <SecondDiv>
                <SecondTopDiv>
                    <H1>
                        Items not eligible for Returns
                    </H1>
                </SecondTopDiv>
                <GridContainer2>
                    <GridItems gridIcon={<LocalMallIcon />} gridDetails='Products that have been altered from their original or opened by an authorized personnel without permission.' />
                    <GridItems gridIcon={<TakeoutDiningIcon />} gridDetails='Perishable goods cannot be returned except a valid reason is raised at the point of delivery with affirmation from the dispatcher.' />
                    <GridItems gridIcon={<QrCodeScannerIcon />} gridDetails='Product with tampered or missing serial Universal Product Code numbers (UPC).' />
                    <GridItems gridIcon={<WaterDamageIcon />} gridDetails='Products damaged due to misuse.' />
                    <GridItems gridIcon={<HealthAndSafetyIcon />} gridDetails='Products in beauty, health and personal care category.' />
                    <GridItems gridIcon={<DiamondIcon />} gridDetails='Jewellery, innerwear, bed sheets, lingerie and socks.' />
                    <GridItems gridIcon={<AutoStoriesIcon />} gridDetails='Books and CDs' />
                </GridContainer2>
            </SecondDiv>
        </Container>
    )
}

export default ReturnPolicy


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
    flex-direction: column;
    border: solid 20px #f2f2f2;
    box-sizing: border-box;
`
const FirstDiv = styled.div`
    width: 100%;
    background-color: #FCF4E3;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 5px;
    box-sizing: border-box;
    ${mobile({ width: '100%', flexDirection: 'column' })};
`

const LeftParagraph = styled.p`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    line-height: 30px;
    align-items: flex-start;
    box-sizing: border-box;
`
const RightPicture = styled.img`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 60%;
    box-sizing: border-box;
    ${mobile({ width: '100%' })};
`

const SecondDiv = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`
const SecondTopDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`

const GridContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 40px;
    box-sizing: border-box;
    ${mobile({ justifyContent: 'flex-start', alignItems: 'flex-start' })};
`

const H1 = styled.h5`
    font-size: 30px;
    font-weight: 700;
    color: black;
`