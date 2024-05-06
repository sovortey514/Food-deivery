import React from 'react'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {

  return (
    <div className='food-iten'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="foot-item-name-rating"></div>
      </div>
    </div>
  )
}

export default FoodItem
