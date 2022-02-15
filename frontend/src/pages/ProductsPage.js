import React from 'react';
import Header from '../components/Header/script.js';
import Footer from '../components/Footer/script.js';
import Products from '../components/Products/script.js';

const ProductsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsPage;
