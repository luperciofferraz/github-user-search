import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (

    <nav className = "main-nav">

        <Link to="/" className="nav-logo-text">
            Bootcamp DevSuperior
        </Link>
        
    </nav>

);

export default Navbar;