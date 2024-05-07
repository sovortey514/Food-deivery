import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <p>{item.name}</p>
                <p>{item.title}</p> {/* Assuming title is the property for the title */}
                <p>{item.price}</p> {/* Assuming price is the property for the price */}
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            )
          }
          return null; // Ensure a return for all branches
        })}
      </div>
    </div>
  );
};

export default Cart;
