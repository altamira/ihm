import React from 'react';
import PropTypes from 'prop-types';

const Summary = (props) => {
    return (
        <b><span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.text}</span></b>
    );
};

Summary.propTypes = {
    text: PropTypes.string.isRequired
};

Summary.defaultProps = {
    text: ''
}

export default Summary;