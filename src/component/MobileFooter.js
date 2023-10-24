import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import styled from 'styled-components';
import { biggestscreen } from './Mobile';
import HomeIcon from '@mui/icons-material/Home';




const MobileFooter = () => {
    return (
        <MobileFooterContainer>
            <AnchorTag href={'/'}><ButtonMidtab> <MidtabSvg><HomeIcon /></MidtabSvg> <NavTextMidtab>Home</NavTextMidtab> </ButtonMidtab></AnchorTag>
            <ButtonMidtab> <MidtabSvg><LocalOfferIcon /></MidtabSvg> <NavTextMidtab>Deals</NavTextMidtab> </ButtonMidtab>
            <AnchorTag href={'/Cart/overview'}><ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>Cart</NavTextMidtab> </ButtonMidtab></AnchorTag>
            <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>More</NavTextMidtab> </ButtonMidtab>
        </MobileFooterContainer>
    )
}

export default MobileFooter

const MobileFooterContainer = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    ${biggestscreen({ display: 'none' })};
`

const NavTextMidtab = styled.h5`
font-size: 15px;
font-weight: 500;
color: black;
`

const ButtonMidtab = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    background-color: white;
`

const MidtabSvg = styled.svg`
    color:gray;
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
`

const AnchorTag = styled.a`
    text-decoration: none;
`