import React from 'react'
import { Link } from 'gatsby';

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/church'>
                    Εκκλησάκι
                </Link>
            </li>
            <li>
                <Link to='/aithousa'>
                    Αίθουσα
                </Link>
            </li>
            <li>
                <Link to='/eksoterikos'>
                    Εξωτερικός Χώρος
                </Link>
            </li>
            <li>
                <Link to='/contact-us'>
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}

export default Menu
