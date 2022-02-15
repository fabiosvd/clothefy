import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Category = props => {
  return (
    <Link to={props.link} class="category">
      <div
        className="background-img-holder"
        style={{ backgroundImage: `url(${props.banner})` }}
      >
        <div class="content">
          <h1 class="title">{props.title}</h1>
          <span class="subtitle">{props.subtitle}</span>
        </div>
      </div>
    </Link>
  );
};

export default Category;
