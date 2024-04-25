import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import '../Styles/ProductPage.css';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find(product => product.id === parseInt(productId));
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedMemory, setSelectedMemory] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleMemoryChange = (e) => {
    setSelectedMemory(e.target.value);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      className="product-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{product.name}</h2>
      <motion.img
        src={product.image}
        alt={product.name}
        className="product-image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="product-details">
        <div>
          <h3>Price: {product.price} ILS</h3>
          <p>{product.shortDescription}</p>
          <p>{product.details}</p>
        </div>
        <div>
          <h3>Available Colors:</h3>
          <select
            value={selectedColor}
            onChange={handleColorChange}
          >
            <option value="">Select Color</option>
            {product.colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Available Memory Options:</h3>
          <select
            value={selectedMemory}
            onChange={handleMemoryChange}
          >
            <option value="">Select Memory</option>
            {product.memoryOptions.map(memory => (
              <option key={memory} value={memory}>{memory}</option>
            ))}
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="product-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductPage;
