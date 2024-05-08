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
        {food_list.map(item => {
          const quantity = cartItems[item._id] || 0; // Ensure quantity defaults to 0 if not in cart
          if (quantity > 0) {
            return (
              <div key={item._id} className="cart-items-item cart-items-item">
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.price}</p> 
                <p>{quantity}</p>
                <p>{item.price * quantity}</p>
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
