import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <button className="navbtn animated fadeIn slow delay-1.15s"><Link to="/cats">Cats</Link></button>
            <button className="navbtn animated fadeIn slow delay-1.15s">Lizard</button>
            <button className="navbtn animated fadeIn slow delay-1.15s">Elephant</button>
        </nav>
    )
}

export default Nav;