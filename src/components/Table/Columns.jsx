import React from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Col,
} from 'react-bootstrap';

import uuid from 'uuid';

const Columns = (props) =>
    <tr key={uuid.v4()}>
        {props.columns && props.columns.map( (column) =>

            <td key={uuid.v4()} style={{ textAlign: column.align || 'center' }}>{props.children}</td>

        )}
    </tr>


Columns.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        align: PropTypes.string
    }))
}

Columns.defaultProps = {
    columns: []
}

export default Column;