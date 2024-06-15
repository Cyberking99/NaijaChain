import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import walletReducer from './walletSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    wallet: walletReducer,
  },
});
