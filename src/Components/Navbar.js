import React from 'react'
import logo from "../Assates/logo.png";
import serach from "../Assates/search.png";
import bell from "../Assates/bell.png";
import kide from "../Assates/kide.png";
import down from "../Assates/down.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_left">
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>Tv Show</li>
                <li>Movies</li>
                <li>New & populer</li>
                <li>My list</li>
                <li>Browes by language</li>
            </ul>
        </div>
        <div className="navbar_right">
            <img src={serach} alt="search" className="icons"/>
            <p>Children</p>
            <img src={bell} alt="bell" className="icons" />
            <div className='profile_icons'>
                <img src={kide} alt="profile"  className='profile'/>
                <img src={down} alt="profile_dw" />
                <div className="drop">
                    <p>Sign Out</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar