import React from 'react';

const Name = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.name}</span>
    );
};

Name.propTypes = {
    name: React.PropTypes.string.isRequired
};

Name.defaultProps = {
    name: ''
}

export default Name;