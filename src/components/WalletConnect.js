import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet } from '../redux/walletSlice';
import MyAlgoConnect from '@randlabs/myalgo-connect';

const WalletConnect = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.wallet.address);

  const handleConnect = async () => {
    try {
      const myAlgoConnect = new MyAlgoConnect();
      const accounts = await myAlgoConnect.connect();
      dispatch(connectWallet(accounts[0].address));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDisconnect = () => {
    dispatch(disconnectWallet());
  };

  return (
    <div>
      {address ? (
        <div>
          <p>Connected: {address}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
