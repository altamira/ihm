import React from 'react';

const Content = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Content.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default Content;