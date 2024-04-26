import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../images/img_logo.png';
import '../Styles/TopMenu.css';

const TopMenu = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setShowSuggestions(true);
      const filteredResults = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setShowSuggestions(false);
      setSearchResults([]);
    }
  };

  const handleCartButtonClick = () => {
    navigate('/cart');
  };

  return (
    <div className="top-menu">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="search-area">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <motion.ul
          className="search-suggestions"
          initial={{ opacity: 0 }}
          animate={{ opacity: showSuggestions ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {searchResults.map(product => (
            <motion.li key={product.id} whileHover={{ scale: 1.1 }}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="cart-button" onClick={handleCartButtonClick}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cart-icon"
        >
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'yellow' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default TopMenu;
