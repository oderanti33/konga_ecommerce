import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Container/Redux/Actions/CartSlice';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import mobile from './Mobile';



function ProductsContainer({ data, heading, seeall, headText, productcontainer, eachProduct, place, isLoading }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleIncreaseClick = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    const handleClick = (product) => {
        history.push(`/ product / ${product.id}`)
    };

    return (
        <Container place={place}>
            <HeaderText size={headText}><HeaderTextBig size={headText}>{heading}</HeaderTextBig>{seeall === 'true' && <HeaderTextsmall size={headText}>See All Items</HeaderTextsmall>}</HeaderText>
            <ProductContainer productcontainer={productcontainer}>
                {!data && [1, 2, 3, 4, 5, 6].map(() => (
                    <EachProduct eachProduct={eachProduct}
                        productcontainer={productcontainer}
                    >
                        <Imagediv eachProduct={eachProduct}>
                            <Image src='' eachProduct={eachProduct} />
                        </Imagediv>
                        <ProductDetails eachProduct={eachProduct} >
                            <ProductTitle eachProduct={eachProduct} ></ProductTitle>
                            <Productprice eachProduct={eachProduct}></Productprice>
                        </ProductDetails>
                    </EachProduct>
                ))}
                {data?.map((product, index) => (
                    <Anchor onClick={() => {
                        handleIncreaseClick(product);
                        history.push(`/product/${product.url}`);

                    }} key={product.id} >
                        <EachProduct key={product.id} onClick={() => handleClick(product)} eachProduct={eachProduct}
                            productcontainer={productcontainer}
                        >
                            <Imagediv eachProduct={eachProduct}>
                                <Image src={product.image} eachProduct={eachProduct} />
                            </Imagediv>
                            <ProductDetails eachProduct={eachProduct} >
                                <ProductTitle eachProduct={eachProduct} >{product.title}</ProductTitle>
                                {!product.realPrice && <Productprice eachProduct={eachProduct}>₦{product.price.toLocaleString('en-US')}</Productprice>}
                                {product.realPrice && <PriceContainer>
                                    <Productprice eachProduct={eachProduct}>₦{product.price.toLocaleString('en-US')}</Productprice>
                                    <RealPrice eachProduct={eachProduct}>₦{product.realPrice.toLocaleString('en-US')}</RealPrice>
                                    <PercentageSave eachProduct={eachProduct}>-{Math.ceil(((product.realPrice - product.price) / product.realPrice) * 100).toLocaleString('en-US')}</PercentageSave>
                                </PriceContainer>}
                                {product.realPrice && <Save eachProduct={eachProduct}>You save ₦{Math.ceil((product.realPrice - product.price)).toLocaleString('en-US')}</Save>}
                            </ProductDetails>
                        </EachProduct>
                    </Anchor>
                ))}
            </ProductContainer>
        </Container >
    )
}

export default ProductsContainer

const Container = styled.div`
    background-color: none;
    width: 100%;
    margin: 10px 0px;
    padding: 0px 20px;
    box-sizing: border-box;
    ${mobile({ padding: '0px 10px', backgroundColor: `${props => props.place === 'lastss' && 'yellow'}` })};
`

const HeaderText = styled.div`
    background-color: ${props => props.size === 'big' ? '#ED017F' : 'white'};
    height: 50px;
    width: 100%;
    display: flex;
    align-Items: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: solid 1px #f2f2f2;
    border-bottom: ${props => props.size === 'big' ? 'none' : 'solid 1px #f2f2f2'};
    padding: 0px 10px;
    box-sizing: border-box;
    ${mobile({ height: '40px', justifyContent: 'space-between' })};
`

const HeaderTextBig = styled.h1`
    font-size: ${props => props.size === 'normal' ? '20px' : '35px'};
    font-weight: 700;
    color: ${props => props.size === 'normal' ? 'black' : 'white'};
`
const HeaderTextsmall = styled.h4`
    padding-left: 50px;
    font-size: 500;
    font-weight: 500;
    color: ${props => props.size === 'big' ? 'white' : '#ED017F'};
    ${mobile({ paddingLeft: '0px' })};
`

const ProductContainer = styled.div`
    background-color: white;
    max-height: ${props => props.productcontainer === 'normal' && '320px'};
    width: 100%;
    display: ${props => props.productcontainer === 'normal' ? 'grid' : 'flex'};
    grid-template-columns: ${props => props.productcontainer === 'normal' && 'auto auto auto'};
    padding: ${props => props.productcontainer === 'normal' ? '10px 20px' : '12px 0px'};
    box-sizing: border-box;
    padding-bottom: ${props => props.productcontainer === 'normal' ? 0 : '20px'};
    justify-content: ${props => props.productcontainer === 'normal' ? 'none' : 'center'};
    align-Items: ${props => props.productcontainer === 'normal' ? 'none' : 'center'};
    overflow-y: ${props => props.productcontainer === 'normal' ? 'scroll' : 'hidden'};
    overflow-x: ${props => props.productcontainer === 'normal' ? 'hidden' : 'scroll'};
    ${mobile({ display: 'flex', padding: `${props => props.productcontainer === 'normal' ? '0px' : '8px'}`, overflowX: 'scroll', overflowY: 'hidden', paddingBottom: '20px' })};
`

const EachProduct = styled.div`
    background-color: white;
    display: ${props => props.eachProduct === 'first' && 'flex'};
    justify-content: space-around;
    align-Items: center;
    border-radius: 5px;
    border: solid 2px whitesmoke;
    margin: 5px;
    width: ${props => props.eachProduct === 'second' && '250px'};
    margin: ${props => props.eachProduct === 'second' && '0px 5px'};
    padding: ${props => props.productcontainer === 'normal' ? '10px' : '20px'};
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.5s ease-in;
    ${mobile({ display: 'flex', flexDirection: 'column', width: '250px', padding: '10px', justifyContent: `${props => props.eachProduct === 'second' ? 'center' : 'space-around'}` })};

    &:hover {
        box-shadow: 1px 1px 2px 2px whitesmoke;
        transform: scale(1.01);
    }
`
const Imagediv = styled.div`
    height: ${props => props.eachProduct === 'first' ? '100px' : '250px'};
    width: ${props => props.eachProduct === 'first' ? 'fit-content' : '200px'};
    display: flex;
    justify-content: center;
    align-Items: center;
    flex: 1;
    background-color: white;
    ${mobile({ height: '100px', width: '100px', flex: 2 })};
`

const Image = styled.img`
    display: flex;
    justify-content: center;
    max-width: ${props => props.eachProduct === 'second' && '100%'};
    width: ${props => props.eachProduct === 'first' && '100%'};
    height: ${props => props.eachProduct === 'first' ? '100%' : 'auto'};
    ${mobile({ height: '100px', width: '100px', flex: 2 })};
`

const ProductDetails = styled.div`
    height: ${props => props.eachProduct === 'first' && '120px'};
    flex: ${props => props.eachProduct === 'first' && '2'};
    width: ${props => props.eachProduct === 'first' ? '70px' : '100%'};
    display: ${props => props.eachProduct === 'first' && 'flex'};
    flex-direction: ${props => props.eachProduct === 'first' && 'column'};
    margin-left: ${props => props.eachProduct === 'first' && '5px'};
    margin-top: ${props => props.eachProduct === 'second' && '10px'};
    justify-content: center;
    flex: 2;
     ${mobile({ flex: 1, width: '100%', marginLeft: '0px' })};
`

const ProductTitle = styled.h1`
    font-size: 18px;
    font-weight: ${props => props.eachProduct === 'first' ? '300' : '700'};
    color: black;
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${props => props.eachProduct === 'first' ? 'wrap' : 'nowrap'};
    text-decoration: none;
    ${mobile({ fontSize: '15px', fontWeight: '700', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap", maxWidth: '100%' })};
`

const Productprice = styled.h4`
    font-size: ${props => props.eachProduct === 'first' ? '1.1em' : '20px'};
    font-weight: 800;
    color: black;
    // margin-top: 10px;
    text-decoration: none;
    width: fit-content;
    ${mobile({ fontSize: '20px' })};
`
const RealPrice = styled.h4`
    font-size: 13px;
    font-weight: 400;
    color: gray;
    // margin-top: 10px;
    text-decoration: none;
    text-decoration: line-through;
    width: fit-content;
    ${mobile({ fontSize: '13px' })};
`
const PercentageSave = styled.h4`
    font-size: 12px;
    font-weight: 300;
    color: red;
    background-color: pink;
    // margin-top: 10px;
    padding: 3px 6px;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    width: fit-content;
    ${mobile({ fontSize: '13px' })};
`
const Save = styled.h4`
    font-size: 13px;
    font-weight: 400;
    color: green;
    height: ${props => props.eachProduct === 'second' && 0};
    margin-top: ${props => props.eachProduct === 'second' ? 0 : '10px'};
    text-decoration: none;
    width: fit-content;
    // display: none;
    ${mobile({ fontSize: '20px', display: 'none' })};
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-Items: center;
    width: 100%;
    // margin-top: 10px;
    overflow: wrap;
`

const Anchor = styled.a`
    text-decoration: none;
`