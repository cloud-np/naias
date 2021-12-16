import React from 'react'
import { Link } from 'gatsby'

import "./navbar.css"

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul className='Navbar__ul'>
                <li className='Navbar__ul__li'>Εκκλησία</li>
                <li className='Navbar__ul__li'>Αίθουσα</li>
                <li className='Navbar__ul__li'>Εξωτερικός Χώρος</li>
                <li className='Navbar__ul__li'>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar
