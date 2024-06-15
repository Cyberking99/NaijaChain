import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ name: '', price: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} placeholder="Product Name" />
      <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })} placeholder="Product Price" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
