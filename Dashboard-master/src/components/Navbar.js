import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header"> 
        <Link to="/">
            <h1>Basekthunt Bussiness</h1>
        </Link>
        <ul className="nav-bar_menu">
            <li>
                <Link to="/hi vishal">
                    Hi Vishal
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar