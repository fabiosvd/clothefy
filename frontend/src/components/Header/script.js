import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import { FaRegUserCircle, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div class="header-container">
        <Link to="/">
          <a href="#" class="logo">
            <img src="/images/logo.svg" alt="" />
          </a>
        </Link>
        <div class="options">
          <a href="" class="profile-icon">
            <FaRegUserCircle />
          </a>
          <a href="" class="profile-icon">
            <FaShoppingBag />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
