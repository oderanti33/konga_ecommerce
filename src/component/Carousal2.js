import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import mobile from './Mobile';
import Carousal1 from './Carousal1';
import { AuthContext } from './AuthContext';



const data = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697489803/Konga/shopnow_rdtdi5.webp'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697490019/Konga/Bulk_cstesc.jpg'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697489910/Konga/shopnow2_tppvpa.webp'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697489728/Konga/Access._j5c8wi.webp'
    },
]



function Carousal2() {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const handleRedirect = () => {
        !auth.isLogin && history.push('/account/signup')
    }

    return (
        <Container>
            <Wrapper1><Carousal1 /></Wrapper1>
            <Wrapper2>
                {data.map((preValue, index) => (
                    <Div onClick={handleRedirect} key={index}><Image src={preValue.image} /></Div>
                ))}
            </Wrapper2>
        </Container>
    )
}

export default Carousal2

const Div = styled.a`
cursor: pointer;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    // margin: 10px 0px;
    padding: 20px;
    box-sizing: border-box;
    ${mobile({ display: 'flex', flexDirection: 'column', padding: '10px' })}
`

const Wrapper1 = styled.div`
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    background-color: green;
    ${mobile({ marginBottom: '10px' })};
`
const Wrapper2 = styled.div`
    flex: 3;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    background-color: none;
    padding-left: 20px;
    box-sizing: border-box;
     ${mobile({ gap: '10px', padding: '0px' })}
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    ${mobile({ height: '100%', width: '100%' })}
`