import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                const quant = state.cartItems[itemIndex].cartQuantity
                toast.info(`${action.payload.title} increase to ${quant}`, {
                    position: 'top-center',
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.info(`${action.payload.title} is added to cart`, {
                    position: 'top-center',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },
        removeFromCart(state, action) {
            const currentItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            );
            state.cartItems = currentItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.error(`${action.payload.title} is remove from cart`, {
                position: 'top-center',
            });
        },
        decreaseFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.error(`${action.payload.title} is remove from cart`, {
                    position: 'top-center',
                });
            } else if (state.cartItems[itemIndex].cartQuantity = 1) {
                const currentItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                );
                state.cartItems = currentItems;
                toast.error(`${action.payload.title} is remove from cart`, {
                    position: 'top-center',
                });
            } localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        getCartTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                });
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    },
});

const initialStateProduct = {
    product: localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [],
}

const productSlice = createSlice({
    name: 'product',
    initialStateProduct,
    reducers: {
        addToCart(state, action) {
            state.product.findIndex((item) => item.id === action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },

    },
})

export const { addToCart, removeFromCart, decreaseFromCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;