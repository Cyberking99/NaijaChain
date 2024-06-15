import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: { address: null },
  reducers: {
    connectWallet(state, action) {
      state.address = action.payload;
    },
    disconnectWallet(state) {
      state.address = null;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;
