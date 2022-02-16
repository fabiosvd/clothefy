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
      <img class="single-image" src={props.img} alt="" />
      <div class="single-info">
        <h4>{props.name}</h4>
        <span class="price">${props.price}.00</span>
        <ul class="single-stars">
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
        <div class="quote">
          <FaQuoteLeft class="quote-icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiuski smod.
          </p>
        </div>
        <div className="quantity-content">
          <h6>No. of Orders</h6>

          <div className="quantity-buttons">
            <input type="button" value="-" class="alter-btn" />
            <input
              type="number"
              name="quantity"
              value="1"
              title="Qty"
              class="value-btn"
            ></input>
            <input type="button" value="+" class="alter-btn" />
          </div>
        </div>
        <div class="total">
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
