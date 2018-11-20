import React from 'react';

const NoResults = (props) => {

    return (
        <div>
            <i className="far fa-sad-cry animated infinite headShake"></i>
            <h3>Oh no! Your search returned zero results!</h3>
        </div>
    )
}

export default NoResults;