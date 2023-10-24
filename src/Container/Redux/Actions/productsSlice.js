import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

const initialStateProduct = {
    product: [],
    status: null
}

const productSlice = createSlice({
    name: 'product',
    initialStateProduct,
    reducers: {}
})

// export const { addToCart, removeFromCart, decreaseFromCart, getCartTotal } = cartSlice.actions;
export default productSlice.reducer;