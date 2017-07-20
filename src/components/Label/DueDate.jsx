import React from 'react';
import PropTypes from 'prop-types';

const DueDate = (props) => {
    return (
        <span style={{verticalAlign: 'top', whiteSpace: 'nowrap'}} >{new Date(props.date).toLocaleDateString()}</span>
    );
};

DueDate.propTypes = {
    date: PropTypes.string.isRequired
};

DueDate.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default DueDate;