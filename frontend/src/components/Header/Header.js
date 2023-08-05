import React from "react";
import { BsCart, BsFillPersonFill } from "react-icons/bs";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-bar'>
        <h1 className='logo'>Barish café</h1>
        <ul className='nav-links'>
          <li>
            <BsCart /> Cart
          </li>
          <li>
            <BsFillPersonFill /> Sign In
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
