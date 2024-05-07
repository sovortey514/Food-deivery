import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    // Handle menu item click actions if needed
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => handleMenuClick("home")}>home</Link>
        <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => handleMenuClick("menu")}>menu</a>
        <a href='#app-download' className={menu === "mobile-app" ? "active" : ""} onClick={() => handleMenuClick("mobile-app")}>mobile-app</a>
        <a href='#footer' className={menu === "contact-us" ? "active" : ""} onClick={() => handleMenuClick("contact-us")}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
