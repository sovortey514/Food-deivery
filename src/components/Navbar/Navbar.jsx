import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    // Handle menu item click actions if needed
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => handleMenuClick("home")}>home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => handleMenuClick("menu")}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => handleMenuClick("mobile-app")}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => handleMenuClick("contact-us")}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
