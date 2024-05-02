import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
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
import iphone13 from './images/iphone13.jpg';
import zFold3 from './images/zfold3.jpg';
import pixel6 from './images/pixel6.jpg';
import onePlusNinePro from './images/oneplus9pro.jpg';
import xiomi11 from './images/xiomi11ultra.jpg';
import Sonyx5_3 from './images/sonyx5_3.jpg';
import huawei40Pro from './images/Huawei40pro.jpg';
import Motorola from './images/motorola.png';
import iphoneSE from './images/iphonese.jpg';
import Pixel5a from './images/pixel5a.jpg';
import Nord from './images/nord.jpg';
import Xiomi11Note from './images/xiomi11note.jpg';
import LgWing from './images/lgwing.jpg';
import './Styles/App.css';

const App = () => {
  const [products, setProducts] = useState([
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
    { 
      id: 9, 
      name: 'iPhone SE (2022)', 
      manufacturer: 'Apple',
      price: '1999', 
      image: iphoneSE,
      shortDescription: 'The budget-friendly iPhone with powerful features.',
      details: 'The iPhone SE (2022) features the A15 Bionic chip, a 4.7-inch Retina HD display, and advanced camera capabilities.',
      colors: ['Red', 'White', 'Black'],
      memoryOptions: ['64GB', '128GB', '256GB']
    },
    { 
      id: 11, 
      name: 'Google Pixel 5a', 
      manufacturer: 'Google',
      price: '1499', 
      image: Pixel5a,
      shortDescription: 'The mid-range Pixel with great camera performance.',
      details: 'The Google Pixel 5a features a 6.34-inch OLED display, a dual-camera system, and a long-lasting battery.',
      colors: ['Black', 'Green'],
      memoryOptions: ['128GB']
    },
    { 
      id: 12, 
      name: 'OnePlus Nord 2', 
      manufacturer: 'OnePlus',
      price: '2999', 
      image: Nord,
      shortDescription: 'The mid-range OnePlus with flagship-like features.',
      details: 'The OnePlus Nord 2 features a MediaTek Dimensity 1200-AI chipset, a 6.43-inch Fluid AMOLED display, and a triple-camera setup.',
      colors: ['Gray Sierra', 'Blue Haze', 'Green Woods'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 13, 
      name: 'Xiaomi Redmi Note 11 Pro', 
      manufacturer: 'Xiaomi',
      price: '1899', 
      image: Xiomi11Note,
      shortDescription: 'The affordable Note series phone with impressive performance.',
      details: 'The Xiaomi Redmi Note 11 Pro features a MediaTek Dimensity 920 chipset, a 6.67-inch AMOLED display, and a quad-camera setup.',
      colors: ['Glacier White', 'Horizon Blue', 'Storm Black'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 16, 
      name: 'LG Wing', 
      manufacturer: 'LG',
      price: '3999', 
      image: LgWing,
      shortDescription: 'The unique dual-screen phone from LG.',
      details: 'The LG Wing features a swiveling dual-screen design, a Snapdragon 765G chipset, and a triple-camera setup with a 64MP main sensor.',
      colors: ['Aurora Gray', 'Illusion Sky'],
      memoryOptions: ['128GB']
    },
    { 
      id: 17, 
      name: 'iPhone 13', 
      manufacturer: 'Apple',
      price: '799', 
      image: iphone13,
      shortDescription: 'The latest iPhone with impressive features.',
      details: 'The iPhone 13 features a beautiful Super Retina XDR display, A15 Bionic chip, advanced dual-camera system, and all-day battery life.',
      colors: ['Midnight', 'Starlight', 'Product Red', 'Blue', 'Green'],
      memoryOptions: ['128GB', '256GB', '512GB']
    },
    { 
      id: 18, 
      name: 'Samsung Galaxy Z Fold 3', 
      manufacturer: 'Samsung',
      price: '1799', 
      image: zFold3,
      shortDescription: 'The flagship foldable phone with a large foldable display.',
      details: 'The Samsung Galaxy Z Fold 3 features a foldable Dynamic AMOLED 2X display, Snapdragon 888 chipset, versatile camera system, and S Pen support.',
      colors: ['Phantom Black', 'Phantom Green', 'Phantom Silver'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 19, 
      name: 'Google Pixel 6', 
      manufacturer: 'Google',
      price: '699', 
      image: pixel6,
      shortDescription: 'The Pixel 6 with advanced AI capabilities.',
      details: 'The Google Pixel 6 features a powerful Tensor chip for AI capabilities, a dual-camera system with computational photography, and a vibrant OLED display.',
      colors: ['Stormy Black', 'Cloudy White', 'Sunny Yellow'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 20, 
      name: 'OnePlus 9 Pro', 
      manufacturer: 'OnePlus',
      price: '969', 
      image: onePlusNinePro,
      shortDescription: 'The flagship killer with a Hasselblad camera system.',
      details: 'The OnePlus 9 Pro features a Hasselblad camera system, Fluid AMOLED display with 120Hz refresh rate, Snapdragon 888 chipset, and Warp Charge 65T.',
      colors: ['Morning Mist', 'Pine Green', 'Stellar Black'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 21, 
      name: 'Xiaomi Mi 11 Ultra', 
      manufacturer: 'Xiaomi',
      price: '1199', 
      image: xiomi11,
      shortDescription: 'The Xiaomi flagship with an impressive camera setup.',
      details: 'The Xiaomi Mi 11 Ultra features a massive camera setup with a primary 50MP sensor, Snapdragon 888 chipset, a stunning AMOLED display, and fast charging.',
      colors: ['Ceramic White', 'Ceramic Black'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 22, 
      name: 'Sony Xperia 5 III', 
      manufacturer: 'Sony',
      price: '1099', 
      image: Sonyx5_3,
      shortDescription: 'The compact flagship with pro camera technology.',
      details: 'The Sony Xperia 5 III features a compact design, Zeiss optics for the camera system, 5G connectivity, and a 120Hz OLED display.',
      colors: ['Black', 'Green', 'Pink'],
      memoryOptions: ['128GB', '256GB']
    },
    { 
      id: 23, 
      name: 'Huawei Mate 40 Pro', 
      manufacturer: 'Huawei',
      price: '1199', 
      image: huawei40Pro,
      shortDescription: 'The Huawei flagship with a powerful Kirin chipset.',
      details: 'The Huawei Mate 40 Pro features a Kirin 9000 chipset, Leica camera system, curved OLED display, and 66W fast charging.',
      colors: ['Mystic Silver', 'White', 'Black'],
      memoryOptions: ['256GB', '512GB']
    },
    { 
      id: 24, 
      name: 'Motorola Edge 20 Pro', 
      manufacturer: 'Motorola',
      price: '699', 
      image: Motorola,
      shortDescription: 'The Motorola flagship with a 108MP camera.',
      details: 'The Motorola Edge 20 Pro features a 108MP camera system, Snapdragon 870 chipset, a 144Hz OLED display, and 30W fast charging.',
      colors: ['Midnight Blue', 'Stardust White'],
      memoryOptions: ['256GB']
    },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <TopMenu products={products} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<PhoneList products={products} onAddProduct={handleAddProduct} onRemoveProduct={handleRemoveProduct} setProducts={setProducts} />} />
          <Route path="/products/:productId" element={<ProductPage products={products} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = ({ products }) => {
  const mostSoldProducts = products ? products.filter(product => product.id >= 17 && product.id <= 24) : [];

  return (
    <>
      <Banner />
      <RunningText />
      <MostSoldProducts products={mostSoldProducts} />
    </>
  );
};

const PhoneList = ({ products, onAddProduct, onRemoveProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    manufacturer: '',
    image: '',
    shortDescription: '',
    details: '',
    colors: [],
    memoryOptions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const newProductId = uuidv4();

    const newProductItem = {
      id: newProductId,
      name: newProduct.name,
      price: newProduct.price,
      manufacturer: newProduct.manufacturer,
      image: newProduct.image,
      shortDescription: newProduct.shortDescription,
      details: newProduct.details,
      colors: newProduct.colors,
      memoryOptions: newProduct.memoryOptions,
    };

    // Call the onAddProduct function passed from the parent component
    onAddProduct(newProductItem);

    // Reset the form fields and hide the form
    setShowForm(false);
    setNewProduct({
      name: '',
      price: '',
      manufacturer: '',
      image: '',
      shortDescription: '',
      details: '',
      colors: [],
      memoryOptions: [],
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="phone-list-container">
      <h2>Phones</h2>
      <ul className="phone-list">
        {products.map((product) => (
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
            <Button variant="danger" onClick={() => onRemoveProduct(product.id)}>Remove</Button>
          </li>
        ))}
      </ul>
      <div className="add-product-button">
        <Button variant="primary" onClick={() => setShowForm(true)}>Add Product</Button>
      </div>
      {showForm && (
        <div className="add-product-form">
          <h3>Add New Product</h3>
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
            <label>Image URL:</label>
            <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <label>Price:</label>
            <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
            <label>Manufacturer:</label>
            <input type="text" name="manufacturer" value={newProduct.manufacturer} onChange={handleInputChange} />
            <label>Short Description:</label>
            <input type="text" name="shortDescription" value={newProduct.shortDescription} onChange={handleInputChange} />
            <label>Details:</label>
            <textarea name="details" value={newProduct.details} onChange={handleInputChange} />
            <label>Colors:</label>
            <input type="text" name="colors" value={newProduct.colors.join(',')} onChange={e => setNewProduct({ ...newProduct, colors: e.target.value.split(',') })} />
            <label>Memory Options:</label>
            <input type="text" name="memoryOptions" value={newProduct.memoryOptions.join(',')} onChange={e => setNewProduct({ ...newProduct, memoryOptions: e.target.value.split(',') })} />
            <button type="button" onClick={handleAddProduct}>Add</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
