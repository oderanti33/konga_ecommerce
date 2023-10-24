import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MobileLogin from './MobileLogin';
import Loginpage from './Loginpage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ViewListIcon from '@mui/icons-material/ViewList';
import { biggestscreen } from './Mobile';


function MobileNavbarShop() {
    const [drawIsOpen, setDrawIsOpen] = useState(false);
    const openDraw = () => setDrawIsOpen(true);
    const closeDraw = () => setDrawIsOpen(false);

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <React.Fragment>
            {drawIsOpen && <MobileLogin onClick={closeDraw} />}
            <MobileContainer>
                <MobileTopNav>
                    <NavLabel1>
                        {!drawIsOpen ? <SvgSpan onClick={openDraw}><ViewListIcon /></SvgSpan> : <Link to={'/'}><SvgSpan onClick={closeDraw}><ArrowBackIcon /></SvgSpan></Link>}
                        <Link to={'/'}><Image onClick={closeDraw} src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586895/Konga/kongalogo_liwzkv.png' /></Link>
                    </NavLabel1>
                    <NavLabel2>
                        <Link to={'/cart/overview'} onClick={closeDraw}>
                            <SvgSpan1><ShoppingCartIcon /></SvgSpan1>
                            <Badge1>
                                {cartTotalQuantity}
                            </Badge1>
                        </Link>
                    </NavLabel2>
                </MobileTopNav>
            </MobileContainer>
        </React.Fragment>
    )
}

export default MobileNavbarShop;

const MobileContainer = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    padding-top:5px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 10px;
    padding-bottom: 0px;
    left: 0;
    box-sizing: border-box;
    z-index: 999;
    ${biggestscreen({ display: 'none' })};
`

const MobileTopNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
`

const NavLabel1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    cursor: pointer;
    color: white;
`
const Image = styled.img`
    width: 100px;
    height: 30px;
`

const NavLabel2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    cursor: pointer;
    color: white;
`

const SvgSpan = styled.span`
    margin-right: 10px;
    color: gray;
`

const SvgSpan1 = styled.span`
    margin-right: 10px;
    color: gray;
`

const Badge1 = styled.div`
position: absolute;
background-color: green;
top: 0;
right: 0;
border-radius: 10px;
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
`