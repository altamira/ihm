import React from 'react';

const DueDate = (props) => {
    return (
        <span style={{verticalAlign: 'top', whiteSpace: 'nowrap'}} >{new Date(props.date).toLocaleDateString()}</span>
    );
};

DueDate.propTypes = {
    date: React.PropTypes.string.isRequired
};

DueDate.defaultProps = {
    date: new Date().toLocaleDateString()
}

export default DueDate;