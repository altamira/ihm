import React from 'react';
import PropTypes from 'prop-types';

const Textbox = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.children}</span>
    );
};

Textbox.propTypes = {
    text: PropTypes.string.isRequired
};

Textbox.defaultProps = {
    text: ''
}

export default Textbox;