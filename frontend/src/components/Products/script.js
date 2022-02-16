import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Products/Product/script';
import styles from './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';

const Products = props => {
  const dispatch = useDispatch();

  let option = props.category;

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="product-container">
      <div className="products-title">
        <h2>Our Latest {option}</h2>
      </div>
      <div className="products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products
            .filter(product => {
              return product.category == option;
            })
            .map(product => (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Products;
