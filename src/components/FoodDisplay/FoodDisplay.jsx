import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div>
            <div className='food-display' id='food-display'></div>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => (
                    <FoodItem key={index} id={item.id} description={item.description} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
