import React from 'react';
import PropTypes from 'prop-types';

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

SmallButton.PropTypes = {
    tooltip: PropTypes.string,
    icon: PropTypes.string.isRequired,
    style: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SmallButton;