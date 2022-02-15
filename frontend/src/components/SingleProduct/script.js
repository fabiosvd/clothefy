import React from 'react';
import styles from './styles.scss';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const SingleProduct = () => {
  return (
    <div className="single-container">
      <div className="single-content">
        <img
          class="single-image"
          src="https://images.lojanike.com.br/1024x1024/produto/jaqueta-nike-club-hoodie-masculina-BV2648-010-2-21626441370.jpg"
          alt=""
        />
        <div class="single-info">
          <h4>Classic Hoodie</h4>
          <span class="price">$120.00</span>
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
          <span>
            The Nike Sportswear Collection Essentials Curve Pants are a style
            staple made with heavyweight fleece for an extra cozy feel. With
            room in the thighs and a taper past knee, this relaxed style is
            ideal for everyday wear.
          </span>
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
            <a href="#">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
