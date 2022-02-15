import React from 'react';
import styles from './styles.scss';
import { FaStar } from 'react-icons/fa';

const Product = props => {
  return (
    <>
      <div class="product">
        <img class="product-image" src={props.img} alt="" />
        <div class="product-info">
          <h4>{props.title}</h4>
          <span>{props.price}</span>
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
      </div>
    </>
  );
};

export default Product;
