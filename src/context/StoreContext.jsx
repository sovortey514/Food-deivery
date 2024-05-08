import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [String(itemId)]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        const newCartItems = { ...cartItems };
        if (newCartItems[itemId] > 1) {
            newCartItems[itemId]--;
        } else {
            delete newCartItems[itemId];
        }
        setCartItems(newCartItems);
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
