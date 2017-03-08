import React from 'react';

import { SmallButton } from './../Form';

import uuid from 'uuid';

const Command = (props) =>
    <div>
        {props.command && props.command.map((command) =>
            <SmallButton key={uuid.v4()} style={command.style} tooltip={command.tooltip} icon={command.icon} onClick={command.onClick} />
        )}
    </div>

Command.propTypes = {
    command: React.PropTypes.arrayOf(React.PropTypes.shape({
        tooltip: React.PropTypes.string,
        icon: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired
    }))
}

export default Command;