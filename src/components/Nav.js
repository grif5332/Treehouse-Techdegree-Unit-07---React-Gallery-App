import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    // This creates the Navigation for the canned searches.  
    return (
        <nav>
            <Link to="/cats"><button className="navbtn">Cats</button></Link>
            <Link to="/lizard"><button className="navbtn">Lizard</button></Link>
            <Link to="/elephant"><button className="navbtn">Elephant</button></Link>
        </nav>
    )
}

export default Nav;