import React, { useState, useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; // Corrected import statement
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Local state to manage item count for this specific FoodItem
  const [itemCount, setItemCount] = useState(cartItems[id] ?? 0);

  const handleAddToCart = () => {
    addToCart(id);
    setItemCount(prevCount => prevCount + 1); // Update local state
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setItemCount(prevCount => Math.max(0, prevCount - 1)); // Ensure count doesn't go below 0
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!itemCount ? (
          <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='' />
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" /> {/* Corrected image source */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
