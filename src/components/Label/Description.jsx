import React from 'react';

const Description = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.text}</span>
    );
};

Description.propTypes = {
    text: React.PropTypes.string.isRequired
};

Description.defaultProps = {
    text: ''
}

export default Description;