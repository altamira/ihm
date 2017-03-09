import React from 'react';

import { Image } from 'react-bootstrap';

const Process = props => {
    return (
        <Image src={props.src} style={{ width: '100%', height: '100%' }} />
    );
};

Process.propTypes = {
    src: React.PropTypes.string.isRequired
};

export default Process;