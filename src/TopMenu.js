import React from 'react';
import './TopMenu.css';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-area">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="cart-button">
        <button>Cart</button>
      </div>
    </div>
  );
};

export default TopMenu;
