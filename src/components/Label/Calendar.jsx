import React from 'react';

const Calendar = (props) => {
    return (
        <span style={{verticalAlign: 'top', whiteSpace: 'nowrap'}} >{new Date(props.date).toLocaleDateString()}</span>
    );
};

Calendar.propTypes = {
    date: React.PropTypes.string.isRequired
};

Calendar.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default Calendar;