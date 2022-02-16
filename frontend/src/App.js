import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/hoodies">
          <ProductsPage category="Hoodies" />
        </Route>
        <Route exact path="/products/shoes">
          <ProductsPage category="Shoes" />
        </Route>
        <Route exact path="/products/caps">
          <ProductsPage category="Caps" />
        </Route>
        <Route exact path="/products/sweatpants">
          <ProductsPage category="Sweatpants" />
        </Route>
        <Route exact path="/products/watches">
          <ProductsPage category="Watches" />
        </Route>
        <Route exact path="/product/:id" component={SingleProductPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default App;
