import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

// Components
import CartItem from './CartItem/script';

const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="cartpage-left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>

      <div className="cartpage-right">
        <div className="cartpage-info">
          <p>Subtotal items</p>
          <p>$120</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
