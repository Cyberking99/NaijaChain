import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import WalletConnect from './components/WalletConnect';

const App = () => {
  return (
    <Router>
      <div>
        <WalletConnect />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
