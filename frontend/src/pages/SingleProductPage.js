import React from 'react';
import Header from '../components/Header/script.js';
import Footer from '../components/Footer/script.js';
import SingleProduct from '../components/SingleProduct/script.js';

const SingleProductPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <SingleProduct />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
