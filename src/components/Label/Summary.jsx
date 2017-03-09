import React from 'react';

const Summary = (props) => {
    return (
        <b><span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.text}</span></b>
    );
};

Summary.propTypes = {
    text: React.PropTypes.string.isRequired
};

Summary.defaultProps = {
    text: ''
}

export default Summary;