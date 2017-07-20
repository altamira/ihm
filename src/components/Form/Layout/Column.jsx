import React from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Col,
} from 'react-bootstrap';

import uuid from 'uuid';

const Column = (props) =>
    <Row>
        {props.columns && props.columns.map( (column) =>

            <div key={uuid.v4()}>
                <Col xs={12} md={(column.width && column.width[0]) || 2}>{column.label}</Col>
                <Col xs={12} md={(column.width && column.width[1]) || 2}>{column.field}</Col>
            </div>

        )}
    </Row>


Column.PropTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        width: PropTypes.arrayOf(PropTypes.number),
        field: PropTypes.node
    }))
}

Column.defaultProps = {
    columns: []
}

export default Column;