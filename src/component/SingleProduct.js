import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseFromCart } from '../Container/Redux/Actions/CartSlice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import mobile from './Mobile';


function SingleProduct() {

    const history = useHistory();
    const dispatch = useDispatch();

    let [initialCart, setInitialCart] = useState(1);

    const handleIncreaseClick = (cartItem) => {
        dispatch(addToCart(cartItem));
        if (initialCart >= 1) {
            setInitialCart(initialCart + 1);
        } else {
            setInitialCart(initialCart);
        }
    };
    const handleRedirectCart = () => {
        history.push('/cart/overview')
    };
    const handleDecreaseItem = (cartItem) => {
        if (initialCart <= 1) {
            setInitialCart(initialCart);
            dispatch(decreaseFromCart(cartItem));
        } else {
            setInitialCart(initialCart - 1);
        }
    };

    const [newProduct, setNewProduct] = useState({})

    const { url } = useParams();

    const fetchProductDetails = useCallback(
        async () => {
            const response = await axios
                .get(`http://localhost:5000/api/products/${url}`)
                .catch((err) => {
                    console.log(err)
                });
            const productfetch = response.data;
            setNewProduct(productfetch);
        },
        [url],
    );
    useEffect(() => {
        fetchProductDetails()
    }, [url, fetchProductDetails]);


    return (
        <Container>
            <TopContainer>
                <Top>
                    <Anchortag href="/"><Text1>Home</Text1></Anchortag><SvgDiv><KeyboardArrowRightIcon /></SvgDiv> <Text1>{newProduct.category1}</Text1> <SvgDiv><KeyboardArrowRightIcon /></SvgDiv><Text2>{newProduct.category2}</Text2>
                </Top>
                <Bottom>
                    <Text3>{newProduct.category}</Text3>
                </Bottom>
            </TopContainer>
            <BottomDetail00>
                <LeftSideContainer00>
                    <LeftSideImage src={newProduct.image} alt={newProduct.title} />
                </LeftSideContainer00>
                <RightSideContainer00>
                    <RightSidediv>
                        <BottomDetailBigLetter>{newProduct.title}</BottomDetailBigLetter>
                        <BottomDetailSmallLetter>Product Code : {newProduct.productCode}</BottomDetailSmallLetter>
                    </RightSidediv>
                    {newProduct.price && <RightSidePrice>
                        <BottomDetailBigLetter>₦{newProduct.price?.toLocaleString('en-US')}</BottomDetailBigLetter>
                        {newProduct.realPrice && <RealPrice>₦{newProduct.realPrice.toLocaleString('en-US')}</RealPrice>}
                        {newProduct.realPrice && <Save>You save ₦{Math.ceil((newProduct.realPrice - newProduct.price)).toLocaleString('en-US')}</Save>}
                    </RightSidePrice>}
                    <RightSidedivQuant>
                        Quantity: <QuantityButton onClick={() => handleIncreaseClick(newProduct)}>+</QuantityButton><QuantitySpan>{initialCart}</QuantitySpan><QuantityButton onClick={() => handleDecreaseItem(newProduct)}>-</QuantityButton>
                    </RightSidedivQuant>
                    <RightSidediv>
                        <RightSideButton onClick={() => handleRedirectCart()}><BottomButtonLetter>Buy Now</BottomButtonLetter></RightSideButton>
                    </RightSidediv>
                </RightSideContainer00>
            </BottomDetail00>
            <TopContainerMini>
                <Top>
                    Sold By<SoldBy>{newProduct.soldBy}</SoldBy>
                </Top>
            </TopContainerMini>
        </Container>
    )
};

export default SingleProduct

const Container = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    margin-top: 70px;
    ${mobile({ marginTop: '100px' })}
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

const TopContainerMini = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    box-sizing: border-box;
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
const Anchortag = styled.a`
    text-decoration: none;
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

const BottomDetail00 = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    border: solid 30px #F2F2F2;
    justify-content: center;
    align-items: flex-start;
    ${mobile({ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'solid 10px #F2F2F2' })}
`
const LeftSideContainer00 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ width: '100%' })}
`
const LeftSideImage = styled.img`
    height: 400px;
    width: 400px;
    ${mobile({ width: '250px', height: '250px' })}
`

const RightSideContainer00 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 8px;    
    ${mobile({ marginLeft: '0px' })}
`
const RightSidediv = styled.div`
    border-bottom: solid 2px whitesmoke;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0px;
    ${mobile({ padding: '0px' })}
`
const RightSidePrice = styled.div`
    border-bottom: solid 2px whitesmoke;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    box-sizing: border-box;
    padding-right: 40%;
    ${mobile({ paddingRight: '20%' })}
`
const RealPrice = styled.h4`
    font-size: 15px;
    font-weight: 400;
    color: gray;
    // margin-top: 10px;
    text-decoration: none;
    margin-left: 10px;
    text-decoration: line-through;
    width: fit-content;
    ${mobile({ marginLeft: '20px' })}
`
const Save = styled.h4`
    font-size: 15px;
    font-weight: 600;
    color: #33B27B;
    text-decoration: none;
    margin-left: 10px;
    width: fit-content;
    ${mobile({ marginLeft: '20px' })}
`

const BottomDetailSmallLetter = styled.h5`
    font-size: 15px;
    font-weight: 500;
    color: red;
    padding-right: ${props => props.space === 'wide' ? 15 : 0}px;
`
const BottomDetailBigLetter = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    ${mobile({ fontSize: '20px', })};
`

const RightSideButton = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #33B27B;
    cursor: pointer;
`
const BottomButtonLetter = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuantitySpan = styled.span`
    width: 30px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 3px #E6E6E6;
    border-bottom: solid 3px #E6E6E6;
`

const QuantityButton = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RightSidedivQuant = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // margin: 0px 20px;
    border-bottom: solid 2px whitesmoke;
    // min-height: 50px;
    width: 100%;
    padding: 20px 0px;
    ${mobile({})}
`

const SoldBy = styled.h5`
    font-size: 20px;
    font-weight: 700;
    color: red;
    margin-left: 10px;
    text-decoration: underline;
`