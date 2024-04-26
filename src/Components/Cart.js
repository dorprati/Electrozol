import React, { useState } from 'react';
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Cart.css';

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart();
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleBuyCart = () => {
    setShowDeliveryForm(true);
  };

  const handleDeliveryInfoChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleSubmitDeliveryInfo = (e) => {
    e.preventDefault();
    setShowDeliveryForm(false);
    setDeliveryInfo({
      name: '',
      address: '',
      phone: '',
    });
    toast.success('Delivery information submitted successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.name} />
                  <div>{item.name}</div>
                  <div>Price: {item.price} ILS</div>
                  <div>Manufacturer: {item.manufacturer}</div>
                  <div>Color: {item.selectedColor}</div>
                  <div>Memory: {item.selectedMemory}</div>
                </div>
                <div className="cart-item-quantity">
                  Quantity:
                  <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                  </select>
                </div>
                <button className="cart-item-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total Price: {calculateTotalPrice()} ILS</div>
          <button className="buy-cart-button" onClick={handleBuyCart}>Buy Cart</button>
          {showDeliveryForm && (
            <div className="delivery-form">
              <h3>Delivery Information</h3>
              <form onSubmit={handleSubmitDeliveryInfo}>
                <label>Name:</label>
                <input type="text" name="name" value={deliveryInfo.name} onChange={handleDeliveryInfoChange} />
                <label>Address:</label>
                <input type="text" name="address" value={deliveryInfo.address} onChange={handleDeliveryInfoChange} />
                <label>Phone:</label>
                <input type="text" name="phone" value={deliveryInfo.phone} onChange={handleDeliveryInfoChange} />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
