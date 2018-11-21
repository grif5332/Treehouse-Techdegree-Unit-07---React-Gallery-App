import React from 'react';

const ErrorNotFound = () => {
    // returns a warning triangle and text if the path doesnt exist.
    // Uses Font-Awesome for the triangle.  Animate.css for the blinking animation.
    return (
        <div>
            <i className="fas fa-exclamation-triangle animated infinite flash slower"></i>
            <p>...the particular road you chose does not exist...</p>
            <p>404 - Not Found</p>
        </div>
    )
}
 
export default ErrorNotFound;