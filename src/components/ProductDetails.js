import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PurchaseProduct from './PurchaseProduct';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.products.find((prod) => prod.id === id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price} ALGOs</p>
      <PurchaseProduct product={product} />
    </div>
  );
};

export default ProductDetails;
