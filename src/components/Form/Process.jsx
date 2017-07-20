import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap';

const Process = props => {
    return (
        <Image src={props.src} style={{ width: '100%', height: '100%' }} />
    );
};

Process.PropTypes = {
    src: PropTypes.string.isRequired
};

export default Process;