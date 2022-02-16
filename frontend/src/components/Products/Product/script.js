import React from 'react';
import styles from './styles.scss';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, price, name, productId }) => {
  return (
    <>
      <Link to={`/product/${productId}`} class="product">
        <img class="product-image" src={imageUrl} alt="" />
        <div class="product-info">
          <h4>{name}</h4>
          <span>$ {price}.00</span>
          <ul class="stars">
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
        </div>
      </Link>
    </>
  );
};

export default Product;
