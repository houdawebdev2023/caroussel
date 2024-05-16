import React, {useState,useEffect} from 'react';
import "./Navbar.css"
const Navbar = () => {
    return(
        <nav>
        <ul className='liste'>

            <li className="items">Accueil</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>

        </ul>
            <button className="btn">BTN</button>
        </nav>
        );

    
};

export default Navbar;