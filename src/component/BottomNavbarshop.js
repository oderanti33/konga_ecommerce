import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../styles/KONGA/BottomNavbarshop.css'
import mobile from './Mobile';
import { biggestscreen } from './Mobile';

import styled from 'styled-components';

const BtContainer1 = styled.div`
    margin: 10px 0px;
    ${mobile({ display: 'none' })}
`

const BtContainer2 = styled.div`
    height: 70px;
    background-color: white;
    display: flex;
    width: 100%;
    // padding: 10px;
    justify-content: space-around;
    align-items: center;
    border-top: solid 2px gray;
    ${biggestscreen({ display: 'none' })};
`

const divForMobile122 = styled.div`
    // background-color: green;
    // width: 100%;
    ${biggestscreen({ display: 'none' })}
`

const divForMobile12 = styled.div`
    // height: 700px;
    // background-color: green;
    // display: inline;
    // width: 100%;
    // // padding: 10px;
    // justify-content: center;
    // align-items: center;
    // // flex-direction: row;
    ${biggestscreen({ display: 'none' })};
`;


const ContainerMidtab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${mobile({ display: 'none' })}
`
const NavTextMidtab = styled.h5`
font-size: 15px;
font-weight: 500;
color: black;
`

const ButtonMidtab = styled.button`
    border: none;
    // width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border-radius: 4px;
    cursor: pointer;
    background-color: white;
`

const MidtabSvg = styled.svg`
    color:gray;
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
    // height: 50px;
`

function BottomNavbarshop() {
    return (
        <div>
            <BtContainer1>
                <div className='headerBottom'>
                    <div className='headerBottom__nav' >
                        <b>All Categories</b>  <ViewListIcon />
                    </div>
                    <div className='headerBottom__nav'>
                        Computers and Accessories
                    </div>
                    <div className='headerBottom__nav'>
                        Phones and Tablets
                    </div>
                    <div className='headerBottom__nav'>
                        Electronics
                    </div>
                    <div className='headerBottom__nav'>
                        Konga Fashion
                    </div>
                    <div className='headerBottom__nav'>
                        Home and Kitchen
                    </div>
                    <div className='headerBottom__nav'>
                        Baby, Kids and Toys
                    </div>
                    <div className='headerBottom__nav'>
                        Other Categories
                    </div>
                </div>
            </BtContainer1>
            <BtContainer2>
                <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>Browse All</NavTextMidtab> </ButtonMidtab>
                <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>Fashion</NavTextMidtab> </ButtonMidtab>
                <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>Computers</NavTextMidtab> </ButtonMidtab>
                <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>Phones</NavTextMidtab> </ButtonMidtab>
                <ButtonMidtab> <MidtabSvg><ShoppingCartIcon /></MidtabSvg> <NavTextMidtab>All Deal</NavTextMidtab> </ButtonMidtab>
            </BtContainer2>
        </div>

    )
}

export default BottomNavbarshop