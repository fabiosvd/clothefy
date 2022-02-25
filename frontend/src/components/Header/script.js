import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { FaRegUserCircle, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <a href="/" className="logo">
            <img src="/images/logo.svg" alt="" />
          </a>
        </Link>
        <div className="options">
          <Link to="/cart">
            <a href="/cart" className="profile-icon">
              <FaRegUserCircle />
            </a>
          </Link>
          <Link to="/cart">
            <a href="/cart" className="profile-icon">
              <FaShoppingBag />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
