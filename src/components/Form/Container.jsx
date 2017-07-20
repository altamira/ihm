import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Content.propTypes = {
    children: PropTypes.node.isRequired
};

export default Content;