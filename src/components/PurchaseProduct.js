import React from 'react';
import { useSelector } from 'react-redux';
import algosdk from 'algosdk';
import { PeraWalletConnect } from '@perawallet/connect';

const peraWallet = new PeraWalletConnect();

const PurchaseProduct = ({ product }) => {
  const address = useSelector((state) => state.wallet.address);

  const handlePurchase = async () => {
    if (!address) {
      alert('Please connect your wallet');
      return;
    }

    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-algorand.api.purestake.io/ps2', '');
      const params = await algodClient.getTransactionParams().do();
      const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: address,
        to: product.owner,
        amount: algosdk.algosToMicroalgos(product.price),
        suggestedParams: { ...params },
      });

      const signedTxn = await peraWallet.signTransaction(txn.toByte());
      const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
      alert(`Transaction successful with ID: ${txId}`);
    } catch (err) {
      console.error(err);
      alert('Transaction failed');
    }
  };

  return (
    <button onClick={handlePurchase}>Purchase</button>
  );
};

export default PurchaseProduct;
