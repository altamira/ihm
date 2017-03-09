import React from 'react';

const Workspace = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Workspace.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default Workspace;