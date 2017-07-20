import React from 'react';
import PropTypes from 'prop-types';

const Name = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.name}</span>
    );
};

Name.propTypes = {
    name: PropTypes.string.isRequired
};

Name.defaultProps = {
    name: ''
}

export default Name;