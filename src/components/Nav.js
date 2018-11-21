import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    // This creates the Navigation for the canned searches.  
    return (
        <nav>
            <button className="navbtn"><Link to="/cats">Cats</Link></button>
            <button className="navbtn"><Link to="/lizard">Lizard</Link></button>
            <button className="navbtn"><Link to="/elephant">Elephant</Link></button>
        </nav>
    )
}

export default Nav;