import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        // If item exists in cart, increase its quantity
        if (cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } 
        // If item doesn't exist, add it to cart with quantity 1
        else {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 1) {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } 
        // If quantity is 1, remove the item from cart
        else if (cartItems[itemId] === 1) {
            const newCartItems = { ...cartItems };
            delete newCartItems[itemId];
            setCartItems(newCartItems);
        }
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

// Add propTypes validation for children
StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default StoreContextProvider;
