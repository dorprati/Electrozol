import React from 'react';
import './MostSoldProducts.css'; 


const MostSoldProducts = () => {
  
  const products = [
    { id: 1, name: 'Playstation 5', price: '1900', image: 'PS5.jpg'},
    { id: 2, name: 'Samsung Galaxy S22', price: '2399', image: 's22.jpg'},
    { id: 3, name: 'Dell XPS 15', price: '3042', image: 'Dell.jpg'},
    { id: 4, name: 'Sony Bravia OLED A90J', price: '7000', image: 'bravia.jpg'},
    { id: 5, name: 'Apple iPad Pro', price: '3377', image: 'bravia.jpg'},
    { id: 6, name: 'Apple Watch Series 7', price: '1395', image: 'bravia.jpg'},
    { id: 7, name: 'Canon EOS R5', price: '12110', image: 'bravia.jpg'},
    { id: 8, name: 'Bose QuietComfort 45 Wireless Headphones', price: '885', image: 'bravia.jpg'},
  ];

  return (
    <div className="most-sold-products">
      <h2>Our Most Sold Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={require(`./images/${product.image}`).default} alt={product.name} />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProducts;
