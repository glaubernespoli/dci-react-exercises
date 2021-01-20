import './Image.css';
import PropTypes from 'prop-types';
import React from 'react';


const Image = ({path, alt}) => {
    return (
        <div>
            <img src={path} alt={ alt } />
        </div>
    )
}

Image.propTypes = {
    path: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image;