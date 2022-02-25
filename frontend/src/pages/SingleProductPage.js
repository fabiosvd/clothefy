import React from 'react';
import Header from '../components/Header/script.js';
import Footer from '../components/Footer/script.js';
import SingleProduct from '../components/SingleProduct/script.js';

import { useState, useEffect } from 'react';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const SingleProductPage = ({ match, history }) => {
  window.scrollTo(0, 0);
  const [qty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  return (
    <div>
      <Header />
      <div className="single-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <SingleProduct
              name={product.name}
              img={product.imageUrl}
              price={product.price}
              description={product.description}
              addToCart={addToCartHandler}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
