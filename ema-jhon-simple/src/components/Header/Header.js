import logo from  '../../images/Logo.svg';
import React from 'react';
import './Header.css';
 
const Header = () => {
    return (
        <div>
        <nav className='header-nav'>
        <img src={logo} alt="" />

        <div className='navlink'>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
        </div>
      </nav>    
        </div>
    );
};

export default Header;