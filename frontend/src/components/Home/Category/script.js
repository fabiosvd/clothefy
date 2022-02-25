import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Category = props => {
  return (
    <Link to={props.link} className="category">
      <div
        className="background-img-holder"
        style={{ backgroundImage: `url(${props.banner})` }}
      >
        <div className="content">
          <h1 className="title">{props.title}</h1>
          <span className="subtitle">{props.subtitle}</span>
        </div>
      </div>
    </Link>
  );
};

export default Category;
