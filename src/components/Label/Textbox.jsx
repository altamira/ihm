import React from 'react';

const Textbox = (props) => {
    return (
        <span style={{whiteSpace: 'nowrap', verticalAlign: 'top'}} >{props.children}</span>
    );
};

Textbox.propTypes = {
    text: React.PropTypes.string.isRequired
};

Textbox.defaultProps = {
    text: ''
}

export default Textbox;