import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MostSoldProducts.css'; 
import PS5 from '../images/PS5.jpg';
import s22 from '../images/s22.jpg';
import Dell from '../images/Dell.jpg';
import Bravia from '../images/bravia.jpg';
import Ipad from '../images/ipad_pro.jpg';
import AppleWatch from '../images/apple_watch_7.jpg';
import EOS from '../images/Eos.jpg';
import QuietComfort from '../images/Bose.jpg';

const MostSoldProducts = () => {
  
  const products = [
    { id: 1, name: 'Playstation 5', price: '1900', image: PS5},
    { id: 2, name: 'Samsung Galaxy S22', price: '2399', image: s22},
    { id: 3, name: 'Dell XPS 15', price: '3042', image: Dell},
    { id: 4, name: 'Sony Bravia OLED A90J', price: '7000', image: Bravia},
    { id: 5, name: 'Apple iPad Pro', price: '3377', image: Ipad},
    { id: 6, name: 'Apple Watch Series 7', price: '1395', image: AppleWatch},
    { id: 7, name: 'Canon EOS R5', price: '12110', image: EOS},
    { id: 8, name: 'Bose QuietComfort 45 Wireless Headphones', price: '885', image: QuietComfort},
  ];

  return (
    <div className="most-sold-products">
      <h2>Our Most Sold Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProducts;
