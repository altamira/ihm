import React from 'react';
import PropTypes from 'prop-types';

import { SmallButton } from './../Form';

import uuid from 'uuid';

const Command = (props) =>
    <div>
        {props.command && props.command.map((command) =>
            <SmallButton key={uuid.v4()} style={command.style} tooltip={command.tooltip} icon={command.icon} onClick={command.onClick} />
        )}
    </div>

Command.propTypes = {
    command: PropTypes.arrayOf(PropTypes.shape({
        tooltip: PropTypes.string,
        icon: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }))
}

export default Command;