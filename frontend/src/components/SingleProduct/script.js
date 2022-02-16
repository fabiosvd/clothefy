import './styles.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const SingleProduct = props => {
  return (
    <div className="single-content">
      <img className="single-image" src={props.img} alt="" />
      <div className="single-info">
        <h4>{props.name}</h4>
        <span className="price">$ {props.price}.00</span>
        <ul className="single-stars">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>
        <span>{props.description}</span>
        <div className="quote">
          <FaQuoteLeft className="quote-icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiuski smod.
          </p>
        </div>
        <div className="quantity-content">
          <h6>No. of Orders</h6>

          <div className="quantity-buttons">
            <input type="button" value="-" className="alter-btn" />
            <input
              type="number"
              name="quantity"
              value="1"
              title="Qty"
              className="value-btn"
            ></input>
            <input type="button" value="+" className="alter-btn" />
          </div>
        </div>
        <div className="total">
          <h4>Total: $210.00</h4>
          <a onClick={props.addToCart} href="#">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
