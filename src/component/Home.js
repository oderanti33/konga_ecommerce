import React from 'react';
import Carousal2 from './Carousal2';
import styled from 'styled-components';
import mobile, { biggestscreen } from './Mobile';
import MobileFooter from './MobileFooter';
import { useGetAllProductsQuery } from '../Container/Redux/productApi';
import ProductsContainer from './ProductsContainer';


function Home() {
    const { data, isLoading } = useGetAllProductsQuery();

    return (
        <React.Fragment>
            <Stackdiv>
                <Carousal2 />
                <ProductsContainer data={data} isLoading={isLoading} heading='Today Deals' seeall='true' headText='big' productcontainer='normal' eachProduct='first' />
                <ProductsContainer data={data} isLoading={isLoading} heading='Sponsored Products' seeall='false' headText='normal' productcontainer='normalss' eachProduct='second' />
                <ProductsContainer data={data} isLoading={isLoading} heading='Recommended for you' seeall='true' headText='normal' productcontainer='normal' eachProduct='first' />
                <MiddleImagediv src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1694678388/contentservice/BKTWebMid.jpg_H1cd6Veyp.jpg' alt='middleImage' />
                <ImageContainer>
                    <MiddleImagedivdiv>
                        <MiddleImagediv1 src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1686221838/contentservice/Groctag.jpg_HyEGNN1Pn.jpg' alt='middleImage' />
                    </MiddleImagedivdiv>
                    <MiddleImagedivdiv>
                        <MiddleImagediv2 src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1686221837/contentservice/Boozetag.jpg_SJNfN41w3.jpg' alt='middleImage' />
                    </MiddleImagedivdiv>
                </ImageContainer>
                <LastContainer LastContainer>
                    <ProductsContainer data={data} isLoading={isLoading} place='lastss' heading='Your Browsing History' seeall='false' headText='normal' productcontainer='normalss' eachProduct='second' />
                </LastContainer>
            </Stackdiv>
            <MobileFooter />
        </React.Fragment>
    )
}

export default Home



const ImageContainer = styled.div`
    background-color: none;
    width: 100%;
    display: flex;
    margin: 10px 0px;
    padding: 10px 5px;
    border: solid 2px whitesmoke;
    box-sizing: border-box;
    justify-content: space-between;
    align-Items: center;
    ${mobile({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '0px', padding: '5px 10px' })}
`
const MiddleImagediv = styled.img`
    height: 120px;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    margin: 0px 0px;
    border: solid 10px whitesmoke;
`
const MiddleImagedivdiv = styled.div`
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0px 5px;
    ${mobile({ marginRight: '0px', marginBottom: '5px', width: '100%', margin: '0px' })}
`

const MiddleImagediv1 = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`
const MiddleImagediv2 = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`

const Stackdiv = styled.div`
margin-top: 85px;
${biggestscreen({ marginBottom: '0px', marginTop: '60px' })};
`

const LastContainer = styled.div`
    ${mobile({ marginBottom: '90px' })};
`