import React, { useState } from "react";
import './Header.scss';
import Menu from '../Menu/Menu';
import menuIcon from '../../Assets/menu.png';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header>
            <h1>Power Room</h1>
            <nav>
                <NavLink to='/' className='nav-links' data-testid='dropdown-items'>Home</NavLink>
                <NavLink to='/about' className='nav-links' data-testid='dropdown-items'>About</NavLink>
            </nav>
        </header>

    </>
    )
}

export default Header;





