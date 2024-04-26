import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MostSoldProducts.css'; 


const MostSoldProducts = ({products}) => {
  


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
