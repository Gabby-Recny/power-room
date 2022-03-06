import React from "react";
import './Header.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header>
            <h1>Power Room</h1>
            <nav>
                <NavLink to='/' className='nav-links' data-testid='nav-links'>Home</NavLink>
                <NavLink to='/about' className='nav-links' data-testid='nav-links'>About</NavLink>
            </nav>
        </header>

    </>
    )
}

export default Header;





