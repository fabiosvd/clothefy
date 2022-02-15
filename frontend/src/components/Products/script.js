import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Products/Product/script';
import styles from './styles.scss';

const Products = () => {
  return (
    <div class="product-container">
      <div class="products-title">
        <h2>Our Latest Hoodies</h2>
      </div>
      <div class="products">
        <Product
          title="Popular Hoodie"
          price="$120.00"
          img="https://i.pinimg.com/originals/1b/36/b7/1b36b74eec13cba252aac5db1b9c2a2f.jpg"
        />

        <Product
          title="The Blank Hoodie"
          price="$120.00"
          img="https://i.pinimg.com/originals/68/d2/b0/68d2b07556fc64ebf0603f481a3f8b7f.jpg"
        />
        <Product
          title="Camo Hoodie"
          price="$120.00"
          img="//cdn.shopify.com/s/files/1/0337/9413/0052/products/Mens-Camo-Hoodie-4_2048x2048.jpg?v=1638840259"
        />
        <Product
          title="Goals Hoodie"
          price="$120.00"
          img="//cdn.shopify.com/s/files/1/0337/9413/0052/products/plainhoodie_stepup_setgoals_goforit_2048x2048.jpg?v=1607694496"
        />
        <Product
          title="Dab Hoodie"
          price="$120.00"
          img="https://m.media-amazon.com/images/I/71ABETA6brL._UX679_.jpg"
        />
        <Product
          title="Blue Hoodie"
          price="$120.00"
          img="https://m.media-amazon.com/images/I/31Dw1PDRu8S.jpg"
        />
      </div>
    </div>
  );
};

export default Products;
