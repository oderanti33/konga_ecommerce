import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import store from './Container/Redux/Store';

import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../src/Container/Redux/productApi'
import cartReducer, { getCartTotal } from './Container/Redux/Actions/CartSlice';
// import { useDispatch } from 'react-redux';
// import productReducer from './Container/Redux/Actions/productsSlice';




const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultmiddleware) => {
    return getDefaultmiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(getCartTotal())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 
// 

