import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { biggestscreen } from './Mobile';


const MobileBottomNav = () => {
    return (
        <MobileBottomNavContainer>
            <SearchInput placeholder='Sreach for products, brands and categories...' /> <NavSearchLabelSpan><SearchIcon /></NavSearchLabelSpan>
        </MobileBottomNavContainer>
    )
}

export default MobileBottomNav

const MobileBottomNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-top: 43px;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 5px;
    z-index: 800;
    ${biggestscreen({ display: 'none' })};
`
const SearchInput = styled.input`
    height: 35px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    flex: 14;
    border-width: 0;
    box-sizing: border-box;
    background-color:#E8E8E8;
    outline: none;
    padding-left: 10px;
`
const NavSearchLabelSpan = styled.span`
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex: 1;
    border: none;
    background-color:#FBA100;
    color: #ED017F;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
`