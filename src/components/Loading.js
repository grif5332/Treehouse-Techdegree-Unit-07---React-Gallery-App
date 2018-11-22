import React from 'react';

const Loading = () => {
    // yet another stateless component!  This one is for the loading icon.
    // The spinner is an icon from font-awesome and the animation is done through
    // standard, vanilla css.
    return(
        <div>
            <i className="fas fa-spinner"></i>
            <p>Serving up your pictures...</p>
        </div>
    )
}   

export default Loading;
