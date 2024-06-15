import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import algosdk from 'algosdk';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return [
    { id: '1', name: 'Product 1', price: 10, owner: 'OwnerAddress1' },
    { id: '2', name: 'Product 2', price: 20, owner: 'OwnerAddress2' },
  ];
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  return { ...product, id: String(Date.now()) };
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productSlice.reducer;
