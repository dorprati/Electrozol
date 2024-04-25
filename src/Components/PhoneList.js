import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PhoneList.css'


  const PhoneList = ({ products }) => {
    return (
      <div className="phone-list-container">
        <h2>Phones</h2>
        <ul className="phone-list">
          {products.map(product => (
            <li key={product.id} className="phone-item">
              <Link to={`/products/${product.id}`} className="phone-link">
                <img src={product.image} alt={product.name} className="phone-image" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default PhoneList;
