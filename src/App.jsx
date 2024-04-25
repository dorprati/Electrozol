import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TopMenu from './Components/TopMenu';
import Banner from './Components/Banner';
import RunningText from './Components/RunningText';
import MostSoldProducts from './Components/MostSoldProducts';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import AboutPage from './Components/AboutPage';
import ContactUs from './Components/ContactUs';
import ProductPage from './Components/ProductPage';
import iPhoneProMax13 from './images/iphone13promax.jpg'; 
import Samsung22Ultra from './images/SamsungGalaxyS22Ultra.jpg';
import pixle16Pro from './images/googlepixel6pro.jpg';
import onePlus10 from './images/oneplus10.jpg';
import XiaomiMi12 from './images/xiomi12.jpg';
import SonyXperia1_3 from './images/sonyx.jpg';
import huaweip50pro from './images/HuaweiP50Pro.jpg';
import Lgv70 from './images/v70.jpg';
import './Styles/App.css';

const App = () => {
  const products = [
    { 
      id: 1, 
      name: 'iPhone 13 Pro Max', 
      manufacturer: 'Apple',
      price: '3846', 
      image: iPhoneProMax13,
      shortDescription: 'The latest iPhone with stunning design and powerful features.',
      details: 'The iPhone 13 Pro Max features a large Super Retina XDR display, A15 Bionic chip, advanced camera system, and all-day battery life.',
      colors: ['Graphite', 'Gold', 'Silver'],
      memoryOptions: ['128GB', '256GB', '512GB']
    },
    { 
      id: 2, 
      name: 'Samsung Galaxy S22 Ultra', 
      manufacturer: 'Samsung',
      price: '4546', 
      image: Samsung22Ultra,
      shortDescription: 'The ultimate Samsung flagship with a versatile camera system.',
      details: 'The Samsung Galaxy S22 Ultra boasts a powerful Exynos chipset, a versatile camera system with up to 100x zoom, and a large AMOLED display.',
      colors: ['Phantom Black', 'Phantom Silver', 'Phantom Green'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 3, 
      name: 'Google Pixel 6 Pro', 
      manufacturer: 'Google',
      price: '3146', 
      image: pixle16Pro,
      shortDescription: 'The Pixel 6 Pro with exceptional camera capabilities.',
      details: 'The Google Pixel 6 Pro features a powerful camera system with advanced computational photography capabilities, a high-refresh-rate display, and fast performance.',
      colors: ['Stormy Black', 'Cloudy White', 'Sunny Yellow'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 4, 
      name: 'OnePlus 10 Pro', 
      manufacturer: 'OnePlus',
      price: '3496', 
      image: onePlus10,
      shortDescription: 'The latest flagship from OnePlus with OxygenOS.',
      details: 'The OnePlus 10 Pro features a sleek design, OxygenOS software, a fast-charging battery, and a high-quality display.',
      colors: ['Obsidian Black', 'Stellar Silver', 'Emerald Green'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 5, 
      name: 'Xiaomi Mi 12', 
      manufacturer: 'Xiaomi',
      price: '2796', 
      image: XiaomiMi12,
      shortDescription: 'The Xiaomi flagship with innovative features.',
      details: 'The Xiaomi Mi 12 features innovative camera technology, a high-refresh-rate display, and fast performance at an affordable price.',
      colors: ['Midnight Black', 'Ocean Blue', 'Sunset Orange'],
      memoryOptions: ['128GB', '256GB', '512GB']
    },
    { 
      id: 6, 
      name: 'Sony Xperia 1 III', 
      manufacturer: 'Sony',
      price: '4196', 
      image: SonyXperia1_3,
      shortDescription: 'The flagship Xperia with a stunning 4K display.',
      details: 'The Sony Xperia 1 III features a 4K OLED display, Zeiss optics for the camera system, 5G connectivity, and premium build quality.',
      colors: ['Black', 'Purple', 'White'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 7, 
      name: 'Huawei P50 Pro', 
      manufacturer: 'Huawei',
      price: '4196', 
      image: huaweip50pro,
      shortDescription: 'The Huawei flagship with advanced camera technology.',
      details: 'The Huawei P50 Pro features advanced camera technology co-engineered with Leica, a sleek design, and a powerful Kirin chipset.',
      colors: ['Golden Black', 'Cocoa Gold', 'Pearl White'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 8, 
      name: 'LG V70 ThinQ', 
      manufacturer: 'LG',
      price: '3146', 
      image: Lgv70,
      shortDescription: 'The last flagship from LG with innovative features.',
      details: 'The LG V70 ThinQ features a high-quality display, a unique camera system, and LGs signature audio technology.',
      colors: ['Aurora Black', 'Cloudy White'],
      memoryOptions: ['128GB', '256GB']
    },
  ];

  const PhoneList = ({ products }) => {
    return (
      <div className="phone-list-container">
        <h2>Phones</h2>
        <ul className="phone-list">
          {products.map(product => (
            <li key={product.id} className="phone-item">
              <Link to={`/products/${product.id}`} className="phone-link">
                <img src={product.image} alt={product.name} className="phone-image" />
                <div className="phone-details">
                  <div className="phone-name">{product.name}</div>
                  <div className="phone-manufacturer">{product.manufacturer}</div>
                  <div className="phone-description">{product.shortDescription}</div>
                  <div className="phone-price">{product.price} ILS</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <TopMenu products={products} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<PhoneList products={products} />} />
          <Route path="/products/:productId" element={<ProductPage products={products} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Banner />
    <RunningText />
    <MostSoldProducts />
    <Footer />
  </>
);

export default App;
