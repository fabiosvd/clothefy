import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Category from './Category/script.js';

const Home = () => {
  return (
    <main>
      <div class="categories">
        <Category
          title="Hoodies"
          subtitle="Shop Now"
          link="/products/hoodies"
          banner="./images/bannerhoodies.jpeg"
        />
        <Category
          title="Shoes"
          subtitle="Shop Now"
          link="/products/shoes"
          banner="./images/bannershoes.png"
        />
        <Category
          title="Sweatpants"
          subtitle="Shop Now"
          link="/products/sweatpants"
          banner="./images/bannersweatpants.jfif"
        />
        <Category
          title="Caps"
          subtitle="Shop Now"
          link="/products/caps"
          banner="./images/bannercaps.jpg"
        />
        <Category
          title="Watches"
          subtitle="Shop Now"
          link="/products/watches"
          banner="./images/bannerwatches.jfif"
        />
      </div>
    </main>
  );
};

export default Home;
