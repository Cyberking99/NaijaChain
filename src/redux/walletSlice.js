import { createSlice } from '@reduxjs/toolkit';
import { PeraWalletConnect } from '@perawallet/connect';

const peraWallet = new PeraWalletConnect();

const walletSlice = createSlice({
  name: 'wallet',
  initialState: { address: null },
  reducers: {
    connectWallet(state, action) {
      state.address = action.payload;
    },
    disconnectWallet(state) {
      state.address = null;
      peraWallet.disconnect();
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;

export const connectToWallet = () => async (dispatch) => {
  try {
    const newAccounts = await peraWallet.connect();
    dispatch(connectWallet(newAccounts[0]));
  } catch (error) {
    console.error('Failed to connect to wallet', error);
  }
};

export const disconnectFromWallet = () => (dispatch) => {
  dispatch(disconnectWallet());
};

export default walletSlice.reducer;
