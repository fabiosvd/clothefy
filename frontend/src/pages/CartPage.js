import React from 'react';
import Header from './../components/Header/script.js';
import Footer from '../components/Footer/script.js';
import Cart from '../components/Cart/script.js';

const CartPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
