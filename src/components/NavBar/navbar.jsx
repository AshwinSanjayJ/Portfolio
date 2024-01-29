import React from 'react';
import "./navbar.css";
import {Link} from 'react-scroll';

const NavBAr = () => {
  return (
    <nav className="navbar">
        <img src="logo.png" alt="logo" className = "logo"/>
        <div className="desktopMenu">
            <Link className="desktopMenuItem">Home</Link>
            <Link className="desktopMenuItem">About</Link>
            <Link className="desktopMenuItem">Portfolio</Link>
            <Link className="desktopMenuItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src="contact.png" alt="" className="desktopMenuImg"/>Contact Me
        </button>
    </nav>
  )
}

export default NavBAr