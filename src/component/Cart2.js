import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { addToCart, decreaseFromCart, getCartTotal, removeFromCart } from '../Container/Redux/Actions/CartSlice';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import mobile from './Mobile';
import { biggestscreen } from './Mobile';


function Cart2() {
    const cart = useSelector((state) => state.cart);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart, dispatch]);
    const handleRemoveItem = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    };
    const handleDecreaseItem = (cartItem) => {
        dispatch(decreaseFromCart(cartItem))
    };
    const handleClick = (cartItem) => {
        dispatch(addToCart(cartItem));
        history.push('/cart/overview')
    };

    return (
        <Container>
            {cart.cartItems.length === 0 ? (
                <EmptyCartContainer>
                    <EmptyCart>
                        <EmptySpan><ProductionQuantityLimitsOutlinedIcon /></EmptySpan>
                        <EmptyDetail>Your cart is empty.</EmptyDetail>
                        <EmptyDetail>You have not added any item to your cart.</EmptyDetail>
                    </EmptyCart>
                </EmptyCartContainer>
            ) : (
                <FullCartContainer>
                    <TopDetail>
                        <Top>
                            <Text1 href='/'>Home</Text1><SvgDiv2><KeyboardArrowRightIcon /></SvgDiv2><Text2>Shopping Cart</Text2>
                        </Top>
                        <TopDetailBigLetter>Shopping Cart</TopDetailBigLetter>
                    </TopDetail>
                    <MiniSubtotal>
                        <MiniSubtotalh4>Subtotal: ( {cart.cartTotalQuantity}{cart.cartTotalQuantity > 1 ? 'Items' : 'Item'} ) </MiniSubtotalh4><MiniSubtotalh4>₦{cart.cartTotalAmount.toLocaleString('en-US')}</MiniSubtotalh4>
                    </MiniSubtotal>
                    <BottomDetail>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <ReturnBotton >
                                <WestOutlinedIcon /><span>Continue Shopping</span>
                            </ReturnBotton>
                        </Link>
                        <BothTableContainer>
                            <LeftTable>
                                <List1>
                                    <TableSmallLetter>Items Details</TableSmallLetter>
                                    <TableSmallLetter>Quantity</TableSmallLetter>
                                    <TableSmallLetter>Item Price</TableSmallLetter>
                                    <TableSmallLetter>Action</TableSmallLetter>
                                </List1>
                                <List>
                                    {cart.cartItems?.map(cartItem => (
                                        <List2 key={cartItem.id}>
                                            <ItemDetail>
                                                <TableImage src={cartItem.image} />
                                                <ItemDescription>
                                                    <ItemDescriptiondetail1>{cartItem.title}</ItemDescriptiondetail1>
                                                    <ItemDescriptiondetail2> sold by: {cartItem.soldBy}</ItemDescriptiondetail2>
                                                </ItemDescription>
                                            </ItemDetail>
                                            <QuantityBig>
                                                <QuantityButton onClick={() => handleDecreaseItem(cartItem)}><ButtonSign>-</ButtonSign></QuantityButton><QuantitySpan>{cartItem.cartQuantity}</QuantitySpan><QuantityButton onClick={() => handleClick(cartItem)}><ButtonSign>+</ButtonSign></QuantityButton>
                                            </QuantityBig>
                                            <ItemPriceBig>
                                                <span> ₦{(cartItem.price * cartItem.cartQuantity).toLocaleString('en-US')}</span><br />
                                                <span> ₦{cartItem.price.toLocaleString('en-US')} x {cartItem.cartQuantity} items</span>
                                            </ItemPriceBig>
                                            <MiniCombine>
                                                <Quantity>
                                                    <TableSmallLetter>Quantity</TableSmallLetter>
                                                    <QSpan><QuantityButton onClick={() => handleDecreaseItem(cartItem)}><ButtonSign>-</ButtonSign></QuantityButton><QuantitySpan>{cartItem.cartQuantity}</QuantitySpan><QuantityButton onClick={() => handleClick(cartItem)}><ButtonSign>+</ButtonSign></QuantityButton></QSpan>
                                                </Quantity>
                                                <ItemPrice>
                                                    <QSpan2> ₦{(cartItem.price * cartItem.cartQuantity).toLocaleString('en-US')}</QSpan2>
                                                    <span> ₦{cartItem.price.toLocaleString('en-US')} x {cartItem.cartQuantity} {cartItem.cartQuantity > 1 ? 'Items' : 'Item'}</span>
                                                </ItemPrice>
                                            </MiniCombine>
                                            <ActionBig>
                                                <ActionButtonBig onClick={() => handleRemoveItem(cartItem)}>Remove Item</ActionButtonBig>
                                                <ActionButtonBig>Save for Later</ActionButtonBig>
                                            </ActionBig>
                                            <Action>
                                                <ActionButton onClick={() => handleRemoveItem(cartItem)}>Remove Item</ActionButton>
                                                <ActionButton>Save for Later</ActionButton>
                                            </Action>
                                        </List2>
                                    ))}
                                </List>
                            </LeftTable>
                            <RightTable>
                                <RightTableList>
                                    <CheckoutDiv > <Span2>Order Summary</Span2> <Span2>{cart.cartTotalQuantity}{cart.cartTotalQuantity > 1 ? <Spanh3>Items</Spanh3> : <Spanh3>Item</Spanh3>}</Span2></CheckoutDiv>
                                    <Dividerme />
                                    <CheckoutDiv> <span>Delivery Charges</span> <h6>add your delivery address to checkOut to see your delivery charges</h6></CheckoutDiv>
                                    <Dividerme />
                                    <CheckoutDiv> <span>Subtotal:</span> <span>₦{cart.cartTotalAmount.toLocaleString('en-US')}</span></CheckoutDiv>
                                    <Dividerme />
                                    <CheckoutDiv> <Span2>Total</Span2> <Span2>₦{cart.cartTotalAmount.toLocaleString('en-US')}</Span2></CheckoutDiv>
                                    <Dividerme />
                                    <CheckoutH5>Excluding delivery charges</CheckoutH5>
                                    <CheckoutDiv>
                                        <CheckoutButton> Continue to CheckOut</CheckoutButton>
                                    </CheckoutDiv>
                                    <Dividerme />
                                    <CheckoutDivColumn2>
                                        <Divrowm>
                                            <CheckoutH6>we accept:</CheckoutH6>
                                            <Divrow2>
                                                <span><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587568/Konga/Mastercardlogo_oxdzya.png' alt="masterCrad" /></span>
                                                <span><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587567/Konga/visacardlogo_s5dklh.png' alt="visa" /></span>
                                                <span><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587567/Konga/Vervelogo_lhbvfk.png' alt="verve" /></span>
                                                <span><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586895/Konga/kongalogo_liwzkv.png' alt="konga" /></span>
                                            </Divrow2>
                                        </Divrowm>
                                        <Divrowm2>
                                            <SvgDiv><LockOutlinedIcon /></SvgDiv> <CheckoutH6>Transactions are 100% Safe and Secure </CheckoutH6>
                                        </Divrowm2>
                                    </CheckoutDivColumn2>
                                </RightTableList>
                                <MinCheckoutDivColumn>
                                    <MinDivrow>
                                        <Minspan><MinTableSmallLetter>we accept:</MinTableSmallLetter></Minspan>
                                        <Minspan><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587568/Konga/Mastercardlogo_oxdzya.png' alt="masterCrad" /></Minspan>
                                        <Minspan><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587567/Konga/visacardlogo_s5dklh.png' alt="visa" /></Minspan>
                                        <Minspan><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697587567/Konga/Vervelogo_lhbvfk.png' alt="verve" /></Minspan>
                                        <Minspan><PaymentImage src='https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586895/Konga/kongalogo_liwzkv.png' alt="konga" /></Minspan>
                                    </MinDivrow>
                                    <MinDivrow>
                                        <span><MinTableSmallLetter><LockOutlinedIcon />100% Safe and Secure</MinTableSmallLetter></span>
                                    </MinDivrow>
                                    <CheckoutDivColumn>
                                        <CheckoutButton> Continue to CheckOut</CheckoutButton>
                                    </CheckoutDivColumn>
                                </MinCheckoutDivColumn>
                            </RightTable>
                        </BothTableContainer>
                    </BottomDetail>

                </FullCartContainer>
            )}
        </Container>
    )
}

export default Cart2


const Container = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    margin-top: 40px;
    padding: 20px 20px;
    box-sizing: border-box;
    ${mobile({ padding: '0px 10px' })}
`

const EmptyCartContainer = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     ${mobile({ height: '100vh', justifyContent: 'flex-start' })}
`

const EmptySpan = styled.svg`
    width: 70px;
    height: 70px;
    align-self: center;
    color: pink;
`


const EmptyDetail = styled.h5`
    font-size: 15px;
    font-weight: 700;
    margin: 5px;
    color: black;
`

const EmptyCart = styled.div`
    background-color: white;
    width: 380px;
    height: 300px;
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    ${mobile({ marginTop: '0px', width: '100%' })}
`

const FullCartContainer = styled.div`
    width: 100%;
    ${mobile({ marginTop: '65px', zIndex: 900 })}
`
const Top = styled.div`
    width: 100%;
    background-color: white;
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    ${mobile({ display: 'none' })};
`

const Text1 = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: black;
    text-decoration: none;
`

const Text2 = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: red;
`

const SvgDiv2 = styled.svg`
    width: 14px;
    height: 14px;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopDetail = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    justify-content: center;
    align-items: flex-start;
    ${mobile({ backgroundColor: '#F2F2F2', padding: '0px' })}
`
const TopDetailBigLetter = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: black;
    ${mobile({ fontSize: '20px', margin: '20px', marginLeft: '0px' })};
`

const BottomDetail = styled.div`
    width: 100%;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0px;
    ${mobile({ display: 'flex' })}
`
const ReturnBotton = styled.div`
    width: 160px;
    height: 40px;
    border-radius: 5px;
    border: solid 2px #ED2891;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    margin: 10px 0px;
    color: #ED2891;
    ${mobile({ margin: '5px 0px' })}

`
const BothTableContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    ${mobile({ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', paddingRight: '5px' })}
`

const LeftTable = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-sizing: border-box;
    ${mobile({ backgroundColor: '', flex: 1, width: '100%', marginBottom: '175px' })}
`
const RightTable = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    ${mobile({ backgroundColor: '', flex: 1, width: '100%' })}
`

const List1 = styled.div`
    background-color: #E6E6E6;
    height: 40px;
    display: grid;
    padding: 0px 10px;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    justify-content: center;
    ${mobile({ display: 'none', })}
`

const List = styled.div`
    background-color: black;
    width: 100%;
`

const List2 = styled.div`
    background-color: white;
    width: 100%;
    display: grid;
    padding: 10px 10px;
    box-sizing: border-box;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: solid 1px whitesmoke;
    ${mobile({ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px 0px', })}
`

const TableSmallLetter = styled.h5`
    font-size: 15px;
    font-weight: 700;
    color: #4A4A4A;
`

const MinTableSmallLetter = styled.h5`
    font-size: 13px;
    font-weight: 300;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemPriceBig = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    ${mobile({ display: 'none', })};
`
const ItemPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const ActionBig = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    ${mobile({ display: 'none', })};
`
const Action = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
    height: 50px; 
    border-top: solid 1px gray;
    padding: 0px 10px;
    box-sizing: border-box;
    ${biggestscreen({ display: 'none' })};
`

const QuantityBig = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${mobile({ display: 'none', })};
`
const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const QuantityButton = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
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
const ButtonSign = styled.h5`
    font-size: 30px;
    font-weight: 500;
    color: #4A4A4A;
`

const ActionButtonBig = styled.h5`
    cursor: pointer;
    color: red;
    font-size: 15px;
    ${mobile({ display: 'none', })};
`
const ActionButton = styled.button`
    cursor: pointer;
    color: black;
    background-color: white;
    width: 130px;
    height: 25px;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    border: solid 1px gray;
`

const RightTableList = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    ${mobile({ display: 'none', })};
`
const CheckoutDiv = styled.div`
    background-color: white;
    min-height: 50px;
    width: 100%;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
`

const CheckoutDivColumn = styled.div`
    background-color: white;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${mobile({ position: 'fixed', bottom: 0, padding: '10px 13px' })};
`

const CheckoutDivColumn2 = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${mobile({ height: '50px', position: 'fixed', bottom: 0, })};
`
const MinCheckoutDivColumn = styled.div`
    background-color: #F2F2F2;
    position: fixed;
    bottom: 40px;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
    align-items: center;
    justify-content: center;
    ${biggestscreen({ display: 'none' })};
`

const CheckoutH5 = styled.h5`
    font-size: 12px;
    font-weight: 200;
    color: orange;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
    justify-content: flex-end;
`


const CheckoutButton = styled.div`
    width: 100%;
    height: 38px;
    border-radius: 5px;
    margin: 20px 0px;
    box-sizing: border-box;
    background-color:#33B27B;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    ${mobile({ height: '38px', margin: 0, padding: '10px' })};
`

const PaymentImage = styled.img`
    width: 30px;
    height: 18px;
    ${mobile({ width: '40px', height: '20px' })}
`

const Divrowm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 0px;
    ${mobile({ display: 'none', })};
`

const Divrowm2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ display: 'none', })};
`
const CheckoutH6 = styled.h5`
    flex: 2;
    font-size: 14px;
    font-weight: 200;
    color: orange;
    width: 100%;
    line-height: 0;
    justify-content: center;
`
const Divrow2 = styled.div`
    flex: 6;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ display: 'none', })};
`

const SvgDiv = styled.svg`
    color: orange;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ display: 'none', })};
`

const MinDivrow = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0px;
    align-items: center;
    justify-content: center;
    ${biggestscreen({ display: 'none' })};
`
const Minspan = styled.div`
    margin-right: 14px;
    ${biggestscreen({ display: 'none' })};
`

const MiniCombine = styled.div`
    ${biggestscreen({ display: 'none' })};
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
    ${mobile({ display: 'flex', justifyContent: 'space-between' })};
`
const MiniSubtotal = styled.div`
    ${biggestscreen({ display: 'none' })};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 30px;
    border: none;
`
const MiniSubtotalh4 = styled.h4`
    font-size: 16px;
`

const QSpan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 0px;
`
const QSpan2 = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 0px;
`

const Dividerme = styled.div`
    width: 100%;
    height: 1px;
    background-color: #f2f2f2;
`

const ItemDetail = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;    
    ${mobile({ boxSizing: 'border-box', padding: '10px' })};
`
const TableImage = styled.img`
    max-width: 110px;
    min-width: 110px;
    flex: 1;
    max-height: 100px;
    min-width: 100px;
    border-radius: 5px;
    margin-Right: 10px;
`

const ItemDescription = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const ItemDescriptiondetail1 = styled.h5`
    font-size: 15px;
    margin-bottom: 3px;
    font-weight: 500;
    color: #4A4A4A;
`
const ItemDescriptiondetail2 = styled.h5`
    font-size: 15px;
    font-weight: 500;
    color: #4A4A4A;
`
const Span2 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Spanh3 = styled.span`
    margin-left: 10px;
`
