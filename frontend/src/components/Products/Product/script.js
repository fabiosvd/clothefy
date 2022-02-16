import React from 'react';
import styles from './styles.scss';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, price, name, productId }) => {
  return (
    <>
      <Link to={`/product/${productId}`} className="product">
        <img className="product-image" src={imageUrl} alt="" />
        <div className="product-info">
          <h4>{name}</h4>
          <span>$ {price}.00</span>
          <ul className="stars">
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
