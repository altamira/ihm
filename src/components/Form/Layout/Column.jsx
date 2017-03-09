import React from 'react';

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


Column.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        width: React.PropTypes.arrayOf(React.PropTypes.number),
        field: React.PropTypes.node
    }))
}

Column.defaultProps = {
    columns: []
}

export default Column;