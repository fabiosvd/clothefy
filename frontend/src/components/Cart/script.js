import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import StripeCheckout from 'react-stripe-checkout';

// Components

import CartItem from './CartItem/script';

// Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  // Stripe

  const priceForStripe = getCartSubTotal() * 100;

  const publishableKey =
    'pk_test_51KWkxCLQGdRCK8O8qau3fWp8EgjSHVvHPnS4qlAsF7cQKS61eUclSMQvgwtb3KXAD30vcjzXnQ4ZGIKPfERLYc3r00ueVHioyp';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <div className="cartpage">
      <div className="cartpage-left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty !{' '}
            <Link className="back" to="/">
              Go Back
            </Link>
          </div>
        ) : (
          cartItems.map(item => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>

      <div className="cartpage-right">
        <div className="cartpage-info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>$ {getCartSubTotal()}</p>
        </div>
        <div>
          <StripeCheckout
            label="Pay Now"
            name="Clothefy"
            billingAddress
            shippingAddress
            description={`Your total is ${getCartSubTotal()}`}
            amount={priceForStripe}
            bitcoin
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
          >
            <button>Proceed To Checkout</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
