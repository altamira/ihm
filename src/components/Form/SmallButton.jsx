import React from 'react';

import {
    OverlayTrigger,
    Button,
    Glyphicon,
    Tooltip,
} from 'react-bootstrap';

import uuid from 'uuid';

const SmallButton = (props) =>
    <OverlayTrigger placement="bottom" overlay={<Tooltip id={uuid.v4()} >{props.tooltip}</Tooltip>}>
        <Button bsStyle={props.style || 'info'} style={{ width: '33px', margin: '3px' }} bsSize="small" onClick={props.onClick}>
            <Glyphicon glyph={props.icon} />
        </Button>
    </OverlayTrigger>

SmallButton.propTypes = {
    tooltip: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    style: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
}

export default SmallButton;