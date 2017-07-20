import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.text}</span>
    );
};

Description.propTypes = {
    text: PropTypes.string.isRequired
};

Description.defaultProps = {
    text: ''
}

export default Description;