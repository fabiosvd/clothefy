import React from 'react';
import Header from '../components/Header/script.js';
import Footer from '../components/Footer/script.js';
import Products from '../components/Products/script.js';

const ProductsPage = props => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Products category={props.category} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
