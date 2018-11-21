import React from 'react';

const NoResults = (props) => {
    // When someone makes a search that results in 0.
    // The NoResult component is rendered.
    // Uses Font-Awesome for the cry icon.  Animate.css for the headshake animation.
    return (
        <div>
            <i className="far fa-sad-cry animated infinite headShake"></i>
            <h3>Oh no! Your search returned zero results!</h3>
        </div>
    )
}

export default NoResults;