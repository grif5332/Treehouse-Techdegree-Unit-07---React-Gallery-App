import React from 'react';

const Image = (props) => {
    // This simply creates a template <li> for the <Gallery /> component.
    return(
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    )
}

export default Image;