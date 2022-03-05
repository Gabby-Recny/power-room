import React, { useState } from "react";
import './Header.scss';
import Menu from '../Menu/Menu';
import menuIcon from '../../Assets/menu.png'

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const toggleClick = () => {
        setClicked(!clicked)
    };
    return (
        <>
        <nav>
            <section>
                <button className='burger-button' data-testid='burger-button' onClick={toggleClick} type="button">
                    <img className='menu-icon' alt='hamburger menu button' src={menuIcon} />
                </button>
            <h1>Power Room</h1>
            </section>
            <div className="menu" data-testid='menu'>{clicked && <Menu />}</div>
        </nav>

    </>
    )
}

export default Header;




// import React, { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { UserContext } from "../Contexts/UserContext";
// import Menu from "./HamburgerMenu";
// import menuIcon from "../Assets/menuIcon.png"
// import './Nav.scss'





