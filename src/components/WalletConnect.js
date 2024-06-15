import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectToWallet, disconnectFromWallet } from '../redux/walletSlice';

const WalletConnect = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.wallet.address);

  const handleConnect = () => {
    dispatch(connectToWallet());
  };

  const handleDisconnect = () => {
    dispatch(disconnectFromWallet());
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
