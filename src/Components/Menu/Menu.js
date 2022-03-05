import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'

const Menu = () => {

    return (
        <section className='hamburger-menu'>
            <Link to='/' className='dropdown-items' data-testid='dropdown-items'>Home</Link>
            <Link to='/about' className='dropdown-items' data-testid='dropdown-items'>About</Link>
            <Link to='/faq' className='dropdown-items' data-testid='dropdown-items'>FAQ</Link>
        </section>
    )
};

export default Menu