import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';

import {
    OverlayTrigger,
    Button,
    Glyphicon,
    Panel,
    Col,
    Row,
    Tooltip,
} from 'react-bootstrap';

const Page = (props) => (
    <Panel header={props.title} bsStyle="primary" >

        <Row style={{ borderBottom: 'solid', borderBottomWidth: 1, borderBottomColor: '#337ab7', paddingBottom: 20 }}>

            {props.command && props.command.map((command) => (

                <Col
                    key={uuid.v4()}
                    xs={12 / props.command.length} 
                    md={12 / props.command.length} 
                    style={{ textAlign: 'center' }}
                    
                >

                    <OverlayTrigger
                        placement="top"
                        overlay={(<Tooltip id="tooltip">{command.tooltip}</Tooltip>)}
                    >
                        <Button
                            onClick={command.onClick}
                            disabled={command.disabled}
                            style={{ width: command.width }}
                            bsStyle={command.style || "success"}
                        >
                            <Glyphicon glyph={command.icon || 'ok'} />
                            <div><span>{command.label}</span></div>
                        </Button>
                    </OverlayTrigger>

                </Col>

            ))}

        </Row>

        <Row>
            {props.children}
        </Row>

    </Panel>
);

Page.propTypes = {
    command: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        tooltip: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        icon: PropTypes.string,
        label: PropTypes.string.isRequired,
        style: PropTypes.string
    }))
}

export default Page;