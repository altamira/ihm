import React from 'react';
import PropTypes from 'prop-types';

const Calendar = (props) => {
    return (
        <span style={{verticalAlign: 'top', whiteSpace: 'nowrap'}} >{new Date(props.date).toLocaleDateString()}</span>
    );
};

Calendar.propTypes = {
    date: PropTypes.string.isRequired
};

Calendar.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default Calendar;