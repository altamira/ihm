import React from 'react';
import PropTypes from 'prop-types';

const Workspace = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Workspace.propTypes = {
    children: PropTypes.node.isRequired
};

export default Workspace;