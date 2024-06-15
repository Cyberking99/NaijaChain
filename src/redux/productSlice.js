import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import algosdk from 'algosdk';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  
});

export const addProduct = createAsyncThunk('products/addProduct', async (product, thunkAPI) => {
  
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
