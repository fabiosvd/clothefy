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
          banner="https://miro.medium.com/max/1400/1*zUz0Kp39Pu8c0Fejd9xWrA.jpeg"
        />
        <Category
          title="Shoes"
          subtitle="Shop Now"
          link="/products/shoes"
          banner="https://addicted2success.com/wp-content/uploads/2020/07/Create-Your-Happiness-Don%E2%80%99t-Pursue-It.png"
        />
        <Category
          title="Sweatpants"
          subtitle="Shop Now"
          link="/products/sweatpants"
          banner="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        />
        <Category
          title="Caps"
          subtitle="Shop Now"
          link="/products/caps"
          banner="https://images.hdqwalls.com/download/man-standing-at-ocean-shore-pic-1600x1200.jpg"
        />
        <Category
          title="Watches"
          subtitle="Shop Now"
          link="/products/watches"
          banner="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2119&q=80"
        />
      </div>
    </main>
  );
};

export default Home;
